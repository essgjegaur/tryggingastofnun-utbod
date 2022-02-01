import React, {useContext} from 'react'
import {Text, Stack, ActionCard, Box, SkeletonLoader} from '@island.is/ui'

import {AuthContext} from '../../services'
import {Layout} from '../../components/Layout'
import {useRouter} from 'next/dist/client/router'

function Home(): JSX.Element {
  const router = useRouter()
  const context = useContext(AuthContext)

  const user = {
    applicationStatus: 'eee',
    step: 0,
  }
  const loading = false
  return (
    <Layout>
      <Box marginBottom={3}>
        <Stack space={2}>
          <Text variant="h1">Umsóknir</Text>
          <Text variant="intro">Hér sérðu yfirlit yfir þínar umsóknir </Text>
        </Stack>
      </Box>
      <Stack space={2}>
        {loading ? (
          <SkeletonLoader height={147} />
        ) : (
          <ActionCard
            tag={
              user.applicationStatus === 'done'
                ? {
                    label: '',
                    variant: 'mint',
                  }
                : {
                    label: '',
                    variant: 'white',
                  }
            }
            heading="Umsókn um ellilífeyrir"
            cta={
              user.applicationStatus === 'done'
                ? {
                    label: 'Skoða umsókn',
                    variant: 'secondary',
                    onClick: () => router.push('/form'),
                  }
                : {
                    label: 'Hefja umsóknarferli',
                    variant: 'primary',
                    onClick: () => router.push('/form'),
                  }
            }
            progressMeter={{
              active: user.step > 0,
              progress: user.step / 8,
              variant: 'blue',
            }}
          />
        )}
      </Stack>
    </Layout>
  )
}

export default Home
