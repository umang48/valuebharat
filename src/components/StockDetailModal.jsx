import React from 'react';
import { X, CheckCircle2, XCircle, TrendingUp, BarChart3, ShieldAlert } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const formatCurrency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);

const StockDetailModal = ({ stock, onClose }) => {
  if (!stock) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl bg-surface border border-surfaceBorder rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-surfaceBorder bg-surface/50">
          <div>
            <div className="flex items-center space-x-3">
              <h2 className="text-3xl font-bold text-textPrimary">{stock.ticker}</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                {stock.sector}
              </span>
            </div>
            <p className="text-textSecondary mt-1">{stock.name}</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-2xl font-bold text-textPrimary">{formatCurrency(stock.price)}</p>
              <p className="text-neonGreen text-sm font-medium flex items-center justify-end">
                <TrendingUp className="w-4 h-4 mr-1" /> +1.2%
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-surfaceBorder text-textSecondary hover:text-textPrimary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
          
          {/* Main Chart Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background border border-surfaceBorder rounded-xl p-5">
              <h3 className="text-sm font-semibold text-textSecondary mb-4 flex items-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                Historical Price Trend (Jan – May 2026)
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={stock.history}>
                  <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis domain={['auto', 'auto']} stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#15161a', borderColor: '#262831', borderRadius: '8px', color: '#f3f4f6' }}
                    itemStyle={{ color: '#3b82f6' }}
                  />
                  <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#3b82f6' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {/* Quick Stats */}
               <div className="bg-background border border-surfaceBorder rounded-xl p-4 text-center">
                  <p className="text-xs text-textSecondary mb-1">Market Cap</p>
                  <p className="font-semibold text-textPrimary">{(stock.marketCap / 1e9).toFixed(1)}B</p>
               </div>
               <div className="bg-background border border-surfaceBorder rounded-xl p-4 text-center">
                  <p className="text-xs text-textSecondary mb-1">P/E Ratio</p>
                  <p className="font-semibold text-textPrimary">{stock.peRatio}</p>
               </div>
               <div className="bg-background border border-surfaceBorder rounded-xl p-4 text-center">
                  <p className="text-xs text-textSecondary mb-1">ROE</p>
                  <p className="font-semibold text-neonGreen">{stock.roe}%</p>
               </div>
               <div className="bg-background border border-surfaceBorder rounded-xl p-4 text-center">
                  <p className="text-xs text-textSecondary mb-1">Div Yield</p>
                  <p className="font-semibold text-textPrimary">{stock.dividendYield}%</p>
               </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            
            {/* Checklist */}
            <div className="bg-background border border-surfaceBorder rounded-xl p-5">
              <h3 className="text-sm font-semibold text-textSecondary mb-4 uppercase tracking-wider">Fundamentals Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  {stock.fundamentals.fcf ? <CheckCircle2 className="w-5 h-5 text-neonGreen mr-3" /> : <XCircle className="w-5 h-5 text-neonRed mr-3" />}
                  <span className={stock.fundamentals.fcf ? 'text-textPrimary' : 'text-textSecondary'}>Positive Free Cash Flow</span>
                </li>
                <li className="flex items-center text-sm">
                  {stock.fundamentals.revGrowth ? <CheckCircle2 className="w-5 h-5 text-neonGreen mr-3" /> : <XCircle className="w-5 h-5 text-neonRed mr-3" />}
                  <span className={stock.fundamentals.revGrowth ? 'text-textPrimary' : 'text-textSecondary'}>Revenue Growth {'>'} 10%</span>
                </li>
                <li className="flex items-center text-sm">
                  {stock.fundamentals.manageableDebt ? <CheckCircle2 className="w-5 h-5 text-neonGreen mr-3" /> : <XCircle className="w-5 h-5 text-neonRed mr-3" />}
                  <span className={stock.fundamentals.manageableDebt ? 'text-textPrimary' : 'text-textSecondary'}>Manageable Debt Levels</span>
                </li>
              </ul>
            </div>

            {/* Why Invest */}
            <div className="bg-background border border-surfaceBorder rounded-xl p-5">
              <h3 className="text-sm font-semibold text-textSecondary mb-4 flex items-center uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 mr-2 text-neonGreen" />
                Why Invest in {stock.ticker}?
              </h3>
              <ul className="space-y-3 list-disc list-outside ml-4 text-sm text-textPrimary leading-relaxed">
                {stock.roe > 15 && <li><strong className="text-white">High Profitability:</strong> Consistently high Return on Equity ({stock.roe}%) indicates efficient capital management.</li>}
                {stock.debtToEquity < 1 && <li><strong className="text-white">Strong Balance Sheet:</strong> Healthy Debt-to-Equity ratio of {stock.debtToEquity}.</li>}
                {stock.dividendYield >= 1.5 && <li><strong className="text-white">Stable Income:</strong> Attractive dividend yield of {stock.dividendYield}% provides passive income.</li>}
                {stock.peRatio < 25 && <li><strong className="text-white">Attractive Valuation:</strong> Trading at a reasonable P/E ratio of {stock.peRatio}.</li>}
                {stock.analystScore >= 85 && <li><strong className="text-white">Strong Buy Consensus:</strong> Highly rated by analysts with a score of {stock.analystScore}/100.</li>}
                <li><strong className="text-white">Business Outlook:</strong> {stock.outlook}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetailModal;
