import { React } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, View } from "react-native";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

export function RestaurantsScreen (){ 
    return(
        <View style={styles.container}>
            <View style={styles.search}>
              <Searchbar />
            </View>
            <View style={styles.list}>
              <RestaurantInfoCard/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

