import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'
import {books} from './books'
import {greeting} from './tutorial/testing'
// sateless function component
// always return jsx
// first function letter is always captitalized

// JSX Rules
// return single element
// div /section /article or fragment
//use camelCase for html attribute
// className instead of class
// close every element
// formatting

// setup var
// const books = [
//   {
//     id: 1,
//     img: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg',
//     title: 'I Love You To The Moon and Back',
//     author: 'Amelia Hepworth',
//   },
//   {
//     id: 2,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg',
//     title:
//       'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
//     author: 'James Clear',
//   },
//   {
//     id: 3,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg',
//     title: 'American Marxism',
//     author: 'Mark R. Levin ',
//   },
//   {
//     id: 4,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/610O4MLOT2L._AC_UL200_SR200,200_.jpg',
//     title: 'Greenlights',
//     author: 'Mathew McConaughey',
//   },
//   {
//     id: 5,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg',
//     title: 'The Four Winds',
//     author: 'kristin Hannah',
//   },
//   {
//     id: 6,
//     img: 'https://m.media-amazon.com/images/I/81MVfud0o8L._AC_UY218_.jpg',
//     title: 'Caste (Oprahs Book Club',
//     author: 'Isabel Wilkerson',
//   },
//   {
//     id: 7,
//     img: 'https://m.media-amazon.com/images/I/71xS4UfKNiL._AC_UY218_.jpg',
//     title: 'The Plant-Based Athlete ',
//     author: 'Matt Frazier',
//   },
//   {
//     id: 8,
//     img: 'https://m.media-amazon.com/images/I/511z0lqYw9L._AC_UY218_.jpg',
//     title: 'Cynical Theories',
//     author: 'Helen Pluckrose',
//   },
//   {
//     id: 9,
//     img: 'https://m.media-amazon.com/images/I/81LKc4LjZOL._AC_UY218_.jpg',
//     title: 'Confronting Injustice without Compromising Truth',
//     author: 'Thaddeus J. Willams',
//   },
//   {
//     id: 10,
//     img: 'https://m.media-amazon.com/images/I/91FnyIYiqRL._AC_UY218_.jpg',
//     title: 'Live Not by Lie',
//     author: 'Rod Dreher',
//   },
//   {
//     id: 11,
//     img: 'https://m.media-amazon.com/images/I/710Cf7Km56L._AC_UY218_.jpg',
//     title: 'Fault Lines',
//     author: 'Voddie T.Baucham Jr',
//   },
// ]
// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
//   // console.log(name)
// })
// console.log(newNames)
// const author = 'Amelia Hepworth'
// const title = 'I Love You To The Moon and Back'
// const img = 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg'
console.log(greeting);
function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        // console.log(book)
        // const { img, title, author } = book
        return <Book key={book.id} {...book}></Book>
      })}
      {/* {newNames} */}
      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          soluta!
        </p> */}
      {/* </Book> */}
      {/* <Book title='random title' number={77} /> */}
      {/* <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />

      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      /> */}{' '}
      {/* */}
      {/* <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book /> */}
    </section>

    // <section>this is a booklist</section>
    // <div>
    //   <div>
    //     <Person />
    //     <Message />
    //   </div>
    // </div>
  )
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book
  // console.log(props)

  // attribute, eventHandler
  // onClick, onMouseHover
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world')
  }

  const complexExample =(author) => {
    console.log(author);
  }

  const moreImage =(img) => {
    console.log(img);
  }

  return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }
    }>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={()=>complexExample(author)}>more complex example</button>
      <button type='button' onClick={()=>moreImage(img)}>more image</button>
      {/* {children} */}
      {/* /* <Image></Image>
      <Title />
      <Author /> */}
      {/* <img src={props.img} alt='' />
      {<h1>{props.title}</h1>}
      <h4>{props.author.toUpperCase()}</h4>
      {/* {console.log(props)} */}
      {/* <p>{let x=6}</p> */}
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>  */}
      {/* <p>{6 + 6}</p> */}
    </article>
  )
}
// const Image = () => (
//   <img
//     src='https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg'
//     alt=''
//   />
// )

// const Title = () => <h1>I Love You To The Moon and Back</h1>

// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
//     Ammile Heplioe
//   </h4>
// )

// const Person = () => <h2>this is person line</h2>
// const Message = () => <p>this is paragraph line</p>

// const Salute = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }


ReactDom.render(<Booklist />, document.getElementById('root'))
