import { Container,VStack,Input,Heading,Button,Text,Link, Avatar} from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return <Container maxW={'container.xl'} h={'110vh'} p={'16'}>

    <form>
    <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
     <Heading>VIDEO HUB</Heading>
     <Avatar alignItems={'center'} boxSize={'32'} />
     <Input
      placeholder={'Name'}
      type={'text'}
       required 
       focusBorderColor={'purple'}
     />
     <Input
      placeholder={'Email'}
       type={'email'}
        required 
        focusBorderColor={'purple'}
        />
     <Input
      placeholder={'Possword'}
       type={'possword'}
        required 
        focusBorderColor={'purple'}
    />
     
     <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>
     <Text textAlign={'right'}>
        Already Signed Up?{''}
     <Button variant={'link'} colorScheme={'purple'}>
             <Link to={'/login'}>Log In</Link>
     </Button>
     </Text>
    </VStack>
    </form>
  </Container>
}

export default Signup
