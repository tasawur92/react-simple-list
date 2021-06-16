import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'
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
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg',
    title: 'I Love You To The Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg',
    title: 'American Marxism',
    author: 'Mark R. Levin ',
  },
]
// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
//   // console.log(name)
// })
// console.log(newNames)
// const author = 'Amelia Hepworth'
// const title = 'I Love You To The Moon and Back'
// const img = 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg'

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // console.log(book)
        const { img, title, author } = book
        return <Book book={book}></Book>
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
const Book = (props) => {
  const { img, title, author } = props.book

  // console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
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
