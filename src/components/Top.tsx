import { Heading, Image, VStack } from '@chakra-ui/react';

export const Top = () => (
  <VStack gap="1" py="4">
    <Heading size="2xl" fontFamily="Pinyon Script" fontWeight="normal">
      Wedding Invitation
    </Heading>
    <Image src="/238.jpg" />
    <VStack>
      <Heading size="xl" fontFamily="Pinyon Script" fontWeight="normal">
        Ryota & Madoka
      </Heading>
      <Heading size="lg" fontFamily="Pinyon Script" fontWeight="normal">
        2022.11.13
      </Heading>
    </VStack>
  </VStack>
);
