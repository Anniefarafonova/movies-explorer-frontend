import React, { useState, useEffect, useContext, useRef } from "react";



// Разрешения экрана
export const SCREEN_SM = 320;
//  const SCREEN_MD = 480;
export const SCREEN_LG = 668;
export const SCREEN_XL = 1120;

//  отображаемые карточки для 1280
export const CARDS_SCREEN_XL = 16;
// количество добавляемых карточек для 1280
export const ADD_CARDS_SCREEN_XL = 4;


//  отображаемые карточки для 768
export const CARDS_SCREEN_LG = 8;
// количество добавляемых карточек для 768
export const ADD_CARDS_SCREEN_LG = 2;


//  отображаемые карточки для 320
export const CARDS_SCREEN_SM = 5;
// количество добавляемых карточек для 320
export const ADD_CARDS_SCREEN_SM = 2;


export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
            console.log(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isScreenSm: width >= SCREEN_SM,
        //   isScreenMd: width >= SCREEN_MD,
        isScreenLg: width >= SCREEN_LG,
        isScreenXl: width >= SCREEN_XL,

    };
};
