import {
  FormControl, 
  FormErrorMessage, 
  FormLabel, 
  forwardRef, 
  Input as ChakraInput, 
  InputProps as ChakraInputProps 
} from '@chakra-ui/react';
import { DeepMap, FieldError, FieldValues } from 'react-hook-form'
import { ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: DeepMap<FieldValues, FieldError>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

// Para que a ref seja passada para o componente, transformamos ele em const e passamos a função de repasse forwardRef.
export const Input = forwardRef(InputBase);