import React, { useState } from 'react';
import { ChakraProvider, Checkbox, CheckboxGroup, Input, Textarea } from '@chakra-ui/react';

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
    const allOptions = ['1', '2', '3'];
    setSelectedOptions(allOptions);
  };

  return (
    <div className='news-cont'>
      <div className='group1'>
        <CheckboxGroup value={selectedOptions} onChange={handleOptionChange}>
        <Checkbox value="all" onChange={handleSelectAll}>
            Select All
          </Checkbox>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          
        </CheckboxGroup>
      </div>

      <div className='group2'>
        <label htmlFor="subject">Email Subject:</label>
        <Input
          type="text"
          id="subject"
          value={emailSubject}
          onChange={handleSubjectChange}
          placeholder="Enter email subject"
        />

        <label htmlFor="body">Email Body:</label>
        <Textarea
          id="body"
          value={emailBody}
          onChange={handleBodyChange}
          placeholder="Enter email body"
        />
      </div>
    </div>
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
