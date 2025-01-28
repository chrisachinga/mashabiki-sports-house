import React from 'react'

const Form = () => {
  return (
    <form>
    <div className='mt-8 space-y-4'>
      <div>
        <label
          htmlFor='hs-cover-with-gradient-form-name-1'
          className='sr-only'
        >
          Full name
        </label>
        <div className='relative'>
          <input
            type='text'
            id='hs-cover-with-gradient-form-name-1'
            className='py-3 ps-11 pe-4 block w-full bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg text-sm focus:border-[#00988A] focus:ring-[#00988A] sm:p-4 sm:ps-11'
            placeholder='Full name'
          />
          <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
            <svg
              className='shrink-0 size-4 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor='hs-cover-with-gradient-form-email-1'
          className='sr-only'
        >
          Email address
        </label>
        <div className='relative'>
          <input
            type='email'
            id='hs-cover-with-gradient-form-email-1'
            className='py-3 ps-11 pe-4 block w-full bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg text-sm focus:border-[#00988A] focus:ring-[#00988A] sm:p-4 sm:ps-11'
            placeholder='Email address'
          />
          <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
            <svg
              className='shrink-0 size-4 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect
                width={20}
                height={16}
                x={2}
                y={4}
                rx={2}
              />
              <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
            </svg>
          </div>
        </div>
      </div>
      <div className='grid'>
        <button
          type='submit'
          className='sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#00988A] text-white hover:bg-[#007F6E] focus:outline-none focus:bg-[#007F6E] disabled:opacity-50 disabled:pointer-events-none'
        >
          Join the waitlist
          <svg
            className='shrink-0 size-4'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </button>
      </div>
    </div>
  </form>
  )
}

export default Form