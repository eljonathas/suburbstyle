import { Button, Flex, Box, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const IndexPage = () => {
  return (
    <Flex
      direction="column"
      bg="gray.900"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      gridGap="8"
    >
      <Box>
        <Image src="/images/logo-suburb.png" width={50} height={50} />
      </Box>

      <Text textAlign="center" w="80" fontWeight="bold">
        O site ainda está em desenvolvimento, mas você pode consultar todos os
        links abaixo
      </Text>

      <Link href="/tree">
        <Button bg="gray.800">
          <Icon as={FaArrowRight} mr="2" /> Ver todos os links
        </Button>
      </Link>
    </Flex>
  )
}

export default IndexPage
