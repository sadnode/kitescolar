import { Flex, Text, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { GiPencilRuler } from "react-icons/gi";

import { Input } from "../components/Form/Input";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type SignInFormData = {
  cpf: string;
  ne: string;
}

const signInFormSchema = yup.object().shape({
  cpf: yup.string().required('CPF Obrigatório'),
  ne: yup.string().required('NE obrigatório'),
});

export default function SignIn() {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await signIn(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack>
          <Flex align="center" justify="center" flexDir="column">
            <GiPencilRuler size={50} />
            <Text mt="3" fontSize="lg">Kit Escolar - Faber-Castell</Text>
          </Flex>
          <Input 
            type="text" 
            name="cpf" 
            error={formState.errors.cpf}
            label="CPF" 
            {...register('cpf')} 
          /> 

          <Input 
            type="password" 
            error={formState.errors.ne} 
            name="ne" 
            label="NE" 
            {...register('ne')} 
          /> 
        </Stack>
        <Button type="submit" mt="6" colorScheme="green" size="lg" borderRadius="0" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}