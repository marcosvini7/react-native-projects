import { ActivityIndicator, Alert, StyleSheet, View } from "react-native"
import { Board } from "./Board"
import { params } from "../params"
import { cloneBoard, createMinedBoard, hadExplosion, info, openField, selectField, showMines, wonGame } from "../functions"
import { useEffect, useRef, useState } from "react"
import { Header } from "./Header"
import { LevelSelection } from "./LevelSelection"
import AsyncStorage from "@react-native-async-storage/async-storage"

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const CampoMinado = () => {
  const [states, setStates] = useState({})
  const [showModal, setShowModal] = useState(false)
  const renders = useRef(0)

  const createBoard = () => {
    const rows = params.getRows()
    const columns = params.getColumns()
    const mines = Math.round(rows * columns * params.level)
    return createMinedBoard(rows, columns, mines)
  }

  const startParams = () => {
    return {    
      board: createBoard(),
      won: false,
      lose: false     
    }
  }

  useEffect(() => {
    const loadBoard = async () => {
      const savedBoard = JSON.parse(await AsyncStorage.getItem('board'))
      if(savedBoard) {
        setStates({...states, board: savedBoard})
      } else {
        setShowModal(true)
      }
    }
    loadBoard()
  }, [])

  const onOpenField = (row, column) => {
    if(states.won || states.lose) return
    const newBoard = cloneBoard(states.board)
    openField(newBoard, row, column)
    const won = wonGame(newBoard)
    const lose = hadExplosion(newBoard)
    if(lose) showMines(newBoard)
    setStates({board: newBoard, won, lose})
  }

  const onSelectField = (row, column) => {
    if(states.won || states.lose) return
    const newBoard = cloneBoard(states.board)
    selectField(newBoard, row, column)
    const won = wonGame(newBoard)
    setStates({...states, board: newBoard, won})
  }

  const onNewGame = () => setStates(startParams())

  const getInfo = type => {
    return info[type](states.board)
  }

  const onLevelSelected = level => {
    params.level = level
    setShowModal(false)
    setStates(startParams())
  }

  useEffect(() => {
    if(states.lose){
      Alert.alert('Infelizmente você perdeu!')
    } else if(states.won){
      Alert.alert('Parabéns! você Venceu!')
    }
  }, [states.lose, states.won])

  useEffect(() => {
    if(!states.won && !states.lose && renders.current > 1){
      AsyncStorage.setItem('board', JSON.stringify(states.board))
    }
    if(states.won || states.lose){
      AsyncStorage.removeItem('board')
    }
  }, [states.board])

  useEffect(() => { renders.current += 1 }, [states.board])
  
  return <>
    { states.board && <>
      <View style={styles.main}>
        <Header newGame={onNewGame} getInfo={getInfo} openModal={() => setShowModal(true)}/>
        <Board board={states.board} openField={onOpenField} selectField={onSelectField} />
      </View>
    </>
    }
    { !states.board && 
      <ActivityIndicator style={styles.loading} size={40} /> 
    }
    <LevelSelection 
      isVisible={showModal}
      onLevelSelected={onLevelSelected}
      onClose={() => {}}
    />
  </>
}