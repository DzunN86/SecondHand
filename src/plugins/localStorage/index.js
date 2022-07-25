import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    return null;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    // There was an error on the native side
  }
};

export async function storeDataSecure(key, value) {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));
    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
  }
}

export async function getDataSecure(key) {
  try {
    const session = await EncryptedStorage.getItem(key);
    if (session !== null) {
      return JSON.parse(session);
    }
    return null;
  } catch (e) {
    return null;
  }
}

export async function removeDataSecure(key) {
  try {
    await EncryptedStorage.removeItem(key);
    // Congrats! You've just removed your first value!
  } catch (error) {
    // There was an error on the native side
  }
}
