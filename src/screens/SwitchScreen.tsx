import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

import { CustomSwitch } from '../Components/CustomSwitch';
import { HeaderTitle } from '../Components/HeaderTitle';

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  })

  const onChange = (value: boolean, field: string) => {
    console.log('segundo');
    setState({
      ...state,
      [field]: value,
    });
  }

  const { isActive, isHappy, isHungry } = state;

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title='Switches'/>

      <View style={ styles.switchRow }>
        <Text style={ styles.switchText}>IsActive</Text>
        <CustomSwitch
          isOn={ isActive }
          onChange={(value) => onChange(value, 'isActive')}
        />
      </View>
      <View style={ styles.switchRow }>
        <Text style={ styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={ isHungry }
          onChange={(value) => onChange(value, 'isHungry')}
        />
      </View>
      <View style={ styles.switchRow }>
        <Text style={ styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={ isHappy }
          onChange={(value) => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={ styles.switchText }>
        { JSON.stringify(state, null, 5) }
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
