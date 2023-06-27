import {
  Divider,
  Heading,
  Text,
  UnorderedList,
  Box,
  ListItem,
  Link,
  Image,
  Stack,
} from '@chakra-ui/react'
import { MainContainer, MainFooter, MainHeader } from '../components'
import { useDocumentTitle } from '../hooks'
import { Link as RouterLink } from 'react-router-dom'

function Maps() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a
        href='https://yandex.ru/maps/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps'
        style={{ color: 'white', fontSize: 12, position: 'absolute', top: 0 }}
      >
        Ростов‑на‑Дону
      </a>
      <a
        href='https://yandex.ru/maps/39/rostov-na-donu/house/ulitsa_goroda_volos_6/Z0AYcQdmSEIEQFptfX5zdn9lYQ==/?ll=39.706174%2C47.227366&utm_medium=mapframe&utm_source=maps&z=17'
        style={{ color: 'white', fontSize: 12, position: 'absolute', top: 14 }}
      >
        Улица Города Волос, 6 на карте Ростова‑на‑Дону — Яндекс&nbsp;Карты
      </a>
      <iframe
        title='Фгану НИИ на картах Яндекс - Ростов-на-Дону, улица Города Волос, 6'
        aria-label='Фгану НИИ на картах Яндекс - Ростов-на-Дону, улица Города Волос, 6'
        src='https://yandex.ru/map-widget/v1/?ll=39.706174%2C47.227366&mode=whatshere&whatshere%5Bpoint%5D=39.706173%2C47.227365&whatshere%5Bzoom%5D=17&z=17'
        width='100%'
        height={400}
        frameBorder={0}
        allowFullScreen
        style={{ position: 'relative', border: 'none' }}
      />
    </div>
  )
}

function SocialLink({
  src,
  alt,
  href,
}: {
  src: string
  alt: string
  href: string
}) {
  return (
    <Link
      href={href}
      title={alt}
      target='_blank'
      rel='noopener noreferrer'
      _hover={{ opacity: 0.8, filter: 'contrast(120%)' }}
    >
      <Image
        src={src}
        alt={alt}
        decoding='async'
        loading='lazy'
        transform='scale(0.999)'
        aspectRatio='1 / 1'
        width='50px'
        height='50px'
      />
    </Link>
  )
}

export default function Contacts() {
  useDocumentTitle('Контакты')

  return (
    <>
      <MainHeader links={['root', 'about', 'faq', 'register']} backToButton />
      <MainContainer as='main'>
        <section>
          <Heading color='purple.700'>Наш адрес</Heading>
          <Text fontSize='xl' mb='3'>
            г. Ростов-на-Дону, ул. Города Волос, 6, 15 этаж
          </Text>
          <Maps />
        </section>
        <Divider mb='3' mt='3' />
        <section>
          <Heading color='purple.700' mb='3'>
            Контакты
          </Heading>
          <Box>
            <UnorderedList>
              <ListItem>
                <Text fontSize='xl'>
                  Тел.:{' '}
                  <Link as={RouterLink} to='tel:+7(495)705-93-20'>
                    +7 (495) 705-93-20
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize='xl'>
                  Тел./факс (Ростов):{' '}
                  <Link as={RouterLink} to='tel:+7(863)201-28-13'>
                    +7 (863) 201-27-13
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize='xl'>
                  Email:{' '}
                  <Link as={RouterLink} to='mailto:info@niiisva.org'>
                    info@niiisva.org
                  </Link>
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </section>
        <Divider mb='3' mt='3' />
        <section>
          <Heading color='purple.700' mb='3'>
            Соцсети
          </Heading>
          <Stack direction='row'>
            <SocialLink
              src='/hh.ru.png'
              href='https://rostov.hh.ru/employer/1565051'
              alt='hh.ru'
            />
            <SocialLink src='/vk.png' href='https://vk.com/niisva' alt='ВК' />
            <SocialLink
              src='/habr.png'
              href='https://career.habr.com/companies/niisva'
              alt='Хабр'
            />
          </Stack>
        </section>
      </MainContainer>
      <MainFooter />
    </>
  )
}
