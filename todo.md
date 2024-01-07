import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { countries } from 'countries-list'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
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

export default function Profile() {
const { inputValues, handleInputChange, handleCustomChange } =
useInputChange()

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
return (

<div className='px-3 container pt-8'>
<div className='max-w-2xl md:pl-10'>
<div className='flex flex-col space-y-3'>
<ProfilePic />
<div className='flex flex-col space-y-1.5'>
<Label htmlFor='name'>Name</Label>
<Input
name='name'
id='name'
onChange={handleInputChange}
placeholder='Your name'
value={inputValues?.name || ''}
disabled
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
disabled
/>
</div>
<div className='flex flex-col space-y-1.5'>
<Label htmlFor='username'>User name</Label>
<Input
id='username'
name='username'
onChange={handleInputChange}
placeholder='Your username'
value={inputValues?.username || ''}
disabled
/>
</div>
<div className='flex flex-col space-y-1.5'>
<Label htmlFor='username'>Number</Label>
<Input
name='number'
onChange={handleInputChange}
placeholder='Your phone number'
value={inputValues?.number || ''}
disabled
/>
</div>
</div>
<div className='mt-3'>
{/_ edit profile _/}
<Card className='bg-light-blue'>
<CardHeader>
<CardTitle>Edit profile</CardTitle>
<CardDescription>
Make changes to your profile here. Click save when you're done.
</CardDescription>
</CardHeader>
<CardContent>
<Dialog>
<DialogTrigger asChild>
<Button variant='default' className='max-w-fit'>
Edit Profile
</Button>
</DialogTrigger>
<DialogContent className='w-full max-w-[95vw]'>
<DialogHeader>
<DialogTitle>Edit profile</DialogTitle>
<DialogDescription>
Make changes to your profile here. Click save when you're
done.
</DialogDescription>
</DialogHeader>
<ScrollArea className='h-full max-h-[63vh] w-full'>
<div className='mt-4 px-2 max-w-2xl'>
<div className='flex flex-col space-y-4'>
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
                        <div className='bg-light-purple px-3 py-3 rounded-xl'>
                          <p className='text-base font-semibold text-gray-800'>
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
                            <SelectItem value='job'>
                              Working Professional
                            </SelectItem>
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
                            <Label htmlFor='username'>
                              Educational Institution
                            </Label>
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
                        <div className='bg-light-blue px-3 py-3 rounded-xl'>
                          <p className='text-base font-semibold text-gray-800'>
                            Notification Preferences
                          </p>
                          <div className='mt-4 space-y-3'>
                            <Select>
                              <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Email Notifications' />
                              </SelectTrigger>
                              <SelectContent>
                                <ScrollArea className='h-28'>
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
                                <ScrollArea className='h-28'>
                                  {enableDisabled.map((e, i) => (
                                    <SelectItem value={e} key={i}>
                                      {e}
                                    </SelectItem>
                                  ))}
                                </ScrollArea>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className='bg-light-orange px-3 py-3 rounded-xl'>
                          <p className='text-base font-semibold text-gray-800'>
                            Billing Information
                          </p>
                          <div className='space-y-3 mt-4'>
                            <Select>
                              <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Payment Method' />
                              </SelectTrigger>
                              <SelectContent>
                                <ScrollArea className='h-28'>
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
                          </div>
                        </div>
                        <div>
                          <p className='text-base font-semibold text-gray-800'>
                            Social Media Integration
                          </p>
                          <div className='grid grid-cols-2 gap-2 max-w-sm mt-2'>
                            <div className='flex gap-2 bg-light-purple rounded-2xl items-center px-3 py-5 cursor-pointer'>
                              <FaFacebook className='w-8 h-auto text-gray-700' />
                              <p>Facebook</p>
                            </div>
                            <div className='flex gap-2 bg-light-purple rounded-2xl items-center px-3 py-5 cursor-pointer'>
                              <FaLinkedin className='w-8 h-auto text-gray-700' />
                              <p>Linkedin</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                  <DialogFooter>
                    <Button>Update Profile</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
        {/* ------------------- */}
        <Card className='bg-light-purple mt-3'>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              follow the steps to set a new, strong password, enhancing your
              account's safety.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='warning'>Change password</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                </DialogHeader>
                <div className='mt-4'>
                  <div className='flex flex-col space-y-8'>
                    <div className='flex flex-col space-y-2'>
                      <Label htmlFor='name'>Previous password</Label>
                      <Input
                        name='prevPass'
                        id='prevPass'
                        onChange={handleInputChange}
                        placeholder='Previous password'
                        value={inputValues?.prevPass || ''}
                      />
                    </div>
                    <div className='flex flex-col space-y-2'>
                      <Label htmlFor='email'>Updated password</Label>
                      <Input
                        id='currPass'
                        name='currPass'
                        onChange={handleInputChange}
                        placeholder='Updated password'
                        value={inputValues?.currPass || ''}
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant={'warning'}>Update Password</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
        <div className='mt-3 mb-5'>
          {/* edit profile */}
          <Card className='bg-light-orange'>
            <CardHeader>
              <CardTitle>Want to logout?</CardTitle>
              <CardDescription>
                Once you click on 'logout,' your data will be removed from the
                browser cache.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant='destructive' className='max-w-fit'>
                Log out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

)
}

---

<div>
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
              <div className='bg-light-purple px-3 py-3 rounded-xl'>
                <p className='text-base font-semibold text-gray-800'>
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
