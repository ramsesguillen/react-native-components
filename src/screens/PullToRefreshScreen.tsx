import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'

import { HeaderTitle } from '../Components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('finish');
      setRefreshing(false)
    }, 1500);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={ refreshing }
          onRefresh={onRefresh}
          progressViewOffset={ 50 }
          progressBackgroundColor='#5856D6'
          colors={[ 'white', 'red', 'orange' ]}
          style={{ backgroundColor: '#5856D6' }}
          tintColor='white'
        />
      }
    >
      <View style={ styles.globalMargin }>
        <HeaderTitle title='Pull to refresh'/>
      
      </View>
    </ScrollView>
  )
}
