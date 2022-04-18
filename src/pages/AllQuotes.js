import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
