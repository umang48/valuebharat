import React from 'react';
import { Activity } from 'lucide-react';

const formatCurrency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);

const DataTable = ({ data, onSelectStock }) => {
  if (data.length === 0) {
    return (
      <div className="bg-surface border border-surfaceBorder rounded-2xl p-12 text-center text-textSecondary">
        No stocks match your current filters.
      </div>
    );
  }

  return (
    <div className="bg-surface border border-surfaceBorder rounded-2xl overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surfaceBorder/50 text-textSecondary text-sm font-semibold uppercase tracking-wider">
              <th className="px-6 py-4 border-b border-surfaceBorder">Ticker</th>
              <th className="px-6 py-4 border-b border-surfaceBorder">Name</th>
              <th className="px-6 py-4 border-b border-surfaceBorder text-right">Price</th>
              <th className="px-6 py-4 border-b border-surfaceBorder text-right">P/E</th>
              <th className="px-6 py-4 border-b border-surfaceBorder text-right">ROE</th>
              <th className="px-6 py-4 border-b border-surfaceBorder text-right">Debt/Eq</th>
              <th className="px-6 py-4 border-b border-surfaceBorder text-right">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surfaceBorder">
            {data.map((stock) => (
              <tr 
                key={stock.ticker} 
                onClick={() => onSelectStock(stock)}
                className="hover:bg-surfaceBorder/30 cursor-pointer transition-colors group"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-bold text-textPrimary group-hover:text-primary transition-colors">{stock.ticker}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-textSecondary">{stock.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-textPrimary">
                  {formatCurrency(stock.price)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-textSecondary">{stock.peRatio}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-neonGreen font-medium">{stock.roe}%</td>
                <td className={`px-6 py-4 whitespace-nowrap text-right font-medium ${stock.debtToEquity > 1 ? 'text-neonRed' : 'text-neonGreen'}`}>
                  {stock.debtToEquity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end">
                    <Activity className="w-4 h-4 text-primary mr-1" />
                    <span className="font-bold text-primary">{stock.analystScore}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
