import { useState, useEffect } from 'react';
import { mockStocks } from '../data/mockData';

export function useStocks() {
  const [stocks, setStocks] = useState(mockStocks);
  const [loadingPrices, setLoadingPrices] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchLivePrices = async () => {
      setLoadingPrices(true);
      let currentStocks = [...mockStocks];
      
      try {
        const fetchPrice = async (ticker) => {
          try {
            const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}.NS`;
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
            const response = await fetch(proxyUrl);
            if (!response.ok) return null;
            const data = await response.json();
            if (!data.contents) return null;
            const parsed = JSON.parse(data.contents);
            return parsed.chart.result[0].meta.regularMarketPrice;
          } catch (error) {
            console.error(`Failed to fetch ${ticker}:`, error);
            return null;
          }
        };

        // Fetch in very small batches with delays to prevent proxy 522/429 errors
        const batchSize = 2;
        
        for (let i = 0; i < currentStocks.length; i += batchSize) {
          if (!isMounted) break;
          
          const batch = currentStocks.slice(i, i + batchSize);
          const promises = batch.map(async (stock) => {
            const livePrice = await fetchPrice(stock.ticker);
            if (livePrice) {
              return {
                ...stock,
                price: livePrice,
                history: [
                  ...stock.history.slice(0, -1),
                  { ...stock.history[stock.history.length - 1], price: livePrice }
                ]
              };
            }
            return stock;
          });
          
          const batchResults = await Promise.all(promises);
          
          // Merge batch results into current stocks
          currentStocks = currentStocks.map(stock => {
            const updated = batchResults.find(r => r.ticker === stock.ticker);
            return updated || stock;
          });

          // Update state progressively so UI feels alive
          if (isMounted) {
            setStocks([...currentStocks]);
          }
          
          // Wait 1 second before next batch to respect proxy rate limits
          if (i + batchSize < currentStocks.length) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      } catch (error) {
        console.error("Error fetching live prices", error);
      } finally {
        if (isMounted) setLoadingPrices(false);
      }
    };

    fetchLivePrices();
    
    // Refresh every 60 seconds
    const interval = setInterval(fetchLivePrices, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { stocks, loadingPrices };
}
