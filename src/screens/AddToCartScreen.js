import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default function AddToCartScreen({navigation}){
  return(
      <View style={styles.container}>
           <Text style={styles.heading}>
             ADD TO CART
         </Text>

         <Text style={styles.paragraph}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Assumenda, quaerat earum aliquam provident, est commodi voluptatum
          quia non quis tenetur iusto ipsum reiciendis 
        saepe distinctio? Ipsa, excepturi perspiciatis. Veniam, quos!
         </Text>

         <Image source={require('../../assets/add.png')} style={styles.image}/>
        
         <View>
                      <TouchableOpacity onPress={()=>{
                          navigation.navigate("PaymentSuccessful")
                      }} style={styles.buttonContainer}>
                          <Text style={styles.buttonText}>Next</Text>
                      </TouchableOpacity>

                  </View>
                <View style={styles.options}> 
                <Text style={styles.previous}>Previous</Text>
                {/* <View style={styles.swiperContainer}>
                    <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                    <TouchableOpacity style={[style.swiper, style]}></TouchableOpacity>
                    <TouchableOpacity style={styles.swiper}></TouchableOpacity>

                </View> */}
                <Text style={styles.skipText}>Skip</Text>

                </View>
      </View>

    
  )
  
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        marginHorizontal:20,
        alignItems:"center",
        marginVertical:10
    },
    image:{
        width:220, 
        height:250,
        marginVertical:15,
        alignSelf:'center',
    },
    paragraph:{
        marginTop:30,
        alignItems:"center"
    },
    heading:{
        fontSize:20,
        marginBottom:30,
        alignItems:"center"
    }, 
    buttonContainer:{
        height:50,
        backgroundColor:"#8a55ed",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:50
    },
    buttonText:{
        fontWeight:'bold',
        fontSize: 20,
        color: '#fff'
    }
})