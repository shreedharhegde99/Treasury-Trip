import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";

export default function CoronaAlert() {
  return (
    <Box p="4" maxW="container.lg" m="auto">
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton w="full">
            <Flex w="full" justify="space-between">
              <Stack direction="row" align="center">
                <BsInfoCircle color="red" />
                <Text>Protecting you during COVID-19</Text>
              </Stack>
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel>
            <Box>
              Your safety matters. From July 2020, we’re asking all customers to
              wear a face covering when travelling with us. If you don’t wear a
              face covering, your driver may not be able to start your journey.
              Where Coronavirus may affect your plans, here’s what you need to
              know about booking with us at this time.
            </Box>
            <Box>Read more</Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
