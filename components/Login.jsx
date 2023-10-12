import { Container,VStack,Input,Heading,Button,Text,Link} from '@chakra-ui/react'
import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         console.log('user signed in')
         const user = userCredential.user;
         // ...
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode);
      });
   }

  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <form>
    <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
     <Heading>Welcome Back</Heading>
     <Input
      placeholder={'Email'}
       type={'email'}
        required 
        focusBorderColor={'purple'}
        onChange={e => setEmail(e.target.value)}
        />
     <Input
      placeholder={'Password'}
       type={'password'}
        required 
        focusBorderColor={'purple'}
        onChange={e => setPassword(e.target.value)}
    />
     <Button variant={'link'} alignSelf={'flex-end'}>
        <Link to={'/forgetpossword'}>Forget Possword</Link>
     </Button>
     <Button colorScheme={'purple'} type={'submit'} onClick={handleLogin}>Log In</Button>
     <Text textAlign={'right'}>
        New User?{''}
     <Button variant={'link'} colorScheme={'purple'}>
             <Link to={'/Signup'}>Sign Up</Link>
     </Button>
     </Text>
    </VStack>
    </form>
  </Container>
}
export default Login
