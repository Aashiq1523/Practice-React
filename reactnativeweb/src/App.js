import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import LeftSidePanel from './Components/LeftSidePanel/LeftSidePanel';
import RightSidePanel from './Components/RightSidePanel/RightSidePanel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App: React.Fc = () => {
    
    const [isClicked, setIsClicked] = useState(true);
    
    const handleClick = () => {
        setIsClicked(!isClicked);        
    }

    return (
      <View style = {style.box}>
          <LeftSidePanel isButtonClicked = {isClicked} onButtonClick = {handleClick}/>
          <RightSidePanel isBoolean = {isClicked}/>          
      </View>
    );
}

const style = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row', 
        height: hp('100%'),
        width: wp('100%'),
    }
}); 

export default App;