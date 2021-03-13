import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const frasesAPI = [
  'O único lugar onde sucesso vem antes do trabalho é no dicionário.',
  'Sucesso é encontrar aquilo que se tenciona ser e depois fazer o que é necessário para isso.',
  'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.',
  'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.',
  'Ter uma melhora constante é melhor do que a perfeição adiada.',
  'O sucesso é atingido duas vezes: a primeira na mente e a segunda no mundo real.'
]

export default function App() {

  let livroFechado = "https://image.flaticon.com/icons/png/512/85/85528.png";
  let livroAberto = "https://i.pinimg.com/originals/2a/74/94/2a7494e0f5522c30601d930e4596c62e.png";
  const [imagem, setImagem] = useState(livroFechado)
  const [frase, setFrase] = useState()

  function mostrarFrase() {
    const tamanho = frasesAPI.length
    setImagem(livroAberto)
    setFrase(frasesAPI[Math.floor(Math.random()*tamanho)])
  }

  function fecharFrase() {
    setImagem(livroFechado)
    setFrase()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imagem }} 
      style= {{width: 250, height: 250 }}
      />
      <View>
        <Text style={styles.frases}>{frase}</Text>
        <TouchableOpacity style={styles.botao} onPress={() => mostrarFrase()}> <Text style={styles.textoBotao}>Mostrar frase do dia</Text> </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => fecharFrase()}>  <Text style={styles.textoBotao}> Fechar frase do dia</Text> </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFF',
    width: '100%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  botao: {
    backgroundColor: '#836FFF',
    borderRadius: 4,
    padding: 6
  },
  frases: {
    fontSize: 20,
    fontWeight: 400,
    backgroundColor: '#ADD8E6'
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 400,
  }
});
