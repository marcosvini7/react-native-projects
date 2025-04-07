import { StyleSheet, Text, View } from "react-native"

export const Numero = ({children}) => {
  const style = StyleSheet.create({
    number: {
      color: 'green',
      fontSize: 20,
      minWidth: 70,
      textAlign: 'center',
      backgroundColor: 'white',
    }
  })

  return <Text style={style.number}> {children} </Text>

}