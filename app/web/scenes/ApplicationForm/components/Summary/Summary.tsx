import React from 'react'
import {GridRow, GridColumn, Box, Text, Stack} from '@island.is/ui'

interface PropTypes {
  user: any
}

function Summary({user}: PropTypes): JSX.Element {
  return (
    <>
      <Stack space={4}>
        <Text variant="h2">Yfirlit</Text>
        <Text variant="h4">Athugið!</Text>
      </Stack>
      <Box marginTop={1}>
        <Text>
          Hér má sjá yfirlit yfir umsókn þína. Vinsamlegast farið vel yfir að öll gögn séu rétt.
        </Text>
      </Box>
      <Box marginTop={6}>
        <Stack space={8}>
          <Stack space={3}>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Kennitala</Text>
                <Text>{user.nationalId || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Símanúmer</Text>
                <Text>{user.mobileNumber || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Nafn</Text>
                <Text>{user.name || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Netfang</Text>
                <Text>{user.email || '-'}</Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Heimilsfang</Text>
                <Text>{user.address || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Póstnúmer</Text>
                <Text>{user.postCode || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Borg</Text>
                <Text>{user.city || '-'}</Text>
              </GridColumn>
            </GridRow>
          </Stack>
          <Stack space={3}>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Er í námi</Text>
                <Text>{user.isStudying || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Var í námi síðastliðið árið</Text>
                <Text>{user.isStudyingLastYear || '-'}</Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Ökuskírteini</Text>
                <Text>{user.driverLicense || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Vélaréttindi</Text>
                <Text>{user.machinaryLicense || '-'}</Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Starfshlutfall</Text>
                <Text>{user.preferEmploymentRate || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Auka þekking</Text>
                <Text>{user.additionSkills || '-'}</Text>
              </GridColumn>
            </GridRow>
          </Stack>
          <Stack space={3}>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Cv</Text>
                <Text>{user.cv || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Kynningarbréf</Text>
                <Text>{user.coverLetter || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Meðmælabréf</Text>
                <Text>{user.recommendationLetter || '-'}</Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Réttindi</Text>
                <Text>{user.licences || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Önnur réttindi</Text>
                <Text>{user.otherLicence || '-'}</Text>
              </GridColumn>
            </GridRow>
          </Stack>
          <GridRow>
            <GridColumn>
              <Box>
                <Text variant="eyebrow" color="blue400">
                  börn
                </Text>
                {user.children.map(c => (
                  <GridRow key={c.nationalId}>
                    <GridColumn>
                      <Text variant="h5">Kennitala</Text>
                      <Text>{c.nationalId || '-'}</Text>
                    </GridColumn>
                    <GridColumn>
                      <Text variant="h5">Nafn</Text>
                      <Text>{c.name || '-'}</Text>
                    </GridColumn>
                  </GridRow>
                ))}
              </Box>
            </GridColumn>
          </GridRow>
          <Stack space={3}>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Bankanúmer</Text>
                <Text>{user.bankNumber || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Höfuðbók</Text>
                <Text>{user.bankLedger || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Reikningsnúmer</Text>
                <Text>{user.bankCode || '-'}</Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Lífeyrissjóður</Text>
                <Text>{user.pension || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Stéttarfélag</Text>
                <Text>{user.unionName || '-'}</Text>
              </GridColumn>
            </GridRow>
          </Stack>
          <GridRow>
            <GridColumn>
              <Box>
                <Text variant="eyebrow" color="blue400">
                  viðbótarlífeyrissparnaður
                </Text>
                <GridRow>
                  <GridColumn>
                    <Text variant="h5">Nafn</Text>
                    <Text>{user.supplementaryPension?.pensionName || '-'}</Text>
                  </GridColumn>
                  <GridColumn>
                    <Text variant="h5">Prósenta</Text>
                    <Text>{user.supplementaryPension?.percentage || '-'}</Text>
                  </GridColumn>
                </GridRow>
              </Box>
            </GridColumn>
          </GridRow>
          <Stack space={3}>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Nýting persónuafslátts</Text>
                <Text>{user.personalTaxDiscountRate || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Nýting persónuafslátts maka</Text>
                <Text>{user.spouseTaxDiscountRate || '-'}</Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Text variant="h5">Vinnuprósenta</Text>
                <Text>{user.workCapacity || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Sjálfstætt starfandi</Text>
                <Text>{user.isSelfEmployment || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Rök fyrir atvinnuleysi</Text>
                <Text>{user.unemploymentReason || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Aukastarf</Text>
                <Text>{user.additionalJob || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Laun</Text>
                <Text>{user.capitalIncome || '-'}</Text>
              </GridColumn>
            </GridRow>
          </Stack>
          <Stack space={3}>
            <GridRow>
              <GridColumn paddingBottom={3}>
                <Text variant="h5">Dagsetning</Text>
                <Text>{user.applicationDate || '-'}</Text>
              </GridColumn>
              <GridColumn>
                <Text variant="h5">Skjöl</Text>
                <Text>{user.documents || '-'}</Text>
              </GridColumn>
            </GridRow>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Summary
