import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



function Sis () {
    return (
        <View>
            <View style={styles.inicio}>
                <AntDesign name="arrowleft" style={styles.icon}/>
                    <Text style={styles.text}>Apply Job</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

inicio:{
    marginTop:60,
    flexDirection:'row',
},

icon:{
    margin:10,
    marginLeft:12,
    fontSize:25,
    padding:4,
    flexDirection: 'row'
},


text:{
    fontWeight:'bold',
    marginLeft:20,
    fontSize:30,
    padding:0,
},
});





export default Sis
