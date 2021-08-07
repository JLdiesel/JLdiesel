import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { pxToDp } from "../../utils/styleKits";

const ENTRIES1 = [
  {
    subtitle: "1",
    illustration:
      "https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg",
  },
  {
    subtitle: "2",
    illustration:
      "https://img30.360buyimg.com/imgzone/jfs/t1/185921/14/13299/64961/60e68717E994b4e11/f4293d93cc127341.jpg",
  },
  {
    subtitle: "3 ",
    illustration:
      "https://img11.360buyimg.com/imgzone/jfs/t1/178143/10/13271/54708/60e68718E2e4aa44c/792cfcbe006f8bf4.jpg",
  },
  {
    subtitle: "4",
    illustration:
      "https://img12.360buyimg.com/imgzone/jfs/t1/186471/16/12270/114029/60e6871aE7719a6fe/8a034db53107b527.jpg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={goForward}>
                <Text>go to next slide</Text>
            </TouchableOpacity> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={pxToDp(380)}
        sliderHeight={pxToDp(380)}
        itemWidth={pxToDp(250)}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        // vertical={true}
        activeSlideOffset={0}
        loop={true}
        //自动播放
        // autoplay={true}
        // autoplayDelay={500}
        // autoplayInterval={3000}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    height: pxToDp(200),
  },
  item: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
});
