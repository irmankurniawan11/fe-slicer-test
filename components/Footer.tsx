import React from 'react'
import logoWhite from '@/public/logo-white.svg'
import Image from 'next/image'
import MailIcon from './icons/MailIcon'
import Link from 'next/link'
import InstagramIcon from './icons/InstagramIcon'
import FacebookIcon from './icons/FacebookIcon'
import YoutubeIcon from './icons/YoutubeIcon'
import SIGLogo from '@/public/logos/sig.svg'
import BankBNILogo from '@/public/logos/bank-bni.png'
import BankMandiriLogo from '@/public/logos/bank-mandiri.png'
import BankBTNLogo from '@/public/logos/bank-btn.png'
import BankBRILogo from '@/public/logos/bank-bri.png'
import BankPermataLogo from '@/public/logos/bank-permata.png'
import CreditVisaLogo from '@/public/logos/credit-visa.png'
import CreditMastercardLogo from '@/public/logos/credit-mastercard.png'
import CreditJCBLogo from '@/public/logos/credit-jcb.png'
import RekanASELogo from '@/public/logos/rekan-ase.png'
import RekanASCOLogo from '@/public/logos/rekan-asco.png'
import RekanAdidayaLogo from '@/public/logos/rekan-adidaya.png'
import RekanInecoLogo from '@/public/logos/rekan-ineco.png'

const Footer = () => {
    return (
        <div className='py-10 px-16 bg-brand-navy text-brand-grey-white'>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-11">
            <div className='flex flex-col gap-10 xl:flex-row xl:gap-36'>
                <div className='flex flex-col gap-4 lg:basis-3/5'>
                    <Image src={logoWhite} alt=''/>
                    <div className='flex flex-col gap-2'>
                        <p className='text-brand-grey-white'>SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.</p>
                        <div className='flex gap-2'>
                            <MailIcon className='w-6 h-6 fill-white'/>
                            <span>sobat@sobatbangum.com</span>
                        </div>
                    </div>
                    <span>Sosial Media :</span>
                    <div className='flex gap-6'>
                        <Link href="#" className='flex justify-center items-center w-12 h-12 bg-white rounded-full'><InstagramIcon className='w-6 h-6 fill-brand-grey-900'/></Link>
                        <Link href="#" className='flex justify-center items-center w-12 h-12 bg-white rounded-full'><FacebookIcon className='w-6 h-6 fill-brand-grey-900'/></Link>
                        <Link href="#" className='flex justify-center items-center w-12 h-12 bg-white rounded-full'><YoutubeIcon className='w-6 h-6 fill-brand-grey-900'/></Link>
                    </div>
                </div>
                <div className='flex gap-12 lg:basis-2/5'>
                    <div className='flex flex-col gap-6'>
                        <span className='text-xl font-bold'>Produk & Layanan</span>
                        <div className='flex flex-col gap-2 leading-loose'>
                            <Link href="#">Renovasi</Link>
                            <Link href="#">Bangun Rumah</Link>
                            <Link href="#">Layanan Desain</Link>
                            <Link href="#">Teknologi Tambahan</Link>
                            <Link href="#">Beli Material</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <span className='text-xl font-bold'>Tentang Kami</span>
                        <div className='flex flex-col gap-2 leading-loose'>
                            <Link href="#">Tentang SobatBangun</Link>
                            <Link href="#">Kebijakan Dan Privasi</Link>
                            <Link href="#">Syarat Dan Ketentuan</Link>
                            <Link href="#">FAQ</Link>
                            <Link href="#">Daftar Menjadi Mitra</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 xl:gap-0 lg:grid-cols-2 lg:gap-4 w-full'>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Kredit Bangun Rumah</span>
                    <div className='flex sm:gap-6 items-center flex-wrap gap-2'>
                        <Image src={BankMandiriLogo} alt=''/>
                        <Image src={BankBTNLogo} alt=''/>
                        <Image src={BankBNILogo} alt=''/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Tunai Via Bank Transfer</span>
                    <div className='flex sm:gap-6 items-center flex-wrap gap-2'>
                        <Image src={BankMandiriLogo} alt=''/>
                        <Image src={BankBNILogo} alt=''/>
                        <Image src={BankBRILogo} alt=''/>
                        <Image src={BankPermataLogo} alt=''/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Kartu Kredit</span>
                    <div className='flex sm:gap-6 items-center flex-wrap gap-2'>
                        <Image src={CreditVisaLogo} alt=''/>
                        <Image src={CreditMastercardLogo} alt=''/>
                        <Image src={CreditJCBLogo} alt=''/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Rekan Teknologi Tambahan</span>
                    <div className='flex sm:gap-6 items-center flex-wrap gap-2'>
                        <Image src={RekanASCOLogo} alt=''/>
                        <Image src={RekanInecoLogo} alt=''/>
                        <Image src={RekanAdidayaLogo} alt=''/>
                        <Image src={RekanASELogo} alt=''/>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between flex-col gap-4 sm:flex-row'>
                <div className='flex gap-4 items-center'>
                    <span>Powered by :</span>
                    <Image src={SIGLogo} alt=''/>
                </div>
                <span className='text-sm'>
                    Copyright © 2023 SobatBangun. All rights reserved.
                </span>
            </div>
        </div>
        </div>
    )
}

export default Footer