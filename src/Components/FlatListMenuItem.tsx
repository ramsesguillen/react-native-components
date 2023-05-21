import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import React from 'react'
import { RootSackParams } from '../Navigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = StackNavigationProp<RootSackParams, 'HomeScreen'>;


interface Props {
  menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation<HomeScreenProps>();

  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.components) }
    >
      <View style={styles.container }>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Icon
            name={ menuItem.icon }
            color="#5856D6"
            size={ 23 }
          />
          <Text style={{ ...styles.itemText, color: colors.text }}>{ menuItem.name } - { menuItem.icon } - {menuItem.components}</Text>
        </View>

        <Icon
          name='chevron-forward-outline'
          color="gray"
          size={ 23 }
        />
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 19
  },
  
});
