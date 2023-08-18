import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarRating = ({ star }) => {
  const renderStars = () => {
    const starsArray = [];
    const yellowStars = star > 0 ? star : 0;
    const grayStars = 5 - yellowStars;

    for (let i = 0; i < yellowStars; i++) {
      starsArray.push(
        <FontAwesome key={i} name="star" size={20} color="yellow" />
      );
    }

    for (let i = 0; i < grayStars; i++) {
      starsArray.push(
        <FontAwesome key={i + yellowStars} name="star" size={20} color="gray" />
      );
    }

    return starsArray;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarRating;
