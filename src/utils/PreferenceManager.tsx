import AsyncStorage from '@react-native-community/async-storage';

class PreferenceManager {
  
  /**
   * Function to store item into Secure storage
   * @param key: String
   */

  static setItemToStorageAwait = async (key, value) => {

    try {
        await AsyncStorage.setItem(key, value);
        return {error: false}
    } catch (error) {
        return {error: true}
    }
  };

  /**
   * Function to retrieve item from Secure storage
   * @param key: String
   */

  static getItemFromStorageAwait = async (key) => {

    try {
        const value = await AsyncStorage.getItem(key);

        return {data: value, error: value==null ? true: false}

    } catch (error) {

          return {data: null, error: true}
    }
  };

  /**
   * Function to remove item from Secure storage
   * @param key: String
   * @param completionHandler: func
   */

  static removeItemFromStorage = async (key, completionHandler) => {
    AsyncStorage.removeItem(key, completionHandler);
  };

  /**
   * Function to remove item from Secure storage
   * @param completionHandler: func
   */

  static getAllKeysFromStorage = async completionHandler => {
    AsyncStorage.getAllKeys(completionHandler);
  };

  static isValueAbsentIn = value => {
    return value === null || value === undefined || value === "" ? true : false;
  };
}

export { PreferenceManager };
