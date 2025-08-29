import React from "react";
import styles from "./styles";
import Container from "../../components/Container";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import Transaction from "./components/Transaction";
import { useTransactions } from "./hooks";
import common from "../../styles/common";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, fontColor } from "../../styles/colors";
import font from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";
import margin from "../../styles/margin";
import Filter from "./components/Filter/Filter";

const Transactions = () => {

    const {
        data,
        isLoading,
        isRefetching,
        searchField,
        hasNextPage,
        showMoreOptions,
        openOderByValue,
        sortByValue,
        onRefresh,
        handleInputChange,
        handleInputSubmit,
        fetchNextPage,
        clearTextField,
        handlShowOptions,
        setOpenOrderByValue,
        setSortByValue
    } = useTransactions();

    const transactions = data?.pages.flat() ?? [];

    return (
        isLoading ? <ActivityIndicator testID="activity-indicator" size="large" /> :
            <Container customStyles={[styles.container, common.darkBackground]}>
                <View style={styles.fixedHeader}>
                    <Text style={[fontColor.white, font.bold]}>Transactions</Text>
                    <TouchableOpacity onPress={handlShowOptions} style={styles.addIcon}>
                        <Ionicons name={showMoreOptions ? "close" : "menu"} size={24} color="white" />
                    </TouchableOpacity>
                    <View style={margin.mt12}>
                        <Ionicons style={styles.icon} name="search" size={20} color="#888" />
                        <TextInput
                            style={styles.input}
                            placeholder="Search in transaction"
                            value={searchField}
                            onChangeText={handleInputChange}
                            onSubmitEditing={(event) => handleInputSubmit(event.nativeEvent.text)}
                            keyboardType="default"
                            autoCapitalize="none"
                            placeholderTextColor={COLORS.darkPlaceholderColor}
                            testID="search-in-transaction"
                        />
                        {
                            searchField.length > 0 &&
                            <TouchableOpacity onPress={clearTextField} style={styles.closeIcon}>
                                <Ionicons name="close" size={20} color="white" />
                            </TouchableOpacity>
                        }

                    </View>
                    {
                        showMoreOptions &&
                        <View style={[margin.mt8, margin.mb12]}>
                            <Filter
                                openOderByValue={openOderByValue}
                                sortByValue={sortByValue}
                                setOpenOrderByValue={setOpenOrderByValue as (value: unknown) => void}
                                setSortByValue={setSortByValue as (value: unknown) => void}
                            />
                        </View>
                    }
                </View>
                <FlatList
                    data={transactions}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Transaction item={item} />}
                    refreshControl={
                        <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
                    }
                    onEndReached={() => {
                        if (hasNextPage) fetchNextPage();
                    }}
                    onEndReachedThreshold={0.5}
                />
            </Container>
    )
};

export default Transactions;