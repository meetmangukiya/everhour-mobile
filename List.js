import React from "react";
import { FlatList } from "react-native-gesture-handler";

export default props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => {
        return <props.component data={item} />;
      }}
      keyExtractor={client => client.id}
    />
  );
};
