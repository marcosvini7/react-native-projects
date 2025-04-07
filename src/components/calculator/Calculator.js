import { StyleSheet, Text, View } from "react-native"
import { Button } from "./components/Button"
import { Display } from "./components/Display"

export const Calculator = () => {

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

  const onPress = (btn) => {
    console.log(btn)
  }

  return (
    <View style={style.main}>
      <Display value={0} />

      <View style={style.buttons}>
        <Button text="AC" onPress={() => onPress('AC')}/>
        <Button text="/"/>
        <Button text="7"/>
        <Button text="8"/>
        <Button text="9"/>
        <Button text="*"/>
        <Button text="4"/>
        <Button text="5"/>
        <Button text="6"/>
        <Button text="-"/>
        <Button text="1"/>
        <Button text="2"/>
        <Button text="3"/>
        <Button text="+"/>
        <Button text="0"/>
        <Button text="."/>
        <Button text="="/>
      </View>
    </View>
  )
}