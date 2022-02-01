import React, {useState, useEffect} from 'react'
import {Text, Stack, ActionCard, Box, SkeletonLoader, Button} from '@island.is/ui'

import {Layout} from '../../components/Layout'
import {useRouter} from 'next/dist/client/router'
import StatusImage from './Status'

function Home(): JSX.Element {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    const temp = localStorage.getItem('user')
    if (temp) {
      setUser(JSON.parse(temp) as any)
    }
  }, [])
  const router = useRouter()

  return (
    <Layout>
      <Box marginBottom={3}>
        <Stack space={2}>
          <Text variant="h1">Umsóknir</Text>
          <Text variant="intro">
            {user && (user as any)?.applicationStatus === 'done'
              ? 'Þú hefur sótt um Ellilífeyrir. Hér fyrir neðan getur þú sérð stöðu umsóknarinnar. Ef þú gerir breytingu þá þarf að endursenda umsóknina.'
              : 'Hér sérðu yfirlit yfir þínar umsóknir'}
          </Text>
        </Stack>
      </Box>
      <Stack space={2}>
        {loading ? (
          <SkeletonLoader height={147} />
        ) : user && (user as any)?.applicationStatus === 'done' ? (
          <Box display="flex" alignItems="center">
            <StatusImage />
            <Box marginLeft={10} marginBottom={5}>
              <Button onClick={() => {}}>Breyta</Button>
            </Box>
          </Box>
        ) : (
          <ActionCard
            tag={{
              label: '',
              variant: 'white',
            }}
            heading="Umsókn um ellilífeyrir"
            cta={{
              label: 'Hefja umsóknarferli',
              variant: 'primary',
              onClick: () => router.push('/form'),
            }}
            progressMeter={{
              active: (user as any)?.step > 0,
              progress: (user as any)?.step / 10 || 0,
              variant: 'blue',
            }}
          />
        )}
      </Stack>
    </Layout>
  )
}

export default Home
