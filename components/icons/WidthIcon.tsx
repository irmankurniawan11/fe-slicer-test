import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const WidthIcon: React.FC<IconProps> = ( props ) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path d="M7 16L3 12L7 8L8.425 9.4L6.825 11H17.175L15.6 9.4L17 8L21 12L17 16L15.6 14.6L17.175 13H6.825L8.4 14.6L7 16Z"/>
    </svg>
  )
}

export default WidthIcon