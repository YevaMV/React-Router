import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Dalai Lama',
    text: 'The purpose of our lives is to be happy.',
  },
  {
    id: 'q2',
    author: 'John Lennon',
    text: "Life is what happens when you're busy making other plans.",
  },
];
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
        {/* path='quotes/:quotesId/comments' */}
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
