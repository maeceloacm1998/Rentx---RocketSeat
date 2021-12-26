import React from 'react';
import { View } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container,Title } from './styles';

interface ButtonProps extends RectButtonProps{
    title: string;
}

export function Button({title,...rest}:ButtonProps) {
  return (
      <Container {...rest}>
          <Title>{title}</Title>
      </Container>
  )
}