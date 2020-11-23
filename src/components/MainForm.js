import React from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  FormControl,
  Input,
  Select,
  FormLabel,
  FormHelperText,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/core";

function MainForm() {
  return (
    <Flex flexGrow="1" flexDirection="column" alignContent="center">
      <Box>
        <Text>Stage 1</Text>
        <Text>How far are you now?</Text>
      </Box>

      <Box class="main_form" width="100%">
        <FormControl id="start_surah">
          <FormLabel>You memorise from:</FormLabel>
          <Select placeholder="Select Surah">
            <option>Nas (Bottom)</option>
            <option>Baqarah (Top)</option>
          </Select>
          <FormHelperText>
            Please select which surah you started memorising from
          </FormHelperText>
        </FormControl>

        <FormControl id="current_page">
          {/*Should change to mobile friendly version using hooks*/}
          <FormLabel>Which page are you currently on?</FormLabel>
          <NumberInput defaultValue={1} min={1} max={600}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>Please input your current page number</FormHelperText>
        </FormControl>
      </Box>

      <Box class="form_controls">
        <Button
          mt={4}
          variantColor="teal"
          //isLoading={formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
}

export default MainForm;
