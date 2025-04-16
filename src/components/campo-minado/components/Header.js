import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Flag } from "./Flag"
import { Block } from "./Block"

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
})

export const Header = ({newGame, getInfo, openModal}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <TouchableOpacity onPress={openModal}>
          <View style={styles.line}>        
            <Text style={styles.text}> {getInfo('flags')} </Text>                  
            <Flag bigger />       
          </View>
        </TouchableOpacity>

        <View style={styles.line}>
          <Text style={styles.text}> {getInfo('blocks')} </Text>
          <Block/>
        </View>

        <View style={styles.line}>
          <Text style={styles.text}> {getInfo('openedBlocks')} </Text>
          <Block opened/>
        </View>

        <Button 
          title="Novo jogo"
          style={styles.btn}
          color='green'
          onPress={newGame}
        />
      </View>
    </View>
  )
}