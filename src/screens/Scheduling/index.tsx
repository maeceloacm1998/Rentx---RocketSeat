import React from "react";
import { View } from "react-native";

import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";

import Arrow from "../../assets/arrow.svg"
import { Container, Header, Title, PeriodContainer, PeriodTitle, Period, BorderContainer } from "./styles";

export function Scheduling() {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <BackButton color={colors.shape} />
        <Title>Escolha uma data de início e fim do aluguel</Title>

        <PeriodContainer>
          <BorderContainer>
            <PeriodTitle>DE</PeriodTitle>
            <Period>18/01/2021</Period>
          </BorderContainer>

          <Arrow  width={48} height={10}/>

          <BorderContainer>
            <PeriodTitle>ATE</PeriodTitle>
            <Period>19/01/2021</Period>
          </BorderContainer>
        </PeriodContainer>
      </Header>
    </Container>
  );
}
