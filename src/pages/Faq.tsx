import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Highlight,
  Input,
  ListItem,
  OrderedList,
  SkeletonText,
  Stack,
  Text,
  Textarea,
  UnorderedList,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  Captcha,
  MainContainer,
  MainFooter,
  MainHeader,
  useCaptcha,
} from '../components'
import { useDocumentTitle, useScrollToSection } from '../hooks'
import { query } from '../lib/trpc'
import { TypedLink } from '../pages'

function CustomAccordionItem({
  title,
  children,
  stack,
}: {
  title: string
  children: React.ReactNode
  stack?: boolean | undefined
}) {
  return (
    <AccordionItem>
      <Heading p='1'>
        <AccordionButton>
          <Box as='span' flex='1' textAlign='left' fontWeight='semibold'>
            {title}
          </Box>
          <AccordionIcon color='purple.700' />
        </AccordionButton>
      </Heading>
      <AccordionPanel pb='4'>
        {stack ? (
          <Stack spacing='3'>{children}</Stack>
        ) : typeof children === 'string' ? (
          <Text>{children}</Text>
        ) : (
          children
        )}
      </AccordionPanel>
    </AccordionItem>
  )
}

function Form() {
  const {
    captcha,
    clearAndRefetchCaptcha,
    captchaText,
    clearCaptchaText,
    setCaptchaText,
    randomString,
    isCaptchaSuccess,
  } = useCaptcha()

  const toast = useToast()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [commandName, setCommandName] = useState('')
  const [consentProcessingOfPersonalData, setConsentProcessingOfPersonalData] =
    useState(false)

  const feedback = query.feedback.create.useMutation({
    onError: e => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
      return clearAndRefetchCaptcha()
    },
    onSuccess: () => {
      toast({
        title: 'Спасибо. Вопрос успешно отправлен, ожидайте ответ на почте!',
        status: 'success',
        isClosable: true,
      })
      clearCaptchaText()
      setEmail('')
      setMessage('')
      setName('')
      setCommandName('')
      setConsentProcessingOfPersonalData(false)
    },
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await feedback.mutateAsync({
      email,
      message,
      name,
      commandName: commandName.trim() ? commandName : null,
      captchaText,
      randomString: randomString!,
      consentProcessingOfPersonalData: consentProcessingOfPersonalData as true,
    })
  }

  return (
    <Box as='form' mt='3' onSubmit={onSubmit} id='question'>
      <Heading mt='2' mb='2'>
        Задать вопрос
      </Heading>
      <FormControl id='email' mb='4' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          autoComplete='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id='name' mb='4' isRequired>
        <FormLabel>Имя</FormLabel>
        <Input
          type='text'
          autoComplete='name'
          minLength={3}
          maxLength={40}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id='commandName' mb='4'>
        <FormLabel>Имя команды</FormLabel>
        <Input
          type='text'
          minLength={3}
          maxLength={70}
          value={commandName}
          onChange={e => setCommandName(e.target.value)}
        />
      </FormControl>
      <FormControl id='message' mb='4' isRequired>
        <FormLabel>Сообщение</FormLabel>
        <Textarea
          value={message}
          maxLength={2015}
          onChange={e => setMessage(e.target.value)}
        />
      </FormControl>
      <Captcha captcha={captcha} mb='4' />
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
      <FormControl id='consentProcessingOfPersonalData' mb='4' isRequired>
        <Checkbox
          isRequired
          isChecked={consentProcessingOfPersonalData}
          onChange={e => setConsentProcessingOfPersonalData(e.target.checked)}
          colorScheme='purple'
        >
          Я согласен на обработку персональных данных
        </Checkbox>
      </FormControl>
      <Button
        isLoading={!isCaptchaSuccess || feedback.isLoading}
        type='submit'
        bg='purple.600'
        color='white'
        _hover={{ bg: 'purple.700' }}
      >
        Отправить
      </Button>
    </Box>
  )
}

