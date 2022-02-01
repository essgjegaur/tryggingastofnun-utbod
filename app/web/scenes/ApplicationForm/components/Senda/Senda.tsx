import React, {useEffect, useState} from 'react'
import {
  SkeletonLoader,
  Box,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  Table as T,
  LoadingDots,
  LoadingIcon,
} from '@island.is/ui'

const monthlys: any[] = [
  {
    manudur: 'Janúnar',
    '0101407789': {
      ellilífeyrir: 18016,
      samtals: 18016,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Febrúar',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Mars',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Apríl',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Maí',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Júní',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Júlí',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Ágúst',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'September',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Október',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Nóvember',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
  {
    manudur: 'Desember',
    '0101407789': {
      ellilífeyrir: 196891,
      samtals: 196891,
    },
    '0101502989': {
      ellilífeyrir: 208521,
      heimilisuppbot: 51872,
      samtals: 260393,
    },
    '0101524929': {
      ellilífeyrir: 181521,
      barnalifeyrir: 38540,
      samtals: 220061,
    },
  },
]

function Senda(): JSX.Element {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Stack space={4}>
        <Text variant="h2">Bráðabrigða útreikningur</Text>
        <Text variant="h4">Áætlaðar mánaðarlegar greiðslur</Text>
      </Stack>
      <Box marginTop={1}>
        <Text>
        Áætlun þessi er gerð miða við fyrirliggjandi upplýsingar og reiknuð samkvæmt þeim reglum sem gilda í dag.
        </Text>
      </Box>
      <Box marginTop={3}>
        {loading ? (
          <SkeletonLoader repeat={12} height={100} />
        ) : (
          <Accordion singleExpand>
            {monthlys.map((monthDatas, index) => {
              const monthData = monthDatas['0101502989'] // TODO: change to dynamic kennitala/ID
              return (
              <AccordionItem
                key={index}
                id="id_1"
                label={monthData.manudur}
                labelVariant="h5"
                visibleContent={
                  <Text variant="h4" color="blue400">
                    {monthData.samtals} kr.
                  </Text>
                }
              >
                <T.Table>
                  <T.Head>
                    <T.Row>
                      <T.HeadData>Greiðsluliður</T.HeadData>
                      <T.HeadData>Upphæð (kr.)</T.HeadData>
                    </T.Row>
                  </T.Head>
                  <T.Body>
                    <T.Row>
                      <T.Data>
                        <Stack space={1}>
                          <Text variant="small">Ellilífeyrir</Text>
                          {monthData.heimilisuppbot && <Text variant="small">Heimilisuppbót</Text>}
                          {monthData.barnalifeyrir && <Text variant="small">Barnalífeyrir</Text>}
                        </Stack>
                      </T.Data>
                      <T.Data>
                        <Stack space={1}>
                          <Text variant="small">{monthData.lifeyrissjodur}</Text>
                          {monthData.heimilisuppbot && <Text variant="small">{monthData.heimilisuppbot}</Text>}
                          {monthData.barnalifeyrir && <Text variant="small">{monthData.barnalifeyrir}</Text>}
                        </Stack>
                      </T.Data>
                    </T.Row>
                  </T.Body>
                  <T.Foot>
                    <T.Row>
                      <T.Data>
                        <Text variant="h5">Samtals</Text>
                      </T.Data>
                      <T.Data>
                        <Text variant="h5">{monthData.samtals} kr.</Text>
                      </T.Data>
                    </T.Row>
                  </T.Foot>
                </T.Table>
              </AccordionItem>
            )})}
          </Accordion>
        )}
      </Box>
    </>
  )
}

export default Senda
