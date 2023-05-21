import { SectionList, Text, View } from 'react-native'

import { HeaderTitle } from '../Components/HeaderTitle'
import { ItemSeparator } from '../Components/ItemSeparator';
import React from 'react'
import { styles } from '../theme/appTheme'

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman",]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama",]
  }
];


export const SectionListScreen = () => {
  return (
    <View style={ { ...styles.globalMargin, flex: 1 } }>

      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={ () => <HeaderTitle title="List Section"/>}
        ListFooterComponent={ () => (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={`Total de casas: ${ casas.length }`} />
          </View>
        )}
        stickySectionHeadersEnabled
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: { casa }}) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={casa}/>
          </View>
        )}

        renderSectionFooter={ ({ section}) => (
          <HeaderTitle title={'Total: ' + section.data.length }/>
        )}

        SectionSeparatorComponent={ () => <ItemSeparator />}
        ItemSeparatorComponent={ () => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}
