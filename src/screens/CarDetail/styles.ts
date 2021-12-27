import styled from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 25}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 22px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: ${RFValue(35)}px;
`;

export const CarInformation = styled.View``;

export const ModelCar = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const TypeCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View``;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const PriceCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const AccessoryContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin: 16px 5px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(15)}px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};

  padding: 8px 24px;
`;

export const SubmitContainer = styled.View`
  margin-bottom: ${getBottomSpace()}px;
  background-color: ${({ theme }) => theme.colors.background_primary};

  align-items: center;
  padding-top: 20px;
`;
