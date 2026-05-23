export const mockStocks = [
  {
    ticker: 'RELIANCE', name: 'Reliance Industries Ltd.', sector: 'Conglomerates', marketCapCategory: 'Mega',
    marketCap: 19500000000000, price: 2950.45, peRatio: 28.5, roe: 8.9, debtToEquity: 0.4, dividendYield: 0.3,
    analystScore: 88, isFundamentalPick: true, futureProspects: true,
    history: [{ date: 'Jan', price: 2400 }, { date: 'Apr', price: 2450 }, { date: 'Jul', price: 2750 }, { date: 'Oct', price: 2800 }, { date: 'Dec', price: 2950 }],
    outlook: "Dominance in telecom (Jio) and retail sectors, alongside core refining business, provides a robust moat.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'TCS', name: 'Tata Consultancy Services', sector: 'IT', marketCapCategory: 'Mega',
    marketCap: 14200000000000, price: 3950.20, peRatio: 31.2, roe: 46.5, debtToEquity: 0.05, dividendYield: 1.8,
    analystScore: 92, isFundamentalPick: true, futureProspects: false,
    history: [{ date: 'Jan', price: 3300 }, { date: 'Apr', price: 3200 }, { date: 'Jul', price: 3600 }, { date: 'Oct', price: 3800 }, { date: 'Dec', price: 3950 }],
    outlook: "Strong deal pipeline and execution prowess. Industry-leading margins and massive cash generation.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'HDFCBANK', name: 'HDFC Bank Ltd.', sector: 'Finance', marketCapCategory: 'Mega',
    marketCap: 11000000000000, price: 1450.75, peRatio: 15.8, roe: 16.1, debtToEquity: 1.2, dividendYield: 1.3,
    analystScore: 85, isFundamentalPick: true, futureProspects: true,
    history: [{ date: 'Jan', price: 1600 }, { date: 'Apr', price: 1680 }, { date: 'Jul', price: 1650 }, { date: 'Oct', price: 1480 }, { date: 'Dec', price: 1450 }],
    outlook: "Merger synergies expected to unfold over the long term. Solid asset quality and vast branch network.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'INFY', name: 'Infosys Ltd.', sector: 'IT', marketCapCategory: 'Large',
    marketCap: 6800000000000, price: 1640.30, peRatio: 27.1, roe: 31.8, debtToEquity: 0.1, dividendYield: 2.1,
    analystScore: 78, isFundamentalPick: false, futureProspects: false,
    history: [{ date: 'Jan', price: 1500 }, { date: 'Apr', price: 1350 }, { date: 'Jul', price: 1550 }, { date: 'Oct', price: 1580 }, { date: 'Dec', price: 1640 }],
    outlook: "Benefiting from AI-driven digital transformation deals. Generous capital allocation policy.", fundamentals: { fcf: true, revGrowth: false, manageableDebt: true }
  },
  {
    ticker: 'ITC', name: 'ITC Limited', sector: 'FMCG', marketCapCategory: 'Large',
    marketCap: 5200000000000, price: 415.60, peRatio: 25.4, roe: 28.5, debtToEquity: 0.0, dividendYield: 3.5,
    analystScore: 89, isFundamentalPick: true, futureProspects: false,
    history: [{ date: 'Jan', price: 330 }, { date: 'Apr', price: 380 }, { date: 'Jul', price: 450 }, { date: 'Oct', price: 425 }, { date: 'Dec', price: 415 }],
    outlook: "Cash cow FMCG business funding diversification into hotels and agribusiness. Exceptional dividend yield.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'LT', name: 'Larsen & Toubro Ltd.', sector: 'Infrastructure', marketCapCategory: 'Large',
    marketCap: 4800000000000, price: 3540.10, peRatio: 36.2, roe: 14.5, debtToEquity: 1.1, dividendYield: 0.7,
    analystScore: 94, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 2100 }, { date: 'Apr', price: 2450 }, { date: 'Jul', price: 3100 }, { date: 'Oct', price: 3350 }, { date: 'Dec', price: 3540 }],
    outlook: "Proxy for India's capex story. Unprecedented order book visibility.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'TATAMOTORS', name: 'Tata Motors Ltd.', sector: 'Automotive', marketCapCategory: 'Large',
    marketCap: 3200000000000, price: 945.30, peRatio: 16.8, roe: 22.4, debtToEquity: 0.8, dividendYield: 0.2,
    analystScore: 91, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 420 }, { date: 'Apr', price: 500 }, { date: 'Jul', price: 650 }, { date: 'Oct', price: 850 }, { date: 'Dec', price: 945 }],
    outlook: "JLR turnaround and undisputed leadership in the Indian EV space.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'BAJFINANCE', name: 'Bajaj Finance Ltd.', sector: 'Finance', marketCapCategory: 'Large',
    marketCap: 4100000000000, price: 6780.00, peRatio: 29.5, roe: 23.2, debtToEquity: 2.1, dividendYield: 0.5,
    analystScore: 82, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 5800 }, { date: 'Apr', price: 6200 }, { date: 'Jul', price: 7400 }, { date: 'Oct', price: 7300 }, { date: 'Dec', price: 6780 }],
    outlook: "Strong AUM growth and robust data analytics engine.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'SBIN', name: 'State Bank of India', sector: 'Finance', marketCapCategory: 'Large',
    marketCap: 6800000000000, price: 760.20, peRatio: 10.5, roe: 18.5, debtToEquity: 1.4, dividendYield: 1.5,
    analystScore: 88, isFundamentalPick: true, futureProspects: false,
    history: [{ date: 'Jan', price: 550 }, { date: 'Apr', price: 600 }, { date: 'Jul', price: 650 }, { date: 'Oct', price: 700 }, { date: 'Dec', price: 760 }],
    outlook: "India's largest bank with improving asset quality and strong corporate lending growth.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'BHARTIARTL', name: 'Bharti Airtel Ltd.', sector: 'Telecom', marketCapCategory: 'Large',
    marketCap: 6500000000000, price: 1150.80, peRatio: 45.2, roe: 12.1, debtToEquity: 1.5, dividendYield: 0.4,
    analystScore: 84, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 800 }, { date: 'Apr', price: 900 }, { date: 'Jul', price: 950 }, { date: 'Oct', price: 1050 }, { date: 'Dec', price: 1150 }],
    outlook: "Strong ARPU growth and duopoly market structure benefit the company.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', marketCapCategory: 'Large',
    marketCap: 5600000000000, price: 2400.50, peRatio: 52.1, roe: 20.5, debtToEquity: 0.05, dividendYield: 1.6,
    analystScore: 75, isFundamentalPick: false, futureProspects: false,
    history: [{ date: 'Jan', price: 2600 }, { date: 'Apr', price: 2500 }, { date: 'Jul', price: 2450 }, { date: 'Oct', price: 2350 }, { date: 'Dec', price: 2400 }],
    outlook: "Rural recovery is slow, but premiumization strategy continues to aid margins.", fundamentals: { fcf: true, revGrowth: false, manageableDebt: true }
  },
  {
    ticker: 'ICICIBANK', name: 'ICICI Bank Ltd.', sector: 'Finance', marketCapCategory: 'Large',
    marketCap: 7500000000000, price: 1050.25, peRatio: 17.5, roe: 18.2, debtToEquity: 1.1, dividendYield: 0.8,
    analystScore: 95, isFundamentalPick: true, futureProspects: true,
    history: [{ date: 'Jan', price: 850 }, { date: 'Apr', price: 900 }, { date: 'Jul', price: 980 }, { date: 'Oct', price: 1000 }, { date: 'Dec', price: 1050 }],
    outlook: "Best-in-class return metrics and digital initiatives driving market share gains.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'MARUTI', name: 'Maruti Suzuki India', sector: 'Automotive', marketCapCategory: 'Large',
    marketCap: 3800000000000, price: 12500.00, peRatio: 28.5, roe: 15.5, debtToEquity: 0.0, dividendYield: 0.9,
    analystScore: 80, isFundamentalPick: true, futureProspects: false,
    history: [{ date: 'Jan', price: 9000 }, { date: 'Apr', price: 10000 }, { date: 'Jul', price: 11000 }, { date: 'Oct', price: 11500 }, { date: 'Dec', price: 12500 }],
    outlook: "Market leader in passenger vehicles, gaining traction in the SUV segment.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'SUNPHARMA', name: 'Sun Pharmaceutical', sector: 'Pharmaceuticals', marketCapCategory: 'Large',
    marketCap: 3500000000000, price: 1550.40, peRatio: 35.1, roe: 16.8, debtToEquity: 0.1, dividendYield: 0.8,
    analystScore: 86, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 1100 }, { date: 'Apr', price: 1250 }, { date: 'Jul', price: 1300 }, { date: 'Oct', price: 1450 }, { date: 'Dec', price: 1550 }],
    outlook: "Specialty portfolio in the US continues to scale up nicely.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'TATASTEEL', name: 'Tata Steel Ltd.', sector: 'Metals', marketCapCategory: 'Mid',
    marketCap: 1800000000000, price: 145.20, peRatio: 12.5, roe: 11.2, debtToEquity: 0.9, dividendYield: 2.5,
    analystScore: 70, isFundamentalPick: false, futureProspects: false,
    history: [{ date: 'Jan', price: 110 }, { date: 'Apr', price: 120 }, { date: 'Jul', price: 135 }, { date: 'Oct', price: 130 }, { date: 'Dec', price: 145 }],
    outlook: "Domestic demand is strong, but global steel prices remain volatile.", fundamentals: { fcf: true, revGrowth: false, manageableDebt: true }
  },
  {
    ticker: 'NTPC', name: 'NTPC Ltd.', sector: 'Utilities', marketCapCategory: 'Large',
    marketCap: 3300000000000, price: 340.60, peRatio: 15.2, roe: 12.8, debtToEquity: 1.3, dividendYield: 2.2,
    analystScore: 83, isFundamentalPick: true, futureProspects: true,
    history: [{ date: 'Jan', price: 200 }, { date: 'Apr', price: 220 }, { date: 'Jul', price: 260 }, { date: 'Oct', price: 300 }, { date: 'Dec', price: 340 }],
    outlook: "Aggressive pivot towards renewable energy enhances terminal value.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'WIPRO', name: 'Wipro Ltd.', sector: 'IT', marketCapCategory: 'Large',
    marketCap: 2500000000000, price: 480.90, peRatio: 22.4, roe: 15.6, debtToEquity: 0.2, dividendYield: 0.5,
    analystScore: 65, isFundamentalPick: false, futureProspects: false,
    history: [{ date: 'Jan', price: 400 }, { date: 'Apr', price: 380 }, { date: 'Jul', price: 420 }, { date: 'Oct', price: 450 }, { date: 'Dec', price: 480 }],
    outlook: "Turnaround efforts underway under new leadership, but turnaround is slow.", fundamentals: { fcf: true, revGrowth: false, manageableDebt: true }
  },
  {
    ticker: 'ASIANPAINT', name: 'Asian Paints', sector: 'Consumer Durables', marketCapCategory: 'Large',
    marketCap: 2800000000000, price: 2950.00, peRatio: 65.5, roe: 28.4, debtToEquity: 0.1, dividendYield: 1.0,
    analystScore: 72, isFundamentalPick: true, futureProspects: false,
    history: [{ date: 'Jan', price: 3200 }, { date: 'Apr', price: 3100 }, { date: 'Jul', price: 3000 }, { date: 'Oct', price: 2850 }, { date: 'Dec', price: 2950 }],
    outlook: "Pricing power and extensive distribution network. Margin pressure from new entrants.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'HCLTECH', name: 'HCL Technologies', sector: 'IT', marketCapCategory: 'Large',
    marketCap: 4500000000000, price: 1650.30, peRatio: 25.8, roe: 28.5, debtToEquity: 0.1, dividendYield: 3.2,
    analystScore: 87, isFundamentalPick: true, futureProspects: true,
    history: [{ date: 'Jan', price: 1200 }, { date: 'Apr', price: 1350 }, { date: 'Jul', price: 1450 }, { date: 'Oct', price: 1550 }, { date: 'Dec', price: 1650 }],
    outlook: "Strong engineering and R&D services portfolio driving consistent growth.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'TITAN', name: 'Titan Company', sector: 'Consumer Durables', marketCapCategory: 'Large',
    marketCap: 3200000000000, price: 3600.75, peRatio: 85.2, roe: 32.1, debtToEquity: 0.4, dividendYield: 0.3,
    analystScore: 79, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 2800 }, { date: 'Apr', price: 3000 }, { date: 'Jul', price: 3200 }, { date: 'Oct', price: 3400 }, { date: 'Dec', price: 3600 }],
    outlook: "Dominant market share in organized jewelry retail. Premium valuation limits near-term upside.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Finance', marketCapCategory: 'Large',
    marketCap: 3500000000000, price: 1780.20, peRatio: 20.5, roe: 14.5, debtToEquity: 1.0, dividendYield: 0.1,
    analystScore: 76, isFundamentalPick: false, futureProspects: false,
    history: [{ date: 'Jan', price: 1900 }, { date: 'Apr', price: 1850 }, { date: 'Jul', price: 1800 }, { date: 'Oct', price: 1750 }, { date: 'Dec', price: 1780 }],
    outlook: "Conservative lending practices ensure excellent asset quality. CEO transition is a key monitorable.", fundamentals: { fcf: true, revGrowth: false, manageableDebt: false }
  },
  {
    ticker: 'POWERGRID', name: 'Power Grid Corp', sector: 'Utilities', marketCapCategory: 'Large',
    marketCap: 2600000000000, price: 285.40, peRatio: 14.8, roe: 18.2, debtToEquity: 1.5, dividendYield: 4.5,
    analystScore: 85, isFundamentalPick: true, futureProspects: false,
    history: [{ date: 'Jan', price: 220 }, { date: 'Apr', price: 235 }, { date: 'Jul', price: 250 }, { date: 'Oct', price: 270 }, { date: 'Dec', price: 285 }],
    outlook: "Regulated return model provides highly predictable cash flows and high dividend payouts.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'M&M', name: 'Mahindra & Mahindra', sector: 'Automotive', marketCapCategory: 'Large',
    marketCap: 3100000000000, price: 2550.80, peRatio: 22.1, roe: 19.5, debtToEquity: 0.4, dividendYield: 1.2,
    analystScore: 93, isFundamentalPick: true, futureProspects: true,
    history: [{ date: 'Jan', price: 1500 }, { date: 'Apr', price: 1700 }, { date: 'Jul', price: 2000 }, { date: 'Oct', price: 2300 }, { date: 'Dec', price: 2550 }],
    outlook: "Strong momentum in SUV segment and dominance in tractors drives robust performance.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'BAJAJFINSV', name: 'Bajaj Finserv', sector: 'Finance', marketCapCategory: 'Large',
    marketCap: 2600000000000, price: 1650.00, peRatio: 32.5, roe: 15.2, debtToEquity: 1.8, dividendYield: 0.2,
    analystScore: 78, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 1400 }, { date: 'Apr', price: 1450 }, { date: 'Jul', price: 1550 }, { date: 'Oct', price: 1600 }, { date: 'Dec', price: 1650 }],
    outlook: "Holding company for lending and insurance businesses. Diversified financial services play.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'NESTLEIND', name: 'Nestle India', sector: 'FMCG', marketCapCategory: 'Large',
    marketCap: 2400000000000, price: 2550.25, peRatio: 75.8, roe: 110.5, debtToEquity: 0.1, dividendYield: 1.2,
    analystScore: 71, isFundamentalPick: false, futureProspects: false,
    history: [{ date: 'Jan', price: 2600 }, { date: 'Apr', price: 2550 }, { date: 'Jul', price: 2650 }, { date: 'Oct', price: 2500 }, { date: 'Dec', price: 2550 }],
    outlook: "Incredible return ratios and pricing power. Rural penetration provides growth headroom.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  },
  {
    ticker: 'JSWSTEEL', name: 'JSW Steel', sector: 'Metals', marketCapCategory: 'Large',
    marketCap: 2000000000000, price: 850.40, peRatio: 18.5, roe: 14.8, debtToEquity: 1.3, dividendYield: 1.1,
    analystScore: 74, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 750 }, { date: 'Apr', price: 800 }, { date: 'Jul', price: 880 }, { date: 'Oct', price: 820 }, { date: 'Dec', price: 850 }],
    outlook: "Capacity expansion plans to drive volume growth, though cyclicality remains a factor.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'ADANIENT', name: 'Adani Enterprises', sector: 'Conglomerates', marketCapCategory: 'Large',
    marketCap: 3800000000000, price: 3250.60, peRatio: 110.2, roe: 9.5, debtToEquity: 1.5, dividendYield: 0.1,
    analystScore: 68, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 2800 }, { date: 'Apr', price: 3000 }, { date: 'Jul', price: 3100 }, { date: 'Oct', price: 3300 }, { date: 'Dec', price: 3250 }],
    outlook: "Incubator for the Adani group. High capex businesses require continuous funding.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: false }
  },
  {
    ticker: 'ZOMATO', name: 'Zomato Ltd.', sector: 'Technology', marketCapCategory: 'Large',
    marketCap: 1500000000000, price: 165.50, peRatio: 95.5, roe: 5.2, debtToEquity: 0.0, dividendYield: 0.0,
    analystScore: 89, isFundamentalPick: false, futureProspects: true,
    history: [{ date: 'Jan', price: 60 }, { date: 'Apr', price: 80 }, { date: 'Jul', price: 120 }, { date: 'Oct', price: 150 }, { date: 'Dec', price: 165 }],
    outlook: "Turned profitable recently. Blinkit acquisition driving tremendous hyper-local growth.", fundamentals: { fcf: true, revGrowth: true, manageableDebt: true }
  }
];
