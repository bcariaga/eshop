
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBox from './SearchBox';


test('should call onSearch func when form is submitted', () => {
  const mockSubmit = jest.fn();
  const expectedSearchParam = 'pepe';
  const {getByTestId} = render(
      <SearchBox current={ expectedSearchParam} onSearch={mockSubmit} />,
  );

  fireEvent.change(getByTestId('search-form'),
      {
        target: {search: {value: expectedSearchParam}},
      });
  fireEvent.submit(getByTestId('search-form'));

  expect(mockSubmit).toHaveBeenCalled();
  expect(mockSubmit.mock.calls).toEqual( [[expectedSearchParam]]);
});


test('should set the current prop to the current value of search input', () => {
  const mockSubmit = jest.fn();
  const expectedSearchParam = 'pepe';
  const {getByTestId} = render(
      <SearchBox current={ expectedSearchParam} onSearch={mockSubmit} />,
  );
  const input = getByTestId(search);
  expect(mockSubmit).toHaveBeenCalled();
  expect(input.value).toEqual(expectedSearchParam);
});


