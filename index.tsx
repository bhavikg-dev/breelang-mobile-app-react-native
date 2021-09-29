import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '@navigation/screens';
import { openBookIcon } from './src/res/images';

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens();
  setRoot();
});

function setRoot() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {              
              children: [
                {
                  component: {
                    name: 'ToNight',
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
               
                bottomTab: {
                  text: 'Tonight',
                  icon: require('./src/res/images/home.png'),
                  testID: 'T1',    
                  fontWeight: 'bold',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'SleepScapes',
                  },
                  
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTab: {
                  text: 'Sleepscopes',
                  icon: require('./src/res/images/profile.png'),
                  testID: 'T2',
                },
              },
            },
          },
          {
            stack: {
              id: 't3',
              children: [
                {
                  component: {
                    name: 'SoundScapes',
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTab: {
                  text: 'Soundscopes',
                  icon: require('./src/res/images/profile.png'),
                  testID: 'T3',
                  fontWeight: 'bold',
                },
              },
            },
          },
          {
            stack: {
              id: 't4',
              children: [
                {
                  component: {
                    name: 'Stories',
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTab: {
                  icon: require('./src/res/images/profile.png'),
                  text: 'Stories',
                  testID: 'T4',
                  fontWeight: 'bold',
                },
              },
            },
          },
          {
            stack: {
              id: 't5',
              children: [
                {
                  component: {
                    name: 'Andrew',
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTab: {
                  text: 'Andrew',
                  icon: require('./src/res/images/profile.png'),
                  testID: 'T5',
                },
              },
            },
          },
        ],
      },
    },
  });
}