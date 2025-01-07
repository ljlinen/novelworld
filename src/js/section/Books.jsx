import bookCover from '../../asset/img/book.jpg';
import bookCover1 from '../../asset/img/book1.jpg';
import bookCover2 from '../../asset/img/book2.jpg';

import Book from '../element/Book';
import Text from '../element/Text';
import '../../css/books-section.css'

export default function Books() {

   const books = [
      {
         title: 'Til Death Do Us',
         author: 'Jabulani Van Keik',
         cover: bookCover
      },
      {
         title: 'The Working Deed',
         author: 'Lindelani Momo',
         cover: bookCover1
      },
      {
         title: 'Isina Muva Liya Bukwa',
         author: 'Ramson Buso',
         cover: bookCover2
      }
   ]

  return (
   <section className='books'>
      <div className="head">
            <Text
               h4={'Browse Novels By Genre'}
               p={'Switch To You Desired Genre'}
            />
         <select name="genre" id="genre">
            <option value="romance">romance</option>
            <option value="fantasy">fantasy</option>
            <option value="horror">horror</option>
         </select>
      </div>
      <div className="body">
         {
            books && books.length ?
            books.map((book, i) => {
               return <Book 
                        data={book}
                        key={i}
                     />
            }) : 
            <Text
               h4={'No Books Were Found'}
               p={'There was a problem or no books are available'}
            />
         }
      </div>
   </section>
  )
}
