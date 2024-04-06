import { Button, Pressable, Text, TextInput, View } from "react-native";
import ButtonStyle from "../../styles/button_style/button_style";
import TextStyle from "../../styles/text_style/text_style";
import TextInputStyle from "../../styles/textinput_style/textinput_style";
import LoginStyle from "../../styles/login_style/login_style";

const LoginScreen = (props: any) => {
    const NavigateToHome = () => props.navigation.replace('Home');
    const NavigateToSignUp = () => props.navigation.push('SignUp');
    return (
        <View style={LoginStyle.main}>
           
            {/* Heading 1 */}
            <Text style={TextStyle.heading}>Welcome Back!</Text>
            
            {/* Heading 2 */}
            <Text style={TextStyle.heading1}>Sign in to your account to continue</Text>
           
            {/* TextInput 1 */}
            <TextInput style={TextInputStyle.textField} placeholder="Email" placeholderTextColor={'black'} />
           
            {/* TextInput 2 */}
            <TextInput style={TextInputStyle.textField} placeholder="Password" placeholderTextColor={'black'} secureTextEntry={true} maxLength={12} passwordRules={"required:upper alphabetic"} />
           
            {/* Forgot Password? Reset now */}
            <View style={LoginStyle.forgotPassword}>
                <Text style={TextStyle.forgotPassword1}>Forgot Password? </Text>
                <Pressable ><Text style={TextStyle.forgotPassword2}>Reset now</Text></Pressable>
            </View>

            {/* SignIn Button */}
            <Pressable
                style={ButtonStyle.buttonStyle}
                onPress={NavigateToHome}>
                <Text style={TextStyle.buttonText}>Sign In</Text>
            </Pressable>

            {/* Not a Member? Register now */}
            <View style={LoginStyle.registerNow}>
                <Text style={TextStyle.registerNow1}>not a member? </Text>
                <Pressable onPress={NavigateToSignUp}><Text style={TextStyle.registerNow2}>Register now</Text></Pressable>
            </View>
        </View>
    )
}

export default LoginScreen;