import {mapToCategories} from './category';

describe('Categories', () => {
  it('mapToCategories must map api response to Category object (an array of strings...)', () => {
    expect(mapToCategories(apiResponse)).toEqual([
      'Celulares y Teléfonos',
      'Accesorios para Celulares',
      'Colgantes y Soportes',
    ]);
  });

  it('mapToCategories must return empty array when filters on api response are empty', () => {
    expect(mapToCategories({filters: []})).toEqual([]);
  });
});

const apiResponse = {
  // ...others props
  filters: [
    {
      id: 'category',
      name: 'Categories',
      type: 'text',
      values: [
        {
          id: 'MLA432435',
          name: 'Colgantes y Soportes',
          path_from_root: [
            {
              id: 'MLA1051',
              name: 'Celulares y Teléfonos',
            },
            {
              id: 'MLA3502',
              name: 'Accesorios para Celulares',
            },
            {
              id: 'MLA432435',
              name: 'Colgantes y Soportes',
            },
          ],
        },
      ],
    },
  ],
};
