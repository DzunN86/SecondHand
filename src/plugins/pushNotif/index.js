import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
export const configure = () => {
  PushNotification.configure({
    requestPermissions: Platform.OS === 'ios',
  });
};
export const buatChannel = (channel) => {
  PushNotification.createChannel(
    {
      channelId: channel,
      channelName: 'My channel',
    },
  );
};
export const kirimNotifikasi = (channel, judul, pesan) => {
  PushNotification.localNotification({
    channelId: channel, //
    title: judul, // (optional)
    message: pesan,
    // bigText: 'hhllllasfdasd',
  });
};
export const cancelAllLocalNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};
