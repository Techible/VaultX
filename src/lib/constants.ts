
// App color constants
export const COLORS = {
  primary: '#8B5CF6', // Primary purple
  secondary: '#7E69AB', // Secondary purple
  tertiary: '#6E59A5', // Tertiary purple
  dark: '#1A1F2C', // Dark background
  light: '#F1F0FB', // Light background
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F6F6F7',
    200: '#EFEFEF',
    300: '#E5E5E5',
    400: '#C8C8C9',
    500: '#8E9196', // Neutral Gray
    600: '#666666',
    700: '#403E43', // Charcoal Gray
    800: '#333333',
    900: '#222222',
  },
  success: '#4CAF50',
  error: '#ea384c',
  warning: '#FFA726',
  info: '#0EA5E9',
  crypto: {
    usdt: '#26A17B',
    usdc: '#2775CA',
    btc: '#F7931A',
    eth: '#627EEA',
  },
  card: {
    visa: '#1434CB',
    mastercard: '#EB001B',
  }
};

// Mock data
export const MOCK_WALLETS = [
  {
    id: 'usdt',
    name: 'USDT',
    balance: '2.2332',
    usdValue: '2.23',
    icon: '💠',
  },
  {
    id: 'usdc',
    name: 'USDC',
    balance: '0',
    usdValue: '0',
    icon: '🔵',
  },
  {
    id: 'usd',
    name: 'USD',
    balance: '5.00',
    usdValue: '5.00',
    icon: '💵',
  },
];

export const MOCK_TRANSACTIONS = [
  {
    id: '1',
    merchant: 'DIGITALOCEAN.COM',
    amount: '-176.40',
    currency: 'USD',
    date: '2025-01-02T14:17:43',
    status: 'Declined',
    cardLastFour: '0824',
  },
  {
    id: '2',
    merchant: 'DIGITALOCEAN.COM',
    amount: '-88.20',
    currency: 'USD',
    date: '2024-12-21T14:10:48',
    status: 'Declined',
    cardLastFour: '0824',
  },
  {
    id: '3',
    merchant: 'Reward',
    amount: '+5.00',
    currency: 'USD',
    date: '2025-04-12T11:16:40',
    status: 'Received',
  },
];

export const MOCK_CARDS = [
  {
    id: '1',
    lastFour: '0824',
    network: 'visa' as const,
    name: 'jinesh',
    frozen: false,
    expired: false,
  },
];
