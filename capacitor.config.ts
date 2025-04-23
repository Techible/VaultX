
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a35719b9546a4673957a291013d90729',
  appName: 'cryptocard-mobile-wallet',
  webDir: 'dist',
  server: {
    url: "https://a35719b9-546a-4673-957a-291013d90729.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: "#121212",
    }
  }
};

export default config;
