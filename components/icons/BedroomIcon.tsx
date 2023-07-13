import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const BedroomIcon: React.FC<IconProps> = ( props ) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" {...props}>
        <path d="M5.5 17H7V15.5H18V17H19.5V13.15C19.5 12.8 19.4333 12.4707 19.3 12.162C19.1667 11.8533 18.9833 11.5827 18.75 11.35V9C18.75 8.45 18.554 7.97933 18.162 7.588C17.77 7.19667 17.2993 7.00067 16.75 7H13.5C13.3167 7 13.1417 7.025 12.975 7.075C12.8083 7.125 12.65 7.2 12.5 7.3C12.35 7.2 12.1917 7.125 12.025 7.075C11.8583 7.025 11.6833 7 11.5 7H8.25C7.7 7 7.229 7.196 6.837 7.588C6.445 7.98 6.24934 8.45067 6.25 9V11.35C6.01667 11.5833 5.83333 11.8543 5.7 12.163C5.56667 12.4717 5.5 12.8007 5.5 13.15V17ZM7 14V13C7 12.7167 7.096 12.479 7.288 12.287C7.48 12.095 7.71734 11.9993 8 12H17C17.2833 12 17.521 12.096 17.713 12.288C17.905 12.48 18.0007 12.7173 18 13V14H7ZM7.75 10.5V8.5H11.75V10.5H7.75ZM13.25 10.5V8.5H17.25V10.5H13.25ZM4.5 22C3.95 22 3.479 21.804 3.087 21.412C2.695 21.02 2.49934 20.5493 2.5 20V4C2.5 3.45 2.696 2.979 3.088 2.587C3.48 2.195 3.95067 1.99934 4.5 2H20.5C21.05 2 21.521 2.196 21.913 2.588C22.305 2.98 22.5007 3.45067 22.5 4V20C22.5 20.55 22.304 21.021 21.912 21.413C21.52 21.805 21.0493 22.0007 20.5 22H4.5ZM4.5 20H20.5V4H4.5V20Z"/>
    </svg>
  )
}

export default BedroomIcon