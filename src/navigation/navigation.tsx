/* eslint-disable prettier/prettier */
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

/**
 * goToNewStack - Create new stack and sets that screen as root of stack
 * @param {*} stackId
 * @param {*} rootName
 * @param {*} options
 */
export const goToNewStack = (stackId, rootName, options) =>
  Navigation.setRoot({
    root: {
      stack: {
        id: stackId,
        children: [{
          component: {
            id: rootName,
            name: rootName,
            options: {
              ...options,
            },
          },
        }],
      },
    },
  });

/**
 * goToHomeWithSideMenu
 * @description Shows Side Drawer Menus
 */
export const goToHomeWithSideMenu = async (
  drawerId,
  drawerName,
  homeId,
  homeName,
  title,
  passProps,
  options,
  hideToolbar
) => {

  hideToolbar ? setMainAppSettings() : setToolbarAppSettings(title);

  const screenOptions = {
      ...options,
      topBar: {
          ...(options && options.topBar),
      },
  };

  Navigation.setRoot({
      root: {
          sideMenu: {
              id: drawerId,
              left: {
                  component: {
                      id: drawerId,
                      name: drawerName,
                  },
              },
              center: {
                  stack: {
                      id: homeId,
                      children: [{
                          component: {
                              id: homeId,
                              name: homeName,
                              passProps: {
                                  data: passProps,
                              },
                              options: {
                                  ...screenOptions,
                              },
                          },
                      }],
                  },
              },
              options: {
                  sideMenu: {
                    left: {
                      width: width * 0.85,
                    },
                  },
                },
          },
      },
  });
};

/**
* Sets default options for side menu
* like topbar, topbar title, left hamburger button
*/
const setToolbarAppSettings = (title) => {

  Navigation.setDefaultOptions({
      sideMenu: {
          openGestureMode: 'bezel',
          animationType: 'parallax',
          left: {
              enabled: false,
              visible: false,
          },
      },
      topBar: {
          title: {
              height: Platform.select({
                ios: 100,
              }),
              text: title,
              alignment: 'center',
              fontFamily: Fonts.FontBold,
              fontSize: moderateScale(16),
              color: Colors.white,
          },
          leftButtons: [{
              id: 'menuButton',
              icon: Platform.OS === 'android' ? Images.ham_menu : Images.ham_menu,
          }],
          background: {
            color: Colors.black,
          },
          visible: true,
          drawBehind: false,
          animate: false,
          height: Platform.select({
              ios: 100,
          }),
      },
  });
};

/**
 * Sets default options for side menu  (Consumer)
 * by hiding the topbar
 */
const setMainAppSettings = () => {
  Navigation.setDefaultOptions({
    sideMenu: {
      openGestureMode: 'bezel',
      animationType: 'parallax',
      left: {
        enabled: false,
        visible: false,
      },
    },
    topBar: {
      visible: false,
      drawBehind: true,
    },
  });
};

/**
 * showOverlay - Shows a dialog
 * @param {*} overlayScreen
 * @param {*} passProps
 */
export const showOverlay = (overlayScreen, passProps, overlayId) => {
  Navigation.showOverlay({
    component: {
      id: overlayId === undefined ? 'overlay' : overlayId,
      name: overlayScreen,
      passProps: {
        data: passProps,
      },
      options: {
        layout: {
          backgroundColor: 'transparent',
          componentBackgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: false,
        },
        modalPresentationStyle: 'overFullScreen',
        topBar: {
          visible: false,
        },
      },
    },
  });
};
