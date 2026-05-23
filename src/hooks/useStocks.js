import { useState, useEffect } from 'react';
import { mockStocks } from '../data/mockData';

export function useStocks() {
  const [stocks, setStocks] = useState(mockStocks);
  const [loadingPrices, setLoadingPrices] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Detect environment: use PHP proxy in production, skip live fetch in dev
    const isProduction = window.location.hostname !== 'localhost' && 
                         window.location.hostname !== '127.0.0.1';

    const fetchPrice = async (ticker) => {
      try {
        // PHP proxy on same domain — zero CORS issues, works in production
        const proxyUrl = `/proxy.php?ticker=${encodeURIComponent(ticker)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) return null;
        const data = await response.json();
        return data.price || null;
      } catch {
        return null;
      }
    };

    const fetchLivePrices = async () => {
      if (!isMounted) return;
      setLoadingPrices(true);

      // In development, skip live fetch — just show mockData prices
      if (!isProduction) {
        if (isMounted) setLoadingPrices(false);
        return;
      }

      let currentStocks = [...mockStocks];

      for (let i = 0; i < currentStocks.length; i++) {
        if (!isMounted) break;

        const stock = currentStocks[i];
        const livePrice = await fetchPrice(stock.ticker);

        if (livePrice && livePrice > 0) {
          currentStocks = currentStocks.map(s =>
            s.ticker === stock.ticker
              ? {
                  ...s,
                  price: livePrice,
                  history: [
                    ...s.history.slice(0, -1),
                    { ...s.history[s.history.length - 1], price: livePrice }
                  ]
                }
              : s
          );
          // Update state progressively — prices pop in as they load
          if (isMounted) setStocks([...currentStocks]);
        }

        // Small delay between requests to avoid overwhelming Yahoo Finance
        if (i < currentStocks.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 400));
        }
      }

      if (isMounted) setLoadingPrices(false);
    };

    fetchLivePrices();

    // Refresh live prices every 5 minutes on production
    const interval = isProduction 
      ? setInterval(fetchLivePrices, 5 * 60 * 1000) 
      : null;

    return () => {
      isMounted = false;
      if (interval) clearInterval(interval);
    };
  }, []);

  return { stocks, loadingPrices };
}
