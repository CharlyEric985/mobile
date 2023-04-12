import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.eric.app',
  appName: 'push',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    PushNotification:{
      presentationOptions:["badge","sound","alert"]
    }
  },
  cordova:{}
};

export default config;
