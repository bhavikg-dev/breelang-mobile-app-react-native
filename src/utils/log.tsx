// import crashlytics from '@react-native-firebase/crashlytics';

export const log = (...data) => {

  if (__DEV__) {
    console.log(...data);
  } else{
  	// will log to a third party service in production
  	// crashlytics().log(...data);
  }
};
