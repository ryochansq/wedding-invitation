import { Heading, Text, VStack } from '@chakra-ui/react';

export const Info = () => (
  <VStack gap="4" py="4">
    <Heading size="xl">Information</Heading>
    <VStack align="normal" fontSize="xl" gap="2">
      <Text>日　時　　2022年11月13日（日）</Text>
      <Text>集　合　　11時00分</Text>
      <Text>挙　式　　12時30分</Text>
      <Text>受　付　　13時20分</Text>
      <Text>披露宴　　13時30分</Text>
      <Text>場　所　　東京マリオットホテル</Text>
      <Text>住　所　　東京都品川区北品川4-7-36</Text>
      <Text>電話番号　03-5488-3911</Text>
    </VStack>
  </VStack>
);
