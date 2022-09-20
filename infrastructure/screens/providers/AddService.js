import { Platform, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, View, FlatList } from "react-native";
import { Theme } from "../../components/Theme";

export function AddService({navigation}){
    return(
        <></>
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