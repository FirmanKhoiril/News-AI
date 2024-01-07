import { FaAngleRight } from 'react-icons/fa'
// import useInputChange from '@/lib/hooks/useInput'
import { FaCheck } from 'react-icons/fa6'
// import { Button } from '@/components/ui/button'

export default function Setting() {
  const subscriptionPlans = [
    {
      title: 'Basic',
      perfectFor: 'Perfect for occasional users',
      price: 'FREE',
      description:
        'Prompt and summarize up to 10 files/month. Access to GPT-3.5 for analysis. Summarize YouTube video links and audio files. Save and download in PDF format. Limited history access (last 7 days).',
      features: [
        'Prompt and summarize up to 10 files/month.',
        'Access to GPT-3.5 for analysis.',
        'Summarize YouTube video links and audio files.',
        'Save and download in PDF format.',
        'Limited history access (last 7 days).',
      ],
      button: 'Get Started',
    },
    {
      title: 'Professional',
      perfectFor: 'Ideal for daily individual use',
      price: '$29/month',
      description:
        'Unlimited prompts and summaries. Access to GPT-4 and Google Bards and more. Include picture generation in reports. Download in PDF and Word formats. Full history access. Voice-to-text functionality. Email summaries directly from the platform. Integration with Dropbox, Google Drive, and OneDrive. AI Email Builder: Craft personalized AI-generated emails based on report content',
      features: [
        'Unlimited prompts and summaries.',
        'Access to GPT-4 and Google Bards and more.',
        'Include picture generation in reports.',
        'Download in PDF and Word formats.',
        'Full history access.',
        'Voice-to-text functionality.',
        'Email summaries directly from the platform.',
        'Integration with Dropbox, Google Drive, and OneDrive.',
        'AI Email Builder: Craft personalized AI-generated emails based on report content',
      ],
      button: 'Join Now',
    },
    {
      title: 'Enterprise',
      perfectFor: 'Best for teams and businesses',
      price: 'Contact us',
      description:
        'Unlimited prompts and summaries. Access to GPT-4 and Google Bards and more. Include pictures generation in reports. Download in PDF and Word formats. Full history access. Voice-to-text functionality. Email summaries directly from the platform. Integration with Dropbox, Google Drive, and OneDrive. AI Email Builder: Craft personalized AI-generated emails based on report content. Multi-user access with team collaboration. (Coming soon). Dedicated support and onboarding. Customized language model options (coming soon). Advanced security features and compliance tools.',
      features: [
        'Unlimited prompts and summaries.',
        'Access to GPT-4 and Google Bards and more.',
        'Include pictures generation in reports.',
        'Download in PDF and Word formats.',
        'Full history access.',
        'Voice-to-text functionality.',
        'Email summaries directly from the platform.',
        'Integration with Dropbox, Google Drive, and OneDrive.',
        'AI Email Builder: Craft personalized AI-generated emails based on report content.',
        'Multi-user access with team collaboration. (Coming soon)',
        'Dedicated support and onboarding.',
        'Customized language model options (coming soon).',
        'Advanced security features and compliance tools.',
      ],
      button: 'Contact Us',
    },
  ]

  // const { inputValues, handleInputChange } = useInputChange()
  const fgwBasic = subscriptionPlans[0]
  const fgwAdvance = subscriptionPlans[2]
  const fgwPro = subscriptionPlans[1]

  return (
    <main className='p-5 mt-5'>
      <div className='space-y-12 card'>
        <div className='space-y-2'>
          <h2 className='text-2xl text-center font-semibold text-2'>
            Do you want to change subscription?
          </h2>
          <p className='text-center text-sm text-2'>
            On this section you can upgrade or downgrade your subscription.
          </p>
        </div>
        <div className='flex gap-3'>
          {[fgwBasic, fgwPro, fgwAdvance].map((pricePoint, i) => {
            const isCurrent = i === 1
            return (
              <div
                className={`card border dark:border-gray-700 shadow-md ${
                  isCurrent && 'transform scale-110 z-20'
                }`}
              >
                <p
                  className={`text-xl font-semibold text-center ${
                    isCurrent ? 'text-[#a794f8]' : 'text-[#3BC642]'
                  }`}
                >
                  {pricePoint.title}
                </p>
                <p className='text-center text-2'>
                  <span className='text-sm'>{pricePoint.perfectFor}</span>
                </p>

                <div
                  className={`${
                    isCurrent ? 'blue-price' : 'green-price'
                  } py-2 text-lg font-medium mt-5 -ml-4`}
                >
                  $ {pricePoint.price}
                </div>

                <ul className='mt-5 space-y-3'>
                  {pricePoint.features.map((feature, i) => {
                    return (
                      <li
                        key={i}
                        className='text-xs text-2 flex gap-3 items-center'
                      >
                        <div>
                          <FaCheck className='text-[#3DA488]' />
                        </div>
                        {feature}
                      </li>
                    )
                  })}
                </ul>
                <div className='flex justify-center mt-5'>
                  {isCurrent && (
                    <button className='text-sm px-4 py-2.5 rounded-full border-2 border-[#9681f7] text-[#8069e9] font-bold'>
                      Cancel Subscription
                    </button>
                  )}
                  {!isCurrent && (
                    <button className='text-sm px-6 py-2.5 rounded-full  font-bold get_start_button flex gap-3 items-center'>
                      Get Started <FaAngleRight />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
