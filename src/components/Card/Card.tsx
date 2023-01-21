import React from 'react';
import {Text, View} from 'react-native';
import {PostOfficeInfo} from '../../modals/postOfficeModal';
import {styles} from './card.styles';

export const Card = ({data}: {data: PostOfficeInfo}) => (
  <View style={styles.cardView}>
    <Text style={styles.name}>{data?.Name}</Text>
    <Text style={styles.details}>{data?.BranchType}</Text>
    <Text style={styles.details}>{data?.State}</Text>
    <Text style={styles.details}>{data?.Pincode}</Text>
  </View>
);

export default Card;
