import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(BorderlessButton)`
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  justify-content: center;
  align-items: center;
`;
