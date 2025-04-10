import { Dimensions } from "react-native"

export const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  level: 0.1,
  getColumns() {
    const width = Dimensions.get('window').width
    return Math.floor(width / this.blockSize)
  },
  getRows() {
    const height = Dimensions.get('window').height
    const screenHeight = height * (1 - this.headerRatio)
    return Math.floor(screenHeight / this.blockSize)
  },

}