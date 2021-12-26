import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Container, Title } from './styles';

interface AcessoryProps{
    icon: React.FC<SvgProps>;
    title: string;
}

export function Accessory({icon: Icon,title}:AcessoryProps) {
  return (
      <Container>
          <Icon />
          <Title>{title}</Title>
      </Container>
  )
}