import React from 'react';
import {
    Dimensions,
    View
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CardSliderProps } from './models';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;

const CardSlider: React.FC<CardSliderProps> = (props) => {
    const {
        data,
        renderItem,
        customStyle,
        itemWidth
    } = props;

    return (
        <View style={customStyle}>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={itemWidth || ITEM_WIDTH}
              loop={false}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              inactiveSlideShift={0}
              contentContainerCustomStyle={{paddingLeft: 0}} 
            />
        </View>
    );
};

export default CardSlider;