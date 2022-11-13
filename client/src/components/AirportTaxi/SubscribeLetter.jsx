import {Fragment} from "react";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function SubscribeLetter() {
  return (
    <Fragment>
      <Show above="lg">
        <Box bg="#00224f" w="full">
          <Box
            textAlign="center"
            color="white"
            py="12"
            maxW="container.lg"
            m="auto"
          >
            <Box>
              <Heading as="h2" size="lg" py="2">
                Save time, save money!
              </Heading>
              <Text py="2">Sign up and we'll send the best deals to you</Text>
            </Box>
            <Stack justify="center" direction="row">
              <Box>
                <HStack py="2">
                  <Input
                    type="text"
                    placeholder="Your email"
                    maxW="md"
                    bg="white"
                  />
                  <Button w="sm" variant="solid" colorScheme="telegram">
                    Subscribe
                  </Button>
                </HStack>
                <Box textAlign="left">
                  <Checkbox>
                    Send me a link to get the FREE Booking.com app!
                  </Checkbox>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Show>
    </Fragment>
  );
}
