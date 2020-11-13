import React from "react";
import MainForm from "./components/MainForm"
import FormFooter from "./components/FormFooter"
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
          marginY="5%"
          padding="2%"
          width="40vw"
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
            class="title_divider"
            height="1px"
            width="100%"
            borderTop="1px"
            borderColor="teal.100"
            borderRadius="md"
            marginY="10px"
          >
            {/* OR YOU COULD DO
            <Divider orientation="horizontal" height="1px" borderColor="teal.300"
              width="100%"
              marginY="10px" />
            */}
          </Box>

          <MainForm />
          
          <FormFooter />
        </Box>
        
      </Box>
    </Box>
  );
}

export default App;
