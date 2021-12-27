import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Header = styled.View`
  height: ${RFValue(325)}px;
  padding: 0 24px;
  padding-top: ${getStatusBarHeight() + 20}px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;

  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_secondary};

  margin-top: 41px;
  padding-right: ${RFValue(100)}px;
`;

export const PeriodContainer = styled.View`
  margin-top: 32px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BorderContainer = styled.View`
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.text};
`;

export const PeriodTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text};
`;

export const Period = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_primary};

  margin-top: 10px;
`;
