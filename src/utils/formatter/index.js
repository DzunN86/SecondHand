export const formatRupiah = (angka) => {
  if (angka) {
    const format = angka.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = `Rp ${convert.join('.').split('').reverse().join('')}`;

    return rupiah;
  }

  return angka;
};

export default formatRupiah;
