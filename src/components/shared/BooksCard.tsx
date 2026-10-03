
import { IBook } from "@/types/bookstype";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
  book : IBook;
}

const BookaCard = ({ book }:IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-[320px] overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-500 shadow">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-800">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          by{" "}
          <span className="font-semibold text-slate-700">
            {book.author}
          </span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="font-semibold text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
            <button className="mt-5 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition duration-300 hover:bg-orange-500">
               View Details →
            </button>
        </Link>
      </div>
    </div>
  );
};

export default BookaCard;
