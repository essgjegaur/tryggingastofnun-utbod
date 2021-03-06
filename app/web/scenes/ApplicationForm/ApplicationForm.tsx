import React, {useState, useRef, useContext, useEffect, useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {
  Box,
  SkeletonLoader,
  Button,
  FormStepper,
  GridColumn,
  GridContainer,
  GridRow,
} from '@island.is/ui'

import {Form1, Form2, Form3, Form4, Form5, Form6, Form7, Form8, Senda} from './components'

import * as styles from './ApplicationForm.treat'
import {useRouter} from 'next/dist/client/router'

import {users} from '../../users'
import {AuthContext} from '../../services'

function ApplicationForm(): JSX.Element {
  const context = useContext(AuthContext)
  const router = useRouter()

  const [user, setUser] = useState({
    step: 1,
    subStep: 0,
    applicationStatus: 'progress',
  })
  const userRef = useRef(user)
  const [activeSubSectionIndex, setActiveSubSectionIndex] = useState(0)
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const {handleSubmit, control, reset, getValues} = useForm<any>({
    defaultValues: useMemo(() => user, [user]),
  })

  const removeKey = (obj: any, key: any): any =>
    obj !== Object(obj)
      ? obj
      : Array.isArray(obj)
      ? obj.map(item => removeKey(item, key))
      : Object.keys(obj)
          .filter(k => k !== key)
          .reduce((acc, x) => Object.assign(acc, {[x]: removeKey(obj[x], key)}), {})

  useEffect(() => {
    if (!userRef.current && user) {
      setActiveSectionIndex(user.step)
      setActiveSubSectionIndex(user.subStep)
      reset(removeKey(user, '__typename'), {
        keepValues: false,
      })
    }
  }, [user, userRef, reset])

  useEffect(() => {
    const tempUser = users.find(user => user.gsm === context.token)
    setUser({...user, ...tempUser})

    const bankNumber = tempUser?.bankno.split('-')
    reset({
      ...tempUser,
      childrenNationalid: tempUser?.children[0],
      bankNumber: bankNumber && bankNumber[0],
      bankLedger: bankNumber && bankNumber[1],
      bankCode: bankNumber && bankNumber[2],
    })
  }, [context])

  const formName = 'Ellilífeyrir'
  const getNextIndexes = () => {
    const currentSection = forms[activeSectionIndex].section
    const subSections = currentSection.children
    if (subSections?.length && activeSubSectionIndex < subSections.length - 1) {
      return [activeSectionIndex, activeSubSectionIndex + 1]
    }

    if (activeSectionIndex < forms.length - 1) {
      return [activeSectionIndex + 1, 0]
    }
    return [activeSectionIndex, activeSubSectionIndex]
  }

  const goNext = async () => {
    const updatedUser = {
      ...user,
      step: user.step + 1,
      ...getValues(),
    }
    setUser(updatedUser)

    localStorage.setItem('user', JSON.stringify(updatedUser))

    const [index, subIndex] = getNextIndexes()
    setActiveSectionIndex(index)
    setActiveSubSectionIndex(subIndex)
  }

  const goPrevious = () => {
    const currentSection = forms[activeSectionIndex].section

    if (!currentSection.name) {
      router.push('/')
    }

    const subSections = currentSection.children
    if (subSections?.length && activeSubSectionIndex > 0) {
      setActiveSubSectionIndex(index => Math.max(index - 1, 0))
      return
    }

    if (activeSectionIndex > 0) {
      setActiveSectionIndex(index => Math.max(index - 1, 0))
      // set subsection to last element
      const prevSection = forms[activeSectionIndex - 1].section
      const prevSubSections = prevSection.children
      setActiveSubSectionIndex(Math.max((prevSubSections?.length ?? 0) - 1, 0))
    }
  }

  const updateUser = (userFields: any) => setUser({...user, ...userFields})

  const forms = [
    {component: <Form1 control={control} />, section: {name: undefined}},
    {component: <Form2 control={control} user={user} />, section: {name: 'Persónuupplýsingar'}},
    {
      section: {
        name: 'Almennar upplýsingar',
        children: [
          {
            type: 'SUB_SECTION',
            name: 'Búa/Starfa erlendis',
            component: <Form3 control={control} updateUser={updateUser} user={user} />,
          },
          {
            type: 'SUB_SECTION',
            name: 'Annað',
            component: <Form4 control={control} updateUser={updateUser} user={user} />,
          },
          {
            type: 'SUB_SECTION',
            name: 'Uppbót',
            component: <Form5 control={control} updateUser={updateUser} user={user} />,
          },
        ],
      },
    },
    {
      component: <Form6 control={control} user={user} updateUser={updateUser} />,
      section: {name: 'Tekjur'},
    },
    {
      component: <Form7 control={control} updateUser={updateUser} user={user} />,
      section: {name: 'Fylgiskjöl'},
    },
    {component: <Form8 control={control} user={user} />, section: {name: 'Yfirlit'}},
    {component: <Senda user={user} />, section: {name: 'Senda'}},
  ]

  const handleOnSubmit = handleSubmit(async input => {
    const [index, subIndex] = getNextIndexes()
    const isSubmitting = index === activeSectionIndex && index === forms.length - 1
    if (isSubmitting) {
      updateUser({applicationStatus: 'done'})
      localStorage.setItem('user', JSON.stringify({...user, applicationStatus: 'done'}))

      router.push('/')
    } else {
      goNext()
    }
  })

  const getSections = () =>
    forms.reduce((acc: any, {section}) => {
      if (!section.name) {
        return acc
      }
      return [...acc, section]
    }, [])

  const getCurrentForm = () => {
    if (activeSubSectionIndex >= 0) {
      if (activeSectionIndex >= forms.length) {
        return forms[forms.length - 1]
      }
      const currentSection = forms[activeSectionIndex].section
      const subSections = currentSection.children

      if (!subSections) {
        return forms[activeSectionIndex].component
      }
      return subSections[activeSubSectionIndex]?.component
    }
  }

  return (
    <div className={styles.root}>
      <Box paddingTop={[0, 4]} paddingBottom={[0, 5]} marginBottom={4} width="full" height="full">
        <GridContainer className={styles.gridContainer}>
          <GridRow>
            <GridColumn span={['12/12', '12/12', '8/12', '9/12']} className={styles.shellContainer}>
              <Box height="full">
                {false ? (
                  <SkeletonLoader height={200} />
                ) : (
                  <form onSubmit={handleOnSubmit} className={styles.form}>
                    <Box
                      paddingTop={[2, 2, 2, 4, 10]}
                      height="full"
                      borderRadius="large"
                      background="white"
                      display="flex"
                      flexDirection="column"
                      justifyContent="spaceBetween"
                    >
                      <Box
                        as="section"
                        paddingX={[2, 4, 4, 4, 12]}
                        paddingTop={2}
                        paddingBottom={[4, 6]}
                      >
                        {getCurrentForm()}
                      </Box>
                      <Box
                        as="footer"
                        borderTopWidth="standard"
                        borderColor="purple100"
                        paddingX={[2, 4, 4, 4, 12]}
                        paddingY={[2, 2, 4]}
                        display="flex"
                        justifyContent="spaceBetween"
                        width="full"
                      >
                        {user.applicationStatus !== 'done' && (
                          <>
                            <Box>
                              <Button
                                variant="ghost"
                                onClick={goPrevious}
                                disabled={activeSectionIndex === 0 && activeSubSectionIndex === -1}
                              >
                                Til baka
                              </Button>
                            </Box>
                            <Box>
                              <Button icon="arrowForward" type="submit">
                                {activeSectionIndex === forms.length - 1
                                  ? 'Staðfesta'
                                  : 'Halda áfram'}
                              </Button>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                  </form>
                )}
              </Box>
            </GridColumn>
            <GridColumn
              span={['12/12', '12/12', '4/12', '3/12']}
              className={styles.sidebarContainer}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="spaceBetween"
                height="full"
                paddingTop={[0, 0, 8]}
                paddingLeft={[0, 0, 0, 4]}
              >
                <FormStepper
                  formName={formName}
                  sections={getSections()}
                  activeSection={activeSectionIndex - (user?.applicationStatus === 'done' ? 0 : 1)}
                  activeSubSection={activeSubSectionIndex}
                />
              </Box>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </div>
  )
}

export default ApplicationForm
