import {
  Flex,
  IconButton,
  Image,
  Spinner,
  type FlexProps,
} from '@chakra-ui/react'
import { BsPlayBtnFill as PlayIcon } from 'react-icons/bs'
import { usePlayAudio } from '../hooks'
import { useState } from 'react'
import { query } from '../lib/trpc'

export function useCaptcha() {
  const captcha = query.captcha.get.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })

  const [captchaText, setCaptchaText] = useState('')

  function clearCaptchaText() {
    setCaptchaText('')
  }

  function refetchCaptcha() {
    return captcha.refetch()
  }

  function clearAndRefetchCaptcha() {
    clearCaptchaText()
    return refetchCaptcha()
  }

  return {
    captcha,
    captchaText,
    setCaptchaText,
    clearCaptchaText,
    refetchCaptcha,
    clearAndRefetchCaptcha,
    isCaptchaLoading: captcha.isLoading,
    isCaptchaFetching: captcha.isFetching,
    isCaptchaLoadingOrFetching: captcha.isLoading || captcha.isFetching,
    isCaptchaSuccess: captcha.isSuccess,
    randomString: captcha.data?.randomString,
  } as const
}

interface CaptchaProps extends FlexProps {
  captcha: ReturnType<typeof useCaptcha>['captcha']
}

export function Captcha({ captcha, ...otherProps }: CaptchaProps) {
  const play = usePlayAudio(captcha.data?.audioUrl)

  const isLoadingOrFetching = captcha.isLoading || captcha.isFetching

  return (
    <Flex {...otherProps}>
      <Flex
        align='center'
        justify='center'
        w='240px'
        h='80px'
        bg='purple.600'
        color='white'
        opacity='0.4'
        borderRadius='base'
      >
        {isLoadingOrFetching ? (
          <Spinner size='xl' />
        ) : (
          <Image
            src={captcha.data?.imageUrl!}
            alt='Капча'
            decoding='async'
            loading='lazy'
          />
        )}
      </Flex>
      <Flex align='center'>
        {isLoadingOrFetching ? null : (
          <IconButton
            aria-label='Озвучить капчу'
            title='Озвучить капчу'
            icon={<PlayIcon />}
            ml='4'
            size='lg'
            color='purple.800'
            onClick={play}
          />
        )}
      </Flex>
    </Flex>
  )
}
