import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { HeaderTitle } from '../Components/HeaderTitle'

export const InfinityScrollScreen = () => {
  const [numbers, setNumbers] = useState([0,1,2,3,4,5,6, 7, 8, 9])

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers([ ...numbers, ...newArray ]);
  }

  const renderItem = (item: number ) => {
    return (
      <Text style={ styles.textItem }>{ item }</Text>
    )
  }
  return (
    <View>
      <FlatList
        data={ numbers }
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) =>  renderItem(item)}
        ListHeaderComponent={<HeaderTitle title='Infinity Scroll'/>}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
