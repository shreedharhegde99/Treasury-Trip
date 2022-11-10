import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Highlight,
  Stack,
  Text,
} from "@chakra-ui/react";
import data from "../../assets/airportTaxiFaq.json";

export default function TaxiFaq() {
  return (
    <Box py="12" maxW="container.xl" m="auto">
      <Stack direction={{ base: "column", lg: "row" }}>
        <Box
          px="4"
          w={{ lg: "max-content" }}
          minW={{ lg: "2xl" }}
          textAlign={{ lg: "center" }}
        >
          <Heading as="h2" size={{ base: "sm", lg: "md" }}>
            Find out more about our airport taxi service
          </Heading>
          <Text>
            <Highlight
              query="help page"
              styles={{
                color: "blue",
                fontWeight: "bold",
                textDecor: "underline",
              }}
            >
              See more FAQs on our help page
            </Highlight>
          </Text>
        </Box>
        <Box w={{ lg: "2xl" }}>
          <Accordion allowMultiple>
            {data.map((el) => (
              <AccordionItem key={el.title}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {el.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{el.desc}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Stack>
    </Box>
  );
}
