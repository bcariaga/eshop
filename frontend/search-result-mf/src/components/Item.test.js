import 'regenerator-runtime/runtime';
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from './Item';
import {act} from 'react-dom/test-utils';
// eslint-disable-next-line no-unused-vars
import {mobileStyles, tabletStyles, laptopStyles, largeStyles}
  from 'lib/mediaQueries';

// TODO: move to __mocks__
jest.mock('lib/mediaQueries', () => ({
  mobileStyles: jest.fn(),
  tabletStyles: jest.fn(),
  laptopStyles: jest.fn(),
  largeStyles: jest.fn(),
}), {virtual: true});

test('should render correctly item', () => {
  act(() => {
    render(
        <Item
          {...{...mockItem, free_shipping: true}}
          onClickItem={jest.fn()} />,
    );
  });
  const picture = screen.getByTestId('picture');
  const title = screen.getByTestId('title');
  const shipping = screen.getByTestId('shipping');

  expect(picture).toHaveAttribute('src', mockItem.picture);
  expect(title.textContent).toBe(mockItem.title);
  expect(shipping.textContent).toContain('envio gratis');
});


const mockItem = {
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
};
