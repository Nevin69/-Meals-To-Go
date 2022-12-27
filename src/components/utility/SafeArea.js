import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

export const SafeArea = styled.View`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`}
`;