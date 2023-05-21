import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import { CustomSwitch } from '../Components/CustomSwitch'
import { HeaderTitle } from '../Components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useForm } from '../hooks/useForm'

export const TextInputScreen = () => {

  const { onChange, form, isSubscribe } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={ styles.globalMargin }>
            <HeaderTitle title='Text Input'/>

            <TextInput
              style={ stylesScreen.input}
              placeholder='Ingrese su nombre'
              autoCorrect={ false }
              onChangeText={(value) => onChange(value, 'name')}
            />
            <TextInput
              style={ stylesScreen.input}
              placeholder='Ingrese su email'
              autoCorrect={ false }
              autoCapitalize='none'
              onChangeText={(value) => onChange(value, 'email')}
              keyboardType='email-address'
            />
            <View style={ stylesScreen.switchRow }>
              <Text style={ stylesScreen.switchText}>IsActive</Text>
              <CustomSwitch
                isOn={ isSubscribe }
                onChange={(value) => onChange(value, 'isSubscribe')}
              />
            </View>
            <HeaderTitle title={ JSON.stringify(form, null, 3)}/>
            <HeaderTitle title={ JSON.stringify(form, null, 3)}/>
            <HeaderTitle title={ JSON.stringify(form, null, 3)}/>
            <TextInput
              style={ stylesScreen.input}
              placeholder='Ingrese su telefono'
              onChangeText={(value) => onChange(value, 'phone')}
              keyboardType='phone-pad'
            />
            <View style={{ height: 100 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesScreen = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 20,
  },
});
