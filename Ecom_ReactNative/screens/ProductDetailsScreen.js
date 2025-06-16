import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View,Image, Dimensions, Button } from "react-native";

const {width,height} = Dimensions.get('window')

const ProductDetailsScreen=({route,navigation})=>{
    const {product} = route.params;
    return(
        <View style={styles.container}>
            <Image source={{uri:product.image}} style={styles.image}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>$ {product.price}</Text>
            <Button 
            title="Add To cart"
            onPress={()=>navigation.navigate('Cart',{product})}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    image:{
        width:width*0.9,
        height:width*0.5,
        // borderRadius:50,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        backgroundColor:"#fff",
        shadowColor:'#000',
        shadowOffset:{width:10,height:2},
        shadowOpacity:0.2,
        borderRadius:20
      },
      text:{
        fontSize:18,
        color:"#000",
        marginBottom:10,
        textAlign:"center"
      },
      name:{
        fontSize:20,
        color:"#000",
        marginBottom:10,
        textAlign:"center"
      },
      price:{
        fontSize:20,
        color:"#000",
        marginBottom:10,
        textAlign:"center"
      }
})


export default ProductDetailsScreen;