import {
  Stack,
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Flex,
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
  Text,
  Divider,
  Heading,
  type TableColumnHeaderProps,
  type TableCellProps,
} from '@chakra-ui/react'
import {
  MainHeader,
  AdminRightMenu,
  MainContainer,
  MainFooter,
} from '../components'
import { useCsrfToken, useDocumentTitle } from '../hooks'
import { query } from '../lib/trpc'
import { useState } from 'react'

const commonThTdProps = { display: 'block' } satisfies
  | TableColumnHeaderProps
  | TableCellProps

function CustomTh({ children }: { children: string }) {
  return (
    <Th role='columnheader' paddingStart='0' {...commonThTdProps}>
      {children}
    </Th>
  )
}

function CustomTd({ children }: { children: string }) {
  return (
    <Td
      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='nowrap'
      title={children}
      role='cell'
      paddingTop='0'
      paddingBottom='0'
      flex='1 1 0px'
      {...commonThTdProps}
    >
      <Flex h='full' align='center'>
        {children}
      </Flex>
    </Td>
  )
}

function toReadableSpecialization(
  specialization: 'frontend' | 'backend' | 'devops' | 'techlead' | 'uxui' // RouterOutputs['applications']['get']['registered'][number]['participants'][number]['specialization']
) {
  switch (specialization) {
    case 'frontend':
      return 'Frontend-разработчик'
    case 'backend':
      return 'Backend-разработчик'
    case 'devops':
      return 'Специалист DevOps'
    case 'techlead':
      return 'Tech lead'
    case 'uxui':
      return 'UX/UI'
    default:
      return ''
  }
}

export default function AdminApplications() {
  useDocumentTitle('Заявки')

  const [notShowAnswered, setNotShowAnswered] = useState(true)

  const applications = query.applications.get.useQuery()

  const optimisticApplications = [...(applications.data?.registered ?? [])]
    .reverse()
    .filter(value => {
      if (notShowAnswered) {
        return !value.answered
      }
      return true
    })

  const [csrfToken] = useCsrfToken()

  const toast = useToast()

  const deleteApplication = query.applications.deleteById.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
    },
    onSuccess: () => {
      return applications.refetch()
    },
  })

  const [replyText, setReplyText] = useState('')
  const [replyId, setReplyId] = useState<number | null>(null)
  const replyDisclosure = useDisclosure()

  const reply = query.applications.reply.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
    },
    onSuccess: ({ unsuccessfulEmails }) => {
      if (unsuccessfulEmails.length) {
        toast({
          title: `На адреса ${unsuccessfulEmails.join(', ')} email не дошли!`,
          status: 'error',
          duration: null,
          isClosable: true,
        })
      }
      replyDisclosure.onClose()
      setReplyText('')
      return applications.refetch()
    },
  })

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
          { to: '/_/admin/feedback', children: 'Вопросы' },
        ]}
        rightMenu={<AdminRightMenu />}
      />
      <MainContainer as='main'>
        <Checkbox
          isChecked={notShowAnswered}
          onChange={e => setNotShowAnswered(e.target.checked)}
        >
          Скрыть с ответами
        </Checkbox>
        <Flex>
          Общее количество:&nbsp;
          <Text fontWeight='medium'>{optimisticApplications.length}</Text>
        </Flex>
        <Stack spacing='3' mt='2'>
          {optimisticApplications.map(value => {
            const { participants } = value
            return (
              <Card key={value.id}>
                <CardBody>
                  <Flex>
                    Команда:&nbsp;
                    <Text fontWeight='medium'>{value.commandName.trim()}</Text>
                  </Flex>
                  <Flex>
                    Дата подачи заявки:&nbsp;
                    <Text fontWeight='medium'>
                      {value.createdAt.toLocaleString()}
                    </Text>
                  </Flex>
                  <Flex>
                    Желаемый формат:&nbsp;
                    <Text fontWeight='medium'>
                      {value.format === 'online' ? 'Онлайн' : 'Оффлайн'}
                    </Text>
                  </Flex>
                  <Divider mt='2' mb='2' />
                  <Heading size='md' mb='2'>
                    Участники
                  </Heading>
                  <Stack spacing='2'>
                    {participants.map(participant => {
                      return (
                        <Card key={participant.id} variant='filled'>
                          <CardBody>
                            <TableContainer>
                              <Table
                                variant='simple'
                                size='sm'
                                display='flex'
                                role='table'
                              >
                                <Thead role='rowgroup'>
                                  <Tr role='row'>
                                    <CustomTh>Имя</CustomTh>
                                    <CustomTh>Фамилия</CustomTh>
                                    <CustomTh>Отчество</CustomTh>
                                    <CustomTh>Дата рождения</CustomTh>
                                    <CustomTh>
                                      Учебное заведение / организация
                                    </CustomTh>
                                    <CustomTh>Email</CustomTh>
                                    <CustomTh>Номер телефона</CustomTh>
                                    <CustomTh>Специализация</CustomTh>
                                    <CustomTh>Стек технологий</CustomTh>
                                  </Tr>
                                </Thead>
                                <Tbody role='rowgroup'>
                                  <Tr
                                    role='row'
                                    display='flex'
                                    flexDirection='column'
                                    h='full'
                                    justifyContent='space-around'
                                  >
                                    <CustomTd>{participant.firstName}</CustomTd>
                                    <CustomTd>{participant.lastName}</CustomTd>
                                    <CustomTd>
                                      {participant.middleName ?? ''}
                                    </CustomTd>
                                    <CustomTd>
                                      {participant.dateOfBirth.toLocaleDateString()}
                                    </CustomTd>
                                    <CustomTd>
                                      {participant.organization}
                                    </CustomTd>
                                    <CustomTd>{participant.email}</CustomTd>
                                    <CustomTd>
                                      {participant.phoneNumber}
                                    </CustomTd>
                                    <CustomTd>
                                      {toReadableSpecialization(
                                        participant.specialization
                                      )}
                                    </CustomTd>
                                    <CustomTd>{participant.stack}</CustomTd>
                                  </Tr>
                                </Tbody>
                              </Table>
                            </TableContainer>
                          </CardBody>
                        </Card>
                      )
                    })}
                  </Stack>
                  <Flex gap='2' mt='2'>
                    <Button
                      onClick={() =>
                        deleteApplication.mutate({ id: value.id, csrfToken })
                      }
                      isLoading={
                        deleteApplication.variables?.id === value.id &&
                        deleteApplication.isLoading
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
                        'Спасибо за обращение! Вы приняты на участие оффлайн!'
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
