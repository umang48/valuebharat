import React, { useState } from 'react';
import DataTable from './DataTable';
import { SlidersHorizontal, RefreshCcw, Loader2 } from 'lucide-react';

const Screener = ({ stocks, onSelectStock, searchQuery, loadingPrices }) => {
  const [filters, setFilters] = useState({
    sector: 'All',
    marketCap: 'All',
    maxPe: 150,
    minRoe: 0,
    maxDebt: 5,
    minDivYield: 0
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      sector: 'All',
      marketCap: 'All',
      maxPe: 150,
      minRoe: 0,
      maxDebt: 5,
      minDivYield: 0
    });
  };

  const filteredData = stocks.filter(stock => {
    const matchesSearch = stock.ticker.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          stock.name.toLowerCase().includes(searchQuery.toLowerCase());
    return (
      matchesSearch &&
      (filters.sector === 'All' || stock.sector === filters.sector) &&
      (filters.marketCap === 'All' || stock.marketCapCategory === filters.marketCap) &&
      stock.peRatio <= filters.maxPe &&
      stock.roe >= filters.minRoe &&
      stock.debtToEquity <= filters.maxDebt &&
      stock.dividendYield >= filters.minDivYield
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8 animate-in fade-in duration-500">
      
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold flex items-center">
              <SlidersHorizontal className="w-5 h-5 mr-2 text-primary" />
              Filters
            </h2>
            <div className="flex items-center space-x-3">
              {loadingPrices && <Loader2 className="w-4 h-4 text-textSecondary animate-spin" />}
              <button onClick={resetFilters} className="text-textSecondary hover:text-primary transition-colors">
                <RefreshCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Sector */}
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">Sector</label>
              <select name="sector" value={filters.sector} onChange={handleFilterChange} className="w-full bg-background border border-surfaceBorder rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none">
                <option value="All">All Sectors</option>
                {[...new Set(stocks.map(s => s.sector))].sort().map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>

            {/* Market Cap */}
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">Market Cap</label>
              <select name="marketCap" value={filters.marketCap} onChange={handleFilterChange} className="w-full bg-background border border-surfaceBorder rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none">
                <option value="All">All Sizes</option>
                <option value="Mega">Mega Cap</option>
                <option value="Large">Large Cap</option>
                <option value="Mid">Mid Cap</option>
                <option value="Small">Small Cap</option>
              </select>
            </div>

            {/* Max P/E */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <label className="font-medium text-textSecondary">Max P/E Ratio</label>
                <span className="text-primary font-medium">{filters.maxPe}</span>
              </div>
              <input type="range" name="maxPe" min="5" max="150" value={filters.maxPe} onChange={handleFilterChange} className="w-full accent-primary" />
            </div>

            {/* Min ROE */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <label className="font-medium text-textSecondary">Min ROE (%)</label>
                <span className="text-neonGreen font-medium">{filters.minRoe}%</span>
              </div>
              <input type="range" name="minRoe" min="0" max="50" value={filters.minRoe} onChange={handleFilterChange} className="w-full accent-neonGreen" />
            </div>

            {/* Max Debt/Eq */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <label className="font-medium text-textSecondary">Max Debt/Equity</label>
                <span className="text-primary font-medium">{filters.maxDebt}</span>
              </div>
              <input type="range" name="maxDebt" min="0" max="5" step="0.1" value={filters.maxDebt} onChange={handleFilterChange} className="w-full accent-primary" />
            </div>
            
            {/* Min Div Yield */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <label className="font-medium text-textSecondary">Min Dividend Yield (%)</label>
                <span className="text-primary font-medium">{filters.minDivYield}%</span>
              </div>
              <input type="range" name="minDivYield" min="0" max="10" step="0.1" value={filters.minDivYield} onChange={handleFilterChange} className="w-full accent-primary" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Data Table */}
      <main className="flex-1">
        <DataTable data={filteredData} onSelectStock={onSelectStock} />
      </main>

    </div>
  );
};

export default Screener;
