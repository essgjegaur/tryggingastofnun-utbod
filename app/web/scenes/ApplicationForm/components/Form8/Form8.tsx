import React from 'react'
import {Box, Text, GridColumn, GridContainer, GridRow, Stack} from '@island.is/ui'

function Form8({user}: any): JSX.Element {
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
                    <Text>{user?.name}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Heimilisfang</Text>
                    <Text>{user?.home}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Farsími</Text>
                    <Text>{user?.gsm}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Maki</Text>
                    <Text>{user?.spouse === 'no' ? 'Nei' : 'Já'}</Text>
                  </Box>
                </Stack>
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Kennitala</Text>
                    <Text>{user?.nationalid}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Póstnúmer</Text>
                    <Text>{user?.postNumber}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Heimasími</Text>
                    <Text>{user?.phone}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Börn</Text>
                    <Text>{user?.childrenNationalId || 'Nei'}</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '12/12', '12/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Hefur þú kannað rétt þinn hjá lífeyrissjóðum?</Text>
                    <Text>{user?.almennarField1 === false ? 'Nei' : 'Já'}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Hefurðu búið og/eða starfað erlendis?</Text>
                    <Text>{user?.almennarField2 === false ? 'Nei' : 'Já'}</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Land</Text>
                    <Text>{user?.land?.value || 'Nei'}</Text>
                  </Box>
                </Stack>
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Tímabil</Text>
                    <Text>
                      {user?.almennarDateFrom?.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                      })}
                      {' - '}
                      {user?.almennarDateTo?.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                      })}
                    </Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '12/12', '12/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Ég sæki um snemmtöku ellilífeyris?</Text>
                    <Text>{user?.almennarField3 === false ? 'Nei' : 'Já'}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Ég sæki um ellilífeyri sjómanna?</Text>
                    <Text>{user?.almennarField4 === false ? 'Nei' : 'Já'}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Ég vil sækja um heimilisuppbót?</Text>
                    <Text>{user?.almennarField5 === false ? 'Nei' : 'Já'}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Ég vil sækja um barnalífeyri?</Text>
                    <Text>{user?.almennarField6 === false ? 'Nei' : 'Já'}</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Býr barn hjá umsækjanda?</Text>
                    <Text>{user?.almennarField7 === false ? 'Nei' : 'Já'}</Text>
                  </Box>
                </Stack>
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Kennitala barns</Text>
                    <Text>{user?.kennitalaBarns}</Text>
                  </Box>
                </Stack>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={['12/12', '12/12', '12/12', '12/12']}>
                <Stack space={3}>
                  <Box>
                    <Text variant="h5">Atvinnutekjur</Text>
                    <Text>{user?.tekjur1}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">
                      Fjármagnstekjur (leigutekjur, vaxtatekjur, arður og söluhagnaður)
                    </Text>
                    <Text>{user?.tekjur2}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Lifeyrissjóðstekjur</Text>
                    <Text>{user?.tekjur3} ISK</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Frá hvaða tíma er sótt um greiðslur?</Text>
                    <Text>
                      {user?.tekjur4?.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                      })}
                    </Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Fylgigögn</Text>
                    <Text>{user?.fileName}</Text>
                  </Box>
                  <Box>
                    <Text variant="h5">Athugasemdir</Text>
                    <Text>{user?.comments}</Text>
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
