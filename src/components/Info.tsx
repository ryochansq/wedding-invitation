import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Button, Heading, Link, Text, VStack } from '@chakra-ui/react';

export const Info = () => (
  <VStack gap="2" py="6">
    <Heading size="2xl" fontFamily="Pinyon Script" fontWeight="normal">
      Information
    </Heading>
    <VStack align="normal" fontSize="xl" gap="2" letterSpacing="wide">
      <Text>日　時　　2022年11月13日（日）</Text>
      <Text>集　合　　11時00分</Text>
      <Text>挙　式　　12時30分</Text>
      <Text>披露宴　　13時30分</Text>
      <Text>場　所　　東京マリオットホテル</Text>
      <Text>住　所　　東京都品川区北品川4-7-36</Text>
      <Text>電話番号　03-5488-3911</Text>
    </VStack>
    <Text>
      品川駅からホテルまで無料送迎バスもあります
      <br />
      詳しくは
      <Button
        colorScheme="teal"
        m="0 4px"
        onClick={() =>
          window.open('https://www.tokyo-marriott.com/guide/access.html')
        }
        rightIcon={<ExternalLinkIcon />}
        variant="link"
      >
        ホテルのサイト
      </Button>
      をご確認ください
    </Text>
  </VStack>
);
