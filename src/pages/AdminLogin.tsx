import {
  CardBody,
  Flex,
  useToast,
  Card,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Button,
} from '@chakra-ui/react'
import { useCsrfToken, useDocumentTitle } from '../hooks'
import { query } from '../lib/trpc'
import { Captcha, MainContainer, useCaptcha } from '../components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Pathname } from '../pages'

export default function AdminLogin() {
  useDocumentTitle('Войти')

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const {
    captcha,
    clearAndRefetchCaptcha,
    captchaText,
    setCaptchaText,
    randomString,
    isCaptchaSuccess,
  } = useCaptcha()

  const toast = useToast()

  const [, setCsrfToken] = useCsrfToken()

  const navigate = useNavigate()

  const loginMutation = query.admin.login.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
      return clearAndRefetchCaptcha()
    },
    onSuccess: data => {
      if (import.meta.env.DEV) {
        window.localStorage.setItem('dev-token', (data as any).token)
      }
      setCsrfToken(data.csrfToken)
      navigate('/_/admin' satisfies Pathname)
    },
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await loginMutation.mutateAsync({
      captchaText,
      login,
      password,
      randomString: randomString!,
    })
  }

  return (
    <Flex align='center' justify='center' minH='100vh' overflow='hidden'>
      <MainContainer as='main'>
        <Card>
          <CardBody as='form' onSubmit={onSubmit}>
            <Heading as='h1' mb='2'>
              Войти
            </Heading>
            <FormControl id='login' isRequired>
              <FormLabel>Логин</FormLabel>
              <Input
                type='text'
                autoComplete='username'
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
            </FormControl>
            <FormControl id='password' mt='4' isRequired>
              <FormLabel>Пароль</FormLabel>
              <Input
                type='password'
                autoComplete='current-password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <Captcha captcha={captcha} mt='4' />
            <FormControl id='captchaText' mt='4' isRequired>
              <FormLabel>Текст с картинки</FormLabel>
              <Input
                autoCapitalize='off'
                autoComplete='off'
                autoCorrect='off'
                spellCheck={false}
                type='text'
                value={captchaText}
                onChange={e => setCaptchaText(e.target.value)}
              />
            </FormControl>
            <Button
              isLoading={!isCaptchaSuccess || loginMutation.isLoading}
              type='submit'
              bg='purple.600'
              color='white'
              _hover={{ bg: 'purple.700' }}
              mt='4'
            >
              Отправить
            </Button>
          </CardBody>
        </Card>
      </MainContainer>
    </Flex>
  )
}
