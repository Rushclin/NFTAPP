import React from 'react'
import { FlatList, SafeAreaView, Text, View } from "react-native"
import { FocusedStatutBar, HomeHeader, NFTCard } from './../components'
import { COLORS, NFTData } from './../constants'
const Home = () => {

    const [nftData, setnftData] = React.useState(NFTData)

    const handleSearch = value => {
        if (!value.length) return setnftData(NFTData)

        const filterData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

        if (filterData.length) {
            setnftData(filterData)
        } else {
            setnftData(NFTData)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatutBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={nftData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>

                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home