import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:"#bdbdbd",
        backgroundColor:"white",
        margin:10,
        paddingLeft:10,
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
        width:90,
        height:90,
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