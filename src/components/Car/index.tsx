import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import Gasoline from "../../assets/gasoline.svg";

import {
  Information,
  Container,
  Image,
  ModelCar,
  TypeCar,
  About,
  Period,
  PriceCar,
  Align,
} from "./styles";

interface CarProps {
  model: string;
  type: string;
  rent: {
    period: string;
    price: number;
  };
  picture: string;
}

export function Car({model,rent,type,picture}: CarProps) {
  return (
    <Container>
      <Information>
        <ModelCar>{model}</ModelCar>
        <TypeCar>{type}</TypeCar>

        <About>
          <Period>{rent.period}</Period>

          <Align>
            <PriceCar>R$ {rent.price}</PriceCar>
            <Gasoline width={RFValue(20)} height={RFValue(20)} />
          </Align>
        </About>
      </Information>

      <Image resizeMode="contain"  source={{uri: picture}}/>
    </Container>
  );
}
