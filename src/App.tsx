import { ChakraProvider } from '@chakra-ui/react';
import { FadeProvider } from 'components/Fade';

function App() {
  return (
    <ChakraProvider>
      <FadeProvider>
        <div style={{ height: 1000, backgroundColor: 'red' }} />
        <div style={{ height: 1000, backgroundColor: 'green' }} />
        <div style={{ height: 1000, backgroundColor: 'blue' }} />
      </FadeProvider>
    </ChakraProvider>
  );
}

export default App;
