import React from 'react'
import {
  Box,
  Text,
  Input,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
  DatePicker,
} from '@island.is/ui'
import {Controller, Control} from 'react-hook-form'

interface PropTypes {
  control: Control<any>
}

function Form6({control}: PropTypes): JSX.Element {
  return (
    <>
      <Text variant="h2">Tekjur</Text>
      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">Atvinnutekjur</Text>
        </Box>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Controller
                control={control}
                name="name1"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    value={0}
                    name={name}
                    label="Upphæð á mánuði"
                    backgroundColor="blue"
                    type="number"
                  />
                )}
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>

      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">
            Fjármagnstekjur (leigutekjur, vaxtatekjur, arður og söluhagnaður)
          </Text>
        </Box>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Controller
                control={control}
                name="name1"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    value={0}
                    name={name}
                    label="Upphæð á mánuði"
                    backgroundColor="blue"
                    type="number"
                  />
                )}
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>

      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">Lifeyrissjóðstekjur</Text>
        </Box>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Controller
                control={control}
                name="name2"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    value={0}
                    name={name}
                    label="Upphæð"
                    backgroundColor="blue"
                    type="number"
                  />
                )}
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>

      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">Frá hvaða tíma er sótt um greiðslur?</Text>
        </Box>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Controller
                control={control}
                name="name3"
                render={({field: {onChange, value, name}}) => (
                  <DatePicker
                    label="Dagsetning"
                    placeholderText="Veldu dagsetningu"
                    backgroundColor="blue"
                    required
                  />
                )}
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </>
  )
}

export default Form6
