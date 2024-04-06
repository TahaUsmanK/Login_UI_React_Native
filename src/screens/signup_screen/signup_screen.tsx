import { Button, Pressable, Text, TextInput, View } from "react-native";
import TextStyle from "../../styles/text_style/text_style";
import ButtonStyle from "../../styles/button_style/button_style";
import LoginStyle from "../../styles/login_style/login_style";
import TextInputStyle from "../../styles/textinput_style/textinput_style";
import { useState } from "react";

const SignUpScreen = (props : any) => {

    const NavigateToHome = () => props.navigation.replace('Home');
    const NavigateToLogin = () => props.navigation.push('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    function alert(arg0: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <View style={LoginStyle.main}>
           
            {/* Heading 1 */}
            <Text style={TextStyle.heading}>Create Account !</Text>
            
            {/* Heading 2 */}
            <Text style={TextStyle.heading1}>Let's create an account for you</Text>
           
            {/* TextInput 1 */}
            <TextInput 
            style={TextInputStyle.textField} 
            placeholder="Email" 
            placeholderTextColor={'black'} 
            value={email}
            onChangeText={setEmail}
            />

            {/* TextInput 2 */}
            <TextInput 
            style={TextInputStyle.textField} 
            placeholder="Password" 
            placeholderTextColor={'black'} 
            secureTextEntry={true} 
            maxLength={12} 
            passwordRules={"required:upper alphabetic"} 
            value={password}
            onChangeText={setPassword}
            />
           
           {/* TextInput 3 */}
           <TextInput 
           style={TextInputStyle.textField} 
           placeholder="Confirm Password" 
           placeholderTextColor={'black'} 
           secureTextEntry={true} 
           maxLength={12} 
           passwordRules={"required:upper alphabetic"} 
           value={confirmPassword}
           onChangeText={setConfirmPassword}
           />
            
            {/* SignIn Button */}
            <Pressable
                style={ButtonStyle.buttonStyle}
                onPress={password === confirmPassword ? NavigateToHome : () => alert('Passwords do not match')}>
                <Text style={TextStyle.buttonText}>Sign Up</Text>
            </Pressable>

            {/* already a member? Login now */}
            <View style={LoginStyle.registerNow}>
                <Text style={TextStyle.registerNow1}>Already a member ? </Text>
                <Pressable onPress={NavigateToLogin}><Text style={TextStyle.registerNow2}>Login now</Text></Pressable>
            </View>
        </View>
    )
}


export default SignUpScreen;