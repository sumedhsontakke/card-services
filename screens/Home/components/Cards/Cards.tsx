import React from "react";
import {
    Text,
    View
} from 'react-native';
import CardSlider from "../../../../components/CardSlider";
import { TCardDetails } from "../../../../models";
import { fontColor } from "../../../../styles/colors";
import font from "../../../../styles/fonts";
import margin from "../../../../styles/margin";
import { TCardsProps } from "../../models";
import styles from "./styles";

const Cards: React.FC<TCardsProps> = (props) => {
    const {
        cardDetailsList,
        isCardDetailsLoading
    } = props;

    const renderItem = ({ item, index }: { item: unknown, index: number }) => {
        const _item = item as unknown as TCardDetails;
        return (
            <View style={margin.mr24}>
                <View style={[styles.cardContainer]}>
                    <View style={styles.cvvDetails}>
                    <Text style={[fontColor.white, font.size12, margin.mr4]}>CVV</Text>
                    <Text style={fontColor.white}>{_item.cvv}</Text>
                    </View>
                </View>
                <View style={styles.cardDetails}>
                    <View>
                        <Text style={[fontColor.white]}>{`Card no. ${_item.number}`}</Text>
                    </View>
                    <View style={margin.mt8}>
                        <Text style={[fontColor.white]}>{`Expiry: ${_item.expiry}`}</Text>
                    </View>
                </View>
            </View>
        )
    };

    return (
        <View style={styles.accountContainer}>
            <Text style={styles.title}>Cards:</Text>
            {
                !isCardDetailsLoading && cardDetailsList &&
                <CardSlider
                    data={cardDetailsList}
                    renderItem={renderItem}
                    customStyle={margin.mt8}
                    itemWidth={300}
                />
            }

        </View>
    )
}

export default Cards;