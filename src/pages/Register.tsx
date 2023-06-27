import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Divider,
  useToast,
  CloseButton,
  Checkbox,
  Icon,
  Flex,
} from '@chakra-ui/react'
import {
  Captcha,
  MainContainer,
  MainFooter,
  MainHeader,
  useCaptcha,
} from '../components'
import { useDocumentTitle } from '../hooks'
import { useState, useId, Fragment, useEffect } from 'react'
import { query } from '../lib/trpc'
import { create } from 'zustand'
import { v4 as uuid } from 'uuid'
import useLocalStorage from 'use-local-storage'
import { BsCheckCircleFill as CheckIcon } from 'react-icons/bs'

// #region Date helpers

function getMinDate() {
  const currentDate = new Date()
  return new Date(
    currentDate.getFullYear() - 35,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .split('T')[0]
}

function getMaxDate() {
  const currentDate = new Date()
  return new Date(
    currentDate.getFullYear() - 12,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .split('T')[0]
}

// #endregion

interface Values {
  firstName: string
  lastName: string
  middleName: string
  organization: string
  email: string
  phoneNumber: string
  stack: string
  specialization: string
  dateOfBirth: Date
}

interface ParticipantsStore {
  participantsLimit: number
  participants: { id: string; values: Values | null }[]
  add: () => void
  remove: (id: string) => void
  updateValue: (id: string, values: Values) => void
  clear: () => void
}

const useParticipantsStore = create<ParticipantsStore>((set, get) => ({
  participantsLimit: 6,
  participants: [{ id: uuid(), values: null }],
  add: () => {
    const { participants: oldParticipants, participantsLimit } = get()
    if (oldParticipants.length === participantsLimit) {
      return
    }
    const newParticipant = { id: uuid(), values: null }
    set({ participants: [...oldParticipants, newParticipant] })
  },
  remove: id => {
    const { participants: oldParticipants } = get()
    set({
      participants: oldParticipants.filter(
        participant => participant.id !== id
      ),
    })
  },
  updateValue: (id, values) => {
    const { participants: oldParticipants } = get()
    const index = oldParticipants.findIndex(
      participant => participant.id === id
    )
    if (index !== -1) {
      oldParticipants[index] = { id, values }
    }
  },
  clear: () => {
    set({ participants: [{ id: uuid(), values: null }] })
  },
}))

// #region BaseForm

function BaseForm({ onUpdate }: { onUpdate: (values: Values) => void }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [stack, setStack] = useState('')
  const [specialization, setSpecialization] = useState('frontend')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const firstNameId = 'firstName' + useId()
  const lastNameId = 'lastName' + useId()
  const middleNameId = 'middleName' + useId()
  const dateOfBirthId = 'dateOfBirth' + useId()
  const organizationId = 'organization' + useId()
  const emailId = 'email' + useId()
  const phoneNumberId = 'phoneNumber' + useId()
  const specializationId = 'specialization' + useId()
  const stackId = 'stack' + useId()

  useEffect(() => {
    onUpdate({
      firstName,
      lastName,
      middleName,
      organization,
      email,
      phoneNumber,
      stack,
      specialization,
      dateOfBirth: new Date(dateOfBirth),
    })
  }, [
    firstName,
    lastName,
    middleName,
    organization,
    email,
    phoneNumber,
    stack,
    specialization,
    dateOfBirth,
    onUpdate,
  ])

  return (
    <>
      <FormControl id={firstNameId} mb='4' isRequired>
        <FormLabel>Имя</FormLabel>
        <Input
          type='text'
          minLength={3}
          maxLength={30}
          autoComplete='given-name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </FormControl>
      <FormControl id={lastNameId} mb='4' isRequired>
        <FormLabel>Фамилия</FormLabel>
        <Input
          type='text'
          minLength={3}
          maxLength={30}
          autoComplete='family-name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </FormControl>
      <FormControl id={middleNameId} mb='4'>
        <FormLabel>Отчество</FormLabel>
        <Input
          type='text'
          minLength={3}
          maxLength={30}
          autoComplete='additional-name'
          value={middleName}
          onChange={e => setMiddleName(e.target.value)}
        />
      </FormControl>
      <FormControl id={dateOfBirthId} mb='4' isRequired>
        <FormLabel>Дата рождения</FormLabel>
        <Input
          type='date'
          min={getMinDate()}
          max={getMaxDate()}
          value={dateOfBirth}
          onChange={e => setDateOfBirth(e.target.value)}
        />
      </FormControl>
      <FormControl id={organizationId} mb='4' isRequired>
        <FormLabel>Учебное заведение / организация</FormLabel>
        <Input
          type='text'
          minLength={3}
          maxLength={200}
          autoComplete='organization'
          value={organization}
          onChange={e => setOrganization(e.target.value)}
        />
      </FormControl>
      <FormControl id={emailId} mb='4' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          autoComplete='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id={phoneNumberId} mb='4' isRequired>
        <FormLabel>Номер телефона</FormLabel>
        <Input
          type='tel'
          autoComplete='tel'
          minLength={4}
          maxLength={25}
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </FormControl>
      <FormControl id={specializationId} mb='4' isRequired>
        <FormLabel>Специализация</FormLabel>
        <Select
          value={specialization}
          onChange={e => setSpecialization(e.target.value)}
        >
          <option value='frontend'>Frontend-разработчик</option>
          <option value='backend'>Backend-разработчик</option>
          <option value='devops'>Специалист DevOps</option>
          <option value='techlead'>Tech lead</option>
          <option value='uxui'>UX/UI</option>
        </Select>
      </FormControl>
      <FormControl id={stackId} mb='4' isRequired>
        <FormLabel>Стек технологий</FormLabel>
        <Input
          type='text'
          minLength={3}
          maxLength={2015}
          value={stack}
          onChange={e => setStack(e.target.value)}
        />
      </FormControl>
      <Divider />
    </>
  )
}

// #endregion

export default function Register() {
  useDocumentTitle('Регистрация')

  const [isFormSubmitted, setIsFormSubmitted] = useLocalStorage(
    'form-submitted',
    false
  )

  const [commandName, setCommandName] = useState('')
  const [format, setFormat] = useState('')
  const [consentProcessingOfPersonalData, setConsentProcessingOfPersonalData] =
    useState(false)

  const participantsStore = useParticipantsStore()

  const {
    captcha,
    clearAndRefetchCaptcha,
    captchaText,
    setCaptchaText,
    randomString,
    isCaptchaSuccess,
  } = useCaptcha()

  const toast = useToast()

  const application = query.applications.create.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
      return clearAndRefetchCaptcha()
    },
    onSuccess: () => {
      participantsStore.clear()
      setCommandName('')
      setFormat('')
      setCaptchaText('')
      setConsentProcessingOfPersonalData(false)
      setIsFormSubmitted(true)
    },
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await application.mutateAsync({
      captchaText,
      randomString: randomString!,
      consentProcessingOfPersonalData: consentProcessingOfPersonalData as true,
      commandName,
      format: format as any,
      participants: participantsStore.participants
        .filter(participant => Boolean(participant.values))
        .map(participant => ({
          ...participant.values,
          middleName: participant.values?.middleName.trim()
            ? participant.values?.middleName
            : null,
        })) as any,
    })
  }

  return (
    <>
      <MainHeader links={['root', 'about', 'contacts', 'faq']} backToButton />
      <MainContainer as='main'>
        {isFormSubmitted ? (
          <Box>
            <Flex align='center' direction='column'>
              <Icon
                as={CheckIcon}
                color='purple.300'
                title='ОК'
                aria-label='ОК'
                h='200px'
                w='200px'
                mt='50px'
              />
              <Heading as='h1' mt='3'>
                Спасибо за регистрацию!
              </Heading>
              <Heading mt='3' size='md'>
                Ожидайте ответа на почте!
              </Heading>
            </Flex>
          </Box>
        ) : (
          <>
            <Heading color='purple.700' mb='3'>
              Капитан
            </Heading>
            <Box as='form' onSubmit={onSubmit}>
              <FormControl id='commandName' mb='4' isRequired>
                <FormLabel>Название команды</FormLabel>
                <Input
                  type='text'
                  minLength={3}
                  maxLength={70}
                  value={commandName}
                  onChange={e => setCommandName(e.target.value)}
                />
              </FormControl>
              <FormControl id='format' mb='4' isRequired>
                <FormLabel>В каком формате вы хотите участвовать?</FormLabel>
                <RadioGroup
                  value={format}
                  onChange={setFormat}
                  name='form-format'
                >
                  <Stack>
                    <Radio value='online' colorScheme='purple'>
                      Онлайн
                    </Radio>
                    <Radio value='offline' colorScheme='purple'>
                      Оффлайн
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <Divider mb='3' mt='3' />
              {participantsStore.participants.map((participant, i) => {
                return (
                  <Fragment key={participant.id}>
                    {i === 0 ? null : (
                      <Stack direction='row' align='center'>
                        <Heading color='purple.700' mb='3' mt='3'>
                          Участник
                        </Heading>
                        <CloseButton
                          aria-label='Удалить'
                          title='Удалить'
                          size='lg'
                          transform='translateY(3px)'
                          onClick={() =>
                            participantsStore.remove(participant.id)
                          }
                        />
                      </Stack>
                    )}
                    <BaseForm
                      onUpdate={values =>
                        participantsStore.updateValue(participant.id, values)
                      }
                    />
                  </Fragment>
                )
              })}
              <Captcha captcha={captcha} mt='4' mb='4' />
              <FormControl id='captchaText' mb='4' isRequired>
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
              <FormControl
                id='consentProcessingOfPersonalData'
                mb='4'
                isRequired
              >
                <Checkbox
                  isRequired
                  isChecked={consentProcessingOfPersonalData}
                  onChange={e =>
                    setConsentProcessingOfPersonalData(e.target.checked)
                  }
                  colorScheme='purple'
                >
                  Я согласен на обработку персональных данных
                </Checkbox>
              </FormControl>
              <Stack mt='3' direction='row'>
                <Button
                  type='button'
                  onClick={participantsStore.add}
                  isDisabled={
                    participantsStore.participants.length ===
                    participantsStore.participantsLimit
                  }
                >
                  Добавить участника
                </Button>
                <Button
                  isLoading={!isCaptchaSuccess || application.isLoading}
                  isDisabled={participantsStore.participants.length < 2}
                  title={
                    participantsStore.participants.length < 2
                      ? 'Слишком мало участников!'
                      : undefined
                  }
                  aria-label={
                    participantsStore.participants.length < 2
                      ? 'Слишком мало участников!'
                      : undefined
                  }
                  type='submit'
                  bg='purple.600'
                  color='white'
                  _hover={{ bg: 'purple.700' }}
                >
                  Отправить
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </MainContainer>
      <MainFooter />
    </>
  )
}
