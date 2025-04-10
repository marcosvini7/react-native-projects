import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from "react-native"

export const Button = ({text, onPress, btnDouble, btnTriple, btnOrange}) => {
  const style = StyleSheet.create(({
    btn: {    
      width: '25%',
      height: Dimensions.get('window').width / 4,
      backgroundColor: 'lightgray',
      borderWidth: 1,
      borderColor: '#888',
      justifyContent: 'center',     
      justifyContent: 'center'
    },
    btnDouble: {
      width: '50%',
    },
    btnTriple: {
      width: '75%'
    },
    btnOrange: {
      backgroundColor: 'lightyellow'
    },
    text: {
      fontSize: 40,
      textAlign: 'center',
    }
  }))

  const styleBtn = {
    ...style.btn, 
    ...btnDouble ? style.btnDouble : {}, 
    ...btnTriple ? style.btnTriple : {},
    ...btnOrange ? style.btnOrange : {}
  }

  return <>
    <TouchableHighlight onPress={onPress} style={styleBtn}> 
      <Text style={style.text}> {text} </Text>
    </TouchableHighlight>
  </>
}