import { Alert, Button, View } from 'react-native';

import { HeaderTitle } from '../Components/HeaderTitle'
import React from 'react'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {
  const createAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], {
      cancelable: true,
      onDismiss: () => {
        console.log('Dismiss');
      }
    });

  return (
    <View style={ styles.globalMargin }>
      <HeaderTitle title='Alerts'/>

      <Button title='Abrir alerta' onPress={createAlert} />
    </View>
  )
}
