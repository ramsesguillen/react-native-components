import { Dimensions, Text, View } from 'react-native';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import React from 'react';

const { width } = Dimensions.get('window');
 
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
 
const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
 
        <Text
          style={{
            ...styles.title,
          }}>
          {item.title}
        </Text>
 
        <Text
          style={{
            ...styles.subTitle,
          }}>
          {item.desc}
        </Text>
      </View>
    );
  };
 
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={width}
        autoPlay={false}
        data={items}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
