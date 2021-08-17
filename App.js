import React from 'react';
import { View, ScrollView } from 'react-native';
import SampleComponent from './SampleComponent';
import { StylingReactNativeComponent } from './StylingReactNativeComponent';
import Flexbox from './Flexbox';

// Functional Component
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        <Flexbox />
      </ScrollView>
    </View>
  );
};

export default App;
