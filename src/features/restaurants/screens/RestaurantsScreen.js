import { React } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/SafeArea";



const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;



export function RestaurantsScreen (){ 
    return(
        <SafeArea>
            <SearchContainer>
              <Searchbar />
            </SearchContainer>
            <FlatList 
              data={[{name: 1}, {name: 2}, {name: 3},{name: 4}, {name: 5}, {name:7}]}
              renderItem={() =>  <RestaurantInfoCard />}
              keyExtractor={(Item) => Item.name}
              contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
}

