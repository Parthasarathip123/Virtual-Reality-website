import React from 'react'
import { Box, HStack, Heading, Stack, VStack,Button,Input,Text } from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
<Stack direction={['column','row']} >
<VStack alignItems={'stretch'} w={'full'} px={'full'}>
    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']} >
        Subscribe to get updates
    </Heading>
    <HStack
    borderBottom={'2px solid white'}
    py={'2'}
    >
      <Input placeholder='enter email here...' borderRadius={'none'} border={'none'} outLine={'none'} focusBorderColor={'none'}/>
        <Button 
        variant={'ghost'}
        p={'0'}
        colorScheme={'purple'}
        borderRadius={'0 20px 20px,0'}>
            <AiOutlineSend size={'20'}/>
        </Button>
    </HStack>
</VStack>
<VStack w={'full'}
borderLeft={['none','1px solid white']}
borderRight={['none','1px solid white']}>
  <Heading textTransform={'uppercase'} textAlign={'center'}>
    VIDEO HUB
  </Heading>
  <Text>All rights Received</Text>
</VStack>
<VStack w={'full'}>
  <Heading size={'md'} textTransform={'uppercase'} >
    Social Media
  </Heading>
  <Button variant={'link'} colorScheme={'white'}>
    <a href="https://www.youtube.com/watch?v=b50zSyLiCYQ">youtube</a>
  </Button>
  <Button variant={'link'} colorScheme={'white'}>
    <a href="https://www.Instagram.com/__losers_____">Instagrm</a>
  </Button>
  <Button variant={'link'} colorScheme={'white'}>
    <a href="https://www.google.com/search?q=lionel+messi&sxsrf=APwXEdc2SHQYG1XLmkWersj-yux0d47wBA%3A1686980214264&ei=dkaNZJTcD9G6seMP44a3yAw&ved=0ahUKEwiU76eDy8n_AhVRXWwGHWPDDckQ4dUDCA8&uact=5&oq=lionel+messi&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCC4QigUQJzINCC4QgwEQsQMQigUQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDOg0ILhCKBRDHARDRAxBDOgoILhCKBRCxAxBDOgcIABCKBRBDOgcILhCKBRBDOgoIABCKBRCxAxBDOhsILhCKBRDHARDRAxBDEJcFENwEEN4EEOAEGAFKBAhBGABQVliWE2DpFmgAcAF4AIAB0ASIAcYQkgELMC4xLjIuMS4xLjGYAQCgAQHAAQHaAQYIARABGBQ&sclient=gws-wiz-serp">Google</a>
  </Button>
</VStack>
</Stack>
  </Box>
};
export default Footer
