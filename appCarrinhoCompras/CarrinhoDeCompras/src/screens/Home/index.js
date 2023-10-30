
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/context'

export default function Home() {
    const [products, setProducts] = useState([
        {
            id: '1',
            name: "Coca cola",
            price: 19.90
        },
        {
            id: '2',
            name: "Chocolate",
            price: 6.50
        },
        {
            id: '4',
            name: "Queijo 500g",
            price: 15
        },
        {
            id: '5',
            name: "Batata frita",
            price: 23.90
        },
        {
            id: '6',
            name: "Guarana lata",
            price: 6.00
        },
    ])

    const navigation = useNavigation()

    const { cart, addItemCart } = useContext(Context);

    function handleAddCart(item) {
        addItemCart(item)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de Produtos</Text>
                <TouchableOpacity styles={styles.cartButton} onPress={() => navigation.navigate('Cart')}>

                    {
                        cart.length >= 1 && (
                            <View style={styles.dot}>
                                <Text style={styles.dotText}>{cart?.length}</Text>
                            </View>
                        )
                    }
                    <Feather name='shopping-cart' size={30} color='#000' />
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Product data={item} handleAddCart={() => handleAddCart(item)} />
                }
            />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        paddingEnd: 14,
        paddingStart: 14,
    },
    cartContent: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText: {
        fontSize: 12,
        color: "#fff"
    },
    cartButton: {

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }

})