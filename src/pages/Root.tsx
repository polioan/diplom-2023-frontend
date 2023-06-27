import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import {
  BsCaretDownFill as ArrowIcon,
  BsGeoAltFill as GeoIcon,
} from 'react-icons/bs'
import { FiCalendar as CalendarIcon } from 'react-icons/fi'
import { MainContainer, MainFooter, MainHeader } from '../components'
import { useScrollToSection, useTimeLeft } from '../hooks'
import { query } from '../lib/trpc'
import { TypedLink } from '../pages'

function InfoCard({
  icon,
  heading,
  text,
}: {
  heading: string
  text: React.ReactNode
  icon: React.ElementType
}) {
  return (
    <Card as='section'>
      <CardBody display='flex'>
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
        <Flex ml='auto' align='center'>
          <Button
            as={TypedLink}
            to={{ pathname: '/faq', search: 'section=question' }}
          >
            Задать вопрос
          </Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

function StartInfoSection() {
  const date = query.info.eventDate.useQuery()
  const place = query.info.eventPlace.useQuery()

  return (
    <>
      <InfoCard
        icon={GeoIcon}
        heading='Когда?'
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
      <InfoCard
        icon={CalendarIcon}
        heading='Где?'
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
    </>
  )
}

function AboutHackSection() {
  return (
    <Flex as='section'>
      <Box flex='50%'>
        <Image
          src='/hack-clip.png'
          alt='Хакатон иллюстрация'
          decoding='async'
          loading='lazy'
          transform='scale(0.999)'
          aspectRatio='1 / 1'
        />
      </Box>
      <Flex flex='50%' align='center' justify='center' direction='column'>
        <Heading color='purple.700'>Что такое хакатон?</Heading>
        <Stack spacing='3' mt='3'>
          <Text fontSize='lg' align='justify'>
            Хакатон - это инновационное мероприятие, объединяющее группы
            разработчиков, дизайнеров и других участников, с целью коллективно
            решить сложные задачи или создать новые продукты за ограниченный
            промежуток времени.
          </Text>
          <Text fontSize='lg' align='justify'>
            Термин &quot;хакатон&quot; происходит от слова &quot;хакер&quot; и
            &quot;марафон&quot;, и это отражает его природу: интенсивный и
            соревновательный процесс, во время которого команды творчески
            применяют свои навыки для достижения поставленных целей.
          </Text>
        </Stack>
        <Button
          mt='6'
          as={TypedLink}
          to='/register'
          bg='purple.600'
          color='white'
          minW='33%'
          _hover={{ bg: 'purple.700' }}
        >
          Записаться
        </Button>
      </Flex>
    </Flex>
  )
}

function ScheduleSection() {
  const { data } = query.info.schedule.useQuery()

  const optimisticData = data ?? []

  useScrollToSection()

  return (
    <Flex as='section' align='center' direction='column' id='schedule'>
      <Heading>Расписание</Heading>
      <Flex justify='center' overflowX='auto' h='830px' w='full' mt='4'>
        <Flex w='full' align='center' justify='center'>
          <Box w='full' m='auto' maxH='full' overflowY='auto'>
            <Flex direction='column' justify='center' align='center'>
              {optimisticData.map((data, i, arr) => {
                return (
                  <Fragment key={data.dayAsString + data.dayAsString}>
                    <Heading size='md' m='2'>
                      {data.dayAsString}
                    </Heading>
                    {data.sections.map(section => {
                      return (
                        <Box
                          key={section.name + section.time.toString()}
                          position='relative'
                        >
                          <Badge
                            variant='solid'
                            colorScheme='purple'
                            as={Box}
                            position='absolute'
                            top='50%'
                            right='50%'
                            transform='translate(-50%, -50%)'
                            minW='82px'
                            textAlign='center'
                          >
                            {section.timeRangeAsString}
                          </Badge>
                          <Icon as={ArrowIcon} color='purple.700' boxSize={8} />
                          <Heading
                            size='sm'
                            position='absolute'
                            w='max-content'
                            top='50%'
                            left='170%'
                            transform='translate(-0%, -50%)'
                          >
                            {section.name}
                          </Heading>
                        </Box>
                      )
                    })}
                    {arr.length - 1 !== i ? <Divider /> : null}
                  </Fragment>
                )
              })}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

function TimeLeftSection() {
  const { durationAsObjWithTexts } = useTimeLeft()

  return (
    <Flex as='section' align='center' direction='column'>
      <Text fontSize='larger'>До мероприятия:</Text>
      <Card mt='2' variant='filled'>
        <CardBody>
          <SimpleGrid spacing='4' templateColumns='repeat(5, 1fr)'>
            {Object.keys(durationAsObjWithTexts).map(key => {
              return (
                <Card key={key}>
                  <CardBody>
                    <Heading size='md'>
                      {
                        durationAsObjWithTexts[
                          key as keyof typeof durationAsObjWithTexts
                        ]
                      }
                    </Heading>
                    {key}
                  </CardBody>
                </Card>
              )
            })}
          </SimpleGrid>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default function Root() {
  return (
    <>
      <MainHeader links={['about', 'faq', 'contacts', 'register']} />
      <MainContainer as='main'>
        <Stack spacing='4'>
          <StartInfoSection />
          <Divider />
          <AboutHackSection />
          <Divider />
          <ScheduleSection />
          <Divider />
          <TimeLeftSection />
        </Stack>
      </MainContainer>
      <MainFooter />
    </>
  )
}
