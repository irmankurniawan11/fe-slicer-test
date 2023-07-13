import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const HouseAreaIcon: React.FC<IconProps> = ( props ) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" {...props}>
        <path d="M8.33331 3L1.33331 9H3.33331V15H7.33331V11H9.33331V15H13.3333V9H15.3333L8.33331 3ZM11.8333 9V13.5H10.8333V9.5H5.83331V13.5H4.83331V8L8.33331 5L11.8333 8V9ZM9.33331 16V18H15.3333V16L18.3333 19L15.3333 22V20H9.33331V22L6.33331 19L9.33331 16ZM23.3333 9H21.3333V15H15.3333V10H19.3333L13.8733 5.11L16.3333 3L23.3333 9Z"/>
    </svg>
  )
}

export default HouseAreaIcon