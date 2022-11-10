import { Container, Heading, Tab, TabList, Tabs, Text,TabPanel,TabPanels, Stack } from "@chakra-ui/react";
import React from "react";
import { FlightCard } from "./FlightCard";
export const Popularflight = () => {
    return (<Container minW={"100%"} mb="40px">
        <Heading minW={"100%"} as='h3' textAlign={"left"} fontSize="25px">
            Popular flights near you

        </Heading>
        <Text mt="20px">Find deals on domestic and international flights
        </Text>
        <Tabs>
            <TabList>
                <Tab>International</Tab>
                <Tab>Domestic</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Stack direction={"row"} >
                        <FlightCard title="New Delhi to Kathmandu" desc="14 Nov - 21 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/664662.jpg?k=d233ff3beefccce61e2c23f1079e13cded4d74eb74ad01749b18a3e49f56e04a&o=" />
                        <FlightCard title="New Delhi to Male City" desc="13 Nov - 20 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o="/>
                        <FlightCard title="New Delhi to Bangkok" desc="15 Nov - 25 Nov -  Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o="/>
                        <FlightCard title="New Delhi to Dubai" desc="21 Nov - 28 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="/>
                    </Stack>
                </TabPanel>
                <TabPanel>
                <Stack direction={"row"} >
                        <FlightCard title="New Delhi to Leh" desc="14 Nov - 21 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/652858.jpg?k=6dd48a72530871fd853668bb725953584d60a188c1884f5f3bc005573ce6f486&o=" />
                        <FlightCard title="New Delhi to Srinagar" desc="13 Nov - 20 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/684877.jpg?k=4695a1cdaa3a3a11381d172f284215174d6e057ed4722aaa902e859cd5c7dc4d&o="/>
                        <FlightCard title="New Delhi to Banglore" desc="15 Nov - 25 Nov -  Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o="/>
                        <FlightCard title="New Delhi to Mumbai" desc="21 Nov - 28 Nov - Round Trip" image="https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o="/>
                    </Stack>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Container>)
}