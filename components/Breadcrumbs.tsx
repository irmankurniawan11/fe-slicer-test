import React from 'react'
import ChevronRightIcon from './icons/ChevronRightIcon'

const Breadcrumbs = () => {
    return (
        <div className='py-6 px-8 sm:px-16 bg-brand-grey-white'>
            <div className="max-w-[1440px] mx-auto flex flex-wrap items-center gap-2">
                <span className='font-semibold text-brand-red'>Home</span>
                <ChevronRightIcon className='w-6 h-6 fill-brand-grey-600'/>
                <span className='font-semibold text-brand-red'>Layanan Desain</span>
                <ChevronRightIcon className='w-6 h-6 fill-brand-grey-600'/>
                <span className='font-semibold text-brand-gray'>Omah Apik 3</span>
            </div>
        </div>
    )
}

export default Breadcrumbs