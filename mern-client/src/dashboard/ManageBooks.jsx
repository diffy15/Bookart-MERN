import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  } , [])

  //delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method:"DELETE",
    }).then(res => res.json()).then(data => {
       alert("Book is deleted successfully!")
       //setAllBooks(data);
      })
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center">Manage your Books</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500 border border-gray-200 shadow-md rounded-lg lg:w-[1180px]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">No.</th>
              <th scope="col" className="px-6 py-3">Book Name</th>
              <th scope="col" className="px-6 py-3">Author Name</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Edit or Manage</th>
            </tr>
          </thead>
          {
            allBooks.map((book, index) => <tbody key={book._id}> 
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                {book.bookTitle}
              </td>
              <td className="px-6 py-4">
                {book.authorName}
              </td>
              <td className="px-6 py-4">
                {book.category}
              </td>
              <td className="px-6 py-4">
                $10.00
                </td>
              <td className="px-6 py-4">
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-blue-600 hover:underline mr-5">Edit</Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
              </td>
            </tr>

            </tbody>)
          }
          
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
