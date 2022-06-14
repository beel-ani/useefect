
import  Componet  from './Componet';
import  Component1 from './Component1';
import { Heading,
  Button} from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';

import { Box } from "@chakra-ui/react"
const Contar=({contador }) =>  {
  const [color,setColor]=useState("white");
  const [count,setCount]= useState(contador);
  useEffect(() => {
   // setCount(count + 1);
   document.title = count
   if(count>0){
     setColor("blue")
   }else if(count<0){
     setColor("red")
   }else {
     setColor("initcolor")
   }
   }, [count]);
  
   

return (
  < >
   <Box background={color} >
      <Heading>{count}</Heading>
     <Button  onClick={() => setCount(count + 1)} colorScheme={"red"}>+</Button>
     <Button  onClick={() => setCount(count - 1)} colorScheme={"green"}>-</Button>
     <Button onClick={()=>setCount(0)} colorScheme={"yellow"}>0</Button>
         
   </Box>
  </>
)
}
export default Contar;