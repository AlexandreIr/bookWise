import BookCard from "./BookCard"

const BookList = ({title, books, containerClass}: BookList) => {
  return (
    <section className={containerClass}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
      
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} {...book}/>
        ))}
      </ul>
    </section>
  )
}

export default BookList