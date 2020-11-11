import React from "react";
import { Box, Text, Flex } from "@chakra-ui/core";

function App() {
  return (
    <Box>
      <Box
        class="container"
        display="flex"
        flexDirection="column"
        height="100vh"
        alignItems="center"
        justifyContent="space-around"
        backgroundColor="teal.100"
        //border="1px"
        //borderColor="black"
      >
        <Box
          class="main_content"
          width="30vw"
          height="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          backgroundColor="white"
          borderRadius="md"
          //border="1px"
          //borderColor="gray"
        >
          <Text fontSize="xl" color="teal.300">
            Hifz Planner
          </Text>
          <Text fontSize="m" color="grey">
            Calculate your estimated Hifz end date
          </Text>
          <Box
            height="1px"
            width="100%"
            borderTop="1px"
            borderColor="teal.100"
            borderRadius="md"
            marginY="10px"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
