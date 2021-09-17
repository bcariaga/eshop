import 'regenerator-runtime/runtime';
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Detail from './Detail';
const mockData = require('./__mocks__/mockDetail.json');

// eslint-disable-next-line no-unused-vars
import {mobileStyles, tabletStyles, laptopStyles, largeStyles}
  from 'lib/mediaQueries';
import {act} from 'react-dom/test-utils';
import {useProdutDetail} from '../hooks/useProductDetail';
jest.mock('../hooks/useProductDetail');
jest.mock('lib/mediaQueries', () => ({
  mobileStyles: jest.fn(),
  tabletStyles: jest.fn(),
  laptopStyles: jest.fn(),
  largeStyles: jest.fn(),
}), {virtual: true});

test('should show correctly detail', () => {
  global.fetch = jest.fn().mockImplementationOnce(
      () => Promise.resolve({ok: true, json: () => JSON.stringify(mockData)}));
  useProdutDetail.mockImplementation( () => [
    mockData,
  ]);
  act(() => {
    render(
        <Detail id={mockData.id} />,
    );
  });
  const title = screen.getByTestId('title').textContent;
  const description = screen.getByTestId('description').textContent;
  expect(title).toBe(mockData.title);
  expect(description).toBe(mockData.description);
  expect(useProdutDetail).toHaveBeenCalledWith(mockData.id);
});


