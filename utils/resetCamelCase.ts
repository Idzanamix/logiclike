// преобразование стиля Camel Case в привычный читаемый формат
export const resetCamelCase = (str: string) => {

  const newStr = str.split(/(?=[А-Я])/).join(" ").toLowerCase(); // разделение слов по заглавным буквам

  return newStr?.charAt(0).toUpperCase() + newStr.slice(1); // делаем первую букву заглавной
}

