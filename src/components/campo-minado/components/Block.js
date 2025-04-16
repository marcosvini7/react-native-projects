import { StyleSheet, View } from "react-native"
import { params } from "../params"

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333'
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export const Block = ({ opened }) => {
  let styleBlock = [styles.field]
  if(!opened) styleBlock.push(styles.regular)
  if(opened) styleBlock.push(styles.opened)
  return <View style={styleBlock} />
}
