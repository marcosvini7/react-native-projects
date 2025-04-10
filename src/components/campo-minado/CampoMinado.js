import { StyleSheet, Text, View } from "react-native"
import { params } from "./params"
import { Field } from "./components/Field"
import { Flag } from "./components/Flag"

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const CampoMinado = () => {
  return (
    <View style={styles.main}>
      <Field />
      <Field opened /> 
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={6}/>
      <Field mined/>
      <Field mined exploded/>
      <Field flagged/>
      <Flag bigger/>
    </View>
  )
}