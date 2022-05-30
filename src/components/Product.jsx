import React from "react";
import {Stack ,Text,Image, Tag,TagLabel,Heading,Box} from "@chakra-ui/react";

const Product = (props) => {
  
  // TODO: Remove below const and instead import them from chakra
  
  return (
    <Stack data-cy="product" key={props.product.id}>
      <Box boxSize='sm'>
      <Image src={props.product.imageSrc} data-cy="product-image" />
      </Box>
      <Text data-cy="product-category">{props.product.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{props.product.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{props.product.title}</Heading>
      <Box data-cy="product-price">{props.product.price}</Box>
    </Stack>
  );
};

export default Product;
