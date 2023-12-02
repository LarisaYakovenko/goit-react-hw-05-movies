import { useState } from 'react';
import { SearchBlok, Button, Input, Form } from './SearchForm.styled';
// import { Form, Input, Button } from './SearchForm.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    // if (!query) return toast.error('Please enter a sometings', notify);
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

// import { useState } from 'react';
// import { HiMagnifyingGlass } from 'react-icons/hi2';
// import { useState } from 'react';
// import {
//   SearchFormButton,
//   SearchFormInput,
//   SearchbarStyle,
// } from './SearchForm.styled';

// const SearchForm = () => {
//   const [query, setQuery] = useState('');

//   const handleChange = ({ tadget: { value } }) => {
//     setQuery(value);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     // if (query.trim() === '') {
//     //   Notify.info('Enter your request, please!', paramsForNotify);
//     //   return;
//     // }

//     onsubmit(query);
//   };
//   return (
//     <SearchbarStyle>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchFormButton>
//           <HiMagnifyingGlass size="24" />
//         </SearchFormButton>
//         <SearchFormInput
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={handleChange}
//         />
//       </SearchForm>
//     </SearchbarStyle>
//   );
// };

// export default SearchForm;

// import { useState } from 'react';

// import {
//   SearchForm,
//   SearchFormButton,
//   SearchFormInput,
//   SearchbarStyle,
// } from './SearchForm.styled';

// import { HiMagnifyingGlass } from 'react-icons/hi2';

// //  export const paramsForNotify = {
// //    position: 'center-center',
// //    timeout: 3000,
// //    width: '400px',
// //    fontSize: '24px',
// //  };

// SearchForm = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = ({ target: { value } }) => {
//     setQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // if (query.trim() === '') {
//     //   Notify.info('Enter your request, please!', paramsForNotify);
//     //   return;
//     // }

//     onSubmit(query);
//   };

//   return (
//     <SearchbarStyle>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchFormButton>
//           <HiMagnifyingGlass size="24" />
//         </SearchFormButton>
//         <SearchFormInput
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={handleChange}
//         />
//       </SearchForm>
//     </SearchbarStyle>
//   );
// };

// export default SearchForm;
