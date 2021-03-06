import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import Lista from './src/lista';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {
          id:'1',
          nome: 'Julio Fonseca',
          descricao: 'Bora trabalhar =)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false, 
          likers: 34
        },
        {
          id:'2',
          nome: 'Roberto Dutra',
          descricao: 'hi',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false, 
          likers: 4
        },
        {
          id:'3',
          nome: 'Fulano de botas',
          descricao: 'botas',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false, 
          likers: 1
        },
        {
          id:'4',
          nome: 'valter botas',
          descricao: 'nova etapa',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 12
        },
        {
          id:'5',
          nome: 'Fulano de botas',
          descricao: 'botas',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false, 
          likers: 1
        },
        {
          id:'6',
          nome: 'cu de preto',
          descricao: 'te',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false, 
          likers: 34
        },

        
      ]
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList 
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista  data={item}/> }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,
  },
});
