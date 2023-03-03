import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get("window"); 
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingTop:20,
        borderTopColor:"silver",
        borderTopWidth:5,
    },
    body_container:{
       flex:1, 
    },
    image:{
        width:deviceSize.width,
        minHeight:100,
        resizeMode:"contain",
        backgroundColor:"white",
        overflow:"hidden",
    },
    title:{
        fontWeight:"bold",
        fontSize:30,
        paddingLeft:20,
        color:"orange",
        textAlign:"center",
        marginTop:30,
    },
    prepareRecipe:{
        fontSize:20,
        color:"black",
        padding:20,
        marginTop:30,
    }
})