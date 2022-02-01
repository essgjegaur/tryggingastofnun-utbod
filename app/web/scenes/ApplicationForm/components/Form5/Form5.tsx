import React, {useState} from 'react'
import {
  Box,
  Text,
  Stack,
  RadioButton,
  GridColumn,
  GridContainer,
  GridRow,
  Input,
} from '@island.is/ui'
import {Controller} from 'react-hook-form'

function Form5({control, updateUser, user}: any): JSX.Element {
  // first
  const [control1, setControl1] = useState<boolean>()
  const [control2, setControl2] = useState<boolean>()
  const [control3, setControl3] = useState<boolean>()
  // second
  const [control4, setControl4] = useState<boolean>()
  const [control5, setControl5] = useState<boolean>()
  // third
  const [control6, setControl6] = useState<boolean>()
  return (
    <>
      <Text variant="h2">Almennar upplýsingar</Text>
      <Box paddingTop={5}>
        <Stack space={6}>
          <Stack space={2}>
            <Box display="flex" justifyContent="spaceBetween">
              <Text variant="h5">Ég vil sækja um heimilisuppbót?</Text>
              <Box display="flex" justifyContent="spaceBetween">
                <Box marginRight={4}>
                  <RadioButton
                    label="Já"
                    onChange={() => {
                      updateUser({almennarField5: true})
                      setControl1(true)
                    }}
                    checked={user.almennarField5 === true || control1 === true}
                  />
                </Box>
                <RadioButton
                  label="Nei"
                  onChange={() => {
                    updateUser({almennarField5: false})
                    setControl1(false)
                  }}
                  checked={user.almennarField5 === false || control1 === false}
                />
              </Box>
            </Box>
            {(user.almennarField5 === true || control1 === true) && (
              <>
                <Box display="flex" justifyContent="spaceBetween">
                  <Text variant="h5">Ertu á leigumarkaði?</Text>
                  <Box display="flex" justifyContent="spaceBetween">
                    <Box marginRight={4}>
                      <RadioButton
                        label="Já"
                        onChange={() => {
                          updateUser({almennarField6: true})
                          setControl2(true)
                        }}
                        checked={user.almennarField6 === true || control2 === true}
                      />
                    </Box>
                    <RadioButton
                      label="Nei"
                      onChange={() => {
                        updateUser({almennarField6: false})
                        setControl2(false)
                      }}
                      checked={user.almennarField6 === false || control2 === false}
                    />
                  </Box>
                </Box>
                <Box display="flex" justifyContent="spaceBetween">
                  <Text variant="h5">
                    Býr ungmenni á aldrinum 18-25 ára sem er í nám á heimilinu?
                  </Text>
                  <Box display="flex" justifyContent="spaceBetween">
                    <Box marginRight={4}>
                      <RadioButton
                        label="Já"
                        onChange={() => {
                          updateUser({almennarField7: true})
                          setControl3(true)
                        }}
                        checked={user.almennarField7 === true || control3 === true}
                      />
                    </Box>
                    <RadioButton
                      label="Nei"
                      onChange={() => {
                        updateUser({almennarField7: false})
                        setControl3(false)
                      }}
                      checked={user.almennarField7 === false || control3 === false}
                    />
                  </Box>
                </Box>
              </>
            )}
            {(user.almennarField7 === true || control3 === true) && (
              <Box marginTop={2}>
                <GridContainer>
                  <GridRow>
                    <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                      <Controller
                        control={control}
                        name="kennitalaUgmennis"
                        render={({field: {onChange, value, name}}) => (
                          <Input
                            onChange={onChange}
                            required
                            value={value}
                            name={name}
                            label="Kennitala ungmennis"
                            backgroundColor="blue"
                            defaultValue={user.kennitalaUgmennis}
                          />
                        )}
                      />
                    </GridColumn>
                  </GridRow>
                </GridContainer>
              </Box>
            )}
          </Stack>

          <Stack space={2}>
            <Box display="flex" justifyContent="spaceBetween">
              <Text variant="h5">Ég vil sækja um barnalífeyri?</Text>
              <Box display="flex" justifyContent="spaceBetween">
                <Box marginRight={4}>
                  <RadioButton
                    label="Já"
                    onChange={() => {
                      updateUser({almennarField8: true})
                      setControl4(true)
                    }}
                    checked={user.almennarField8 === true || control4 === true}
                  />
                </Box>

                <RadioButton
                  label="Nei"
                  onChange={() => {
                    updateUser({almennarField8: false})
                    setControl4(false)
                  }}
                  checked={user.almennarField8 === false || control4 === false}
                />
              </Box>
            </Box>
            {(user.almennarField8 === true || control4 === true) && (
              <Box display="flex" justifyContent="spaceBetween">
                <Text variant="h5">Býr barn hjá umsækjanda?</Text>
                <Box display="flex" justifyContent="spaceBetween">
                  <Box marginRight={4}>
                    <RadioButton
                      label="Já"
                      onChange={() => {
                        updateUser({almennarField9: true})
                        setControl5(true)
                      }}
                      checked={user.almennarField9 === true || control5 === true}
                    />
                  </Box>

                  <RadioButton
                    label="Nei"
                    onChange={() => {
                      updateUser({almennarField9: false})
                      setControl5(false)
                    }}
                    checked={user.almennarField9 === false || control5 === false}
                  />
                </Box>
              </Box>
            )}

            {(user.almennarField9 === true || control5 === true) && (
              <Box marginTop={2}>
                <GridContainer>
                  <GridRow>
                    <GridColumn span={['12/12', '12/12', '6/12', '6/12']}>
                      <Controller
                        control={control}
                        name="kennitalaBarns"
                        render={({field: {onChange, value, name}}) => (
                          <Input
                            onChange={onChange}
                            required
                            value={value}
                            name={name}
                            label="Kennitala barns"
                            backgroundColor="blue"
                            defaultValue={user.kennitalaBarns}
                          />
                        )}
                      />
                    </GridColumn>
                  </GridRow>
                </GridContainer>
              </Box>
            )}
          </Stack>

          <Box display="flex" justifyContent="spaceBetween">
            <Text variant="h5">Ég vil sækja um uppbót?</Text>
            <Box display="flex" justifyContent="spaceBetween">
              <Box marginRight={4}>
                <RadioButton
                  label="Já"
                  onChange={() => {
                    updateUser({almennarField10: true})
                    setControl6(true)
                  }}
                  checked={user.almennarField10 === true || control6 === true}
                />
              </Box>

              <RadioButton
                label="Nei"
                onChange={() => {
                  updateUser({almennarField10: false})
                  setControl6(false)
                }}
                checked={user.almennarField10 === false || control6 === false}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Form5
