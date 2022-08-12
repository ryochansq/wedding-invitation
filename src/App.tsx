import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { FadeProvider } from './components/Fade';
import { Form } from './components/Form';
import { Info } from './components/Info';
import { Invitation } from './components/Invitation';
import { Top } from './components/Top';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <Center>
        <Box w={{ base: '100%', md: '48em' }} shadow="dark-lg">
          <FadeProvider>
            <Top />
            <Invitation />
            <Info />
            <Form />
          </FadeProvider>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
