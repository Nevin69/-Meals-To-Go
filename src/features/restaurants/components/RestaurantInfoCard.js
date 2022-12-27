import { React}  from "react";
import { Card } from 'react-native-paper';
import styled from "styled-components/native"
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { View, Image} from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
`

const RestaurantCard = styled(Card)`
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  margin-bottom:  ${(props) => props.theme.space[2]};
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const Rating = styled.View`
  flex-direction: row;
  paddingVertical: ${(props) => props.theme.space[2]};
`

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;

`
const Closed = styled.Text`
color: ${(props) => props.theme.colors.ui.error}
`


const Section = styled.View`
  flex-direction: row;
  align-items: center;

`


export const RestaurantInfoCard = ({ restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=740&t=st=1671954561~exp=1671955161~hmac=6f605e4a5fc5d51a730a003a8799930e5c74b740168e1466c12c9f7cd3458520"
    ],
    address = "Delhi, Near Santacruz",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false
  } = restaurant

  let ratingArray = Array.from(new Array(Math.floor(rating)))
  
  let num = 1;

  return(
    <RestaurantCard elevation={5} >
      <RestaurantCardCover style={{padding: 20}} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map((val) => (
                <SvgXml xml={star} width={20} height={20}  key={num++}/>
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily ? (
                <Closed>Closed Temporarily</Closed>
              ) : isOpenNow && (
                <View style={{flexDirection: "row"}}>
                  <SvgXml xml={open} width={20} height={20}/> 
                  <Spacer position="left" size="large"/>
                  <Image style={{ width: 20, height: 20}} source={{ uri: icon }} />
                </View>
              )}
            </SectionEnd>
          </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}