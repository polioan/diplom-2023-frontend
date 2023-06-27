import { Container, type ContainerProps } from '@chakra-ui/react'

export function MainContainer({ children, ...otherProps }: ContainerProps) {
  return (
    <Container maxW='container.lg' p='4' flex='1' {...otherProps}>
      {children}
    </Container>
  )
}
