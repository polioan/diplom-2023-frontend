import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Icon,
  SkeletonText,
  Text,
  type BoxProps,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  FormControl,
  FormLabel,
  Input,
  type ModalProps,
} from '@chakra-ui/react'
import { BsGeoAltFill as GeoIcon } from 'react-icons/bs'
import { FiCalendar as CalendarIcon } from 'react-icons/fi'
import {
  AdminRightMenu,
  MainContainer,
  MainFooter,
  MainHeader,
} from '../components'
import { useCsrfToken, useDocumentTitle } from '../hooks'
import { query } from '../lib/trpc'
import { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid'

function DataSingleCard({
  icon,
  heading,
  text,
  onClick,
  ...otherProps
}: BoxProps & {
  heading: string
  text: React.ReactNode
  icon: React.ElementType
  onClick: () => void
}) {
  return (
    <Box {...otherProps}>
      <Card>
        <CardBody>
          <Flex align='center'>
            <Icon as={icon} color='purple.700' boxSize={12} />
            <Box ml='4'>
              <Heading size='md'>{heading}</Heading>
              {typeof text === 'string' ? (
                <Text fontSize='xl'>{text}</Text>
              ) : (
                text
              )}
            </Box>
          </Flex>
          <Button mt='4' onClick={onClick}>
            Сменить
          </Button>
        </CardBody>
      </Card>
    </Box>
  )
}

function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  ...otherProps
}: ModalProps & {
  isOpen: boolean
  onClose: () => void
  title: string
  children?: React.ReactNode
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...otherProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton aria-label='Закрыть' title='Закрыть' />
        <ModalBody mb='4'>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

function useContent() {
  const toast = useToast()

  const [csrfToken] = useCsrfToken()

  const content = query.content.changeCommon.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
    },
  })

  return { content, csrfToken }
}

function PlaceModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  const utils = query.useContext()

  const { content, csrfToken } = useContent()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await content.mutateAsync({
      address: address.trim() ? address : undefined,
      city: city.trim() ? city : undefined,
      csrfToken,
    })
    await utils.info.eventPlace.invalidate()
    onClose()
  }

  return (
    <CustomModal
      title='Сменить место мероприятия'
      isOpen={isOpen}
      onClose={onClose}
    >
      <Box as='form' onSubmit={onSubmit}>
        <FormControl id='address' mb='4'>
          <FormLabel>Адрес</FormLabel>
          <Input
            type='text'
            minLength={5}
            maxLength={50}
            autoComplete='street-address'
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </FormControl>
        <FormControl id='city' mb='4'>
          <FormLabel>Город</FormLabel>
          <Input
            type='text'
            minLength={3}
            maxLength={50}
            autoComplete='address-level2'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </FormControl>
        <Button
          isLoading={content.isLoading}
          type='submit'
          bg='purple.600'
          color='white'
          _hover={{ bg: 'purple.700' }}
        >
          Отправить
        </Button>
      </Box>
    </CustomModal>
  )
}

function DateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  const utils = query.useContext()

  const { content, csrfToken } = useContent()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await content.mutateAsync({
      dateStart: new Date(dateStart),
      dateEnd: new Date(dateEnd),
      csrfToken,
    })
    await utils.info.eventDate.invalidate()
    onClose()
  }

  return (
    <CustomModal
      title='Сменить время мероприятия'
      isOpen={isOpen}
      onClose={onClose}
    >
      <Box as='form' onSubmit={onSubmit}>
        <FormControl id='dateStart' mb='4'>
          <FormLabel>Дата начала</FormLabel>
          <Input
            type='date'
            value={dateStart}
            onChange={e => setDateStart(e.target.value)}
          />
        </FormControl>
        <FormControl id='dateEnd' mb='4'>
          <FormLabel>Дата конца</FormLabel>
          <Input
            type='date'
            value={dateEnd}
            onChange={e => setDateEnd(e.target.value)}
          />
        </FormControl>
        <Button
          isLoading={content.isLoading}
          type='submit'
          bg='purple.600'
          color='white'
          _hover={{ bg: 'purple.700' }}
        >
          Отправить
        </Button>
      </Box>
    </CustomModal>
  )
}

function ScheduleModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [days, setDays] = useState<
    { id: string; sections: { time: string; name: string; id: string }[] }[]
  >([])

  function addDay() {
    setDays([...days, { id: uuid(), sections: [] }])
  }

  function addSection(id: string) {
    setDays(
      days.map(day => {
        if (day.id === id) {
          return {
            id,
            sections: [...day.sections, { id: uuid(), name: '', time: '' }],
          }
        }
        return day
      })
    )
  }

  function changeSectionName(iId: string, jId: string, name: string) {
    setDays(
      days.map(day => {
        if (day.id === iId) {
          return {
            id: iId,
            sections: day.sections.map(section => {
              if (section.id === jId) {
                return { id: jId, time: section.time, name }
              }
              return section
            }),
          }
        }
        return day
      })
    )
  }

  function changeSectionTime(iId: string, jId: string, time: string) {
    setDays(
      days.map(day => {
        if (day.id === iId) {
          return {
            id: iId,
            sections: day.sections.map(section => {
              if (section.id === jId) {
                return { id: jId, name: section.name, time }
              }
              return section
            }),
          }
        }
        return day
      })
    )
  }

  const toast = useToast()

  const [csrfToken] = useCsrfToken()

  const utils = query.useContext()

  const changeSchedule = query.content.changeSchedule.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
    },
    onSuccess: async () => {
      setDays([])
      await utils.info.schedule.invalidate()
      onClose()
    },
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await changeSchedule.mutateAsync({
      csrfToken,
      days: days.map(day => {
        return {
          sections: day.sections.map(({ name, time }) => {
            return { name, time: new Date(time) }
          }),
        }
      }),
    })
  }

  return (
    <CustomModal
      title='Изменить расписание'
      isOpen={isOpen}
      onClose={() => {
        setDays([])
        onClose()
      }}
      size='4xl'
    >
      <Box as='form' onSubmit={onSubmit}>
        {days.map((day, i) => {
          return (
            <Box key={day.id}>
              <Button mb='2' onClick={() => addSection(day.id)}>
                Добавить секцию
              </Button>
              {day.sections.map((section, j) => {
                return (
                  <Flex key={section.id} gap='2'>
                    <FormControl id={`day-name-${i}-${j}`} mb='4' isRequired>
                      <FormLabel>Название</FormLabel>
                      <Input
                        type='text'
                        value={section.name}
                        onChange={e =>
                          changeSectionName(day.id, section.id, e.target.value)
                        }
                      />
                    </FormControl>
                    <FormControl id={`day-time-${i}-${j}`} mb='4' isRequired>
                      <FormLabel>Время</FormLabel>
                      <Input
                        type='datetime-local'
                        value={section.time}
                        onChange={e =>
                          changeSectionTime(day.id, section.id, e.target.value)
                        }
                      />
                    </FormControl>
                  </Flex>
                )
              })}
              <Divider mb='2' />
            </Box>
          )
        })}
        <Flex gap='2'>
          <Button
            isLoading={changeSchedule.isLoading}
            type='submit'
            bg='purple.600'
            color='white'
            _hover={{ bg: 'purple.700' }}
          >
            Отправить
          </Button>
          <Button onClick={addDay}>Добавить день</Button>
        </Flex>
      </Box>
    </CustomModal>
  )
}

export default function AdminRoot() {
  useDocumentTitle('Админ')

  const place = query.info.eventPlace.useQuery()
  const date = query.info.eventDate.useQuery()
  const schedule = query.info.schedule.useQuery(undefined, {
    refetchOnMount: false,
  })
  const optimisticSchedule = schedule.data ?? []

  const placeDisclosure = useDisclosure()
  const dateDisclosure = useDisclosure()
  const scheduleDisclosure = useDisclosure()

  return (
    <>
      <MainHeader
        links={[
          'root',
          { to: '/_/admin/feedback', children: 'Вопросы' },
          { to: '/_/admin/applications', children: 'Заявки' },
        ]}
        rightMenu={<AdminRightMenu />}
      />
      <MainContainer
        as='main'
        display='flex'
        flexDirection='column'
        maxH='calc(var(--chakra-vh) - var(--header-height) * 2)'
        overflowY='hidden'
      >
        <Grid
          minH='full'
          templateColumns='1fr 1fr'
          templateRows='1fr 1fr'
          templateAreas={`"a c"
                          "b c"`}
          gap='5'
          flex='1'
        >
          <DataSingleCard
            as='section'
            gridArea='a'
            heading='Место мероприятия'
            icon={GeoIcon}
            onClick={placeDisclosure.onOpen}
            text={
              <>
                <SkeletonText
                  isLoaded={place.isSuccess}
                  noOfLines={1}
                  skeletonHeight='30px'
                  w='220px'
                  whiteSpace='nowrap'
                >
                  <Text fontSize='xl'>{place.data?.address}</Text>
                </SkeletonText>
                <SkeletonText
                  isLoaded={place.isSuccess}
                  noOfLines={1}
                  skeletonHeight='18px'
                  whiteSpace='nowrap'
                >
                  <Text fontSize='xs'>{place.data?.city}</Text>
                </SkeletonText>
              </>
            }
          />
          <PlaceModal
            isOpen={placeDisclosure.isOpen}
            onClose={placeDisclosure.onClose}
          />
          <DataSingleCard
            as='section'
            gridArea='b'
            heading='Время мероприятия'
            icon={CalendarIcon}
            onClick={dateDisclosure.onOpen}
            text={
              <SkeletonText
                isLoaded={date.isSuccess}
                noOfLines={1}
                skeletonHeight='30px'
                w='187px'
                whiteSpace='nowrap'
              >
                <Text fontSize='xl'>{date.data?.rangeAsString}</Text>
              </SkeletonText>
            }
          />
          <DateModal
            isOpen={dateDisclosure.isOpen}
            onClose={dateDisclosure.onClose}
          />
          <Card as='section' gridArea='c'>
            <CardBody display='flex' flexDirection='column' overflowY='scroll'>
              <Box>
                <Heading>Расписание</Heading>
                {optimisticSchedule.map((data, i, arr) => {
                  return (
                    <Fragment key={`${data.dayAsString}${data.dayNumber}${i}`}>
                      <Heading size='md' mt='2' mb='2'>
                        {data.dayAsString}
                      </Heading>
                      {data.sections.map((section, i) => {
                        return (
                          <Text
                            key={`${
                              section.name
                            }-${section.time.toString()}-${i}`}
                            mt='1'
                            mb='1'
                          >
                            {`${section.timeRangeAsString} - ${section.name}`}
                          </Text>
                        )
                      })}
                      {arr.length - 1 !== i ? <Divider mt='2' mb='2' /> : null}
                    </Fragment>
                  )
                })}
              </Box>
              <Box mt='4'>
                <Button onClick={scheduleDisclosure.onOpen}>Изменить</Button>
              </Box>
            </CardBody>
          </Card>
          <ScheduleModal
            isOpen={scheduleDisclosure.isOpen}
            onClose={scheduleDisclosure.onClose}
          />
        </Grid>
      </MainContainer>
      <MainFooter />
    </>
  )
}
