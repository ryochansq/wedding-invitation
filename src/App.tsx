import { Box, Center, ChakraProvider, Image } from '@chakra-ui/react';
import { FadeProvider } from './utils/Fade';
import { Form } from './components/Form';
import { Info } from './components/Info';
import { Invitation } from './components/Invitation';
import { Top } from './components/Top';
import { GoogleMap } from './components/GoogleMap';
import rings from './assets/212305-366.jpg';

export default function App() {
  return (
    <ChakraProvider>
      <Center>
        <Box w={{ base: '100%', md: '48em' }} shadow="dark-lg">
          <FadeProvider>
            <Top />
            <Invitation />
            <Image src={rings} />
            <Info />
            <GoogleMap />
            <Form />
          </FadeProvider>
        </Box>
      </Center>
    </ChakraProvider>
  );
}
