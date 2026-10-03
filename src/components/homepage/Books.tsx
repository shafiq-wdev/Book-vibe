import React from "react";
import BooksCard from "../shared/BooksCard";
import { IBook } from "@/types/bookstype";

const getBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
<section className="container mx-auto my-[70px] px-4">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800">
          Explore Our Books
        </h1>

        <p className="mt-3 text-slate-500">
          Discover amazing books from our collection
        </p>
      </div>

      {/* Cards */}
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0,6).map((book:IBook,ind:number) => 
        {
            return <BooksCard key={ind} book={book} />;
        })}
    </div>
</section>
  
)};

export default Books;