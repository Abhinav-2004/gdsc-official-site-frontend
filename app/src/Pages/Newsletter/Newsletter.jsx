import React, { useState } from 'react';
import { ChakraProvider, Checkbox, CheckboxGroup, Input, Textarea, HStack, Box, Button } from '@chakra-ui/react';
import './Newsletter.css';

const MyCheckboxGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleOptionChange = (values) => {
    setSelectedOptions(values);
  };

  const handleSubjectChange = (e) => {
    setEmailSubject(e.target.value);
  };

  const handleBodyChange = (e) => {
    setEmailBody(e.target.value);
  };

  const handleSelectAll = () => {
    const allOptions = ['1', '2', '3', '4', '5']; // Add all options here
    const areAllOptionsSelected = selectedOptions.length === allOptions.length;

    if (areAllOptionsSelected) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(allOptions);
    }
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Submit button clicked!');
  };

  return (
    <Box className='news-cont'  >
      <Box className='group1' bg="#F7FAFC"  boxShadow='md' p='6' rounded='md'  >
        <CheckboxGroup value={selectedOptions} onChange={handleOptionChange}>
          <HStack spacing={4}>
            <Checkbox
              value="all"
              onChange={handleSelectAll}
              isChecked={selectedOptions.length > 0 && selectedOptions.length === 5}
            >
              Select All
            </Checkbox>

            <Checkbox value="1">Web development</Checkbox>
            <Checkbox value="2">Android development</Checkbox>
            <Checkbox value="3">AI/ML</Checkbox>
            <Checkbox value="4">Cloud</Checkbox>
            <Checkbox value="5">Graphics design</Checkbox>
          </HStack>
        </CheckboxGroup>
      </Box>

      <Box className='group2'  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <label htmlFor="subject">Email Subject:</label>
        <Input
          type="text"
          id="subject"
          value={emailSubject}
          onChange={handleSubjectChange}
          placeholder="Enter email subject"
          size="lg"
          bg="#CBD5E0"
        />

        <label htmlFor="body">Email Body:</label>
        <Textarea
          id="body"
          value={emailBody}
          onChange={handleBodyChange}
          placeholder="Enter email body"
          size="lg"
          bg="#CBD5E0"
        />
      </Box>
      <Button colorScheme="blue" size="lg" onClick={handleSubmit} mt={4}>
        Submit
      </Button>
    </Box>
  );
};

const Newsletter = () => {
  return (
    <ChakraProvider>
      <MyCheckboxGroup />
    </ChakraProvider>
  );
};

export default Newsletter;
