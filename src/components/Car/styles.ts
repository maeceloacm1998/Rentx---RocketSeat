import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(126)}px;
  width: ${RFValue(343)}px;

  padding: 40px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Information = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(92)}px;
`;

export const ModelCar = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const TypeCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
  margin-top: 16px;
`;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Align = styled.View`
  flex-direction: row;
  margin-top: 4px;
  align-items: center;
`;

export const PriceCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};

  padding-right: 25px;
`;
