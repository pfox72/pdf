import React, { useState } from 'react';
import { Platform, SafeAreaView, View } from "react-native";
import { Footer } from './Footer';
import { Header } from './Header';
import PSPDFKitView from 'react-native-pspdfkit';

const App = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const [documentFolder, setDocumentFolder] = useState(Platform.OS === 'android' ? 'file:///android_asset/' : '');

  const onStateChange = (e: any) => {
    if (e.currentPageIndex) {
      setCurrentPageNumber(e.currentPageIndex);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black", flexDirection: "column", flex: 1 }}>
      <Header />

      <View style={{ flex: 1, backgroundColor: "white" }}>
        <PSPDFKitView
          document={`${documentFolder}sample.pdf`}
          configuration={{
            showThumbnailBar: 'scrollable',
            pageTransition: 'scrollContinuous',
            scrollDirection: 'vertical',
          }}
          fragmentTag="PDF1"
          style={{flex: 1}}
          onStateChanged={onStateChange}
        />
      </View>
      
      <Footer text={`Page: ${currentPageNumber + 1}`} />
    </SafeAreaView>
  );
};

export default App;
