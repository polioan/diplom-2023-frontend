import { Flex, Text, type FlexProps } from '@chakra-ui/react'

export function MainFooter({ children, ...otherProps }: FlexProps) {
  return (
    <Flex
      as='footer'
      align='center'
      justify='center'
      p='4'
      bg='purple.700'
      {...otherProps}
    >
      <Text fontWeight='medium' color='white'>
        {children === undefined ? '© ФГАНУ НИИ "Спецвузавтоматика"' : children}
      </Text>
    </Flex>
  )
}
