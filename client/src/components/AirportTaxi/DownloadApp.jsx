import { Fragment } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Show,
} from "@chakra-ui/react";
import data from "../../assets/airportTaxi.json";

export default function DownloadApp() {
  return (
    <Fragment>
      <Show below="lg">
        <Grid templateColumns="2fr 1fr" p="4" py="6">
          <GridItem>
            <HStack>
              <Image src={data.download_app} alt="Download app" w="14" h="14" />
              <Box>
                <Heading as="h3" size="sm">
                  Get the FREE app
                </Heading>
                <Box>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    height="13"
                    width="69"
                    viewBox="0 0 65 12"
                    role="presentation"
                  >
                    <path
                      d="m13 4.6c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.1-.5-.1-.5 0l-1.5 4-4.6.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3h.3l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.4 3.5-2.5c.1 0 .1-.1.1-.2zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.2-.4-.2-.5 0l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3s.2.1.3 0l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.2-.4-.2-.5 0l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3s.2.1.3 0l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.2-.4-.2-.5 0l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3s.2.1.3 0l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.1-.2-.1-.3-.1s-.2 0-.2.1l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3h.3l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5zm-3.9 2.3-.3.2.1.3 1.1 3.7-3.1-2.2-.3-.2v-7.8l1.3 3.4.1.3h.3l3.7.2z"
                      fill="#feba02"
                    ></path>
                  </svg>
                  <span>Rated 4.5 out of 5 stars</span>
                </Box>
              </Box>
            </HStack>
          </GridItem>
          <GridItem textAlign="right">
            <Button variant="solid" colorScheme="telegram">
              Install
            </Button>
          </GridItem>
        </Grid>
      </Show>
    </Fragment>
  );
}
