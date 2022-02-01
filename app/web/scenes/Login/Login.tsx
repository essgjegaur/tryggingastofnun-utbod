import React, {useContext, useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {Box, Text, Input, Logo, Button, Stack} from '@island.is/ui'

import {AuthContext} from '../../services/'

import * as styles from './Login.treat'
import {users} from '../../users'

function Login(): JSX.Element {
  const {handleSubmit, control} = useForm({mode: 'onSubmit'})
  const context = useContext(AuthContext)
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)
  const signIn = handleSubmit(async ({mobileNumber}) => {
    if (!mobileNumber || !users.find(user => user.gsm === mobileNumber)) {
      return setHasError(true)
    }
    setLoading(true)
    setTimeout(() => {
      context.login(mobileNumber)
      setLoading(false)
    }, 2000)
  })

  return (
    <Box paddingY={[4, 8]} paddingX={[3, 4, 12]}>
      <Box className={styles.container} margin="auto">
        <Box
          border="standard"
          borderColor="blue500"
          borderRadius="large"
          paddingTop={[8, 10]}
          position="relative"
        >
          {/* logo */}
          <Box className={styles.logoContainer} position="absolute" paddingX={4} background="white">
            <Logo width={160} />
          </Box>

          {/* upper content */}
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            paddingX={[2, 4, 10]}
          >
            <Text variant="h5" color="blue400">
              Rafræn skilríki í síma
            </Text>
            <Text variant="h1">Skráðu þig inn</Text>
            <Text variant="h3" fontWeight="light" color="dark400">
              á Mínar síður Ísland.is
            </Text>
          </Box>

          {/* body content */}
          <Box paddingX={[2, 4, 10]}>
            <form onSubmit={signIn}>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                paddingY={[4, 6, 8]}
              >
                <Controller
                  control={control}
                  name="mobileNumber"
                  defaultValue=""
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      label="Símanúmer"
                      placeholder="###-####"
                      name={name}
                      type="tel"
                      value={value}
                      backgroundColor="blue"
                      onChange={onChange}
                      required
                      errorMessage={!hasError ? '' : 'Símanúmer is wrong'}
                    />
                  )}
                />
                <Box marginTop={[4, 6]} paddingX={6} display="flex" justifyContent="center">
                  <Button fluid type="submit" loading={loading}>
                    Auðkenna
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>

          {/* lower content */}
          <Box
            background="blue100"
            textAlign="center"
            paddingTop={4}
            paddingBottom={7}
            paddingX={12}
          >
            <Stack space={2} align="center">
              <Text variant="h3" color="blue600">
                Fleiri leiðir
              </Text>
              <Button fluid variant="ghost" disabled>
                Skilríki í appi
              </Button>
              <Button fluid variant="ghost" disabled>
                Skilríki á korti
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box as="footer" marginTop={1}>
          <a target="_blank" rel="noreferrer" href="https://island.is/innskraningarthjonusta">
            <Text as="h5" color="blue400" fontWeight="bold">
              Þarftu aðstoð?
            </Text>
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
