"use client";
import React, { createContext, useContext, useState } from "react";

interface Book {
  id: number;
  title: string;
  genre: string;
  imageUrl: string;
  detailsLink: string;
  isPrivate?: boolean;
}

interface BookContextType {
  books: Book[];
  addBook: (title: string, genre: string, imageUrl: string, detailsLink: string, isPrivate: boolean) => void;
  deleteBook: (id: number) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (title: string, genre: string, imageUrl: string, detailsLink: string, isPrivate: boolean) => {
    setBooks([...books, { id: Date.now(), title, genre, imageUrl, detailsLink, isPrivate }]);
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};
