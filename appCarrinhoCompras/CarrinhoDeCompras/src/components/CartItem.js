//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
export default function CartItem({ data, addAmount, removeItemCart }) {
    const [amont, setAmount] = useState(data?.amount)

    function addValue() {
        addAmount()
        setAmount(item => item + 1)
    }
    function remove() {
        removeItemCart();
        if (amont === 0) {
            setAmount(0)
            return;
        }
        setAmount(item => item - 1)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>{data.price}</Text>
            </View>

            <View style={styles.amountComntainer} >
                <TouchableOpacity style={styles.add} onPress={remove}>
                    <Text>
                        -
                    </Text>
                </TouchableOpacity>
                <Text style={styles.amount}>
                    {amont}
                </Text>
                <TouchableOpacity style={styles.add} onPress={addValue}>
                    <Text>
                        +
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#e7e6e6",
        marginBottom: 14,
        padding: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    price: {
        fontSize: 16
    },
    amountComntainer: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center"
    },
    add: {
        backgroundColor: "#168fff",
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 2
    },
    amount: {
        marginLeft: 14,
        marginRight: 14,
    }

});

//make this component available to the app



