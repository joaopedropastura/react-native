import { Button, Text, TextInput, View, StyleSheet, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { UtilsContext } from './context'

const VerifyPassword = (password, password2) => {   
    if (password === password2) 
        return true

    return false
}



const Register = ({addUser, navigation }) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState('')

    const {data, setData} = useContext(UtilsContext)

    const verifyLogin = () => {
        if (!VerifyPassword(password, password2)) 
        {
            alert('Passwords do not match')
            return
        }
        console.log("data: ", data)
        const json = {
            name,
            password,
            age,
            email,
            sex
        }

        setData({...data, newUser: [...data.newUser,json]} )
        
        console.log(json)

        navigation.navigate("Login")
    }
    return (
        <View style={styles.main}>
            <Text>Register</Text>
            <View style={styles.textComponent}>
                <Text>Enter your name</Text>
                <TextInput
                    onChangeText={(name) => setName(name)}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.flexInput}>
                <View style={{height: 100, width: '48%', justifyContent: 'center',}}>
                    <Text>Enter your age</Text>
                    <TextInput
                        onChangeText={(age) => setAge(age)}
                        style={styles.textInput}
                    />
                </View>
                <View style={{height: 100, width: '48%', justifyContent: 'center',}}>
                    <Text>Enter your sex</Text>
                    <TextInput
                        onChangeText={(sex) => setSex(sex)}
                        style={styles.textInput} 
                    />
                </View>
            </View>

            <View style={styles.textComponent}>
                <Text>Enter your email</Text>
                <TextInput
                    onChangeText={(email) => setEmail(email)}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.textComponent}>
                <Text>Enter your password</Text>
                <TextInput
                    onChangeText={(password) => setPassword(password)}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.textComponent}>
                <Text>Confirm your password</Text>
                <TextInput
                    onChangeText={(password) => setPassword2(password)}
                    style={styles.textInput}
                />
            </View>

            {/* <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                value={color}
                onValueChange={(value) => setColor(!value)}
            /> */}

            <Button onPress={() => verifyLogin()}
            title='Login'
            ></Button>
        </View>
    )
}
  

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
    },


    flexInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        maxHeight: 80,
        gap: 10,        
    },

    textComponent: {
        width: '100%',
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 10,
    },
})
export default Register;