import { useState } from 'react';
import { SearchBlok, Button, Input, Form } from './SearchForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      Notify.info('Enter your request, please!', paramsForNotify);
      return;
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <SearchBlok>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <HiMagnifyingGlass size="15" />
          </Button>
          <Input
            type="text"
            placeholder="Enter for search movies"
            name="query"
            value={query}
            onChange={changeQuery}
          />
        </Form>
      </SearchBlok>
    </>
  );
};

export default SearchForm;
