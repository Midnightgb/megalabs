import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'megalabs',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'capacitor'
  },
  ios: {
    webDir: 'dist'
  },
  plugins: {
    Filesystem: {
      directory: 'DOCUMENTS'
    }
  }
};

export default config;