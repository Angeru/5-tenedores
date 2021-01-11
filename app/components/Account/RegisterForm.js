import React,{useState} from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import {Input, Icon, Button } from "react-native-elements"
import Loading from "../Loading"
import {validateEmail} from "../../utils/validations"
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import {useNavigation} from "@react-navigation/native"


export default function RegisterForm(props){
    const {toastRef} = props
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue())
    const navigation=useNavigation();
    const [loading, setLoading] = useState(false);

    
    const onSubmit = () => {
        if(isEmpty(formData.email)||isEmpty(formData.password)||isEmpty(formData.repeatPassword))
        {         
            toastRef.current.show("Todos los campos son obligatorios")
        }else if(!validateEmail(formData.email))
        {       
            toastRef.current.show("Email incorrecto")
        }else if(formData.password!=formData.repeatPassword)
        {         
            toastRef.current.show("Las contraseñas han de ser iguales")
        }else if(size(formData.password)<6)
        {    
            toastRef.current.show("La contraseña ha de tener 6 caracteres minimos")
        }else{
            setLoading(true);
            firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password)
            .then(() => {
                setLoading(false);
                navigation.navigate("account")
            })
            .catch((err) => {console.log(err)})
        }
    }

    const onChange = (e, type) => {
        setFormData({...formData,[type]: e.nativeEvent.text})
    }

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle ={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at" 
                        iconStyle={styles.iconRight}
                        />

                }
                onChange= {(e)=>onChange(e,"email")}
            />
            <Input
                placeholder="Contraseña"
                containerStyle ={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange= {(e)=>onChange(e,"password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"} 
                        iconStyle={styles.iconRight}
                        onPress={()=> setShowPassword(!showPassword)}
                        />

                }
            />
            <Input
                placeholder="Repetir contraseña"
                containerStyle ={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange= {(e)=>onChange(e,"repeatPassword")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showRepeatPassword ? "eye-off-outline" : "eye-outline"} 
                        iconStyle={styles.iconRight}
                        onPress={()=> setShowRepeatPassword(!showRepeatPassword)}
                        />

                }
            />
            <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Creando Cuenta"/>
            
        </View>
    )
}

function defaultFormValue(){
    return {
        email: "",
        password: "",
        repeatPassword: ""
    }
}

const styles= StyleSheet.create({
    formContainer: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       marginTop: 30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
    },
    btnContainerRegister:{
        marginTop: 20,
        width:"95%"
    },
    btnRegister:{
        backgroundColor: "#00a680"

    },
    iconRight:{
        color:"#c1c1c1"
    }

});