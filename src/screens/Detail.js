import React from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { CircleButton, RectButton } from '../components/Button';
import { SubInfo } from '../components/SubInfo';
import { assets, COLORS, SHADOWS, SIZES } from '../constants';
import { DetailDesc, DetailsBid, FocusedStatutBar } from './../components';

const DetailsHeader = ({ data, navigation }) => {
    return (
        <View style={{ width: '100%', height: 373 }}>
            <Image
                source={data.image}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
            />
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            <CircleButton
                imgUrl={assets.heart}
                right={15}
                top={StatusBar.currentHeight + 10}
            />
        </View>
    );
};

const Detail = ({ route, navigation }) => {
    const { data } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatutBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    zIndex: 1,
                }}>
                <RectButton {...SHADOWS.dark} minWidth={170} fontSize={SIZES.large} />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item, index }) => <DetailsBid bid={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailDesc data={data} />
                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: 'Inter-SemiBold',
                                        color: COLORS.primary,
                                    }}>
                                    Current Bids
                                </Text>
                            )}
                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    );
};

export default Detail;
