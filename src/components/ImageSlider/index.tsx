import React from "react";
import { View } from "react-native";

import { Container,IndexContainer, ImageIndex, ImageContainer, Image } from "./styles";

interface ImageSliderProps{
    
}

export function ImageSlider() {
  return (
    <Container>
      <IndexContainer>
        <ImageIndex isActive={true} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
      </IndexContainer>

      <ImageContainer>
        <Image source={{uri: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png" }} resizeMode="contain" />
      </ImageContainer>
    </Container>
  );
}
