import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { Context } from '../../context/context';
import CartItem from '../../components/CartItem';

export default function Cart(){

    const { cart, addItemCart,removeItemCart,total} = useContext(Context)
    return(
        <View style={styles.constainer}>
           <FlatList
           data = {cart}
           showsVerticalScrollIndicator={false}
           ListEmptyComponent={()=><Text>Nenhum item no Carrinho...</Text>}
           keyExtractor={(item)=> String(item.id)}
           renderItem={({item})=>(<CartItem data={item} addAmount={()=>addItemCart(item)} removeItemCart={()=>removeItemCart(item)}/>)}
           ListFooterComponent={()=><Text style={styles.total}>Total R$ {total}</Text>}
           />
        </View>
    )
}


const styles = StyleSheet.create({

    constainer:{
        flex:1,
        backgroundColor:"#fff",
        paddingStart:14,
        paddingEnd:14,
        paddingTop:14
    },
    total:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:24
    }
})