import { Heading, Image, VStack } from '@chakra-ui/react';

export const Top = () => (
  <VStack gap="4" py="4">
    <Heading size="xl">Wedding Invitation</Heading>
    <Image src="/238.jpg" />
    <Heading size="xl">Ryota & Madoka</Heading>
    <Heading size="md">2022.11.13</Heading>
  </VStack>
);
