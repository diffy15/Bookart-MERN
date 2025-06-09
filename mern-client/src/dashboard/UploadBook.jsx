import React, { useState } from 'react'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Romance",
    "Fantasy",
    "History",
    "Thriller",
    "Non-Fiction",
    "Bibliography",
    "Autobiography",
    "Business",
    "Horror",
    "Self-help",
    "Religion",
    "Travel",
    "Art and Design",
    "Science Fiction",
    "Children Books",
    "Programming"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }

  //handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl
    }

    console.log(bookObj)

    //send data to db

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObj)

    }).then(res => res.json()).then(data => {
      //console.log(data)
      alert("Book uploaded successfully!!")
      form.reset();
    })

   

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>

       <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookTitle">Book Title</Label>
        </div>
        <TextInput 
        id="bookTitle" 
        name="bookTitle"
        type="text" 
        placeholder="Book name" 
        required />
      </div>

      {/* authorName */}

       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="authorName">Author Name</Label>
        </div>
        <TextInput 
        id="authorName" 
        name="authorName"
        type="text" 
        placeholder="Author Name" 
        required />
      </div>

      </div>
      {/* Second row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="imageURL">Book Image URL</Label>
        </div>
        <TextInput 
        id="imageURL" 
        name="imageURL"
        type="text" 
        placeholder="Book image URL" 
        required />
      </div>

      {/* Category */}

       <div className='lg:w-1/2'>
       <div className="mb-2 block">
          <Label 
          htmlFor="inputState">Book Category</Label>
        </div>

        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </select>
        
       
      </div>

      </div>

      {/* bookDescription */}
      <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookDescription">Book Description</Label>
        </div>
        <Textarea
        id="bookDescription" 
        name='bookDescription' 
        placeholder="Write your book description..." 
        required 
        className='w-full'
        rows={6} 
        />
        
      </div>


      {/* book pdf link  */}
      <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPdfUrl">Book PDF Url</Label>
        </div>
        <TextInput 
        id="bookPdfUrl"
        name='bookPdfUrl' 
        type="text" 
        placeholder="book pdf url" 
        required />
      </div>

       <Button className="bg-cyan-700 text-white px-4 py-2 rounded-lg w-full flex justify-center items-center"type="submit">Submit</Button>


      

    </form>
    </div>
  )
}

export default UploadBook
