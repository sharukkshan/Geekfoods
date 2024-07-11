import './Quote.css'
function Quote({quote,author}){

    return (<>
    <div className="quoteCard">

        <p className="quoteText">{quote}</p>

        <p className="quoteAuthor">- {author}</p>

    </div>
    
    
    </>)
}

export default Quote