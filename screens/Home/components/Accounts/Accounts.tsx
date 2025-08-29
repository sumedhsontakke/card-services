import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { AccountTypes } from '../../../../contants';
import { TAccountDetails } from '../../../../models';
import { fontColor } from '../../../../styles/colors';
import font from '../../../../styles/fonts';
import margin from '../../../../styles/margin';
import { TAccountsProps } from '../../models';
import styles from "./styles";
import { navigate } from '../../../../services/navigationService';

export default function Accounts(props: TAccountsProps) {

  const { accountDetails, isAccountDetailsLoading } = props;

  const renderItem = ({ item, index }: { item: unknown, index: number }) => {
    const _item = item as unknown as TAccountDetails;

    return (
      <View style={styles.accountCard} key={index}>
        <TouchableOpacity onPress={() => navigate("Transactions")} testID='account-card'>
          <View style={styles.accountName}>
            <Text style={[fontColor.white, font.size12]}>
              {`${AccountTypes[_item.name]} Account:`}
            </Text>
            <Text style={[font.size16, font.bold, fontColor.white, margin.ml4]}>
              XXX{_item.id}
            </Text>
          </View>
          <View style={[styles.accountBalance, margin.mt8]}>
            <Text style={[fontColor.white, font.size16, font.bold]}>&#8364;{_item.balance}</Text>
            <Text style={[fontColor.white, margin.mt4, font.size12]}>Available Balance</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <>
      <View style={styles.accountContainer}>
        <Text style={styles.title}>Accounts overview:</Text>
      </View>
      {
        !isAccountDetailsLoading && accountDetails &&
        accountDetails.map((item, index) => renderItem({ item, index }))
      }
    </>
  );
}
