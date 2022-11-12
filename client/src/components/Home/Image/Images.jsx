import { Box, Button, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Header from '../Top/Header'

export default function Images() {
  return (
    <div>
    <Stack height='400px' border={"2px solid black"}>
        <Box w='100%'>
      <Image h='400px' w='100%' src='https://q-xx.bstatic.com/xdata/images/xphoto/3000x1033/177464000.jpeg?k=e74f22d059a85966c866bcf068f5a2a49f08ace871a3f459f5d71569c499896a&o='/>
      <Button left='50px' w='150px' bg='blue' color='white' h='40px' marginTop='-170px'>Explore Deals</Button>
      </Box>
    </Stack>

    <Header/>
    </div>
  )
}
