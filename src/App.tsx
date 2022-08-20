import { Box, Button, Center, ChakraProvider, Image } from '@chakra-ui/react';
import { FadeProvider } from './utils/Fade';
import { Form } from './components/Form';
import { Info } from './components/Info';
import { Invitation } from './components/Invitation';
import { Top } from './components/Top';
import { GoogleMap } from './components/GoogleMap';

export default function App() {
  return (
    <ChakraProvider>
      <Center>
        <Box w={{ base: '100%', md: '48em' }} shadow="dark-lg">
          <FadeProvider>
            <Top />
            <Invitation />
            <Image src="/366.jpg" />
            <Info />
            <GoogleMap />
            <Form />
          </FadeProvider>
          {/* <Center></Center> */}
          <Center mb="20">
            <Button colorScheme="blue" fontSize="xl">
              回答フォームはこちら
            </Button>
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}
