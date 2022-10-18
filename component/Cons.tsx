import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function Cons() {
    return(
        <ScrollView>
            <View style={style.principal1}>
            <View style={style.name_container}>
                <View style={style.photoName}>
                    <Image
                        style={style.img}
                        source={{
                            uri: "data:image/png;base64,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"
                        }}
                    />
                    <View>
                        <Text style={style.title}> 
                        Andrew Ainsley
                        
                        </Text>
                        <Text >
                            UI/UX Designer at Paypal Inc.
                        </Text>
                        
                    </View>
                </View>
                <FontAwesome5 style={style.icon1} name="pencil-alt" size={20} color="blue" />
                </View>
            </View>
            <View style={style.principal}>
                <View style={style.container}>
                    <View style={style.contact_information}>
                        
                        <Ionicons name="person-circle-sharp" size={24} color="blue" />
                        <Text style={style.title}> 
                            Contact Information
                        </Text> 
                    </View>
                    <FontAwesome5 style={style.icon1} name="pencil-alt" size={24} color="blue" />
                </View>
                
                
                
                <View style={style.Container2}>
                    <View style={style.locate}>
                        <EvilIcons name="location" size={24} color="gray" />
                        <Text style={style.secondTitle}>Nueva York, United States</Text>
                    </View>
                    <View style={style.locate}>
                        <Ionicons name="call-outline" size={20} color="gray" />
                        <Text style={style.secondTitle}>+1 111 467 378 399 </Text>

                    </View>
                    <View style={style.locate}>
                        <Ionicons name="mail-outline" size={20} color="gray" />
                        <Text style={style.secondTitle}>andrew_ainley@ypurdomain.com</Text>
                    </View>

            </View>
            </View>
            {/*Otroo*/}

            <View style={style.principal}>
                <View style={style.container}>
                    <View style={style.contact_information}>
                        
                        <Ionicons name="md-list-circle" size={24} color="blue" />
                        <Text style={style.title}> 
                            Summary
                        </Text> 
                    </View>
                    <FontAwesome5 style={style.icon1} name="pencil-alt" size={24} color="blue" />
                </View>
                
                
                
                <View style={style.Container2}>
                    <Text style={style.text_summary}>
                        Hello, I'm Andrew. I am a designer with more than 5 years experience.
                        My main fields are UI/UX Design, illustration and Graphic Design.
                        You can check the portfolio on my profile.
                    </Text>

            </View>
            </View>

            {/* otrooo*/}
            
            <View style={style.principal}>
                <View style={style.container}>
                    <View style={style.contact_information}>
                        
                    <Fontisto name="pie-chart-1" size={20} color="blue" />
                        <Text style={style.title}> 
                            Expected Salary
                        </Text> 
                    </View>
                    <FontAwesome5 style={style.icon1} name="pencil-alt" size={24} color="blue" />
                </View>
                
                
                
                <View style={style.Container5}>
                    <Text style={style.text_money}>
                        $10.000 - $25.000 /month
                        <Text style={style.text_money1}>
                            (only you can see this)
                        </Text>
                    </Text>

            </View>
            </View>

            {/**otrooo */}

            <View style={style.btn}>
                <Text style={style.button}>
                    Submit
                </Text>
            </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
principal: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#EEEEEE",
},

container: {
    margin: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
},

name_container: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},

photoName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
},

subcontainer: {
    margin: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
},

subcontainer1:{
    margin: 30,
    flexDirection: 'row',
    alignItems: 'center',
},
    
contenedorImg:{
    margin:30,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#EEEEEE',
},
    
img: {
    margin: 10,
    width: 80,
    height: 80,

},
    
title: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
},
    
subTitle: {
    color: "#616161",
    fontSize: 15,
},
    
options: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
},
    
icon1: {
    marginRight: 20,

},
    
Container2: {
    marginLeft: 60,
    justifyContent: 'flex-start'
},

secondTitle: {
    color: "#616161",
    fontSize: 16,
    marginBottom: 8,
    },

principal1:{
    margin:20
},

locate:{
    flexDirection:'row',
    right:20,
    
},
contact_information:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left:25,
    margin:10
    
},

text_summary:{
    color:'gray',
    fontSize:18,
    right:20,
    marginHorizontal:10,

},

text_money:{
    right:20,
    fontSize:18,
},

text_money1:{
    fontSize:10,
    color:'gray',
},
Container5:{
    left:60,
},

btn:{
    flexDirection: 'row',
    justifyContent:'center',
},

button:{
    fontSize:20,
    color: "white",
    margin: 30,
    padding: 5,
    paddingHorizontal: 120,
    paddingVertical:16,
    borderWidth: 2,
    borderRadius: 80,
    borderColor: "light blue",
    backgroundColor:'light blue'
}
});
export default Cons