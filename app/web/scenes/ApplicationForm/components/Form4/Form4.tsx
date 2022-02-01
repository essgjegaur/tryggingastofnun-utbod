import React, {useState} from 'react'
import {Box, Text, Stack, RadioButton} from '@island.is/ui'

function Form4({updateUser, user}: any): JSX.Element {
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
                  onChange={() => {
                    updateUser({almennarField3: true})
                    setControl1(true)
                  }}
                  checked={user.almennarField3 === true || control1 === true}
                />
              </Box>
              <RadioButton
                label="Nei"
                onChange={() => {
                  updateUser({almennarField3: false})
                  setControl1(false)
                }}
                checked={user.almennarField3 === false || control1 === false}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="spaceBetween">
            <Text variant="h5">Ég sæki um ellilífeyri sjómanna?</Text>
            <Box display="flex" justifyContent="spaceBetween">
              <Box marginRight={4}>
                <RadioButton
                  label="Já"
                  onChange={() => {
                    updateUser({almennarField4: true})
                    setControl2(true)
                  }}
                  checked={user.almennarField4 === true || control2 === true}
                />
              </Box>
              <RadioButton
                label="Nei"
                onChange={() => {
                  updateUser({almennarField4: false})
                  setControl2(false)
                }}
                checked={user.almennarField4 === false || control2 === false}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Form4
