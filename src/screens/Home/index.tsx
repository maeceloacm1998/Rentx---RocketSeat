import React from "react";
import { Text, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, Title, CarList } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <StatusBar barStyle="light-content" />
        <Logo width={RFValue(108)} height={RFValue(12)} />

        <Title>Total de 12 carros</Title>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5]}
        // keyExtractor={(item) => item}
        renderItem={({item}) => (
          <Car
            model="PORSCHE"
            type="Panamera"
            rent={{ period: "AO DIA", price: 150 }}
            picture="https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png"
          />
        )}
      />
    </Container>
  );
}
