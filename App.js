import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates'
import { useEffect, useState } from 'react';
import detalle from './app.json'
export default function App() {
  const [UpdateCheck, setUpdateCheck] = useState(false)
  
  useEffect(() => {
    reactUpdates();
  }, [])

  const reactUpdates = async () => {
    Updates.addListener((event) => {
      console.log('actualized2',event.type)
      if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        Alert.alert("Hay Actualizaciones, reinicie la aplicacion");
        Updates.reloadAsync();
      }else{
        Alert.alert("No hay Actualizaciones");
      }
    })
  }
  
  return (
    <View style={styles.container}>
      <Text>App Expo EAS Update!!</Text>
      <Text>Powered By Marcuxo</Text>
      <Text>Powered By desert</Text>
      <Text>Powered By desertantigeno</Text>
      <Text>PKG {detalle.expo.android.package}</Text>
      <Text>version {detalle.expo.version}</Text>
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
