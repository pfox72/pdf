import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from "react-native";
import { Footer } from './Footer';
import { Header } from './Header';

const App = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  return (
    <SafeAreaView style={{ backgroundColor: "black", flexDirection: "column", flex: 1 }}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />

      <Header />

      <View style={{ flex: 1, backgroundColor: "white" }}>
      </View>
      
      <Footer text={`Page: ${currentPageNumber}`} />
    </SafeAreaView>
  );
};

export default App;
