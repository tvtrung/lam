export const getDecimalString = (value: number) => {
  return value.toLocaleString();
};

export const numberFormat = (value: number) => {
  return value < 10 ? '0' + value : value;
};

export const removeTags = (str: string) => {
  if ((str === null) || (str === ''))
      return '';
  else
      str = str.toString();
  return str.replace(/(<([^>]+)>)/ig, '');
};
