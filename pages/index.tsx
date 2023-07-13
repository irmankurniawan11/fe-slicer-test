import Slider from "@/components/Slider"
import Image from "next/image"
import Link from "next/link"
import slider1 from '@/public/images/slider-1.png'
import view1 from '@/public/images/view-1.png'
import Navbar from "@/components/Navbar"
import Breadcrumbs from "@/components/Breadcrumbs"
import WidthIcon from "@/components/icons/WidthIcon"
import HouseAreaIcon from "@/components/icons/HouseAreaIcon"
import StairsIcon from "@/components/icons/StairsIcon"
import BedroomIcon from "@/components/icons/BedroomIcon"
import HomeDesignCard from "@/components/HomeDesignCard"
import ViewCard from "@/components/ViewCard"
import Footer from "@/components/Footer"
import ChecklistIcon from "@/components/icons/ChecklistIcon"
import StarIcon from "@/components/icons/StarIcon"
import defaultProfile from '@/public/images/default-profile.svg'

type HomeArea = {
  name: string;
  dimension: string;
  image_url: string;
};

type HomeDesign = {
  name: string;
  type: string;
  studio: {
    name: string;
    image: string;
  };
  spesification: {
    surface_area: string;
    building_area: string;
    floor: number;
    bedroom: number;
  }
  design_price: string;
};

