import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { ETHPrice } from './SubInfo'

const DetailsBid = ({ bid }) => {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: SIZES.base,
            paddingHorizontal: SIZES.base * 2,
        }}>
            <Image source={bid.image} resizeMode='contain' style={{ width: 48, height: 48 }} />
            <View>
                <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: SIZES.small, color: COLORS.primary }}>
                    Bid placed by {bid.name}
                </Text>
                <Text style={{ fontFamily: 'Inter-Regular', fontSize: SIZES.small - 2, color: COLORS.secondary, marginTop: 3 }}>
                    {bid.date}
                </Text>
            </View>
            <ETHPrice price={bid.price} />
        </View>
    )
}

export default DetailsBid