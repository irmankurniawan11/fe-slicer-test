import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const ChevronRightIcon: React.FC<IconProps> = ( props ) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0_6_1241)">
        <path d="M10 6L8.59003 7.41L13.17 12L8.59003 16.59L10 18L16 12L10 6Z"/>
      </g>
      <defs>
        <clipPath id="clip0_6_1241">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ChevronRightIcon