// ============================================================
// Home.jsx  ("All Quotes" page — lives at "/")
//
// The starting point: show every quote, and link each one to
// its own page.
// ============================================================

// TODO (Part 1): bring in the component for client-side navigation
//   links. Docs: https://reactrouter.com/start/declarative/navigating#link
// TODO (Part 1): bring in the quotes data

import { Link } from "react-router"
import  quotes  from "../data/quotes"

function Home() {
  return (
    <div className="app">
      <h1>Quotes</h1>

      <section className="card">
        <h2>All Quotes</h2>


        {
        quotes.map((quote) => {

          return (
            <Link key={quote.id}>
    
            <p> {quote.text} - {quote.author} </p>
          </Link>

          )
        
        })
        
        
        
        
        /*

        
          TODO (Part 1):
            - loop over the quotes array
            - render each quote's text and author (see the .quote-item /
              .quote-text / .quote-author classes in App.css)
            - make each quote a link to its own detail page
        */}
      </section>
    </div>
  )
}

export default Home
