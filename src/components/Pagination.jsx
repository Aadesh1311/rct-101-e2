import React,{useState} from "react";
import { ButtonGroup,Button,Select } from "@chakra-ui/react";





const Pagination = () => {
  const[pageNumber,setPageNumber]=useState(1)
  // TODO: Remove below const and instead import them from chakra
  
 
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>{
    setPageNumber(pageNumber-1)

  }}>Prev</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>{
    setPageNumber(pageNumber+1)

  }}>Next</Button>
      <Button data-cy="pagination-last-button" >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
