import 'regenerator-runtime/runtime';
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResult from './SearchResult';
import {act} from 'react-dom/test-utils';
// eslint-disable-next-line no-unused-vars
import {mobileStyles, tabletStyles, laptopStyles, largeStyles}
  from 'lib/mediaQueries';

jest.mock('lib/mediaQueries', () => ({
  mobileStyles: jest.fn(),
  tabletStyles: jest.fn(),
  laptopStyles: jest.fn(),
  largeStyles: jest.fn(),
}), {virtual: true});

test('should render one item for every item in items props 🥴', () => {
  act(() => {
    render(
        <SearchResult
          items={mockItems}
          categories={['1', '2', '3']}
          onClickItem={jest.fn()} />,
    );
  });
  expect(screen.getByTestId('items')).toBeInTheDocument();
  const items = screen.getAllByTestId('item');
  expect(items).toHaveLength(mockItems.length);
});


const mockItems = [
  {
    'id': 'MLA921441574',
    'title': 'Arduino Uno R3 Atmega328 Incluye Cable Usb Chip Desmontable',
    'price': {
      'currency': 'ARS',
      'amount': 1140,
      'decimals': 0,
    },
    'picture': 'http://http2.mlstatic.com/D_791316-MLA46701651207_072021-I.jpg',
    'condition': 'new',
    'free_shipping': false,
  },
  {
    'id': 'MLA921441574',
    'title': 'Arduino Uno R3 Atmega328 Incluye Cable Usb Chip Desmontable',
    'price': {
      'currency': 'ARS',
      'amount': 1140,
      'decimals': 0,
    },
    'picture': 'http://http2.mlstatic.com/D_791316-MLA46701651207_072021-I.jpg',
    'condition': 'new',
    'free_shipping': false,
  },
  {
    'id': 'MLA921441574',
    'title': 'Arduino Uno R3 Atmega328 Incluye Cable Usb Chip Desmontable',
    'price': {
      'currency': 'ARS',
      'amount': 1140,
      'decimals': 0,
    },
    'picture': 'http://http2.mlstatic.com/D_791316-MLA46701651207_072021-I.jpg',
    'condition': 'new',
    'free_shipping': false,
  },
  {
    'id': 'MLA921441574',
    'title': 'Arduino Uno R3 Atmega328 Incluye Cable Usb Chip Desmontable',
    'price': {
      'currency': 'ARS',
      'amount': 1140,
      'decimals': 0,
    },
    'picture': 'http://http2.mlstatic.com/D_791316-MLA46701651207_072021-I.jpg',
    'condition': 'new',
    'free_shipping': false,
  },
]
;
