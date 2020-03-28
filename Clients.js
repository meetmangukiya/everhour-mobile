import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import ApiClient from "./ApiClient";
import List from "./List";

const Client = props => {
  const { data } = props;

  return (
    <TouchableOpacity
      style={{
        borderBottomColor: "grey",
        margin: 3,
        borderBottomWidth: 1
      }}
    >
      <Text h1 style={{ fontWeight: "bold", fontSize: 22 }}>{data.name}</Text>
      <Text style={{ color: "grey" }}>Projects: {data.projects.length}</Text>
    </TouchableOpacity>
  );
};

export default props => {
  const [clients, setClients] = useState([]);

  const getData = () => ApiClient.getClients().then(data => setClients(data));

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <List data={clients} component={Client} />
    </View>
  );
};
