import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Screener from './components/Screener';
import StockDetailModal from './components/StockDetailModal';
import { useStocks } from './hooks/useStocks';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState(null);
  const { stocks, loadingPrices } = useStocks();

  // In a real app, searchQuery would filter the dashboard/screener data globally 
  // or trigger a search results dropdown.

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="pb-12">
        {currentView === 'dashboard' && <Dashboard stocks={stocks} loadingPrices={loadingPrices} onSelectStock={setSelectedStock} searchQuery={searchQuery} />}
        {currentView === 'screener' && <Screener stocks={stocks} loadingPrices={loadingPrices} onSelectStock={setSelectedStock} searchQuery={searchQuery} />}
      </main>

      <StockDetailModal 
        stock={selectedStock} 
        onClose={() => setSelectedStock(null)} 
      />
    </div>
  );
}

export default App;
