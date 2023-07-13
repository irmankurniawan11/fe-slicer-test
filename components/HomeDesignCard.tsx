import Link from "next/link";
import BedroomIcon from "./icons/BedroomIcon";
import HouseAreaIcon from "./icons/HouseAreaIcon";
import StairsIcon from "./icons/StairsIcon";
import WidthIcon from "./icons/WidthIcon";
import Image from "next/image";
import view1 from '@/public/images/view-1.png'

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

type HomeDesignCardProps = {
    data: HomeDesign;
};

const HomeDesignCard = ({ data }: HomeDesignCardProps) => {
    const spec_titles = ["Dimensi Tanah", "Luas Bangunan", "Lantai", "Kamar Tidur"]
    return (
        <div className="card flex flex-col gap-6 p-4 rounded-lg border border-brand-grey-200">
            <Image src={view1} alt="" className="self-stretch rounded" height={201} width={284} />
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
                <div className="flex justify-between items-center">
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
                <Link href="#" className="flex items-center justify-center py-2 px-4 font-semibold text-sm text-brand-red rounded-md border border-brand-red-600">Lihat Detail</Link>
            </div>
        </div>
    )
}

export default HomeDesignCard