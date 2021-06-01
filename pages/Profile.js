import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../services/responsiveFunc';

const Profile = (navigation) => {
  return (
    <View style={styles.center}>
      <View style={{height:hp('9%'),width:wp('100%'),backgroundColor:'#1e90ff',flexDirection:'row'}}>
              <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('25%')}}>
        <Text style={{fontSize:moderateScale(22),fontWeight:'bold',color:'white'}}>Profile</Text>

      </View>
      
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: "center",
  },
});

export default Profile;