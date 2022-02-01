import React from 'react'
import {Box, Text, Input, GridColumn, GridContainer, GridRow, Stack} from '@island.is/ui'
import {Controller, Control} from 'react-hook-form'

interface PropTypes {
  control: Control<any>
}

function Form8({control}: PropTypes): JSX.Element {
  return (
    <>
      <Text variant="h2">Yfirferð</Text>
      <Box paddingTop={5}>
        <GridContainer>
          <Stack space={5}>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Umsækjandi</Text>
                    <Text>Guðrún Jónsdóttir</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Heimilisfang</Text>
                    <Text>Lindargata 3</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Farsími</Text>
                    <Text>855111</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Maki</Text>
                    <Text>Nei</Text>
                  </Box>
                </Stack>
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Kennitala</Text>
                    <Text>170694-1119</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Póstnúmer</Text>
                    <Text>101</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Heimasími</Text>
                    <Text>5651111</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Börn</Text>
                    <Text>Nei</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '12/12', '12/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Hefur þú kannað rétt þinn hjá lífeyrissjóðum?</Text>
                    <Text>Já</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Hefurðu búið og/eða starfað erlendis?</Text>
                    <Text>Já</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Land</Text>
                    <Text>Angóla</Text>
                  </Box>
                </Stack>
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Tímabil</Text>
                    <Text>01/01/1990 - 01/06/2000</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '12/12', '12/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Ég sæki um snemmtöku ellilífeyris?</Text>
                    <Text>Já</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Ég sæki um ellilífeyri sjómanna?</Text>
                    <Text>Já</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Ég vil sækja um heimilisuppbót?</Text>
                    <Text>Já</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Ég vil sækja um barnalífeyri?</Text>
                    <Text>Já</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Býr barn hjá umsækjanda?</Text>
                    <Text>Já</Text>
                  </Box>
                </Stack>
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Kennitala barns</Text>
                    <Text>150110-2220</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '12/12', '12/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Atvinnutekjur</Text>
                    <Text>0</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">
                      Fjármagnstekjur (leigutekjur, vaxtatekjur, arður og söluhagnaður)
                    </Text>
                    <Text>0</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Lifeyrissjóðstekjur</Text>
                    <Text>100.000 ISK</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Frá hvaða tíma er sótt um greiðslur?</Text>
                    <Text>01/01/2022</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Fylgigögn</Text>
                    <Text>lifeyrirsjodur.pdf, önnurfylgigögn.pdf</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Athugasemdir</Text>
                    <Text>Þetta er athugasemdir</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
          </Stack>
        </GridContainer>
      </Box>
    </>
  )
}

export default Form8
