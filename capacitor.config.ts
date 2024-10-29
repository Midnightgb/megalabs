import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'megalabs',
  webDir: 'dist',
  ios: {
    webDir: 'dist'
  },
  copy: {
    include: [
      {
        src: 'src/assets/',
        dest: 'assets/'
      }
    ]
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;