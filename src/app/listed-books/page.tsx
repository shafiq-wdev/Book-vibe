"use client";
import BookaCard from "@/components/shared/BooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/bookstype";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext);
  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="my-7 bg-amber-100 text-center rounded-3xl py-16 font-bold text-4xl">
        listed Books
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Read Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length>0 ? readBooks.map((book : IBook)=>{
            return <BookaCard key={book.bookId} book={book} />
          }):(
            <p>No read books Found</p>
          )
          }
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="WishList Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        </div>
    </div>
  );
};

export default ListedBooks;
