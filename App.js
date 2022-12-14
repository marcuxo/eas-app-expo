import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates'
import { useEffect } from 'react';
import detalle from './app.json'

export default function App() {
  
  useEffect(() => {
    reactUpdates();
  }, [])

  const reactUpdates = async () => {
    Updates.addListener((event) => {
      console.log('actualized2',event.type)
      if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        Alert.alert("Hay Actualizaciones, reinicie la aplicacion");
        Updates.reloadAsync();
      }
    })
  }
  
  return (
    <View style={styles.container}>
      <Text>App Expo EAS Update!!</Text>
      <Text>Powered By Marcuxo</Text>
      <Text>Powered By ai.alien</Text>
      <Text>PKG {detalle.expo.android.package}</Text>
      <Text>version {detalle.expo.version}</Text>
      <Text>SDK Expo {detalle.expo.sdkVersion}</Text>
      <Text>Name App {detalle.expo.name}</Text>
      <Text>Developer marcuXo😎</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
