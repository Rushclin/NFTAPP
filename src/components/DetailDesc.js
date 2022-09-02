import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { ETHPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES } from '../constants';

const DetailDesc = ({ data }) => {
    const [text, setText] = React.useState(data.description.slice(0, 100))
    const [readMore, setReadMore] = React.useState(false)

    return (

        <>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <ETHPrice price={data.price} />
            </View>
            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: 'Inter-Bold',
                    color: COLORS.primary,
                }}>Description</Text>
                <View style={{ marginTop: SIZES.base }}>
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: 'Inter-Regular',
                        color: COLORS.secondary,
                        lineHeight: SIZES.large
                    }}>{text}
                        {!readMore && '...'}
                        <Text style={{
                            fontSize: SIZES.small,
                            fontFamily: 'Inter-Semiold',
                            color: COLORS.primary,
                        }}
                            onPress={() => {
                                if (!readMore) {
                                    setText(data.description)
                                    setReadMore(true)
                                } else {
                                    setText(data.description.slice(0, 100))
                                    setReadMore(false)
                                }
                            }}
                        >
                            {readMore ? 'Show Less' : 'Read More'}
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    );
};

export default DetailDesc;
