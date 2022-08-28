import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

export const Info = () => (
  <VStack gap="2" py="6">
    <Heading size="2xl" fontFamily="Pinyon Script" fontWeight="normal">
      Information
    </Heading>
    <VStack align="normal" fontSize="xl" gap="2" letterSpacing="wide">
      <Text>日　時　　2022年11月13日（日）</Text>
      <Text>親族紹介　11時30分</Text>
      <Text>挙　式　　12時30分</Text>
      <Text>披露宴　　13時30分</Text>
      <Text>場　所　　東京マリオットホテル</Text>
      <Text>住　所　　東京都品川区北品川4-7-36</Text>
      <Text>電話番号　03-5488-3911</Text>
    </VStack>
    <UnorderedList spacing="2">
      <ListItem>
        <Text>
          当日は親族紹介を行いますので
          <br />
          11時30分までに地下１階エントランスまで
          <br />
          お越しくださいますようお願いいたします
        </Text>
      </ListItem>
      <ListItem>
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
      </ListItem>
    </UnorderedList>
  </VStack>
);
