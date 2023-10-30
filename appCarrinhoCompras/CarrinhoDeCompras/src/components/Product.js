import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default  function Product({data,handleAddCart}){

    return(
        <View style={styles.container}>

           <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.price}>{data.price}</Text>
           </View>

           
           <TouchableOpacity style={styles.plus} onPress={handleAddCart}>
            <Text style={styles.textPlus}>+</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        borderWidth:1,
        borderColor:"#DFDFDF",
        borderRadius:2,  
        marginBottom:14,
        padding:8,
        paddingBottom:14,
        paddingTop:14,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'

    },
    title:{
        fontWeight:'bold',

    },
    textPlus:{

    },
    plus:{
        paddingStart:12,
        paddingEnd:12,
        backgroundColor:"#158fff",
        paddingBottom:6,
        paddingTop:6,
        borderRadius:2,
    }
})