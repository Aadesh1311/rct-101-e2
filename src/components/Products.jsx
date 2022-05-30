import React, { useState,useEffect } from "react";
import axios from "axios";
import { Flex,Grid, GridItem, } from "@chakra-ui/react";
import Product from "./Product";

const Products = () => {
  const[data,setData]=useState([]);
  // TODO: Remove below const and instead import them from chakra
 // const Flex = () => <div />;
  //const Grid = () => <div />;
useEffect(()=>{
  const getData = axios.get('http://localhost:8080/products')
  .then(function (response) {
    // handle success
    console.log(response);
    const data=response.data
    setData(data)
  })
},[])



  return (
    <Flex>
      
    
  
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      
      {data.map((product)=>(
        
            <Product  key={product.id} product={product}/>
            
      ))}
    
      </Grid>
      
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
