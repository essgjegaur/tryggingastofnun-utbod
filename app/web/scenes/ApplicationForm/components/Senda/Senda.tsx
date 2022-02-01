import React, {useEffect, useState} from 'react'
import {SkeletonLoader, Box, Text, Stack, Accordion, AccordionItem, Table as T} from '@island.is/ui'

const monthlys: any[] = [
  {
    manudur: 'Janúnar',
    oskerturrettur: '153.715',
    rettur1barn: '9.223',
    skerding: '-12.500',
    skattskyldlaun: '150.438',
    skattstofn: '138.403',
    lifeyrissjodur: '-6.018',
    vidbotalifeyrissparnadur: '-6.018',
    stettarfelag: '-1.504',
    skattur1: '-43.528',
    skattur2: '0',
    personuafslattur: '43.528',
    stadgreidslaskatta: '0',
    fradratturalls: '-13.539',
    utborgadalls: '136.899',
  },
  {
    manudur: 'Febrúar',
    oskerturrettur: '412.621',
    rettur1barn: '12.297',
    skerding: '-12.500',
    skattskyldlaun: '412.418',
    skattstofn: '379.425',
    lifeyrissjodur: '-16.498',
    vidbotalifeyrissparnadur: '-16.497',
    stettarfelag: '-4.124',
    skattur1: '-109.766',
    skattur2: '-11.539',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-70.514',
    fradratturalls: '-107.631',
    utborgadalls: '304.787',
  },
  {
    manudur: 'Mars',
    oskerturrettur: '412.621',
    rettur1barn: '12.297',
    skerding: '-12.500',
    skattskyldlaun: '412.418',
    skattstofn: '379.425',
    lifeyrissjodur: '-16.498',
    vidbotalifeyrissparnadur: '-16.497',
    stettarfelag: '-4.124',
    skattur1: '-109.766',
    skattur2: '-11.539',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-70.514',
    fradratturalls: '-107.631',
    utborgadalls: '304.787',
  },
  {
    manudur: 'Apríl',
    oskerturrettur: '412.621',
    rettur1barn: '12.297',
    skerding: '-12.500',
    skattskyldlaun: '412.418',
    skattstofn: '379.425',
    lifeyrissjodur: '-16.498',
    vidbotalifeyrissparnadur: '-16.497',
    stettarfelag: '-4.124',
    skattur1: '-109.766',
    skattur2: '-11.539',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-70.514',
    fradratturalls: '-107.631',
    utborgadalls: '304.787',
  },
  {
    manudur: 'Maí',
    oskerturrettur: '412.621',
    rettur1barn: '12.297',
    skerding: '-12.500',
    skattskyldlaun: '412.418',
    skattstofn: '379.425',
    lifeyrissjodur: '-16.498',
    vidbotalifeyrissparnadur: '-16.497',
    stettarfelag: '-4.124',
    skattur1: '-109.766',
    skattur2: '-11.539',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-70.514',
    fradratturalls: '-107.631',
    utborgadalls: '304.787',
  },
  {
    manudur: 'Júní',
    oskerturrettur: '412.621',
    rettur1barn: '12.297',
    skerding: '-12.500',
    skattskyldlaun: '412.418',
    skattstofn: '379.425',
    lifeyrissjodur: '-16.498',
    vidbotalifeyrissparnadur: '-16.497',
    stettarfelag: '-4.124',
    skattur1: '-109.766',
    skattur2: '-11.539',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-70.514',
    fradratturalls: '-107.631',
    utborgadalls: '304.787',
  },
  {
    manudur: 'Júlí',
    oskerturrettur: '412.621',
    rettur1barn: '12.297',
    skerding: '-12.500',
    skattskyldlaun: '412.418',
    skattstofn: '379.425',
    lifeyrissjodur: '-16.498',
    vidbotalifeyrissparnadur: '-16.497',
    stettarfelag: '-4.124',
    skattur1: '-109.766',
    skattur2: '-11.539',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-70.514',
    fradratturalls: '-107.631',
    utborgadalls: '304.787',
  },
  {
    manudur: 'Ágúst',
    oskerturrettur: '412.621',
    rettur1barn: '12.297',
    skerding: '-12.500',
    skattskyldlaun: '412.418',
    skattstofn: '379.425',
    lifeyrissjodur: '-16.498',
    vidbotalifeyrissparnadur: '-16.497',
    stettarfelag: '-4.124',
    skattur1: '-109.766',
    skattur2: '-11.539',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-70.514',
    fradratturalls: '-107.631',
    utborgadalls: '304.787',
  },
  {
    manudur: 'September',
    oskerturrettur: '307.430',
    rettur1barn: '18.446',
    skerding: '-12.500',
    skattskyldlaun: '313.376',
    skattstofn: '288.306',
    lifeyrissjodur: '-12.535',
    vidbotalifeyrissparnadur: '-12.535',
    stettarfelag: '-3.134',
    skattur1: '-90.672',
    skattur2: '0',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-30.880',
    fradratturalls: '-68.084',
    utborgadalls: '245.292',
  },
  {
    manudur: 'Október',
    oskerturrettur: '307.430',
    rettur1barn: '18.446',
    skerding: '-12.500',
    skattskyldlaun: '313.376',
    skattstofn: '288.306',
    lifeyrissjodur: '-12.535',
    vidbotalifeyrissparnadur: '-12.535',
    stettarfelag: '-3.134',
    skattur1: '-90.672',
    skattur2: '0',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-30.880',
    fradratturalls: '-68.084',
    utborgadalls: '245.292',
  },
  {
    manudur: 'Nóvember',
    oskerturrettur: '307.430',
    rettur1barn: '18.446',
    skerding: '-12.500',
    skattskyldlaun: '313.376',
    skattstofn: '288.306',
    lifeyrissjodur: '-12.535',
    vidbotalifeyrissparnadur: '-12.535',
    stettarfelag: '-3.134',
    skattur1: '-90.672',
    skattur2: '0',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-30.880',
    fradratturalls: '-68.084',
    utborgadalls: '245.292',
  },
  {
    manudur: 'Desember',
    oskerturrettur: '307.430',
    rettur1barn: '18.446',
    skerding: '-12.500',
    skattskyldlaun: '313.376',
    skattstofn: '288.306',
    lifeyrissjodur: '-12.535',
    vidbotalifeyrissparnadur: '-12.535',
    stettarfelag: '-3.134',
    skattur1: '-90.672',
    skattur2: '0',
    personuafslattur: '50.792',
    stadgreidslaskatta: '-30.880',
    fradratturalls: '-68.084',
    utborgadalls: '245.292',
  },
]

