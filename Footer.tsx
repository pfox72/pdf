import React from 'react';
import { Text, View } from "react-native";

export const Footer = (props: { text: string; }) => <View style={{ backgroundColor: "black" }}>
  <Text style={{ color: "white", padding: 5, textAlign: "center", fontWeight: 'bold' }}>
    {props.text}
  </Text>
</View>;
