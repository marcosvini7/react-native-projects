import { StyleSheet, Text } from "react-native"

export const Display = ({value}) => {

  const style = StyleSheet.create({
    display: {
      backgroundColor: 'gray',
      padding: 10,
      textAlign: 'right',
      fontSize: 45,
    }
  })

  return <Text style={style.display}> {value} </Text>
}