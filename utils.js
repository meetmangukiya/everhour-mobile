import * as SecureStore from "expo-secure-store";

export const getKey = () => {
  return SecureStore.getItemAsync("api_key");
};

export const commitKey = val => {
  return SecureStore.setItemAsync("api_key", val);
};
