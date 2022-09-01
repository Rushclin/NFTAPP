import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}>
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
            />
        </TouchableOpacity>
    );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,

                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...props,
            }}
            onPress={handlePress}>
            <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: fontSize, color: COLORS.white, textAlign: 'center' }}>Place a bid</Text>
        </TouchableOpacity>
    );
};
