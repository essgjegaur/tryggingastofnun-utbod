import React from 'react'
import {Box, Text, Input, GridColumn, GridContainer, GridRow, DatePicker} from '@island.is/ui'
import {Controller} from 'react-hook-form'

function Form6({control, updateUser, user}: any): JSX.Element {
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
                name="tekjur1"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    value={value}
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
                name="tekjur2"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    value={value}
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
          <Text variant="h5">Lífeyrissjóðstekjur</Text>
        </Box>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Controller
                control={control}
                name="tekjur3"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    value={value}
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
              <DatePicker
                label="Dagsetning"
                placeholderText="Veldu dagsetningu"
                backgroundColor="blue"
                required
                handleChange={tekjur4 => {
                  updateUser({tekjur4})
                }}
                selected={user?.tekjur4}
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </>
  )
}

export default Form6
