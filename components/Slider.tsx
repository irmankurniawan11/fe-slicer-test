// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ChevronLeftIcon from '@/public/icons/chevron-left.svg'
import ChevronRightIcon from '@/public/icons/chevron-right.svg'
import Image from 'next/image';
import React, { useState, useEffect, useRef, TouchEventHandler } from 'react';

interface CarouselProps {
    items: React.ReactNode[];
    interval?: number;
  }

const Slider: React.FC<CarouselProps> = ({ items, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartXRef = useRef<number | null>(null);

    useEffect(() => {
        const slideShow = setInterval(() => {
            if (!isHovered) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === items.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, interval);

        return () => {
            clearInterval(slideShow);
        };
    }, [items, interval, isHovered]);

    const showNextItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const showPrevItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const translateXValue = -currentIndex * 100;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setIsHovered(true);
        touchStartXRef.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        const touchEndX = event.changedTouches[0].clientX;
        const touchDeltaX = touchEndX - (touchStartXRef.current || 0);

        if (touchDeltaX > 50) {
            showPrevItem();
        } else if (touchDeltaX < -50) {
            showNextItem();
        }
        setIsHovered(false);
    };

    return (
        <div className="relative overflow-hidden w-full" 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="carousel-items flex" style={{ transform: `translateX(${translateXValue}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className={`item ${index == currentIndex ? 'active' : ''}`}>
                        {item}
                    </div>
                ))}
            </div>
            <div className='hidden sm:flex absolute top-1/2 w-full px-8 items-center justify-between'>
                <button className="bg-white border border-brand-red text-black p-2.5" onClick={showPrevItem}><Image src={ChevronLeftIcon} alt="" className='w-7 h-7 fill-brand-slate-200'/></button>
                <button className="bg-white border border-brand-red text-black p-2.5" onClick={showNextItem}><Image src={ChevronRightIcon} alt="" className='w-7 h-7 fill-brand-slate-200'/></button>
            </div>
        </div>
    );
};

export default Slider;
