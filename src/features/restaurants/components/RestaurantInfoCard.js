import {React} from "react";
import {Card } from 'react-native-paper';
import styled from "styled-components/native"

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantCard = styled(Card)`
  padding: 5px;
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`

export const RestaurantInfoCard = ({ restaurant = {}}) => {
  const {
    name = 'Lalit Restaurant',
    icon,
    photos = [
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=740&t=st=1671954561~exp=1671955161~hmac=6f605e4a5fc5d51a730a003a8799930e5c74b740168e1466c12c9f7cd3458520"
    ],
    address = "Delhi, Near Santacruz",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant

  return(
    <RestaurantCard elevation={5} >
      <RestaurantCardCover style={{padding: 20}} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  )
}