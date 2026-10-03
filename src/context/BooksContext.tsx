'use client';
import React, { createContext, ReactNode, useState } from 'react';

export const BooksContext=createContext({});


const BooksProvider = ({children}:{children:ReactNode}) => {
    const [readBooks,SetReadBooks]=useState([]);
    const [wishList,setWishList]=useState([]);

    const sharedData={
        readBooks,
        SetReadBooks,
        wishList,
        setWishList,
    }
    return <BooksContext.Provider value = {sharedData}>{children}</BooksContext.Provider>;
};

export default BooksProvider;