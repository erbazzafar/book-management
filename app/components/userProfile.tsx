"use client";
import { useBooks } from "@/context/book-context";
import React, { useState } from "react";
import { BookCard } from "./bookCard";

export default function ProfilePage() {
  const { books, addBook, deleteBook } = useBooks();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [detailsLink, setDetailsLink] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleAddBook = () => {
    if (!title || !genre || !imageUrl || !detailsLink) return (alert("Please fill all fields"));
    addBook(title, genre, imageUrl, detailsLink, isPrivate);
    setTitle("");
    setGenre("");
    setImageUrl("");
    setDetailsLink("");
    setIsPrivate(false)
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100 dark:bg-gray-900 px-9">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
         Manage Your Books
      </h1>

      {/* Add Book Form */}
      <div className="max-w-lg mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Add a New Book
        </h2>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Details Link"
          value={detailsLink}
          onChange={(e) => setDetailsLink(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md"
        />
        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
            className="mr-2"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Private Book
          </span>
        </label>
        <button
          onClick={handleAddBook}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Book
        </button>
      </div>

      

      {/* Book List */}
      <div className="mt-8">
        {books.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No books added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                genre={book.genre}
                imageUrl={book.imageUrl}
                detailsLink={book.detailsLink}
                showDeleteButton={true} // Ensures delete button appears on profile page
                onDelete={() => deleteBook(book.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
