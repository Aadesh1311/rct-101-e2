import React, { useState,useEffect } from "react";
import axios from "axios";
import { Flex,Grid, GridItem, } from "@chakra-ui/react";
import Product from "./Product";
import Pagination from "./Pagination";

const Products = () => {
  
  
  const[data,setData]=useState([]);
  

  // TODO: Remove below const and instead import them from chakra
 // const Flex = () => <div />;
  //const Grid = () => <div />;
useEffect(()=>{
  const getData = axios.get(`http://localhost:8080/products?_page=${1}&_limit=${3}`)
  .then(function (response) {
    // handle success
    console.log(response);
    const data=response.data
    setData(data)
  })
},[])



  return (

<>
    <Pagination />
    <Flex>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {data.map((product)=>(
        <Product  key={product.id} product={product}/>
      ))}
    </Grid>
      
      {/* Pagination */}
    </Flex>
    </>
  );
};

export default Products;
