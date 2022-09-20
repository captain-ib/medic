import { Platform, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, View, FlatList } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import { Theme } from "../components/Theme";


export function Services ({navigation}){

    const services = [
        {
            id:'dfdghjyeggfytf',
            price:98000,
            by:'Agex Medical Laboratories',
            category:'Ambulance',
            title:'15 mins, Helicopter ',
            imageUrl:'https://images.pexels.com/photos/1549308/pexels-photo-1549308.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:'Available for all blood groups, the suppliers are stored at the recommended temperature'
        },
        {
            id:'kefghgfuwygfyk',
            price:32000,
            by:'Red Cells BioMedicals',
            category:'Suppliment',
            title:'Blood Banks (for all Groups)',
            imageUrl:'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:'This therapy is designed for professional atheletes who want to peak their perfor'
        },
        {
            id:'fgfkergfkfhkgerk',
            price:42500,
            by:' Bone fix House',
            category:'Therapy',
            title:'Bone Therapy for Athletes',
            imageUrl:'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:'This therapy is designed for professional atheletes who want to peak their perfor'
        }
    ];
    return (
        <SafeAreaView style={StyleSheet.areaView}>
            <View style={styles.container}>
                    <View style={styles.serviceList}>
                        <FlatList data={services}
                        renderItem={({item}) => {
                            return(
                                <Card style={{marginBottom: Theme.sizes[2]}}>
                                    <Card.Cover source={{uri:item.imageUrl}}/>
                                    <Card.Title title={item.title} subtitle={item.by}/>
                                    <Card.Content>
                                        <View style={styles.priceRow}>
                                            <Text style={styles.priceRowText}>NGN{item.price}</Text>
                                            <Text style={styles.priceRowText}>{item.category}</Text>
                                        </View>
                                    </Card.Content>
                                    <Card.Actions>
                                        <Button mode="contained" color={Theme.colors.ui.nursePurple}
                                        contentStyle={{paddingHorizontal: 8}}
                                        >Order</Button>
                                    </Card.Actions>
                                </Card>
                            )
                        }}
                        key={({item}) => item.id}
                        showsVerticalScrollIndicator={false}
                        />
                    </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    areaView: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : null
    },
    container: {
        flex: 1,
        padding: Theme.sizes[3]
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
     },
     priceRowText: {
        color: 'gray'
     }
})