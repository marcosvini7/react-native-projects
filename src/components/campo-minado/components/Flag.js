import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginTop: 2
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12
  },
  flagpoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12
  },
  base2Bigger: {
    height: 4,
    width: 20,
    marginTop: 24,
    marginLeft: 8
  }
})

export const Flag = ({bigger}) => {
  return (
    <View style={styles.container}>    
      <View style={[styles.flag, bigger ? styles.flagBigger : null]}/>
      <View style={[styles.flagpole, bigger ? styles.flagpoleBigger : null]}/>
      <View style={[styles.base1, bigger ? styles.base1Bigger : null]}/>
      <View style={[styles.base2, bigger ? styles.base2Bigger : null]}/>
    </View>
  )
}