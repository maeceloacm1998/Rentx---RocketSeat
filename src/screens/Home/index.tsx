import React from "react";
import { Text, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <StatusBar barStyle="light-content" />
        <Logo width={RFValue(108)} height={RFValue(12)} />

        <Title>Total de 12 carros</Title>
      </Header>
      <Car
        model="AUDI"
        type="RS 5 Coupe"
        rent={{ period: "AO DIA", price: 128 }}
        picture="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/4f5bf206d20f5bd4baaa420afb930242.png"
      />
      <Car
        model="PORSCHE"
        type="Panamera"
        rent={{ period: "AO DIA", price: 150 }}
        picture="https://freebiescloud.com/wp-content/uploads/2021/02/PORSCHE-PANAMERA-2021-1.png"
      />
    </Container>
  );
}