export default function Faq() {
  useDocumentTitle('FAQ')
  useScrollToSection()
  const date = query.info.eventDate.useQuery()
  const place = query.info.eventPlace.useQuery()

  return (
    <>
      <MainHeader
        links={['root', 'about', 'contacts', 'register']}
        backToButton
      />
      <MainContainer as='main'>
        <Accordion as='section' allowMultiple>
          <CustomAccordionItem title='Что такое хакатон?'>
            Хакатон - это соревновательное мероприятие, обычно
            продолжительностью от нескольких дней до нескольких недель, в рамках
            которого участники собираются в команды, чтобы совместно
            разрабатывать новые проекты, решать технические задачи или находить
            инновационные решения.
          </CustomAccordionItem>
          <CustomAccordionItem title='Как я могу получить справку об участии в хакатоне для вуза/работодателя?'>
            Для получения справки об участии в хакатоне для вашего университета
            или работодателя обратитесь к организаторам хакатона, они смогут
            предоставить вам необходимую информацию и подтверждение вашего
            участия.
          </CustomAccordionItem>
          <CustomAccordionItem title='Команде сообщают, что она допущена к участию в хакатоне?'>
            Организаторы хакатона обычно связываются с командами и участниками
            после процедуры отбора, чтобы сообщить о допуске к участию. Это
            может произойти по электронной почте или через платформу хакатона,
            которую они используют для связи с участниками.
          </CustomAccordionItem>
          <CustomAccordionItem title='Могу ли я состоять в двух и более командах одновременно?'>
            Обычно на хакатонах один участник может быть частью только одной
            команды. Такая политика обычно применяется, чтобы обеспечить равные
            условия для всех команд и справедливое разделение ресурсов и призов.
          </CustomAccordionItem>
          <CustomAccordionItem title='Дисквалификация'>
            Причины дисквалификации на хакатонах могут различаться, но некоторые
            общие факторы, которые могут привести к дисквалификации, включают
            нарушение правил и кодекса поведения хакатона, попытки
            мошенничества, неэтичное поведение или невыполнение требований,
            предъявляемых к проекту или решению.
          </CustomAccordionItem>
          <CustomAccordionItem title='Какие документы нужны для участия?'>
            На данном этапы никакие документы не требуются
          </CustomAccordionItem>
          <CustomAccordionItem title='Когда будет проходить хакатон?'>
            <SkeletonText
              isLoaded={date.isSuccess}
              noOfLines={1}
              w={date.isSuccess ? undefined! : '28%'}
            >
              {`c ${date.data?.rangeAsString}`}
            </SkeletonText>
          </CustomAccordionItem>
          <CustomAccordionItem title='Где будет проходить хакатон?'>
            <SkeletonText
              isLoaded={place.isSuccess}
              noOfLines={1}
              w={place.isSuccess ? undefined! : '28%'}
            >
              {`${place.data?.city}, ${place.data?.address}`}
            </SkeletonText>
          </CustomAccordionItem>
          <CustomAccordionItem title='Можно ли с едой на хакатон?' stack>
            <Text>
              На хакатонах есть определенные ограничения по еде. По соображениям
              гигиены и безопасности, запрещается приносить на хакатон продукты,
              требующие хранения в холодильнике или приготовления на месте,
              такие как готовые блюда, мясо, рыба или молочные продукты.
            </Text>
            <Text>
              Однако, наш хакатон предоставит питание на все дни мероприятия.
              Организаторы обеспечат питание для участников, включая завтраки,
              обеды, ужины и перекусы. Вы сможете насладиться приготовленными
              блюдами и закусками, предоставляемыми в специально организованных
              зонах питания.
            </Text>
          </CustomAccordionItem>
          <CustomAccordionItem
            title='Какие требования для участия на хакатоне?'
            stack
          >
            <Text>
              Для участия на нашем хакатоне требуется быть в возрасте до 35 лет.
              Это возрастное ограничение позволяет молодым и энергичным
              участникам воспользоваться возможностями, предлагаемыми хакатоном.
            </Text>
            <Text>
              <Highlight
                query={[
                  'backend-разработчик',
                  'frontend-разработчик',
                  'специалист по DevOps',
                  'технический лидер (tech lead)',
                  'специалист по интерфейсу/пользовательскому опыту (UX/UI)',
                ]}
                styles={{ px: '0.9', py: '0.9', bg: 'purple.100' }}
              >
                Также для участия необходимо иметь одну из следующих
                специальностей: backend-разработчик, frontend-разработчик,
                специалист по DevOps, технический лидер (tech lead) или
                специалист по интерфейсу/пользовательскому опыту (UX/UI).
              </Highlight>
            </Text>
          </CustomAccordionItem>
          <CustomAccordionItem title='Какой возраст для участия на хакатоне?'>
            До 35 лет!
          </CustomAccordionItem>
          <CustomAccordionItem title='Где можно узнать расписание хакатона?'>
            <Box>
              Актуальное расписание всегда находится на главной странице -
            </Box>
            <Button
              as={TypedLink}
              to={{ pathname: '/', search: 'section=schedule' }}
              mt='3'
            >
              Проверить
            </Button>
          </CustomAccordionItem>
          <CustomAccordionItem title='Какие специализации участвуют в хакатоне?'>
            <UnorderedList>
              <ListItem>Backend</ListItem>
              <ListItem>Frontend</ListItem>
              <ListItem>DevOps</ListItem>
              <ListItem>Tech lead</ListItem>
              <ListItem>UX/UI</ListItem>
            </UnorderedList>
          </CustomAccordionItem>
          <CustomAccordionItem title='Как будет проходить хакатон?'>
            Хакатоны могут иметь различные форматы в зависимости от
            организаторов. Обычно они включают период разработки проекта в
            командах, которые затем представляют свои результаты перед жюри или
            экспертами. Во время хакатона могут также проводиться лекции,
            мастер-классы и сетевые мероприятия.
          </CustomAccordionItem>
          <CustomAccordionItem title='Требуется ли личное присутствие?'>
            Наш хакатон предлагает возможность личного участия, однако
            количество мест ограничено. Вы также можете принять участие онлайн,
            что позволит вам участвовать из любого места.
          </CustomAccordionItem>
          <CustomAccordionItem title='Я могу участвовать один?'>
            К сожалению, наш хакатон не позволяет участие одиночным участникам.
            Мы поощряем коллаборацию и командную работу, поэтому минимальный
            размер команды для участия - два человека.
          </CustomAccordionItem>
          <CustomAccordionItem title='Сколько стоит участие?'>
            Участие в нашем хакатоне абсолютно бесплатно. Мы стремимся создать
            открытую и доступную среду для развития и инноваций. Вам не нужно
            платить за регистрацию или какие-либо другие сборы для участия в
            хакатоне. Присоединяйтесь к нам без дополнительных затрат и
            воплотите свои идеи в реальность.
          </CustomAccordionItem>
          <CustomAccordionItem title='Что такое кейс?'>
            Кейс - это конкретная проблема или задача, которую участники
            хакатона должны решить или реализовать. Кейсы могут быть
            предоставлены спонсорами или организаторами хакатона и могут
            относиться к различным областям, таким как технологии, маркетинг,
            социальные вопросы и т. д.
          </CustomAccordionItem>
          <CustomAccordionItem title='Когда кейс считается решенным?' stack>
            <Text>
              В общих чертах, кейс считается решенным, когда команда
              представляет свое окончательное решение или проект,
              соответствующий требованиям, поставленным организаторами.
            </Text>
            <Text>
              Это может включать демонстрацию работающего прототипа,
              предоставление документации, презентацию решения или другие
              способы, указанные в правилах.
            </Text>
          </CustomAccordionItem>
          <CustomAccordionItem
            title='По каким критериям оценивается решение?'
            stack
          >
            <Text>По каким критериям оценивается решение?</Text>
            <Box>
              <OrderedList>
                <ListItem>
                  Инновационность: Оригинальность и новизна предложенного
                  решения.
                </ListItem>
                <ListItem>
                  Техническая реализация: Качество и функциональность
                  разработанного прототипа или решения.
                </ListItem>
                <ListItem>
                  Применимость: Способность решения решать реальную проблему или
                  удовлетворять потребности целевой аудитории.
                </ListItem>
                <ListItem>
                  Удобство использования: Легкость в освоении и использовании
                  пользователем.
                </ListItem>
                <ListItem>
                  Бизнес-потенциал: Оценка возможности коммерциализации или
                  расширения решения на рынке.
                </ListItem>
                <ListItem>
                  Качество презентации: Ясность, четкость и убедительность
                  презентации решения командой.
                </ListItem>
              </OrderedList>
            </Box>
          </CustomAccordionItem>
          <CustomAccordionItem title='Что делать, если этот FAQ не ответил на мои вопросы?'>
            Воспользуйтесь формой ниже
          </CustomAccordionItem>
        </Accordion>
        <section>
          <Form />
        </section>
      </MainContainer>
      <MainFooter />
    </>
  )
}
