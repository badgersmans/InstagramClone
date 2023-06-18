import { FlatList, useWindowDimensions, Image as RNImage, View, StyleSheet, Pressable } from 'react-native';
import React, { useState, useRef } from 'react'
import { Image } from 'expo-image';
import { FlashList } from '@shopify/flash-list';
import DoublePressable from '../DoublePressable/DoublePressable';

const Carousel = ({ images, onDoublePress = () => {} }) => {
    const {width} = useWindowDimensions();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log(data)
    if(viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index)
    }
  });

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  }

  return (
    <View>
      <FlashList
          data={images}
          renderItem={({ item }) => (
            <DoublePressable onDoublePress={onDoublePress}>
              <Image
                  style={{
                      width,
                      aspectRatio: 1
                  }}
                  source={item}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={300}
              />
            </DoublePressable>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          estimatedItemSize={20}
          pagingEnabled
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.dotsContainer}>
        {images.map((image, index) => (
          <View style={{
            width: '2.5%',
            aspectRatio: 1,
            marginRight: '2%',
            backgroundColor: activeImageIndex === index ? 'grey' : 'white',
            borderRadius: 2000,
          }} key={image}/>
        ))}
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  dotsContainer: {
      flexDirection: 'row',
      // gap: '10%',
      justifyContent: 'center',
      position: 'absolute',
      // backgroundColor: 'yellow',
      bottom: 0,
      width: '100%',
      marginBottom: '3%'
  },
});

export default Carousel