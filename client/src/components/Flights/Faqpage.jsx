import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Faqcard } from "./Faqcard";

export const Faqpage = () => {
  const questions = [
    {
      que: "Does Booking.com charge credit card fees?",
      ans: "No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when reviewing your booking.",
    },
    {
      que: "What is a flexible ticket?",
      ans: "A flexible ticket allows you to change your flight with the same airline by only paying the fare and tax difference. It can only be used for one confirmed change. You can add the flexible ticket when booking your flight.",
    },
    {
      ans: "Generally, flight prices are more likely to increase the closer you get to your flight date ",
      que: "Do flights get cheaper closer to departure?",
    },
    {
      que: "How far in advance can I book a flight?",
      ans: "You can book a flight up to one year before your departure date.",
    },
    {
      que: "Can I book one-way flights on Booking.com?",
      ans: "Yes, you can book one-way, round-trip, and multi-city flights on our site.",
    },
    {
      que: "How do I find the cheapest flights on Booking.com? ",
      ans: "You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors like when you're booking and want to travel.    ",
    },
  ];
  return (
    <Container bgColor={"white"} p="20px" borderRadius={"10px"} minW={"100%"}>
      <Heading
        minW={"100%"}
        as="h3"
        mb={"40px"}
        textAlign={"center"}
        fontSize="25px"
      >
        Frequently asked questions
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {questions.map((e) => {
          return <Faqcard que={e.que} ans={e.ans} key={e.que} />;
        })}
      </SimpleGrid>
    </Container>
  );
};
