import { useState } from "react"
import { ActivityIndicator, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Numero } from "./Numero"

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    gap: 10,
    padding: 5
  },

  text: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 20,
    fontWeight: 'ultralight'
  },

  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 5
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    flexGrow: 1,
    backgroundColor: 'white'
  },

  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center'
  }

})

export const Mega = () => {
  const [inputs, setInputs] = useState({
    n1: '',
    n2: '',
    qtd: ''
  })

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  const handlePressButton = () => {
    if(inputs.n1 && inputs.n2 && inputs.qtd){
      setLoading(true)
      setTimeout(() => {
        let list = []
        for(let i = 0; i < inputs.qtd; i++){
          list.push(getRandomInt(parseInt(inputs.n1), parseInt(inputs.n2)))
        }
        setResults(list)
        setLoading(false)
      }, 500)
    }
  }

  return (
    <View style={style.main}>
      <Text style={style.text}>
        Gerador de números aleatórios
      </Text>
      <View style={style.inputsContainer}>
        <TextInput          
          inputMode="numeric"
          style={style.input}
          value={inputs.n1}
          onChangeText={value => setInputs({...inputs, n1: value})}
          placeholder="Mínimo"
        />
        <TextInput 
          inputMode="numeric"
          style={style.input}
          value={inputs.n2}
          onChangeText={value => setInputs({...inputs, n2: value})}
          placeholder="Máximo"
        />
        <TextInput 
          inputMode="numeric"
          style={style.input}
          value={inputs.qtd}
          onChangeText={value => setInputs({...inputs, qtd: value})}
          placeholder="Quantidade de números"
        />
      </View>
      <Button title="Gerar" onPress={handlePressButton} />

      { results.length > 0 && !loading &&
        <View>
          <ScrollView contentContainerStyle={style.numberContainer} maxHeight={200}>
            { results.map((result, i) => {
              return  <Numero key={i}> {result} </Numero>
            })}
          </ScrollView>
        </View>
      }
      { loading && <ActivityIndicator /> }
    </View>
  )
}