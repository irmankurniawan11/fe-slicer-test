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
    <Image className="w-full" src={slider1} alt="" />,
    <Image className="w-full" src={slider1} alt="" />,
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
        image: ''
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
        image: ''
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
        image: ''
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
        image: ''
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
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Slider items={items}/>
      <main className="px-16 py-6">
        <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-9 justify-between">
          <div className="flex flex-col gap-4">
            <h4>Tampilan Rumah</h4>
            <div className="flex flex-wrap gap-4">
              {homeAreas.map((homeArea, i) => (
                <ViewCard key={i} data={homeArea}/>
              ))}
            </div>
          </div>
          <div className="sidebar">Sidebar</div>
        </div>
        <div className="flex flex-col gap-4 my-4">
          <h4>Desain Lainnya oleh Studio SAe</h4>
          <div className="flex gap-4 flex-wrap">
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