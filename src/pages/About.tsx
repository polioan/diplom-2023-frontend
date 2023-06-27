import { MainContainer, MainFooter, MainHeader } from '../components'
import {
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  Divider,
  Highlight,
  Stack,
  Button,
  Flex,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import { useDocumentTitle } from '../hooks'
import { TypedLink } from '../pages'

function OpportunitiesListItem({ children }: { children: string }) {
  return (
    <ListItem display='flex' alignItems='center' p='1'>
      <ListIcon as={MdCheckCircle} color='purple.400' />
      <Text maxW='80ch'>{children}</Text>
    </ListItem>
  )
}

export default function About() {
  useDocumentTitle('О Мероприятии')

  return (
    <>
      <MainHeader
        links={['root', 'faq', 'contacts', 'register']}
        backToButton
      />
      <MainContainer as='main'>
        <Heading as='h1' mb='3' color='purple.700'>
          О мероприятии
        </Heading>
        <Heading size='md' mb='3'>
          Хакатон - это уникальная возможность:
        </Heading>
        <List>
          <OpportunitiesListItem>
            Принять участие в разработке кейсов ведущих IT-компаний и внести
            свой вклад в инновационные проекты.
          </OpportunitiesListItem>
          <OpportunitiesListItem>
            Соревноваться за привлекательный призовой фонд и доказать свои
            навыки и таланты перед жюри и участниками.
          </OpportunitiesListItem>
          <OpportunitiesListItem>
            Продемонстрировать свои навыки и конкурировать с другими командами,
            что позволит вам выявить свои сильные стороны и узнать, как
            улучшиться.
          </OpportunitiesListItem>
          <OpportunitiesListItem>
            Встретить своих потенциальных работодателей и, возможно, получить
            предложения о стажировке или трудоустройстве, открывая новые
            возможности для своей карьеры в IT-индустрии.
          </OpportunitiesListItem>
          <OpportunitiesListItem>
            Провести незабываемые 36 часов, полных интенсивной работы и
            творчества, в окружении единомышленников и профессионалов, что
            позволит вам полностью погрузиться в процесс разработки.
          </OpportunitiesListItem>
          <OpportunitiesListItem>
            Познакомиться с известными экспертами и спикерами IT-индустрии,
            которые будут проводить мастер-классы, лекции и дискуссии на
            различные темы, открывая перед вами новые горизонты знаний и
            вдохновляя на дальнейшие достижения.
          </OpportunitiesListItem>
          <OpportunitiesListItem>
            Получить обратную связь от опытных наставников и профессионалов в
            сфере разработки, которые помогут вам развивать свои навыки и стать
            лучше, предлагая ценные советы и поддержку.
          </OpportunitiesListItem>
          <OpportunitiesListItem>
            Насладиться отличной организацией и атмосферой мероприятия, которые
            создадут комфортные условия для работы, общения и развлечения.
          </OpportunitiesListItem>
        </List>
        <Divider mb='6' mt='6' />
        <Stack spacing='3'>
          <Text maxW='180ch'>
            <Highlight
              query={['backend', 'frontend', 'devops', 'tech lead', 'UX/UI']}
              styles={{ px: '1', py: '1', bg: 'purple.100' }}
            >
              Соберите команду из 2-6 человек со специализацией в области
              backend, frontend, devops, tech lead или UX/UI. Мы приглашаем
              школьников, студентов высших и профессиональных учебных заведений,
              а также всех талантливых программистов возрастом до 35 лет.
            </Highlight>
          </Text>
          <Text maxW='180ch'>
            Присоединяйтесь к нам на трехдневном мероприятии, где вы сможете
            проявить свой потенциал, расширить кругозор, зарядиться новыми
            идеями и установить ценные связи в IT-сообществе.
          </Text>
        </Stack>
        <Flex justify='center'>
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
      </MainContainer>
      <MainFooter />
    </>
  )
}
