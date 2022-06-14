import analytics from '@react-native-firebase/analytics';

export const onLogScreenView = async screenName => {
  try {
    await analytics().logScreenView({
      screen_name: screenName,
      screen_class: screenName,
    });
  } catch (err) {
    // console.log(err);
  }
};
