import { Box, Button, Center, ChakraProvider, Image } from '@chakra-ui/react';
import '@fontsource/noto-serif-jp';
import '@fontsource/pinyon-script';
import { FadeProvider } from './utils/Fade';
import { Form } from './components/Form';
import { Info } from './components/Info';
import { Invitation } from './components/Invitation';
import { Top } from './components/Top';
import { GoogleMap } from './components/GoogleMap';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function App() {
  return (
    <ChakraProvider>
      <Center>
        <Box
          w={{ base: '100%', md: '48em' }}
          shadow="dark-lg"
          borderRadius="8"
          fontFamily="Noto Serif JP"
        >
          <FadeProvider>
            <Top />
            <Invitation />
            <Image src="/366.jpg" />
            <Info />
            <GoogleMap />
            <Form />
          </FadeProvider>
          <Center mb="20">
            <Button
              colorScheme="blue"
              fontSize="xl"
              shadow="base"
              size="lg"
              rightIcon={<ExternalLinkIcon />}
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdNW2gM0Mh3Y4sTm6DWYG5C0wapmne2qaMkZfiLZ9ncTZSUGA/viewform?usp=sf_link'
                )
              }
            >
              回答フォームはこちら
            </Button>
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}
