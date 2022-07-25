import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
export const configure = navigation => {
  PushNotification.configure({
    requestPermissions: Platform.OS === 'ios',
    onNotification: function (notification) {
      if (notification.data.screen === 'DetailProductScreen') {
        navigation.navigate(notification.data.screen, {id_product: notification.data.data});
      }
    },
  });
};
export const buatChannel = channel => {
  PushNotification.createChannel({
    channelId: channel,
    channelName: 'My channel',
  });
};
export const kirimNotifikasi = (channel, judul, pesan, data, screen) => {
  PushNotification.localNotification({
    channelId: channel, //
    title: judul, // (optional)
    message: pesan,
    picture: 'https://i.imgur.com/w3duR07.png', // (optional) default: "ic_launcher"
    // bigText: 'hhllllasfdasd',
    data: {
      screen: screen,
      data: data,
    },
  });
};
export const cancelAllLocalNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};
