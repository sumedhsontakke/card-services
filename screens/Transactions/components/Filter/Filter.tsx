import { useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ORDER_BY, SORT_BY } from "../../constants";
import styles from "./styles";
import font from "../../../../styles/fonts";
import { fontColor } from "../../../../styles/colors";
import { TFilterProps } from "../../models";

const Filter: React.FC<TFilterProps> = ({
    openOderByValue,
    sortByValue,
    setOpenOrderByValue,
    setSortByValue
}) => {


    const [openOderBy, setOpenOrderBy] = useState(false);

    const [sortBy, setSortBy] = useState(false);

    return (
        <View style={[styles.container]}>
            <View style={styles.filterContainer}>
                <Text style={[font.size12, fontColor.white]}>Sort by</Text>
                <DropDownPicker
                    open={sortBy}
                    value={sortByValue}
                    items={SORT_BY}
                    setOpen={setSortBy}
                    setValue={setSortByValue}
                    style={[styles.filter]}
                    labelStyle={styles.textStyle}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={[font.size12, fontColor.white]}>Order by</Text>
                <DropDownPicker
                    open={openOderBy}
                    value={openOderByValue}
                    items={ORDER_BY}
                    setOpen={setOpenOrderBy}
                    setValue={setOpenOrderByValue}
                    style={styles.filter}
                    labelStyle={styles.textStyle}
                />
            </View>
        </View>
    )
}

export default Filter;