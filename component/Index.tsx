import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Sis from '../component/Sis';
import Cons from '../component/Cons'

function Index() {
    return (
        <ScrollView>
            <Sis/>
            <Cons/>
        </ScrollView>
    )
}

export default Index