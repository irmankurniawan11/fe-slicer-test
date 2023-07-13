import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const ChecklistIcon: React.FC<IconProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" {...props}>
            <g clipPath="url(#clip0_6_1330)">
                <path d="M4.49996 8.58687L2.41496 6.50187L1.70496 7.20687L4.49996 10.0019L10.5 4.00187L9.79496 3.29688L4.49996 8.58687Z"/>
            </g>
            <defs>
                <clipPath id="clip0_6_1330">
                    <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ChecklistIcon