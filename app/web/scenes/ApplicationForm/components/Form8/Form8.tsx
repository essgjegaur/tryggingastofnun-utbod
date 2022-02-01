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
                  <Text variant="h5">Staður</Text>
                  <Text>Reykjavík</Text>
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
              </Stack>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </>
  )
}

export default Form8
