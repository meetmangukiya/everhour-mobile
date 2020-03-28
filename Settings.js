import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { getKey, commitKey } from "./utils";
import { OutlinedTextField } from "react-native-material-textfield";
import SnackBar from "react-native-snackbar-component";

export default props => {
  const [APIKey, setAPIKey] = useState("");
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const fieldRef = useRef(null);

  useEffect(() => {
    getKey().then(key => {
      console.log(key);
      setAPIKey(key);
      console.log(fieldRef);
      fieldRef.current.setValue(key);
    });
  }, []);

  return (
    <View style={{ padding: 10, height: "100%" }}>
      <OutlinedTextField
        label="API Key"
        placeholder="Enter your API Key"
        onChangeText={text => {
          setAPIKey(text);
          setIsSnackBarVisible(false);
        }}
        ref={fieldRef}
        onBlur={() => commitKey(APIKey).then(() => setIsSnackBarVisible(true))}
      />
      <SnackBar
        visible={isSnackBarVisible}
        textMessage="API Key set succesfully"
        autoHidingTime={2000}
      />
    </View>
  );
};
