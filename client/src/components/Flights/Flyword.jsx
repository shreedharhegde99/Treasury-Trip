import { Container,Tabs,TabList,TabPanel,TabPanels,TabList,Tab } from "@chakra-ui/react";
import React from "react";

export const Flyword = () => {
const asia=[];
const europe=[];
const Northamerica=[{name:"",desc:"",img:""},{name:"New delhi to london",desc:"Shortest flight time 15h 02m",img:"https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o="},{desc:"Shortest flight time 15h 02m",name:"New delhi to toronto",img:"https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o="}];
const africa=[];
const oceania=[]

    return (
        <Container>
            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}