import { Box, Flex, Text, Icon, Button } from '@chakra-ui/react'
import { FaFacebook, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

const Index = () => {
  return (
    <Flex
      direction="column"
      bg="gray.900"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      gridGap="8"
      px="12"
    >
      <Box mb="6">
        <Image src="/images/logo-suburb.png" width={50} height={50} />
      </Box>

      <Flex
        direction="column"
        gridGap="4"
        w={{
          base: '100%',
          md: '48em'
        }}
      >
        <Button
          as="a"
          href="/"
          py="6"
          borderRadius="md"
          bg="gray.700"
          aria-label="Botão para visualizar website "
        >
          <Text fontSize="md" fontWeight="semibold" color="white">
            Visitar website
          </Text>
        </Button>

        <Button
          as="a"
          href="https://www.youtube.com/channel/UCyv0sz6l41aFHMR-gnThZHA"
          py="6"
          borderRadius="md"
          bg="gray.700"
          aria-label="Ir para o canal no Youtube"
        >
          <Text fontSize="md" fontWeight="semibold" color="white">
            Canal no Youtube
          </Text>
        </Button>

        <Button
          as="a"
          href="https://www.facebook.com/buysuburb"
          py="6"
          borderRadius="md"
          bg="gray.700"
          aria-label="Ir para o canal no Youtube"
        >
          <Text fontSize="md" fontWeight="semibold" color="white">
            Página no Facebook
          </Text>
        </Button>

        <Button
          as="a"
          href="https://instagram.com/suburbstyle"
          py="6"
          borderRadius="md"
          bg="gray.700"
          aria-label="Ir para o canal no Youtube"
        >
          <Text fontSize="md" fontWeight="semibold" color="white">
            Perfil no Instagram
          </Text>
        </Button>

        <Button
          as="a"
          href="mailto:contato@suburbstyle.com.br"
          py="6"
          borderRadius="md"
          bg="gray.700"
          aria-label="Botão para contato via e-mail"
        >
          <Text fontSize="md" fontWeight="semibold" color="white">
            Conexão via e-mail
          </Text>
        </Button>

        <Button
          as="a"
          href="#"
          py="6"
          borderRadius="md"
          bg="gray.700"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          aria-label="Botão para contato via e-mail"
        >
          <Text fontSize="md" fontWeight="semibold" color="white">
            Envie uma guia
          </Text>
        </Button>

        <Flex alignItems="center" gridGap="4" my="8" justifyContent="center">
          <Icon as={FaFacebook} fontSize="xl" color="white" />
          <Icon as={FaYoutube} fontSize="xl" color="white" />
          <Icon as={FaInstagram} fontSize="xl" color="white" />
          <Icon as={FaEnvelope} fontSize="xl" color="white" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Index
