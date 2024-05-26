// преобразование строки в силь CamelCase (без пробелов)
export const setCamelCase = (words: string) =>
  words.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('');

