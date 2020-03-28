import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ApiClient from "./ApiClient";
import List from "./List";
import { Foundation } from "@expo/vector-icons";

const Project = props => {
  const { data } = props;

  return (
    <TouchableOpacity
      style={{
        borderBottomColor: "grey",
        margin: 3,
        borderBottomWidth: 1
      }}
    >
      <Text h1 style={{ fontWeight: "bold", fontSize: 22 }}>
        {data.name}
      </Text>
      <Text>
        <Foundation
          style={{ right: 0 }}
          name="dollar"
          color={data.billing === undefined ? "black" : "green"}
          size={22}
        />
        <Text>
          {data.billing === undefined ? null : data.billing.fee / 100}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default props => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    ApiClient.getProjects().then(data => setProjects(data));
  }, []);

  return (
    <View>
      <List component={Project} data={projects} />
    </View>
  );
};
