import React from 'react';
import { ArrowUpRight, ArrowDownRight, Activity, Loader2 } from 'lucide-react';

const formatCurrency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);

const StockCard = ({ stock, onClick }) => {
  return (
    <div 
      onClick={() => onClick(stock)}
      className="bg-surface rounded-2xl border border-surfaceBorder p-5 hover:border-primary/50 transition-all cursor-pointer group hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-textPrimary">{stock.ticker}</h3>
          <p className="text-sm text-textSecondary truncate w-32">{stock.name}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-textPrimary">{formatCurrency(stock.price)}</p>
          <p className="text-sm font-medium text-neonGreen flex items-center justify-end">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            +1.2%
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-surfaceBorder/50">
        <div>
          <p className="text-xs text-textSecondary mb-1">P/E Ratio</p>
          <p className="font-semibold">{stock.peRatio}</p>
        </div>
        <div>
          <p className="text-xs text-textSecondary mb-1">ROE</p>
          <p className="font-semibold text-neonGreen">{stock.roe}%</p>
        </div>
        <div>
          <p className="text-xs text-textSecondary mb-1">Debt/Eq</p>
          <p className={`font-semibold ${stock.debtToEquity > 1 ? 'text-neonRed' : 'text-neonGreen'}`}>{stock.debtToEquity}</p>
        </div>
        <div>
          <p className="text-xs text-textSecondary mb-1">AI Score</p>
          <div className="flex items-center">
            <Activity className="w-3 h-3 text-primary mr-1" />
            <p className="font-semibold text-primary">{stock.analystScore}/100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ stocks, onSelectStock, searchQuery, loadingPrices }) => {
  const filteredStocks = stocks.filter(stock => 
    stock.ticker.toLowerCase().includes(searchQuery.toLowerCase()) || 
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const fundamentalPicks = filteredStocks.filter(s => s.isFundamentalPick);
  const futureProspects = filteredStocks.filter(s => s.futureProspects);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-12 animate-in fade-in duration-500">
      
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-1.5 h-6 bg-primary rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-textPrimary">Fundamental Picks of the Day</h2>
          </div>
          {loadingPrices && <div className="flex items-center text-sm text-textSecondary"><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Live prices...</div>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundamentalPicks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} onClick={onSelectStock} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center mb-6">
          <div className="w-1.5 h-6 bg-neonGreen rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-textPrimary">High Growth Prospects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureProspects.map(stock => (
            <StockCard key={stock.ticker} stock={stock} onClick={onSelectStock} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
