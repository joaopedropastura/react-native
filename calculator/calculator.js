import { Button, View, Text, StyleSheet } from "react-native";
import React from "react";

const calculator = () => {




    return (
        <View>
            <Text>Calculator</Text>

            <View style={styles.OperContainer}>
                <Button
                    title="x"
                    onPress={() => {}}
                />
                <Button
                    title="÷"
                    onPress={() => {}}
                />
                <Button
                    title="+"
                    onPress={() => {}}
                />
                <Button
                    title="-"
                    onPress={() => {}}
                />
            </View>
            <View>
                <Button
                    title="1"
                    onPress={() => {}}
                />
                <Button
                    title="2"
                    onPress={() => {}}
                />
                <Button
                    title="3"
                    onPress={() => {}}
                />
                <Button
                    title="4"
                    onPress={() => {}}
                />
                <Button
                    title="5"
                    onPress={() => {}}
                />
                <Button
                    title="6"
                    onPress={() => {}}
                />
                <Button
                    title="7"
                    onPress={() => {}}
                />
                <Button
                    title="8"
                    onPress={() => {}}
                />
                <Button
                    title="9"
                    onPress={() => {}}
                />
                <Button
                    title="0"
                    onPress={() => {}}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    OperContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      },
})

export default calculator;