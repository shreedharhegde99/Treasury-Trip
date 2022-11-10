import { Container, Heading,Center, Tab, TabList, Tabs, Text,TabPanel,TabPanels, Stack } from "@chakra-ui/react";
import React from "react";
import { FlightCard } from "./FlightCard";
export const Trendingflight = () => {
    return (<Container minW={"100%"} mb="40px">
        <Heading minW={"100vw"} as='h3' textAlign={"left"} fontSize="25px">
        Trending cities


        </Heading>
        <Text mt="20px">Book flights to a destination popular with travelers from India

        </Text>
      <Center>
      <Stack direction={{base:"column",md:"row"}} mt="20px" > 
                        <FlightCard title="Dubai, United Arab Emirates" desc="14 Nov - 21 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=" />
                        <FlightCard title="London, United Kingdom" desc="13 Nov - 20 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o="/>
                        <FlightCard title="Toronato, Canada" desc="15 Nov - 25 Nov -  Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o="/>
                        <FlightCard title="Panaji,India" desc="21 Nov - 28 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o="/>
                    </Stack>
      </Center>
    </Container>)
}