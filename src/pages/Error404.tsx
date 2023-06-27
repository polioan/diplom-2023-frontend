import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { TypedLink } from '../pages'
import { useDocumentTitle } from '../hooks'

export default function Error404() {
  useDocumentTitle('404')

  return (
    <Flex align='center' justify='center' minH='100vh' overflow='hidden'>
      <Box>
        <Text fontWeight='medium' fontSize='md'>
          Ошибка 404, не найдено!
        </Text>
        <Flex py='2' justify='center'>
          <Button as={TypedLink} to='/'>
            На главную
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
