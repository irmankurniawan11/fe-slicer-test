import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const KeyboardArrowDownIcon: React.FC<IconProps> = ( props ) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
            <path d="M10 12.8346L5 7.83464L6.16667 6.66797L10 10.5013L13.8333 6.66797L15 7.83464L10 12.8346Z"/>
        </svg>
  )
}

export default KeyboardArrowDownIcon