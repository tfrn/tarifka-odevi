import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:"#bdbdbd",
        backgroundColor:"white",
        margin:10,
        padding:10,
        flexDirection:"row",
    },
    body_container:{
       flex:1, 
       justifyContent:"center",
    },
    image:{
        resizeMode:"contain",
        backgroundColor:"white",
        overflow:"hidden",
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        paddingLeft:20,
        color:"orange",
    },
})