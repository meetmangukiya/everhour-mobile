import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Projects from "./Projects";
import Clients from "./Clients";
import Settings from "./Settings";
import { TabView, SceneMap } from "react-native-tab-view";
import Constants from "expo-constants";

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "projects", title: "Projects" },
    { key: "clients", title: "Clients" },
    { key: "settings", title: "Settings" }
  ]);

  const renderScene = SceneMap({
    projects: Projects,
    clients: Clients,
    settings: Settings
  });

  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </View>
  );
};

export default App;
