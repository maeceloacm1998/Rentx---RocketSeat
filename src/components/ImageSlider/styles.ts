import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IndexProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin-top: 10px;
`;
export const IndexContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;
export const ImageIndex = styled.View<IndexProps>`
  width: ${RFValue(6)}px;
  height: ${RFValue(6)}px;
  margin-right: 5px;
  border-radius: 3px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.shape_dark : theme.colors.shape};
`;
export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(133)}px;
`;
