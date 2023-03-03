import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:"#bdbdbd",
        backgroundColor:"white",
        margin:10,
        padding:10,
        flexDirection:"row",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    body_container:{
       flex:1, 
       justifyContent:"center",
    },
    image:{
        width:80,
        height:80,
        resizeMode:"contain",
        backgroundColor:"white",
        borderRadius: 50,
        overflow:"hidden",
    },
    title:{
        fontWeight:"bold",
        fontSize:30,
        paddingLeft:20,
        color:"orange",
    },
})