import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from "react-native"

export const Button = ({text, onPress}) => {
  const style = StyleSheet.create(({
    btn: {    
      width: Dimensions.get('window').width / 4,
      height: Dimensions.get('window').width / 4,
      backgroundColor: 'lightgray',
      borderWidth: 1,
      borderColor: '#888',
      justifyContent: 'center',     
      justifyContent: 'center'
    },
    text: {
      fontSize: 40,
      textAlign: 'center',
    }
  }))

  return <>
    <TouchableHighlight onPress={onPress} style={style.btn}> 
      <Text style={style.text}> {text} </Text>
    </TouchableHighlight>
  </>
}