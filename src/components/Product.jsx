import React from "react";
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Stack} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import {
  Tag,
  TagLabel
} from '@chakra-ui/react';

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  //const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
