import { useStoreState } from '@/context/useStore';
import { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

const ProfilePicture: React.FC = () => {
  const { imageURL, setImageURL} = useStoreState()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setImageURL(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className='relative inline-block group profile-picture-container'

    >
      <img
        src={imageURL}
        alt='Profile'
        className='w-36 h-36 object-fill rounded-full'
      />

        <div className='absolute inset-0 flex group-hover:opacity-100 opacity-0 z-10 items-center justify-center bg-black bg-opacity-40 rounded-full cursor-pointer w-36 h-auto'>
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
    </div>
  );
};

export default ProfilePicture;
