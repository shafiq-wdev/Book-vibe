import ReadButton from "@/components/bookDeatils/ReadButton";
import { IBook } from "@/types/bookstype";
import Image from "next/image";
import React from "react";

interface IBooksDetailPage {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data = await res.json();
  return data;
};

const BooksDetailPage = async ({ params }: IBooksDetailPage) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card overflow-hidden border border-base-300 bg-base-100 shadow-xl lg:card-side">
        {/* Book Image */}
        <figure className="bg-base-200 p-6 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={600}
            className="max-h-[600px] w-full rounded-xl object-contain shadow-md"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body lg:w-3/5">
          {/* Category & Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="badge badge-primary badge-lg">
              {book.category}
            </span>

            <span className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-600">
              ⭐ {book.rating}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-3 text-3xl font-bold text-base-content md:text-4xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-base text-base-content/60">
            by{" "}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <div className="mt-5">
            <h3 className="mb-2 text-lg font-semibold">About This Book</h3>

            <p className="text-sm leading-7 text-base-content/70">
              {book.review}
            </p>
          </div>

          {/* Book Information */}
          <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-base-200 p-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-base-content/50">Pages</p>
              <p className="mt-1 font-bold">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Publisher</p>
              <p className="mt-1 font-bold">{book.publisher}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Published</p>
              <p className="mt-1 font-bold">{book.yearOfPublishing}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Book ID</p>
              <p className="mt-1 font-bold">#{book.bookId}</p>
            </div>
          </div>

          {/* Action */}
          <div className="card-actions mt-6 justify-end">
            <ReadButton book={book}/>
            <button className="btn btn-primary px-8">Whish List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailPage;
