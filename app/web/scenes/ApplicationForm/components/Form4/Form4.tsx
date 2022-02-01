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
} from '@island.is/ui'

function Form4({control}: any): JSX.Element {
  const [control1, setControl1] = useState<boolean>()
  const [control2, setControl2] = useState<boolean>()
  return (
    <>
      <Text variant="h2">Almennar upplýsingar</Text>
      <Box paddingTop={5}>
        <Stack space={6}>
          <Box display="flex" justifyContent="spaceBetween">
            <Text variant="h5">Ég sæki um snemmtöku ellilífeyris?</Text>
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
          <Box display="flex" justifyContent="spaceBetween">
            <Text variant="h5">Ég sæki um ellilífeyri sjómanna?</Text>
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
        </Stack>
      </Box>
    </>
  )
}

export default Form4
