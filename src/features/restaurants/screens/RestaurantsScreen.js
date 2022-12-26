import { React } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView } from "react-native";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";

const SafeArea = styled.View`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantList = styled.View`
  flex: 1;
  padding: 20px;
  backgroundColor: blue;
`;

export function RestaurantsScreen (){ 
    return(
        <SafeArea>
            <SearchContainer>
              <Searchbar />
            </SearchContainer>
            <RestaurantList>
              <RestaurantInfoCard />
            </RestaurantList>
        </SafeArea>
    )
}

