import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Dimensions } from 'react-native';

import styled from 'styled-components/native';
const height = Dimensions.get('window').height;

export default function Home() {
  return (
    <Container>
        <StatusBar style="auto" />
        <Head>
            <StyledImage source={require('../assets/img/Logo.png')}></StyledImage>
            <ImagePerfil source={require('../assets/img/Ellipse.png')}></ImagePerfil>
        </Head>    
    </Container>
  );
}
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;


const Head = styled.View`
  flex-direction:row;
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;


const StyledImage = styled.Image`
  width: 82px;
  height: 40px;
`;


const ImagePerfil = styled.Image`
  width: 40px;
  height: 40px;
`;

