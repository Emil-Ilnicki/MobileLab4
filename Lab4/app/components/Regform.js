import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Regform extends React.Component{

    constructor(props){
        super(props)
        var state = {
            username: '',
            email:'',
            password:'',
            phoneNumber:''
        }
        var regUsername = ''
        var regEmail = ''
        var regPassword = ''
        var regPhoneNumber = ''
    }

    handleView(){
        if (this.regUsername === '' || this.regEmail === '' || this.regPassword === '' || this.regPhoneNumber === ''){
            alert("You have not registered a user")
        } else {
            alert ("Registered Username: " + this.regUsername  + "\n" 
            + "Registered Email: " + this.regEmail + "\n" 
            + "Registered Password: " + this.regPassword + "\n" 
            + "Registered Phone Number: " + this.regPhoneNumber);
        }
    }

    handleRegister(){
        var emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,6}$");
        var passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])[^!@#$%^&*?]*$");

        console.log(this.state.username)
        console.log(this.state.email)

        if (!emailRegex.test(this.state.email)){
            alert("Email is invalid")
        }
        if (!passwordRegex.test(this.state.password)){
            alert("Password is invalid")
        }
        if (passwordRegex.test(this.state.password) && emailRegex.test(this.state.email) && this.state.username){
            alert("User registered")
            this.regUsername = this.state.username;
            this.regPassword = this.state.password;
            this.regEmail = this.state.email;
            this.regPhoneNumber = this.state.phoneNumber;
        }
    }

    handleClear(){
        this.usernameInput.clear();
        this.emailInput.clear();
        this.passwordInput.clear();
        this.phoneNumberInput.clear();
    }

    render() {
        return(
            <View style={styles.regform}>
                <Text style={styles.header}>Registration </Text>

                <TextInput 
                    placeholder="Username" 
                    placeholderTextColor="gray"
                    onChangeText={text => this.setState({username: text})}
                    ref={input => {this.usernameInput = input}}/>

                <TextInput  
                    placeholder="Email" 
                    placeholderTextColor="gray" 
                    onChangeText={text => this.setState({email: text})}
                    ref={input => {this.emailInput = input}}/>

                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="gray"
                    onChangeText={text => this.setState({password: text})}
                    ref={input => {this.passwordInput = input}}/>

                <TextInput 
                    placeholder="Phone number" 
                    placeholderTextColor="gray"
                    onChangeText={text => this.setState({phoneNumber: text})}
                    ref={input => {this.phoneNumberInput = input}}/>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>this.handleRegister()}> Register </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>this.handleClear()}> Clear </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>this.handleView()}> View </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    regform: {
        flex: 1,
        marginTop:30,
        marginBottom:30,
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "#000",
        borderWidth: 1,
        marginTop: 10,
        padding: 10
    }
  });
  