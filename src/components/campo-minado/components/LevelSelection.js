import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
    width: 170
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bg1: {
    backgroundColor: 'green'
  },
  bg2: {
    backgroundColor: 'blue'
  },
  bg3: {
    backgroundColor: 'orange'
  },
  bg4: {
    backgroundColor: 'red'
  }
})

export const LevelSelection = ({onClose, isVisible, onLevelSelected}) => {
  return (
    <Modal
      onRequestClose={onClose}
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o nível</Text>
          <TouchableOpacity style={[styles.button, styles.bg1]} onPress={() => onLevelSelected(0.05)}>
            <Text style={styles.buttonLabel}>Muito fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.bg2]} onPress={() => onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.bg3]} onPress={() => onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.bg4]} onPress={() => onLevelSelected(0.3)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}