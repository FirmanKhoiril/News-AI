import React, { useState, ChangeEvent } from 'react'
import { FiUpload } from 'react-icons/fi'

const ProfilePicture: React.FC = () => {
  const [image, setImage] = useState<string>(
    'https://eu.ui-avatars.com/api/?name=John+Doe&size=250'
  )
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result)
      }
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <div
      className='relative inline-block profile-picture-container'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt='Profile'
        className='w-36 h-auto object-cover rounded-full'
      />
      {isHovered && (
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full cursor-pointer w-36 h-auto'>
          <label
            htmlFor='file-upload'
            className='flex items-center justify-center text-white'
          >
            <FiUpload className='mr-1' />
            <span>Upload</span>
            <input
              type='file'
              id='file-upload'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
            />
          </label>
        </div>
      )}
    </div>
  )
}

export default ProfilePicture
