import React from 'react'
import {Box, Text, Input, GridColumn, GridContainer, GridRow, Stack} from '@island.is/ui'
import {Controller, Control} from 'react-hook-form'

interface PropTypes {
  control: Control<any>
}

function Form2({control}: PropTypes): JSX.Element {
  return (
    <>
      <Text variant="h2">Persónuupplýsingar</Text>
      <Box paddingTop={5}>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Stack space={3}>
                <Controller
                  control={control}
                  name="name"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      required
                      value={value}
                      name={name}
                      label="Nafn"
                      backgroundColor="blue"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="TODOname"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      required
                      value={value}
                      name={name}
                      label="Heimili"
                      backgroundColor="blue"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="martialStatus"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      label="Maki"
                      backgroundColor="blue"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="kennitalaBarns"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      label="Kennitala Barns"
                      backgroundColor="blue"
                    />
                  )}
                />
              </Stack>
            </GridColumn>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
              <Stack space={3}>
                <Controller
                  control={control}
                  name="kennitala"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      name={name}
                      onChange={onChange}
                      required
                      value={value}
                      label="Kennitala"
                      backgroundColor="blue"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="postNumber"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      required
                      value={value}
                      name={name}
                      label="Póstnúmer"
                      backgroundColor="blue"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="kennitalaMaka"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      label="Kennitala Maka"
                      backgroundColor="blue"
                    />
                  )}
                />
              </Stack>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>

      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">Banka upplýsingar</Text>
        </Box>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '3/12']} paddingBottom={3}>
              <Controller
                control={control}
                name="bankNumber"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    required
                    value={value}
                    name={name}
                    backgroundColor="blue"
                    label="Banki"
                    placeholder="0000"
                    tooltip="some text"
                  />
                )}
              />
            </GridColumn>
            <GridColumn span={['12/12', '12/12', '6/12', '3/12']} paddingBottom={3}>
              <Controller
                control={control}
                name="bankLedger"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    required
                    value={value}
                    name={name}
                    backgroundColor="blue"
                    label="Hb"
                    placeholder="00"
                  />
                )}
              />
            </GridColumn>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
              <Controller
                control={control}
                name="bankCode"
                render={({field: {onChange, value, name}}) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    required
                    name={name}
                    backgroundColor="blue"
                    label="Reikningsnúmer"
                    placeholder="000000"
                  />
                )}
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>

      <Box paddingTop={5}>
        <Box marginBottom={3}>
          <Text variant="h5">Tengiupplýsingar</Text>
        </Box>
        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Stack space={3}>
                <Controller
                  control={control}
                  name="TODOFarsími"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      required
                      value={value}
                      name={name}
                      label="Farsími"
                      backgroundColor="blue"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="TODONetfang"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      required
                      value={value}
                      name={name}
                      label="Netfang"
                      backgroundColor="blue"
                    />
                  )}
                />
              </Stack>
            </GridColumn>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']} paddingBottom={3}>
              <Stack space={3}>
                <Controller
                  control={control}
                  name="TODOHeimasími"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      label="Heimasími"
                      backgroundColor="blue"
                    />
                  )}
                />
              </Stack>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </>
  )
}

export default Form2
