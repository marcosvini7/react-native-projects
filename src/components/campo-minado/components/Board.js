import { StyleSheet, View } from "react-native"
import { Field } from "./Field"

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
  },
  background: {
    backgroundColor: '#EEF',
    width: '100%',
    alignItems: 'center',
    marginBottom: 5
  }
})

export const Board = ({board, openField, selectField}) => {
  const boardView = board.map((row, r) => {
    const fieldsRow = row.map((column, c) => {
      return <Field 
        {...column} 
        openField={() => openField(r, c)} 
        selectField={() => selectField(r, c)} 
        key={c}
      />
    })
    return <View style={styles.line} key={r}>{fieldsRow}</View>
  })

  return <View style={styles.background}>{boardView}</View>
}