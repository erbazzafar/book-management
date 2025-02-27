"use client";
import { useBooks } from "@/context/book-context";
import React from "react";
import { BookCard } from "./components/bookCard";
import { TypingAnimationDemo } from "./components/typingAnimationDemo";


export default function Home() {
  const { books } = useBooks();
  const publicBooks = books.filter(book => !book.isPrivate);

  return (
    <div >
      <TypingAnimationDemo/>

      {publicBooks.length === 0 ? (
        <p className="text-center text-white dark:text-gray-400">
          No books added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {publicBooks.map((book) => (
            <BookCard 
                key={book.id} 
                title={book.title} 
                genre={book.genre} 
                imageUrl={book.imageUrl} 
                detailsLink={book.detailsLink}
                showDeleteButton={false} 
                isPrivate = {book.isPrivate}/>
          ))}
        </div>
      )}
    </div>
  );
}
