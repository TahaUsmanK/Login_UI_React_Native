import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',

    },
    forgotPassword: {
      flexDirection: 'row',
      flexWrap: 'wrap',  
      alignSelf: 'flex-end',
      paddingRight: 35
    },
    registerNow: {
        flexDirection: 'row',
        flexWrap: 'wrap',  
        alignSelf: 'center',
      },

})

export default LoginStyle;