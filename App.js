import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'


export default class extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      contador: 0
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button 
          title="OK"
          onPress={() => this.setState({
            contador: this.state.contador + 1
          })}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default function App() {
  
//   const [texto, setTexto] = useState('Texto inicial')
//   //v[0]: variável
//   //v[1]: funcao que atualiza a variáve

//   return (
//     <View style={styles.container}>
//       <Text>{texto}</Text>
//       <Button 
//         title="OK"
//         onPress={() => setTexto("Outro texto")}
//       />

//     </View>
//   );
// }

