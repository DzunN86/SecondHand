import Moment from "moment";

export function formatRupiah(angka){
  if (angka) {
    const format = angka.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = `Rp ${convert.join('.').split('').reverse().join('')}`;

    return rupiah;
  }

  return angka;
};

export function formatDate(val) {
  if (!val) {
    return "-";
  }
  return Moment(val).format("DD MMM YYYY");
}

export function formatDateTime(val) {
  if (!val) {
    return "-";
  }
  return Moment(val).format("DD MMM, HH:mm");
}

