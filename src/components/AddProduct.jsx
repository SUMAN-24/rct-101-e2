import React from "react";
import { Button} from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  FormLabel,
  FormControl,
  ModalFooter
} from '@chakra-ui/react';
import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  //const Button = () => <div />;
  //const Modal = () => <div />;
  //const ModalBody = () => <div />;
  //const Input = () => <div />;
  //const Select = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <>
      <Button colorScheme='teal' onClick={onOpen} my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Add New Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
        <FormControl>
        <FormLabel>Title</FormLabel>
          <Input data-cy="add-product-title" 
            ref={initialRef} placeholder='Title'
          />
        </FormControl>
        <FormControl>
        <FormLabel>Category</FormLabel>
          <Select data-cy="add-product-category">
            <option>Category</option>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
        </FormControl>
        <FormControl>
        <FormLabel>Gender</FormLabel>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          </FormControl>
          <FormControl>
          <FormLabel>Price</FormLabel>
          <InputGroup>
          <InputLeftElement 
            pointerEvents='none'
            children="Rs."
          />
          <Input data-cy="add-product-price" placeholder="Price" />
          </InputGroup>
          </FormControl>
          <ModalFooter>
          <Button colorScheme='teal' size='md' data-cy="add-product-submit-button">Create</Button>
          </ModalFooter>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
