import * as Yup from 'yup';

const Fpassword = Yup.string()
  .required('Silahkan masukan password')
  .min(6, 'Kata sandi harus minimal 6 karakter')
  .matches(
    /^(?=.{6,}$)(?=.*[a-z])(?=.*[0-9]).*$/,
    'Password harus mengandung minimal 1 huruf dan 1 angka',
  );

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Silahkan masukan nama email'),
  password: Fpassword,
});

export const registerSchema = Yup.object().shape({
  nama: Yup.string()
    .min(2, 'Terlalu pendek!!')
    .max(50, 'Too Long!')
    .required('Silahkan masukan nama anda'),
  alamat: Yup.string()
    .min(2, 'Terlalu pendek!!')
    .required('Silahkan masukan alamat'),
  kota: Yup.string().required('Silahkan pilih kota'),
  phone_number: Yup.string().required('Silahkan masukan Nomor Telepon'),
  email: Yup.string()
    .email('Invalid email')
    .required('Silahkan masukan nama email'),
  password: Fpassword,
});

export const updateSchema = Yup.object().shape({
  nama: Yup.string()
    .min(2, 'Terlalu pendek!!')
    .max(50, 'Too Long!')
    .required('Silahkan masukan nama anda'),
  alamat: Yup.string()
    .min(2, 'Terlalu pendek!!')
    .required('Silahkan masukan alamat'),
  kota: Yup.string().required('Silahkan pilih kota'),
  phone_number: Yup.string().required('Silahkan masukan Nomor Telepon'),
});

export const changePasswordSchema = Yup.object().shape({
  current_password: Fpassword,
  new_password: Fpassword,
  confirm_password: Yup.string()
    .equals([Yup.ref('new_password')], 'Password tidak sama')
});

export const formProductSchema = Yup.object().shape({
  name_product: Yup.string()
  .required('Silahkan masukan nama produk'),
  base_price: Yup.number()
  .required('Silahkan masukan harga produk'),
  category_ids: Yup.array()
  .min(1, 'Silahkan pilih kategori')
  .required('Silahkan pilih kategori'),
  description: Yup.string()
  .required('Silahkan masukan deskripsi'),
  image: Yup.string()
  .required('Silahkan masukan deskripsi')
  .min(5, 'Silahkan tambahkan image produk'),
})

export const tawarSchema = Yup.object().shape({
  bid_price: Yup.string().required('Silahkan masukan harga tawaran'),
});
