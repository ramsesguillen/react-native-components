import { FlatList, Text, View } from 'react-native'

import { FlatListMenuItem } from '../Components/FlatListMenuItem';
import { HeaderTitle } from '../Components/HeaderTitle';
import Icon from 'react-native-vector-icons/Ionicons';
import { ItemSeparator } from '../Components/ItemSeparator';
import { MenuItem } from '../interfaces/appInterfaces';
import React from 'react'
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={ menuItems }
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} /> }
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <HeaderTitle title='Opciones de Menu' />}
        ItemSeparatorComponent={ () => <ItemSeparator />}
      />
    </View>
  )
}