function Senda(): JSX.Element {
  // const {data, loading} = useQuery<Query>(CalculationQuery)
  // const {reikn} = data || {}
  const [loading, setLoading] = useState()

  useEffect(() => {}, [])

  return (
    <>
      <Stack space={4}>
        <Text variant="h2">Bráðabrigða útreikningur</Text>
        <Text variant="h4">Mánaðarlegar greiðslur</Text>
      </Stack>
      <Box marginTop={1}>
        <Text>
          Grunnatvinnuleysisbætur eru greiddar samtals í hálfan mánuð frá fyrstu skráningu áður en
          tekjutenging atvinnuleysisbóta tekur gildi. Tekjutenging gildir nú í 6 mánuði.
        </Text>
      </Box>
      <Box marginTop={3}>
        {loading ? (
          <SkeletonLoader height={400} />
        ) : (
          <Accordion singleExpand>
            {monthlys.map((monthData, index) => (
              <AccordionItem
                key={index}
                id="id_1"
                label={monthData.manudur}
                labelVariant="h5"
                visibleContent={
                  <Text variant="h4" color="blue400">
                    {monthData.utborgadalls} kr.
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
                          <Text variant="small">Óskertur réttur til atvinnuleysisbóta</Text>
                          <Text variant="small">Réttur vegna 1 barns</Text>
                          <Text variant="small">50% skerðing vegna elli- eða örorkugr.</Text>
                          <Text variant="small">Skattskyld laun</Text>
                          <Text variant="h5">Skattstofn</Text>
                        </Stack>
                      </T.Data>
                      <T.Data>
                        <Stack space={1}>
                          <Text variant="small">{monthData.oskerturrettur}</Text>
                          <Text variant="small">{monthData.rettur1barn}</Text>
                          <Text variant="small">{monthData.skerding}</Text>
                          <Text variant="small">{monthData.skattskyldlaun}</Text>
                          <Text variant="h5">{monthData.skattstofn} kr.</Text>
                        </Stack>
                      </T.Data>
                    </T.Row>
                    <T.Row>
                      <T.Data>
                        <Stack space={1}>
                          <Text variant="small">Lífeyrissjóður</Text>
                          <Text variant="small">Viðbótarlífeyrissparnaður</Text>
                          <Text variant="small">Stéttarfélag</Text>
                          <Text variant="small">Skattur þrep 1</Text>
                          <Text variant="small">Skattur þrep 2</Text>
                          <Text variant="small">Persónuafsláttur</Text>
                          <Text variant="small">Staðgreiðsla skatta</Text>
                          <Text variant="small">Frádráttur alls</Text>
                        </Stack>
                      </T.Data>
                      <T.Data>
                        <Stack space={1}>
                          <Text variant="small">{monthData.lifeyrissjodur}</Text>
                          <Text variant="small">{monthData.vidbotalifeyrissparnadur}</Text>
                          <Text variant="small">{monthData.stettarfelag}</Text>
                          <Text variant="small">{monthData.skattur1}</Text>
                          <Text variant="small">{monthData.skattur2}</Text>
                          <Text variant="small">{monthData.personuafslattur}</Text>
                          <Text variant="small">{monthData.stadgreidslaskatta}</Text>
                          <Text variant="h5">{monthData.fradratturalls} kr.</Text>
                        </Stack>
                      </T.Data>
                    </T.Row>
                  </T.Body>
                  <T.Foot>
                    <T.Row>
                      <T.Data>
                        <Text variant="h5">Útborgað alls</Text>
                      </T.Data>
                      <T.Data>
                        <Text variant="h5">{monthData.utborgadalls} kr.</Text>
                      </T.Data>
                    </T.Row>
                  </T.Foot>
                </T.Table>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </Box>
    </>
  )
}

export default Senda
