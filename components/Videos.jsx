import { Stack, VStack,Heading,Text, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = (item) => {
 const videosArr = [
 ]
  const [videoSrc,setVideoSrc]=useState(videosArr[0])

  return (
<Stack direction={['column','row']} h={'100vh'}>
<VStack w={'full'}>
<video 
 controls
 controlsLists="nodownload" 
 src={videoSrc}
 style={{
 width:"100%",
}}>
</video>
<VStack alignItems={'flex-start'} p={'8'} w={'full'}>
    <Heading>Sample Video 1</Heading>
    <Text>This is a sample video for testing and demo.this is called description
    This is a sample video for testing and demo.this is called description
    This is a sample video for testing and demo.this is called description
    This is a sample video for testing and demo.this is called description
    This is a sample video for testing and demo.this is called description
    </Text>
</VStack>
</VStack>
<VStack
 w={['full','xl']}
  alignItems={'stretch'}
   p="8"
 spacing={'8'}
 overflowY={'auto'}>
 
  <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
    Lecture 1
  </Button>
  <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
    Lecture 2
  </Button>
  <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
    Lecture 3
  </Button>
  <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
    Lecture 4
  </Button>
  <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
    Lecture 5
  </Button>
  <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
    Lecture 6
  </Button>
</VStack >
  </Stack>
  );
  };
export default Videos;
