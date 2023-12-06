import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import './Faq.css';

const Faq = () => {
  return (
    <>
      <div className="faq-cont">
        <div className="decor">
          <img src={require(`./Image/decor.png`)} alt="Decoration" />
        </div>
        <div className="hero">
          <div className="master1">
            <h1 className="text-2xl font-semibold text-center" style={{ color: "#393646" }}>
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <div className="master2">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What is GDSC SIT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Answer 1
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How can I join GDSC SIT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Answer 2
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How can I join GDSC SIT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Answer 3
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                    Who can participate in GDSC events?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Answer 4
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                    Are there any membership fees for joining GDSC SIT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Answer 5
                </AccordionPanel>
              </AccordionItem>

              {/* Add more AccordionItems for additional questions and answers */}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
