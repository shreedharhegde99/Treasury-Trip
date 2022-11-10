import { Container,Tabs,TabList,TabPanel,TabPanels,Tab, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { Flywordcard } from "./Flywordcard";

export const Flyword = () => {
const asia=[{img:"https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=",name:"New Delhi to to Bangkok",desc:"Shortest flight time 15h 02m"},{desc:"Shortest flight time 15h 02m",name:"New Delhi to Dubai",img:"https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="}];
const europe=[];
const Northamerica=[{desc:"Shortest flight time 15h 02m", name:"New Delhi to Washington",img:"https://q-xx.bstatic.com/xdata/images/city/square210/689490.jpg?k=1d5bd50555dd3c8fbd622bad7493375d6ee52e4c258e3cff5c64ded847efdf76&o="},{name:"New delhi to london",desc:"Shortest flight time 15h 02m",img:"https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o="},{desc:"Shortest flight time 15h 02m",name:"New delhi to toronto",img:"https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o="}];
const africa=[{desc:"Shortest flight time 15h 02m",name:"New Delhi to Blue Bay",img:"https://q-xx.bstatic.com/xdata/images/city/square210/953846.jpg?k=29f1aa324a747187330b2a8790c799118ef5b22185a0a235a3ab5117f8495006&o="}];
const oceania=[]

    return (
        <Container minW={"100%"} textAlign="left" alignItems={"left"} alignContent="left" mb={"40px"}>
            <Heading minW={"100vw"} as='h3' textAlign={"left"} fontSize="25px">
            Fly worldwide with Booking.com



        </Heading>
        <Text mt="20px">Flights From wherever you are to wherever you want to go


        </Text>
            <Tabs  w={"100%"}>
                <TabList  w={"100%"}>
                    <Tab>North America</Tab>
                    <Tab>Asia</Tab>
                    <Tab>Africa</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                     <Stack direction={{base:"column",md:"row"}} spacing="40px">   {Northamerica.map((e)=>{
                            return <Flywordcard title={e.name} desc={e.desc} img={e.img}/>
                        })}</Stack>
                    </TabPanel>
                    <TabPanel>
                    <Stack  direction={{base:"column",md:"row"}}  spacing="40px">   {asia.map((e)=>{
                            return <Flywordcard title={e.name} desc={e.desc} img={e.img}/>
                        })}</Stack>
                    </TabPanel>
                    <TabPanel>
                    <Stack  direction={{base:"column",md:"row"}} spacing="40px">   {africa.map((e)=>{
                            return <Flywordcard title={e.name} desc={e.desc} img={e.img}/>
                        })}</Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}