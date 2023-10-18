import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import { UtilsContext } from './context'

const Home = () => {

    const { data, setData } = useContext(UtilsContext)
    console.log(data)
    console.log(data.newUser)
    const renderUsers = () => {
        return data.newUser.map((u, index) => {
            return (
                <View key={index} style={styles.container}>
                    <Text>{u.name}</Text>
                    <Text>{u.age}</Text>
                    <Text>{u.email}</Text>

                </View>
            )
        })
    }

    return (
        <View style={styles.main}>
            {renderUsers()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    main: {
        height: '100%',
        padding: 20,
        gap: 10,
    }
});

export default Home;