/**
 *
 * @param {*} param0 api response raw
 * @returns {string[]} categories in the response
 */
export const mapToCategories = ({ filters = [] }) => {
  let categories = (filters.find((f) => f.id === "category") || { values: [] })
    .values; //sometimes, "filters" are empty 🤷🏻‍♂️

  return categories.flatMap((c) => c.path_from_root.map((p) => p.name));
};
