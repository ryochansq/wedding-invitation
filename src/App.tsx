import { Box, ChakraProvider, SlideFade } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const duration = 1;

function App() {
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  console.info({ inView1, inView2, inView3 });

  return (
    <ChakraProvider>
      <Box ref={ref1}>
        <SlideFade
          in={inView1}
          offsetY="20px"
          transition={{ enter: { duration } }}
        >
          <div style={{ height: 1000, backgroundColor: 'red' }} />
        </SlideFade>
      </Box>
      <Box ref={ref2}>
        <SlideFade
          in={inView2}
          offsetY="20px"
          transition={{ enter: { duration } }}
        >
          <div style={{ height: 1000, backgroundColor: 'green' }} />
        </SlideFade>
      </Box>
      <Box ref={ref3}>
        <SlideFade
          in={inView3}
          offsetY="20px"
          transition={{ enter: { duration } }}
        >
          <div style={{ height: 1000, backgroundColor: 'blue' }} />
        </SlideFade>
      </Box>
    </ChakraProvider>
  );
}

export default App;