export default function Home() {
  const items = [
    <Image key={1} className="w-full" src={slider1} alt="" />,
    <Image key={2} className="w-full" src={slider1} alt="" />,
  ]
  
  const homeAreas: HomeArea[] = [
    {
      name:"Ruang Keluarga",
      dimension:"2.0 x 2.5",
      image_url: ""
    },
    {
      name:"Kamar Tidur",
      dimension:"4.0 x 3.4",
      image_url: ""
    },
    {
      name:"Ruang Makan & Dapur",
      dimension:"3.0 x 2.9",
      image_url: ""
    },
    {
      name:"Ruang Kerja",
      dimension:"2.0 x 2.9",
      image_url: ""
    },
    {
      name:"Kamar Tidur",
      dimension:"4.0 x 3.4",
      image_url: ""
    },
  ]

  const homeDesigns: HomeDesign[] = [
    {
      name: 'Omah Apik 1',
      type: 'Scandinavian',
      studio: {
        name: 'Studio SAe',
        image: '/images/sae-logo.png'
      },
      spesification: {
        surface_area: '15 x 8m',
        building_area: '112',
        floor: 2,
        bedroom: 4,
      },
      design_price: 'Rp32.500.000,00',
    },
    {
      name: 'Omah Apik 2',
      type: 'Scandinavian',
      studio: {
        name: 'Studio SAe',
        image: '/images/sae-logo.png'
      },
      spesification: {
        surface_area: '15 x 8m',
        building_area: '112',
        floor: 2,
        bedroom: 4,
      },
      design_price: 'Rp32.500.000,00',
    },
    {
      name: 'Omah Apik 3',
      type: 'Scandinavian',
      studio: {
        name: 'Studio SAe',
        image: '/images/sae-logo.png'
      },
      spesification: {
        surface_area: '15 x 8m',
        building_area: '112',
        floor: 2,
        bedroom: 4,
      },
      design_price: 'Rp32.500.000,00',
    },
    {
      name: 'Omah Apik 4',
      type: 'Scandinavian',
      studio: {
        name: 'Studio SAe',
        image: '/images/sae-logo.png'
      },
      spesification: {
        surface_area: '15 x 8m',
        building_area: '112',
        floor: 2,
        bedroom: 4,
      },
      design_price: 'Rp32.500.000,00',
    },
  ]

  const currentHomeDesign: HomeDesign = {
    name: 'Omah Apik 3',
    type: 'Scandinavian',
    studio: {
      name: 'Studio SAe',
      image: '/images/sae-logo.png'
    },
    spesification: {
      surface_area: '15 x 8m',
      building_area: '112',
      floor: 2,
      bedroom: 4,
    },
    design_price: 'Rp32.500.000,00',
  }

  const testimoniData = [
    {
      name: "Budi Setiadi",
      rating: 4.5,
      message: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"
    },
    {
      name: "Budi Setiadi",
      rating: 4.5,
      message: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"
    },
    {
      name: "Budi Setiadi",
      rating: 4.5,
      message: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"
    }
  ]

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Slider items={items}/>
      <main className="px-8 sm:px-16 py-6">
        <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row gap-9 justify-between">
          <div className="flex flex-col gap-4 basis-3/4">
            <h4>Tampilan Rumah</h4>
            <div className="flex flex-wrap gap-4">
              {homeAreas.map((homeArea, i) => (
                <ViewCard key={i} data={homeArea}/>
              ))}
            </div>
          </div>
          <div className="sidebar flex flex-col gap-4 shrink-0 basis-1/4">
            <HomeDesignCard2 data={currentHomeDesign}/>
            <div className="testimoni flex flex-col gap-4">
                <h4>Testimoni</h4>
                {testimoniData.map((testimoni, i) => {
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <Image src={defaultProfile} alt="" className="rounded-full w-11 h-11 shrink-0"/>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-brand-grey-1000">{testimoni.name}</h3>
                          <div className="h-4 border-r border-[#C5C7D0]"></div>
                          <div className="rating flex gap-1 items-center">
                            <StarIcon className="w-5 h-5 fill-[#FBBC05]"/>
                            <span className="text-[#4A5568]">{testimoni.rating}</span>
                          </div>
                        </div>
                        <p className="text-brand-grey-700">
                          {testimoni.message}
                        </p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-8">
          <h4>Desain Lainnya oleh Studio SAe</h4>
          <div className="flex gap-4 flex-wrap flex-col sm:flex-row">
            {homeDesigns.map((homeDesign, i) => (
              <HomeDesignCard key={i} data={homeDesign}/>
            ))}
          </div>
        </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

type HomeDesignCardProps = {
  data: HomeDesign;
};

const HomeDesignCard2 = ({ data }: HomeDesignCardProps) => {
  const spec_titles = ["Dimensi Tanah", "Luas Bangunan", "Lantai", "Kamar Tidur"]
  return (
      <div className="card flex flex-col gap-6 p-4 rounded-lg border border-brand-grey-200">
          {/* <Image src={view1} alt="" className="self-stretch rounded" height={201} width={284} /> */}
          <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                      <h5>{data.name}</h5>
                      <div className="px-3 py-1 text-sm leading-[1.225rem] bg-brand-grey-100 text-brand-grey-black rounded-2xl">{data.type}</div>
                  </div>
                  <div className="flex gap-1 items-center">
                      <Image src={data.studio.image} alt="" width={28} height={28} className="rounded-full w-7 h-7 border border-brand-grey-200"></Image>
                      <span className="subtitle">{data.studio.name}</span>
                  </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-6">
                  <span className="text-sm text-brand-grey-800">Jenis Rumah</span>
                  <span className="text-sm">{data.type}</span>
                </div>
                <div className="flex gap-6">
                  <span className="text-sm text-brand-grey-800">Tipe Desain</span>
                  <span className="inline-flex items-center gap-2 text-sm text-brand-red"><div className="flex items-center justify-center w-4 h-4 rounded-full bg-brand-red"><ChecklistIcon className="fill-white"/></div>Dapat Dimodifikasi</span>
                </div>
              </div>
              <div className="w-full border-t border-brand-grey-200" />
              <div className="flex justify-around sm:justify-between items-center">
                  <div className="flex flex-col items-center">
                      <WidthIcon className="icon w-6 h-6 fill-brand-red" />
                      <span className="text-brand-grey-600 text-xs">{spec_titles[0]}</span>
                      <span>{data.spesification.surface_area}</span>
                  </div>
                  <div className="flex flex-col items-center">
                      <HouseAreaIcon className="icon w-6 h-6 fill-brand-red" />
                      <span className="text-brand-grey-600 text-xs">{spec_titles[1]}</span>
                      <span>{data.spesification.building_area}m<sup>2</sup></span>
                  </div>
                  <div className="flex flex-col items-center">
                      <StairsIcon className="icon w-6 h-6 fill-brand-red" />
                      <span className="text-brand-grey-600 text-xs">{spec_titles[2]}</span>
                      <span>{data.spesification.floor}</span>
                  </div>
                  <div className="flex flex-col items-center">
                      <BedroomIcon className="icon w-6 h-6 fill-brand-red" />
                      <span className="text-brand-grey-600 text-xs">{spec_titles[3]}</span>
                      <span>{data.spesification.bedroom}</span>
                  </div>
              </div>
              <div className="w-full border-t border-brand-grey-200" />
              <div className="flex flex-col gap-1">
                  <span className="text-sm">Harga Desain</span>
                  <div className="flex flex-col gap-1">
                      <h4>{data.design_price}</h4>
                      <span className="text-sm text-brand-grey-600">Harga konstruksi mulai dari Rp 560.000.000</span>
                  </div>
              </div>
              <Link href="#" className="flex items-center justify-center py-[0.875rem] px-4 font-semibold text-sm bg-brand-red text-white rounded-md">Konsultasi Sekarang</Link>
          </div>
      </div>
  )
}