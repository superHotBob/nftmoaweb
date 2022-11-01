import numeral from 'numeral';
import common from 'utils/common';

export default { common };

export const digit = (value = 0, decimals = 0, cut = true, usd = false): string => {
  if (value) {
    const result = numeral(value).format(`0,0.${Array(decimals).fill('0').join('')}`, Math.floor);
    if (cut) {
      const unit = result.split('.');
      const cutNumber = Math.abs(parseFloat(`0.${unit[1]}`))
        .toString()
        .split('.');
      return `${unit[0]}${cutNumber.length > 1 ? `.${cutNumber[1]}` : ''}`;
    } else return result;
  } else {
    return usd ? '0.00' : '0';
  }
};

export const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
