import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Flex,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'
import {
  AdminRightMenu,
  MainContainer,
  MainFooter,
  MainHeader,
} from '../components'
import { useCsrfToken, useDocumentTitle } from '../hooks'
import { query } from '../lib/trpc'
import { useState } from 'react'

function CustomTh({ children }: { children: string }) {
  return <Th textAlign='start'>{children}</Th>
}

function CustomTd({ children }: { children: string }) {
  return (
    <Td
      textAlign='start'
      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='nowrap'
      title={children}
    >
      {children}
    </Td>
  )
}

export default function AdminFeedback() {
  useDocumentTitle('Вопросы')

  const [notShowAnswered, setNotShowAnswered] = useState(true)

  const feedback = query.feedback.get.useQuery()

  const toast = useToast()

  const deleteFeedback = query.feedback.deleteById.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
    },
    onSuccess: () => {
      return feedback.refetch()
    },
  })

  const [replyText, setReplyText] = useState('')
  const [replyId, setReplyId] = useState<number | null>(null)

  const replyDisclosure = useDisclosure()

  const reply = query.feedback.reply.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
    },
    onSuccess: () => {
      replyDisclosure.onClose()
      setReplyText('')
      return feedback.refetch()
    },
  })

  const [csrfToken] = useCsrfToken()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await reply.mutateAsync({
      text: replyText,
      id: replyId as number,
      csrfToken,
    })
  }

  return (
    <>
      <MainHeader
        links={[
          'root',
          { to: '/_/admin', children: 'К управлению' },
          { to: '/_/admin/applications', children: 'Заявки' },
        ]}
        backToButton='/_/admin'
        rightMenu={<AdminRightMenu />}
      />
      <MainContainer as='main'>
        <Checkbox
          isChecked={notShowAnswered}
          onChange={e => setNotShowAnswered(e.target.checked)}
        >
          Скрыть с ответами
        </Checkbox>
        <Stack spacing='3' mt='2'>
          {[...(feedback.data?.feedback ?? [])].reverse().map(value => {
            if (notShowAnswered && value.answered) {
              return null
            }
            return (
              <Card key={value.id}>
                <CardBody>
                  <TableContainer>
                    <Table
                      variant='simple'
                      size='sm'
                      css={{ tableLayout: 'fixed' }}
                    >
                      <Thead>
                        <Tr>
                          <CustomTh>Создано в</CustomTh>
                          <CustomTh>Имя</CustomTh>
                          <CustomTh>Email</CustomTh>
                          <CustomTh>Название команды</CustomTh>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <CustomTd>
                            {value.createdAt.toLocaleString()}
                          </CustomTd>
                          <CustomTd>{value.name}</CustomTd>
                          <CustomTd>{value.email}</CustomTd>
                          <CustomTd>{value.commandName?.trim() || ''}</CustomTd>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <Box mt='4' mb='4'>
                    {value.message}
                  </Box>
                  <Flex gap='2'>
                    <Button
                      onClick={() =>
                        deleteFeedback.mutate({ id: value.id, csrfToken })
                      }
                      isLoading={
                        deleteFeedback.variables?.id === value.id &&
                        deleteFeedback.isLoading
                      }
                    >
                      Удалить
                    </Button>
                    <Button
                      onClick={() => {
                        setReplyId(value.id)
                        replyDisclosure.onOpen()
                      }}
                    >
                      Ответить
                    </Button>
                  </Flex>
                </CardBody>
              </Card>
            )
          })}
        </Stack>
        <Modal
          isOpen={replyDisclosure.isOpen}
          onClose={replyDisclosure.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Отправить ответ на почту</ModalHeader>
            <ModalCloseButton aria-label='Закрыть' title='Закрыть' />
            <ModalBody mb='4'>
              <Box as='form' onSubmit={onSubmit}>
                <FormControl id='message' mb='4' isRequired>
                  <FormLabel>Сообщение</FormLabel>
                  <Textarea
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                  />
                </FormControl>
                <Flex gap='2'>
                  <Button
                    isLoading={reply.isLoading}
                    type='submit'
                    bg='purple.600'
                    color='white'
                    _hover={{ bg: 'purple.700' }}
                  >
                    Отправить
                  </Button>
                  <Button
                    onClick={() =>
                      setReplyText(
                        'Спасибо за обращение! Встретимся на мероприятии.'
                      )
                    }
                  >
                    Вставить шаблон
                  </Button>
                </Flex>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </MainContainer>
      <MainFooter />
    </>
  )
}
