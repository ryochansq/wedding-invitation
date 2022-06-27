import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { FadeProvider } from 'components/Fade';

export default function App() {
  return (
    <ChakraProvider>
      <Center>
        <Box w={{ base: '100%', md: '48em' }}>
          <FadeProvider>
            <Box h={1000} bg="red.500" />
            <Box h={1000} bg="green.500" />
            <Box h={1000} bg="blue.500" />
          </FadeProvider>
        </Box>
      </Center>
    </ChakraProvider>
  );
}
