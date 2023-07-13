import Image from "next/image";
import view1 from '@/public/images/view-1.png'

type HomeArea = {
    name: string;
    dimension: string;
    image_url: string;
};

type ViewCardProps = {
    data: HomeArea;
};

const ViewCard = ({ data }: ViewCardProps) => {
    return (
        <div className="card flex flex-col gap-6 p-4 rounded-lg border border-brand-grey-200">
            <Image src={view1} alt="" className="rounded" height={201} width={261} />
            <div className="flex flex-col gap-2">
                <div>
                    <h5>{data.name}</h5>
                </div>
                <span className="subtitle">{data.dimension}</span>
            </div>
        </div>
    )
}

export default ViewCard