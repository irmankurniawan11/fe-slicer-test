import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const ChevronLeftIcon: React.FC<IconProps> = ( props ) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
        <path d="M17.0337 21L18.667 19.3667L13.3003 14L18.667 8.63333L17.0337 7L10.0337 14L17.0337 21Z" />
    </svg>
  )
}

export default ChevronLeftIcon