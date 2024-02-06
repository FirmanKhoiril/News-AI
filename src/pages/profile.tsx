import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Selector from '@/components/chat/subcomp/selector'
import { FaPencilAlt } from 'react-icons/fa'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { countries } from 'countries-list'
import { useState } from 'react'
// import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ProfilePic from '@/components/profilePic'
import useInputChange from '@/lib/hooks/useInput'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const { inputValues, handleInputChange, handleCustomChange } =
    useInputChange()

    const navigate = useNavigate()
  useEffect(() => {
    // set default
    handleCustomChange({
      name: 'John doe',
      email: 'example@email.com',
      username: 'johndoe189',
      number: '0534392329',
      surname: 'John',
    })
  }, [])
  const homeFaqs = [
    {
      question: `What is the purpose of the FGW Chatbots?`,
      answer: `The FGW Chatbots are designed to assist candidates in preparing for
various certification exams by providing tailored assistance and
resources based on the selected exam, topic, chapter, and subchapter.`,
    },
    {
      question: `Which certification exams does the FGW Chatbots support?`,
      answer: `The chatbots support CAIA Level 1, CAIA Level 2, CFA ESG Investing,
GARP SCR, FRM Level 1 & 2 (coming soon), CFA Levels 1, 2 & 3, and
CIPM Levels 1 & 2 (coming soon)`,
    },
    {
      question: `How is the FGW Chatbot different from other educational chatbots?
`,
      answer: `FGW Chatbots are customized to the specific course content of the
selected exam, ensuring precise and relevant assistance. Additionally,
advanced options allow for further refinement and generation of
practice questions and flashcards.
`,
    },
    {
      question: 'How do I select the exam I am preparing for in the chatbot?',
      answer: `Upon subscribing, you can choose the exam you are preparing for, and
the chatbot will customize its responses based on the selected exam
content.`,
    },
    {
      question: `Can I change the exam I am preparing for in the chatbot?`,
      answer: `No, please note that the content for each exam is segregated to ensure
precision and relevance. You might need to adjust your subscription if
the new exam is not included in your current plan.`,
    },
    {
      question: `How does the FGWPro Chatbot generate practice questions and answers?
`,
      answer: `The FGWPro Chatbot allows you to select the number, difficulty, type,
and other specifics of questions. It then generates questions and
detailed answers based on your selections, adhering to the Learning
Objectives outlined in each chapter of the exam's study material.
`,
    },
    {
      question: `How often is the content updated?
`,
      answer: ` Our content is regularly updated to reflect the latest changes in exam
syllabuses and formats.`,
    },
    {
      question: `Is there a limit to the number of questions I can generate with the
FGWPro Chatbot?`,
      answer: `There are limits per query, but no daily or monthly limits on the total number
of questions.`,
    },
  ]
  const examLists = [
    'CAIA Level 1',
    'CAIA Level 2',
    'CFA Level 1',
    'CFA Level 2',
    'CFA Level 3',
    'CFA ESG Investing',
    'GARP SCR',
    'FRM Level 1',
    'FRM level 2',
    'CIPM Level 1',
    'CIPM Level 2',
  ]

  const professionalFields = [
    'Information Technology',
    'Healthcare',
    'Finance/Banking',
    'Education',
    'Marketing/Advertising',
    'Legal',
    'Engineering',
    'Arts and Design',
    'Other',
  ]

  const studentType = [
    'Computer Science & IT',
    'Medicine & Health Sciences',
    'Business & Economics',
    'Arts & Humanities',
    'Social Sciences',
    'Engineering & Technology',
    'Natural Sciences',
    'Law & Legal Studies',
    'Others',
  ]
  const currentLevelOfEducation = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Doctorate/Ph.D.',
    'Other',
  ]

  const countryNames = Object.values(countries).map((country) => country.name)
  const countryNamesArray = countryNames.map((country) => String(country))

  const enableDisabled = ['Enabled', 'Disabled']

  const [userType, setUserType] = useState('')
  const student = userType === 'student'
  const job = userType === 'job'

  const billingMethods = ['PayPal', 'Card', 'Bank Transfer']

  enum TabList {
    Profile = 'Profile',
    NotificationPreferences = 'Notification Preferences',
    Security = 'Security',
    BillingInformation = 'Billing Information',
    // SocialMediaIntegration = 'Social Media Integration',
    DataPrivacy = 'Data Privacy',
    HelpAndSupport = 'Help and Support',
  }

  const tabList = Object.values(TabList)

  const [currentTab, setCurrentTab] = useState(tabList[0])

  function EditProfile() {
    return (
      <Dialog>
        <DialogTrigger>
          <button className='px-3 py-1 rounded-md border dark:border-gray-900 text-sm flex justify-center items-center gap-3 text-2'>
            <FaPencilAlt />
            Edit
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className='h-80'>
            <div className='space-y-4 px-3'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  name='name'
                  id='name'
                  onChange={handleInputChange}
                  placeholder='Your name'
                  value={inputValues?.name || ''}
                />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Surname</Label>
                <Input
                  name='surname'
                  id='surname'
                  onChange={handleInputChange}
                  placeholder='Your Surname'
                  value={inputValues?.surname || ''}
                />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  onChange={handleInputChange}
                  placeholder='Your email address'
                  value={inputValues?.email || ''}
                />
              </div>

              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='username'>Number</Label>
                <Input
                  name='number'
                  onChange={handleInputChange}
                  placeholder='Your phone number'
                  value={inputValues?.number || ''}
                />
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Preparing for' />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className='h-28'>
                    {examLists.map((e, i) => {
                      return (
                        <SelectItem value={e} key={i}>
                          {e}
                        </SelectItem>
                      )
                    })}
                  </ScrollArea>
                </SelectContent>
              </Select>
              {/* Contact Information */}
              <div className='px-3 py-3 rounded-xl dark:bg-gray-900 bg-light-green'>
                <p className='text-base font-semibold text-2'>
                  Contact Information
                </p>
                <div className='mt-4 space-y-3'>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='username' className='font-normal'>
                      Address
                    </Label>
                    <Input
                      name='address'
                      onChange={handleInputChange}
                      placeholder='Your Address'
                      value={inputValues?.address || ''}
                    />
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='username' className='font-normal'>
                      Phone Number
                    </Label>
                    <Input
                      name='number'
                      onChange={handleInputChange}
                      placeholder='Your phone number'
                      value={inputValues?.number || ''}
                    />
                  </div>
                </div>
              </div>
              {/* Contact Information */}
              <Select onValueChange={(e) => setUserType(e)}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='User Type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='student'>Student</SelectItem>
                  <SelectItem value='job'>Working Professional</SelectItem>
                </SelectContent>
              </Select>

              {job && (
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Professional Field' />
                  </SelectTrigger>
                  <SelectContent>
                    {professionalFields.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {student && (
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Field of Study' />
                  </SelectTrigger>
                  <SelectContent>
                    {studentType.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {student && (
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Current Level of Education' />
                  </SelectTrigger>
                  <SelectContent>
                    {currentLevelOfEducation.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {student && (
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='username'>Educational Institution</Label>
                  <Input
                    id='educationalInstitute'
                    name='educationalInstitute'
                    onChange={handleInputChange}
                    placeholder='Your Educational Institution'
                    value={inputValues?.educationalInstitute || ''}
                  />
                </div>
              )}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Country of Residence' />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className='h-28'>
                    {countryNamesArray.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
          </ScrollArea>
          <div className='flex justify-end'>
            <button className='btn-primary'>Save</button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <main className='p-5 mt-5 min-h-[94vh] h-full'>
      <div className='card grid grid-cols-12'>
        <div className='col-span-2'>
          <nav className='flex flex-col gap-y-3'>
            {tabList.map((tab, i) => {
              return (
                <button
                  key={i}
                  className={`text-left font-medium px-3 py-2 rounded-md text-sm ${
                    tab === currentTab
                      ? 'bg-[#755de237] text-[#7758ff] dark:text-[#9c86ff]'
                      : 'text-2'
                  }`}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </button>
              )
            })}
            <div className='mt-10'>
              <button onClick={() => navigate("/register")} className='text-sm px-4 py-2 rounded-md border-2 border-[#755de2] text-[#755de2] font-bold flex gap-3 items-center'>
                <RiLogoutBoxLine />
                Log Out
              </button>
            </div>
          </nav>
        </div>
        <div className='col-span-10 mx-3 card border dark:border-gray-900 shadow'>
          {currentTab === TabList.Profile && (
            <div className='space-y-4'>
              <div className='card border dark:border-gray-900'>
                <div className='flex justify-end'>
                  <EditProfile />
                </div>
                <div className='flex gap-10 items-start'>
                  <ProfilePic />
                  <div className='mt-3'>
                    <h2 className='text-2xl font-medium'>John Doe</h2>
                    <p className='text-2 text-sm'>samijack09</p>
                    <p className='text-2 text-sm'>
                      Los Angeles, California, USA
                    </p>
                  </div>
                </div>
              </div>
              <div className='card border dark:border-gray-900'>
                <div className='flex justify-end'>
                  <EditProfile />
                </div>
                <p className='text-lg font-semibold'>Personal Information</p>
                <div className='grid grid-cols-3 mt-4'>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-sm font-semibold text-2'>First Name</p>
                      <p className='text-sm text-2'>Sami</p>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-2'>Email</p>
                      <p className='text-sm text-2'>email@gmail.com</p>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-2'>
                        Working Professional
                      </p>
                      <p className='text-sm text-2'>Information Technology</p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-sm font-semibold text-2'>Surname</p>
                      <p className='text-sm text-2'>Joe</p>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-2'>
                        Mobile Phone
                      </p>
                      <p className='text-sm text-2'>(213) 555-1234</p>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-2'>
                        Educational Institution
                      </p>
                      <p className='text-sm text-2'>Graduated</p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-sm font-semibold text-2'>Username</p>
                      <p className='text-sm text-2'>samijack09</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card border dark:border-gray-900'>
                <div className='flex justify-end'>
                  <EditProfile />
                </div>
                <p className='text-lg font-semibold'>Address Details</p>
                <div className='grid grid-cols-2 mt-4'>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-sm font-semibold text-2'>Country</p>
                      <p className='text-sm text-2'>United States of America</p>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-2'>
                        Postal Code
                      </p>
                      <p className='text-sm text-2'>ERT 62574</p>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-sm font-semibold text-2'>City/State</p>
                      <p className='text-sm text-2'>Califonia, USA</p>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-2'>Tax ID</p>
                      <p className='text-sm text-2'>AS564178969</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentTab === TabList.NotificationPreferences && (
            <div>
              <p className='text-lg font-semibold'>Notification Preferences</p>
              <div className='mt-4 space-y-3 max-w-xs w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Email Notifications' />
                  </SelectTrigger>
                  <SelectContent>
                    <ScrollArea className='h-16'>
                      {enableDisabled.map((e, i) => (
                        <SelectItem value={e} key={i}>
                          {e}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='In-App Notifications' />
                  </SelectTrigger>
                  <SelectContent>
                    <ScrollArea className='h-16'>
                      {enableDisabled.map((e, i) => (
                        <SelectItem value={e} key={i}>
                          {e}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
              <button className='btn-primary mt-5'>Save</button>
            </div>
          )}
          {currentTab === TabList.Security && (
            <div className='max-w-md w-full'>
              <p className='text-lg font-semibold mb-5'>Change Password</p>
              <div className='flex flex-col space-y-8'>
                <div className='grid grid-cols-12 gap-2'>
                  <Label htmlFor='name' className='text-2 mt-2 col-span-3'>
                    Current Password
                  </Label>
                  <Input
                    name='prevPass'
                    className='col-span-9'
                    id='prevPass'
                    type='password'
                    onChange={handleInputChange}
                    placeholder='Current password'
                    value={inputValues?.prevPass || ''}
                  />
                </div>
                <div className='grid grid-cols-12 gap-2'>
                  <Label htmlFor='email' className='text-2 mt-2 col-span-3'>
                    New password
                  </Label>
                  <Input
                    id='currPass'
                    className='col-span-9'
                    name='currPass'
                    type='password'
                    onChange={handleInputChange}
                    placeholder='New password'
                    value={inputValues?.currPass || ''}
                  />
                </div>
                <div>
                  <button className='btn-primary'>Update Password</button>
                </div>
              </div>
            </div>
          )}
          {currentTab === TabList.BillingInformation && (
            <div>
              <p className='text-lg font-semibold'>Billing Information</p>

              <div className='space-y-5 mt-4 max-w-xs w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Payment Method' />
                  </SelectTrigger>
                  <SelectContent>
                    <ScrollArea className='h-16'>
                      {billingMethods.map((e, i) => (
                        <SelectItem value={e} key={i}>
                          {e}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='username' className='font-normal'>
                    Billing Address
                  </Label>
                  <Input
                    id='Billing_Address'
                    name='billing_address'
                    onChange={handleInputChange}
                    placeholder='Your Billing Institution'
                    value={inputValues?.billing_address || ''}
                  />
                </div>
                <button className='btn-primary'>Add Payment Method</button>
              </div>
            </div>
          )}
          {/* {currentTab === TabList.SocialMediaIntegration && (
            <div>
              <p className='text-lg font-semibold'>Social Media Integration</p>

              <div className='grid grid-cols-2 gap-2 max-w-sm mt-3'>
                <div className='flex gap-2 rounded-md items-center px-2 py-3 cursor-pointer text-sm border dark:border-gray-900'>
                  <FaFacebook className='w-8 h-auto text-gray-700' />
                  <p>Facebook</p>
                </div>
                <div className='flex gap-2 rounded-md items-center px-2 py-3 cursor-pointer text-sm border dark:border-gray-900'>
                  <FaLinkedin className='w-8 h-auto text-gray-700' />
                  <p>Linkedin</p>
                </div>
              </div>
            </div>
          )} */}
          {currentTab === TabList.DataPrivacy && (
            <div>
              <ScrollArea className='h-[26rem] w-full'>
                <div className='space-y-4'>
                  <p className='text-lg font-semibold'>Terms and Conditions</p>
                  <div className='text-2 text-sm'>
                    <>
                      <p />
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ fontWeight: 'normal' }}>
                          Your privacy is important to{' '}
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ fontWeight: 'normal' }}>
                          . This privacy policy (“Policy”) applies to the{' '}
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ fontWeight: 'normal' }}>
                          sites and services and tells you how personal
                          information is collected, used, disclosed, and
                          protected by{' '}
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ fontWeight: 'normal' }}>
                          . This statement includes both{' '}
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ fontWeight: 'normal' }}>
                          ’s European Union – U.S. Safe Harbor Privacy Statement
                          and the Website Privacy Statements.
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ fontWeight: 'normal' }}>
                          Changes to This Policy
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ fontWeight: 'normal' }}>
                          We may change this Policy from time to time. If we
                          make any changes to this Policy, we will change the
                          “last updated” date above. If there are material
                          changes to this Policy, we will notify you more
                          directly. We encourage you to check this Policy
                          whenever you use our Web sites and services to
                          understand how your personal information is used.
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ fontWeight: 'normal' }}>
                          Information Collected
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ fontWeight: 'normal' }}>
                          We collect information from you in various ways when
                          you use our Web sites and services. We may also
                          supplement this information with information from
                          other companies. We collect two general types of
                          information, namely personal information and aggregate
                          data. As used in this Policy, the term “personal
                          information” means information that specifically
                          identifies an individual (such as a name and email
                          address), and demographic and other information when
                          directly linked to information that can identify an
                          individual.
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ fontWeight: 'normal' }}>
                          Our definition of personal information does not
                          include “aggregate” data. Aggregate data is
                          information we collect about a group or category of
                          services or users from which individual user
                          identities have been removed. In other words, no
                          personal information is included in aggregate data.
                          Aggregate data helps us understand trends in our
                          users’ needs so that we can better consider new
                          features or otherwise tailor our services. This Policy
                          in no way restricts or limits our collection and use
                          of aggregate data, and we may share aggregate data
                          about our users with third parties for various
                          purposes, including to help us better understand our
                          customer needs and improve our services and for
                          advertising and marketing purposes.
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ fontWeight: 'normal' }}>
                          The following are the specific types of information we
                          collect from you.
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <u>
                          <span style={{ fontWeight: 'normal' }}>
                            Information You Give Us.
                          </span>
                        </u>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            We collect information you give us on our Web site
                            and when you register for and use our services.
                            Examples include the following:
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <u>
                          <span style={{ fontWeight: 'normal' }}>
                            Registration and Profile Information.
                          </span>
                        </u>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            When you register to use our services or update your
                            profile, we may collect various kinds of information
                            about you including, your name and email address;
                            your title, company and other profile information
                            you provide; demographic information; and
                            information you upload like photos, files, and
                            documents.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <u>
                          <span style={{ fontWeight: 'normal' }}>
                            Payment Information.
                          </span>
                        </u>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            If you choose to use a paid{' '}
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            ’s account or service, our payment processing vendor
                            collects your credit card information and billing
                            address.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <u>
                          <span style={{ fontWeight: 'normal' }}>
                            Third-Party Account Information.
                          </span>
                        </u>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            When you connect our services to your marketplace
                            accounts on third-party websites, we collect the
                            login and authentication information necessary to
                            maintain the connection, as well as any information
                            downloaded from these third-party websites, such as
                            order and inventory information.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <u>
                          <span style={{ fontWeight: 'normal' }}>
                            Submissions and Customer Service.
                          </span>
                        </u>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            From time to time we may use surveys, contests or
                            sweepstakes requesting personal or demographic
                            information and customer feedback.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <u>
                          <span style={{ fontWeight: 'normal' }}>
                            Automatically Collected Information.
                          </span>
                        </u>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            We automatically receive certain types of
                            information when you interact with our Web pages,
                            services and communications. For example, it is
                            standard for your Web browser to automatically send
                            information to every Web site you visit, including
                            ours. That information includes your computer’s IP
                            address, access times, your browser type and
                            language, and referring Web site addresses. We may
                            also collect information about the type of operating
                            system you use, your account activity, and files and
                            pages accessed or used by you.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <u>
                          <span style={{ fontWeight: 'normal' }}>
                            Cookies and Web Beacons.
                          </span>
                        </u>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            We may also use certain kinds of technology such as
                            cookies and Web beacons to collect information.
                            Among other things, the use of cookies and Web
                            beacons enables us to improve our Web sites and
                            emails by seeing which areas and features are most
                            popular, to count the number of computers accessing
                            our Web site, to personalize and improve your
                            experience, to record your preferences, and to allow
                            you to visit our Web site without re-entering your
                            member ID and/or password. A cookie is a small
                            amount of data which is sent to your browser from a
                            Web site’s computers and stored on your computer’s
                            hard drive. Most browsers automatically accept
                            cookies as the default setting. You can modify your
                            browser setting to reject our cookies or to prompt
                            you before accepting a cookie by editing your
                            browser options. However, if a browser is set not to
                            accept cookies or if a user rejects a cookie, some
                            portions of the Web site and services may not
                            function properly.{' '}
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            For example, you may not be able to sign in and
                            access certain Web page features or services. A Web
                            beacon is an electronic image, also called a “gif,”
                            that may be used on our Web pages to deliver
                            cookies, count visits and compile statistics on
                            usage and campaign effectiveness or in our emails to
                            tell if an email has been opened and acted upon.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            Use of Personal Information
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            In general, we use your personal information to
                            process your requests or transactions, to provide
                            you with information or services you request, to
                            inform you about other information, events,
                            promotions, products or services we think will be of
                            interest to you, to facilitate your use of, and our
                            administration and operation of, the Web site and
                            services and to otherwise serve you and our users.
                            For example, we may use your personal information:
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            To request feedback and to enable us to develop,
                            customize and improve the Web site and our
                            publications, products and services;
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            To conduct marketing analysis, to send you surveys
                            or newsletters, to contact you about services,
                            products, activities, special events or offers from{' '}
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            or our partners and for other marketing,
                            informational, product or service development and
                            promotional purposes;
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            To send you a welcoming email and to contact you
                            about your use of the Web site and services; to
                            respond to your emails, submissions, comments,
                            requests or complaints; to perform after-sales
                            services; to anticipate and resolve problems with
                            our service; to respond to customer support
                            inquiries, for assistance with our product and
                            service development; and to inform you of updates to
                            products and services from{' '}
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            that better meet your needs;
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            To send and receive order and inventory information
                            from third-party websites in which you have an
                            account for the purposes of the services of our
                            websites;
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            To contact you if you win a contest; and for other
                            purposes about which we notify you.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            may store and process personal information in the
                            United States and other countries.{' '}
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            adheres to the U.S. Department of Commerce’s Safe
                            Harbor privacy principles regarding the collection,
                            use, and retention of personal information from the
                            European Union. For more information about the Safe
                            Harbor Principles, please visit the U.S. Department
                            of Commerce’s Website at
                            http://export.gov/safeharbor/.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            Sharing of Personal Information
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            reserves the right to share aggregated demographic
                            information about our customers, sales, and traffic
                            to our partners and advertisers. We will not give,
                            sell, rent, share, or trade any of your personal
                            information or any data that you store using our
                            services to any third party except as outlined in
                            this Policy or with your consent. We may disclose
                            information to a third party to (a) comply with laws
                            or respond to lawful requests and legal process, (b)
                            to protect
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            , agents, customers, and others including to enforce
                            our agreements, policies and terms of use or (c) in
                            the good faith belief that disclosure is needed to
                            respond to an emergency, or protect the personal
                            safety of any person.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            provides you with opportunities to connect with
                            third party services and includes product features
                            that by their nature share information with those
                            third party services. Those services can see your
                            merchant order information, inventory information
                            and counts, shipment tracking numbers and other
                            related information. If you choose to use any such
                            third party services, we may facilitate sharing of
                            your information with those services. Your use of
                            such services is not governed by{' '}
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            ’s terms or privacy policy.{' '}
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            does not control the services of those third parties
                            or how they use your information and documents. Be
                            sure to review the terms and the privacy policies of
                            those third parties before using their services.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            We may share personal information in connection with
                            an acquisition, merger, or sale of all or a
                            substantial portion of our business, with or to
                            another company. In any such event, you will receive
                            notice if your data is transferred and becomes
                            subject to a substantially different privacy policy.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            Network and Information Security
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            takes reasonable steps to protect information we
                            collect from you to prevent loss, misuse and
                            unauthorized access, disclosure, alteration, and
                            destruction. In addition, highly confidential
                            personal information such as credit card number and
                            password that we request from you on our Web site is
                            protected with encryption, such as Secured Socket
                            Layer (SSL) protocol, during transmission over the
                            Internet.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            The servers on which information is stored are kept
                            in a controlled environment with limited access.
                            While we take reasonable efforts to guard personal
                            information we knowingly collect directly from you,
                            no security system is impenetrable. In addition, we
                            cannot guarantee that any passively-collected
                            personal information you choose to store on our
                            systems are maintained at adequate levels of
                            protection to meet specific needs or obligations you
                            may have relating to that information.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            Your account information and access to our service
                            is accessible only through the use of an individual
                            user ID and password. To protect the confidentiality
                            of personal information, you must keep your password
                            confidential and not disclose it to any other
                            person. Please advise us immediately if you believe
                            your password has been misused. In addition, always
                            logout and close your browser when you finish your
                            session. Please note that we will never ask you to
                            disclose your password in an unsolicited phone call
                            or email.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            Updating and Accessing Personal Information
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            If your personal information changes in any way, we
                            invite you to correct or update your information as
                            soon as possible. You can make updates to your
                            profile information by logging into your account on
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            at any time. You can also request changes or access
                            to your information by emailing{' '}
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>.</span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            Choice/Opt-Out
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            may send you communications or data regarding our
                            Web sites and services, including but not limited to
                            (i) notices about your use of our Web sites and
                            services, including any notices concerning
                            violations of use, (ii) updates, and (iii)
                            promotional information and materials regarding our
                            products and services. You may opt-out of receiving
                            promotional emails from{' '}
                          </span>
                        </span>

                        <span lang='fr-CH'>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              SwiftIntellect
                            </span>
                          </span>
                        </span>

                        <span style={{ textDecoration: 'none' }}>
                          <span style={{ fontWeight: 'normal' }}>
                            by following the opt-out instructions provided in
                            those emails. Opt-out requests will not apply to
                            transactional service messages, such as security
                            alerts and notices about your current account and
                            services.
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Return &amp; Refund Policy
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '0.15in',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Thanks for shopping at{' '}
                            </span>
                          </span>
                        </span>

                        <span style={{ letterSpacing: 'normal' }}>
                          <span lang='fr-CH'>
                            <span style={{ textDecoration: 'none' }}>
                              <span style={{ fontWeight: 'normal' }}>
                                SwiftIntellect
                              </span>
                            </span>
                          </span>
                        </span>

                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              . If, however, you are not entirely satisfied with
                              your purchase, we're here to help. Please read
                              below for further details.
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '0.15in',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Returns
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '0.15in',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              You have 30 (change this) calendar days to return
                              an item from the date you received it. To be
                              eligible for a return, your item must be unused
                              and in the same condition that you received it.
                              Your item must be in the original packaging. Your
                              item needs to have the receipt or proof of
                              purchase.{' '}
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '0.15in',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Refunds
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '0.15in',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Once we receive your item, we will inspect it and
                              notify you that we have received your returned
                              item. We will immediately notify you on the status
                              of your refund after inspecting the item. If your
                              return is approved, we will initiate a refund to
                              your credit card (or original method of payment).
                              You will receive the credit within a certain
                              amount of days, depending on your card issuer's
                              policies.{' '}
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '0.15in',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Shipping
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '0.15in',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '0.15in', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              You will be responsible for paying for your own
                              shipping costs for returning your item. Shipping
                              costs are nonrefundable. If you receive a refund,
                              the cost of return shipping will be deducted from
                              your refund. If you have any questions on how to
                              return your item to us, contact us directly.
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Enforcement
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              If you have any questions about this Policy, you
                              should first contact us at{' '}
                            </span>
                          </span>
                        </span>

                        <span style={{ letterSpacing: 'normal' }}>
                          <span lang='fr-CH'>
                            <span style={{ textDecoration: 'none' }}>
                              <span style={{ fontWeight: 'normal' }}>
                                SwiftIntellect
                              </span>
                            </span>
                          </span>
                        </span>

                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>.</span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Contacting Us
                            </span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>
                              Any questions about this Policy should be
                              addressed to{' '}
                            </span>
                          </span>
                        </span>

                        <span style={{ letterSpacing: 'normal' }}>
                          <span lang='fr-CH'>
                            <span style={{ textDecoration: 'none' }}>
                              <span style={{ fontWeight: 'normal' }}>
                                SwiftIntellect
                              </span>
                            </span>
                          </span>
                        </span>

                        <span style={{ letterSpacing: 'normal' }}>
                          <span style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 'normal' }}>.</span>
                          </span>
                        </span>
                      </p>
                      <p
                        className='western'
                        style={{
                          letterSpacing: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '15app0%',
                          marginBottom: '0in',
                          textDecoration: 'none',
                        }}
                      >
                        <br />
                      </p>
                      <p
                        className='western'
                        style={{ lineHeight: '15app0%', marginBottom: '0in' }}
                      >
                        <br />
                      </p>
                    </>
                  </div>
                </div>
                <div className='flex justify-end mt-8'>
                  <button className='btn-primary'>Accept</button>
                </div>
              </ScrollArea>
            </div>
          )}
          {currentTab === TabList.HelpAndSupport && (
            <ScrollArea className='h-[30rem] w-full'>
              <div>
                <div className='space-y-4 px-5'>
                  <p className='text-lg font-semibold'>Help Center Access</p>
                </div>
                <div className='space-y-3 mt-3 max-w-2xl w-full px-5'>
                  <Input placeholder='Subject' />
                  <Textarea placeholder='Description' rows={9} />
                  <div className='flex justify-end mt-8'>
                    <button className='btn-primary'>Submit</button>
                  </div>

                  <div className='mt-2'>
                    You may have a common question. You may find it in the{' '}
                    <a
                      href='https://fgw.vercel.app/faq'
                      className='text-blue-500'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      FAQ
                    </a>
                    {/* <Accordion type='single' collapsible className='w-full '>
                      {homeFaqs.map((e, i) => {
                        return (
                          <AccordionItem
                            value={`item` + i}
                            key={i}
                            className='dark:border-gray-700'
                          >
                            <AccordionTrigger className='text-left'>
                              {e.question}
                            </AccordionTrigger>
                            <AccordionContent>{e.answer}</AccordionContent>
                          </AccordionItem>
                        )
                      })}
                    </Accordion> */}
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </main>
  )
}
