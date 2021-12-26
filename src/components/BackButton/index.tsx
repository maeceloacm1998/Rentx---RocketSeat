import React from "react";
import {useTheme} from "styled-components"

import { BorderlessButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
    color?: string;
}

export function BackButton({color, ...rest }: Props) {
    const {colors} = useTheme();

  return (
    <Container {...rest}>
      <MaterialCommunityIcons name="chevron-left" size={30} color={color ? color : colors.header} />
    </Container>
  );
}
