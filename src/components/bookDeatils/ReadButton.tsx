'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookstype';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';




const ReadButton = ({book}:{book:IBook}) => {
    const {readBooks,SetReadBooks} = useContext(BooksContext);

    const handleReadBook=()=>{
        SetReadBooks([...readBooks,book]);
        toast.success(`You have read "${book.bookName}`);
}
    return <button className="btn btn-primary px-8" onClick={()=>handleReadBook()}>Read</button>;

};

export default ReadButton;