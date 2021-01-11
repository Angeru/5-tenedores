import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest(){

    const navigation = useNavigation();
    


    return(
        <ScrollView centerContent={true} sytle={styles.viewBody}>
            <Image
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
            <Text style={styles.description}>
                Busca tus mejores restaurantes de forma sencilla. Vota y da tu opinion
                Busca tus mejores restaurantes de forma sencilla. Vota y da tu opinion
                Busca tus mejores restaurantes de forma sencilla. Vota y da tu opinion
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    title="Ver tu perfil"
                    onPress={()=> navigation.navigate("login")}
                
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody:{
        marginLeft: 30,
        marginRight:30,
    },
    image:{
        height:300,
        width:"100%",
        marginBottom: 40,
    },
    title:{
        fontSize:19,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:10,
        color:"black"


    },
    description:{
        textAlign:"center",
        marginBottom:20,

    },
    viewBtn:{
        flex:1,
        alignItems:"center"
    },
    btnContainer:{
        width:"70%"
    },
    btnStyle:{
        backgroundColor: "#00a680"
    },
    
    


});