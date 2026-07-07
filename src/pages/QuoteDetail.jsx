// ============================================================
// QuoteDetail.jsx   (dynamic page — lives at "/quotes/:id")
//
// This page doesn't fetch anything — the quote data already
// exists in data/quotes.js. The job here is just: read the :id
// out of the URL, and find the matching quote.
// ============================================================

// TODO (Part 3): bring in the hook that reads path parameters from
//   the URL, and the link component. Docs:
//   https://reactrouter.com/start/declarative/url-values#useparams
// TODO (Part 3): bring in the quotes data

import { useParams } from "react-router"
import quotes from "../data/quotes"


function QuoteDetail() {
  // TODO (Part 3): read the id out of the URL using the params hook.
  //
  // Careful: that hook always gives you the id as a STRING, but each
  // quote's id in data/quotes.js is a NUMBER. Comparing a string to a
  // number directly will never match — convert one side before comparing.

  // TODO (Part 3): find the quote in the array whose id matches.

  // TODO (Part 3): handle the "not found" case —
  //   if no quote matches (someone visits /quotes/999), render a
  //   short message instead of crashing. Don't assume a match exists
  //   before reading its text or author.

  //get id
    const {id} = useParams()
    //conver to num
    const quoteid = Number(id)

    // find quote requested from url
    const quote = quotes.find((quote) => {
      return quote.id === quoteid
    })
//if not found
    if(!quote) {
      return (
        <h1>Quote Not Found </h1>
      )
    }

  return (
    <div className="app">
    <h1> Quote Number: {id}</h1>
    {/* display the quote that was found */}
    <p> {quote.text} - {quote.author} </p>
    


      {/* TODO (Part 3): render the quote's text and author */}
      {/* TODO (Part 3): a link back to the home page */}
    </div>
  )
}

export default QuoteDetail
