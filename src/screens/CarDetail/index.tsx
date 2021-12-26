import React from "react";
import { ScrollView } from "react-native";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import Speed from "../../assets/speed.svg";
import Acceleration from "../../assets/acceleration.svg";
import Force from "../../assets/force.svg";
import Gasoline from "../../assets/gasoline.svg";
import Exchange from "../../assets/exchange.svg";
import People from "../../assets/people.svg";

import {
  Container,
  Header,
  Information,
  CarInformation,
  ModelCar,
  TypeCar,
  About,
  Period,
  PriceCar,
  AccessoryContainer,
  Description,
  SubmitContainer,
} from "./styles";

export function CarDetail() {
  return (
    <Container>
      <Header>
        <BackButton style={{ position: "absolute", left: 20, zIndex: 2 }} />
        <ImageSlider />
      </Header>
      <ScrollView>
        <Information>
          <CarInformation>
            <ModelCar>AUDI</ModelCar>
            <TypeCar>RS 5 COUPE</TypeCar>
          </CarInformation>

          <About>
            <Period>AO DIA</Period>
            <PriceCar>R$ 280</PriceCar>
          </About>
        </Information>

        <AccessoryContainer>
          <Accessory icon={Speed} title="380Km/h" />
          <Accessory icon={Acceleration} title="3.2s" />
          <Accessory icon={Force} title="800 HP" />
          <Accessory icon={Gasoline} title="Gasoline" />
          <Accessory icon={Exchange} title="Auto" />
          <Accessory icon={People} title="2 pessoas" />
        </AccessoryContainer>

        <Description>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </Description>
      </ScrollView>

      <SubmitContainer>
        <Button title="Escolher período do aluguel" />
      </SubmitContainer>
    </Container>
  );
}
