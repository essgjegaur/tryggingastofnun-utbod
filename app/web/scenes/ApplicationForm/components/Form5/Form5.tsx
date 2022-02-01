import React, {useState} from 'react'
import {
  Box,
  Text,
  Stack,
  RadioButton,
  Tooltip,
  Inline,
  GridColumn,
  GridContainer,
  GridRow,
  Select,
  DatePicker,
  Input,
  Divider,
} from '@island.is/ui'
import {Controller} from 'react-hook-form'

function Form5({control}: any): JSX.Element {
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
                    onChange={() => setControl1(true)}
                    checked={control1 === true}
                  />
                </Box>
                <RadioButton
                  label="Nei"
                  onChange={() => setControl1(false)}
                  checked={control1 === false}
                />
              </Box>
            </Box>
            {control1 === true && (
              <>
                <Box display="flex" justifyContent="spaceBetween">
                  <Text variant="h5">Ertu á leigumarkaði?</Text>
                  <Box display="flex" justifyContent="spaceBetween">
                    <Box marginRight={4}>
                      <RadioButton
                        label="Já"
                        onChange={() => setControl2(true)}
                        checked={control2 === true}
                      />
                    </Box>
                    <RadioButton
                      label="Nei"
                      onChange={() => setControl2(false)}
                      checked={control2 === false}
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
                        onChange={() => setControl3(true)}
                        checked={control3 === true}
                      />
                    </Box>
                    <RadioButton
                      label="Nei"
                      onChange={() => setControl3(false)}
                      checked={control3 === false}
                    />
                  </Box>
                </Box>
              </>
            )}
            {control3 === true && (
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
                    onChange={() => setControl4(true)}
                    checked={control4 === true}
                  />
                </Box>

                <RadioButton
                  label="Nei"
                  onChange={() => setControl4(false)}
                  checked={control4 === false}
                />
              </Box>
            </Box>
            {control4 === true && (
              <Box display="flex" justifyContent="spaceBetween">
                <Text variant="h5">Býr barn hjá umsækjanda?</Text>
                <Box display="flex" justifyContent="spaceBetween">
                  <Box marginRight={4}>
                    <RadioButton
                      label="Já"
                      onChange={() => setControl5(true)}
                      checked={control5 === true}
                    />
                  </Box>

                  <RadioButton
                    label="Nei"
                    onChange={() => setControl5(false)}
                    checked={control5 === false}
                  />
                </Box>
              </Box>
            )}

            {control5 === true && (
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
                  onChange={() => setControl6(true)}
                  checked={control6 === true}
                />
              </Box>

              <RadioButton
                label="Nei"
                onChange={() => setControl6(false)}
                checked={control6 === false}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Form5
