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
      <div className="faq_cont">
        <div className="decor">
          <img src={require(`./Image/decor2.png`)} alt="Decoration" />
        </div>
        <div className="hero">
          <div className="master1">
            <h1 className="text-2xl font-semibold text-center" style={{ color: "#393646" }}>
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <div className="master2">
            <Accordion defaultIndex={[0]}>
              
              <AccordionItem  class='acc-container'>
                <h2>
                  <AccordionButton _expanded={{bg:"#2C5282",color:"#90CDF4"}}>
                    <Box flex="1" textAlign="left">
                      What is GDSC SIT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} overflowY="auto">
                (Straight up from the official Website) Google Developer Student Clubs (GDSC)
                are community groups for college and university students interested in Google developer technologies.
                Students from all undergraduate or graduate programs with an interest in growing
                as a developer are welcome. By joining a GDSC, students grow their knowledge in a
                peer-to-peer learning environment and build solutions for local businesses and their community.
                GDSC SIT is the official Google Developer Students Club chapter of Silicon Institute of Industrial Technology.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem  class='acc-container'>
                <h2>
                  <AccordionButton _expanded={{bg:"#2C5282",color:"#90CDF4"}}>
                    <Box flex="1" textAlign="left">
                      How can I join GDSC SIT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} overflowY="auto">
                Go to the GDSC event page and login and you can be a member of gdsc.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem  class='acc-container'>
                <h2>
                  <AccordionButton _expanded={{bg:"#2C5282",color:"#90CDF4"}}>
                    <Box flex="1" textAlign="left" overflowY="auto">
                      How can I hear about the events that you will do in future
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} overflowY="auto">
                Follow us on our social media profiles to get the updated
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem  class='acc-container'>
                <h2>
                  <AccordionButton _expanded={{bg:"#2C5282",color:"#90CDF4"}}>
                    <Box flex="1" textAlign="left">
                    Who can participate in GDSC events?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}overflowY="auto">
                Someone who is a tech enthusiast and is interested in exploring different technologies.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem class='acc-container'>
                <h2>
                  <AccordionButton _expanded={{bg:"#2C5282",color:"#90CDF4"}}>
                    <Box flex="1" textAlign="left">
                    Are there any membership fees for joining GDSC SIT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} overflowY="auto">
                Neither any membership fee is charged nor any event fee.
                </AccordionPanel>
              </AccordionItem>
             
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
