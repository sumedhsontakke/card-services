import { Text, View } from "react-native";
import { TTransactionProp } from "../../models";
import moment from "moment";
import { fontColor } from "../../../../styles/colors";
import font from "../../../../styles/fonts";
import margin from "../../../../styles/margin";
import styles from "./styles";
import common from "../../../../styles/common";

const Transaction: React.FC<TTransactionProp> = (props) => {
    const { item } = props;
    return (
        <View style={[margin.mt12, styles.container]}>
            <Text style={[fontColor.white, font.size12, styles.date]}>{item.date && moment(new Date(item.date)).format('MMMM Do YYYY, h:mm:ss a')}</Text>
            <View style={common.row}>
                <View style={[styles.circle, margin.mt4]}>
                    <Text style={fontColor.white}>{item.description[0]}</Text>
                </View>
                <View style={[styles.txnDetails, common.row]}>
                    <Text style={fontColor.white}>{item.description}</Text>
                    <Text style={[fontColor.white, item.amount > 0 && styles.amountPositive]}>{`${item.amount > 0 ? "+" : ""} ${item.amount}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default Transaction;