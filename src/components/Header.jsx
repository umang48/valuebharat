import React from 'react';
import { Search, TrendingUp, LayoutDashboard, Filter } from 'lucide-react';

const Header = ({ currentView, setCurrentView, searchQuery, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-surfaceBorder px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentView('dashboard')}>
          <div className="bg-primary/20 p-2 rounded-lg">
            <TrendingUp className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300">
            ValueBharat
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8 relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-textSecondary group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-surfaceBorder rounded-xl leading-5 bg-background text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
            placeholder="Search tickers (e.g., RELIANCE, TCS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-1">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentView === 'dashboard' ? 'bg-primary/10 text-primary' : 'text-textSecondary hover:bg-surfaceBorder hover:text-textPrimary'}`}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setCurrentView('screener')}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentView === 'screener' ? 'bg-primary/10 text-primary' : 'text-textSecondary hover:bg-surfaceBorder hover:text-textPrimary'}`}
          >
            <Filter className="w-4 h-4 mr-2" />
            Screener
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
