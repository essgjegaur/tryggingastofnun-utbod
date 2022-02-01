import React from 'react'
import {Box, Text, Input, GridColumn, GridContainer, GridRow, Stack} from '@island.is/ui'
import {Controller} from 'react-hook-form'

function Form2({control, user}: any): JSX.Element {
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
                      disabled
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="home"
                  render={({field: {onChange, value, name}, formState: {errors}}) => {
                    return (
                      <Input
                        onChange={onChange}
                        required
                        value={value}
                        name={name}
                        label="Heimili"
                        backgroundColor="blue"
                        defaultValue={user?.home}
                      />
                    )
                  }}
                />
                <Controller
                  control={control}
                  name="spouse"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      value={value === 'no' ? '-' : value}
                      name={name}
                      label="Maki"
                      backgroundColor="blue"
                      defaultValue={user?.spouse}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="childrenNationalid"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      label="Kennitala Barns"
                      backgroundColor="blue"
                      defaultValue={user?.childrenNationalid}
                    />
                  )}
                />
              </Stack>
            </GridColumn>
            <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
              <Stack space={3}>
                <Controller
                  control={control}
                  name="nationalid"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      name={name}
                      onChange={onChange}
                      required
                      value={value}
                      label="Kennitala"
                      backgroundColor="blue"
                      disabled
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
                      defaultValue={user?.postNumber}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="spouseNationalid"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      label="Kennitala Maka"
                      backgroundColor="blue"
                      defaultValue={user?.spouseNationalid}
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
                  name="gsm"
                  render={({field: {onChange, value, name}}) => (
                    <Input
                      onChange={onChange}
                      required
                      value={value}
                      name={name}
                      label="Farsími"
                      backgroundColor="blue"
                      disabled
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="email"
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
                  name="phone"
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
