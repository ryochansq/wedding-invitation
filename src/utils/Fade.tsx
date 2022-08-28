import React, { ReactNode } from 'react';
import { Box, SlideFade } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const rootMargin = '24px';
const offsetY = 24;
const duration = 2;

const Fade = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({ rootMargin });
  return (
    <Box ref={ref}>
      <SlideFade
        in={inView}
        offsetY={offsetY}
        transition={{ enter: { duration } }}
      >
        {children}
      </SlideFade>
    </Box>
  );
};

export const FadeProvider = ({ children }: { children: ReactNode }) => (
  <>
    {React.Children.map(children, (child) => (
      <Fade>{child}</Fade>
    ))}
  </>
);
