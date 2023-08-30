import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ChartJS from 'react-native-chartjs-4';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChartJS config={``} styleChart="" /> */}
      <ChartJS />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
