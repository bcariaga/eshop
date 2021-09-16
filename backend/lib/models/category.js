/**
 *
 * @param {*} param0 api response raw
 * @return {string[]} categories in the response
 */
export const mapToCategories = ({filters = []}) => {
  const categories = (filters.find((f) => f.id === 'category') || {values: []})
      .values; // sometimes, "filters" are empty 🤷🏻‍♂️

  return categories.flatMap((c) => c.path_from_root.map((p) => p.name));
};
