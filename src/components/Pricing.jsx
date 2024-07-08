import React from 'react'
import PrimaryButton from './PrimaryButton'

const plans = [
    {
        name: 'Easy',
        discretion: 'All the basics for businesses that are just getting started.',
        price: {
            monthly: 29,
            annually: 29 * 12 - 199,
        },
        features: ['One project', 'Your dashboard'],
    },
    {
        name: 'Basic',
        discretion: 'Better for growing businesses that want more customers.',
        price: {
            monthly: 59,
            annually: 59 * 12 - 100,
        },
        features: ['Two projects', 'Your dashboard', 'Components included', 'Advanced charts'],
    },
    {
        name: 'Custom',
        discretion: 'Advanced features for pros who need more customization.',
        price: {
            monthly: 139,
            annually: 139 * 12 - 100,
        },
        features: ['Unlimited projects', 'Your dashboard', '+300 Components', 'Chat support'],
    },
]

const Pricing = () => {
    
    const billPlan = 'monthly'

    return (
        <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0 mb-24">
            {plans.map((plan, i) => (
                <section className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md border border-gray-400" key={i}>
                    {/* Price */}
                    <div className="flex-shrink-0">
                        <span className={`text-5xl font-semibold tracking-tight ${plan.name === 'Basic' ? 'text-blue-500' : ''}`}>
                            {`${billPlan === 'monthly' ? plan.price.monthly : plan.price.annually}`}
                        </span>
                        <span className="text-gray-400">{billPlan === 'monthly' ? '/month' : '/year'}</span>
                    </div>

                    {/* Description */}
                    <div className="flex-shrink-0 pb-6 space-y-2 border-b">
                        <h2 className="text-2xl font-normal">{plan.name}</h2>
                        {/* <p className="text-sm text-gray-400">{plan.discretion}</p> */}
                    </div>

                    {/* Features */}
                    <ul className="flex-1 space-y-4">
                        {plan.features.map((feature, i) => (
                            <li className="flex items-start" key={i}>
                                <svg className="w-6 h-6 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-3 text-base font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Button */}
                    <div className="flex-shrink-0 pt-4">
                        <PrimaryButton
                        
                            // className={`inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${plan.name === 'Basic' ? 'bg-indigo-500 text-white hover:bg-indigo-700' : 'hover:bg-indigo-500 hover:text-white'}`}
                        >
                            {`Get ${plan.name}`}
                        </PrimaryButton>
                    </div>
                </section>
            ))}
        </div>

    )
}

export default Pricing