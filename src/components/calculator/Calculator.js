import { StyleSheet, Text, View } from "react-native"
import { Button } from "./components/Button"
import { Display } from "./components/Display"
import { useState } from "react"

const initialValues = {
  n: '',
  op: '',
  clear: false
}

export const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [calc, setCalc] = useState(initialValues)

  const style = StyleSheet.create({
    main: {
      flex: 1
    },
    buttons: {
      justifyContent: 'start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  })

  const clear = () => {
    setDisplay('0')
    setCalc(initialValues)
  }

  const addDigit = digit => {
    setDisplay(prev => {
      prev = (prev === '0' || calc.clear) ? '' : prev
      prev += digit
      return prev
    })
    if(calc.clear){
      setCalc({...calc, clear: false})
    }
  }

  const operation = op => {
    if(calc.n && calc.op && display){
      calcular(op)
    } else if (display) {
      setCalc({n: display, op, clear: false})
      setDisplay('')
    }
  }

  const calcular = (op = '') => {
    if(calc.n && calc.op && display){
      let result = null
      const n1 = parseFloat(calc.n)
      const n2 = parseFloat(display)
      if(calc.op === '/'){ result = n1 / n2 }
      if(calc.op === '*'){ result = n1 * n2 }
      if(calc.op === '+'){ result = n1 + n2 }
      if(calc.op === '-'){ result = n1 - n2 }
      setDisplay(result)
      setCalc({n: result, op, clear: Boolean(op)})
    }
  }

  return (
    <View style={style.main}>
      <Display value={display} />

      <View style={style.buttons}>
        <Button text="AC" btnTriple onPress={clear}/>
        <Button text="/" btnOrange onPress={() => operation('/')}/>
        <Button text="7" onPress={() => addDigit('7')}/>
        <Button text="8" onPress={() => addDigit('8')}/>
        <Button text="9" onPress={() => addDigit('9')}/>
        <Button text="*" btnOrange onPress={() => operation('*')}/>
        <Button text="4" onPress={() => addDigit('4')}/>
        <Button text="5" onPress={() => addDigit('5')}/>
        <Button text="6" onPress={() => addDigit('6')}/>
        <Button text="-" btnOrange onPress={() => operation('-')}/>
        <Button text="1" onPress={() => addDigit('1')}/>
        <Button text="2" onPress={() => addDigit('2')}/>
        <Button text="3" onPress={() => addDigit('3')}/>
        <Button text="+" btnOrange onPress={() => operation('+')} />
        <Button text="0" btnDouble onPress={() => addDigit('0')}/>
        <Button text="." onPress={() => addDigit('.')}/>
        <Button text="=" btnOrange onPress={calcular}/>
      </View>
    </View>
  )
}