import { Text } from '@chakra-ui/react'
import { useState } from 'react';



const Componet=({ cont  })=>{
    const [text,setText]=useState(0)
    return (
    <>
    <div><Text fontSize='4xl'onChange={(e)=>setText(e.target.value)}>{text}</Text> </div>
    </>
)
}
export default Componet;