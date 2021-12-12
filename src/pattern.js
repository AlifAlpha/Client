export const Pattern = {
  email: /^[A-z][\w-.]+@[A-z]{3,}\.[A-z]{2,4}$/i,
  phone: /^0[6|7|0|5][0-9]{8,12}$/, // modified by ameen
  password: /^(?=.*\d)(?=.*[A-z]).{8,}$/,
  name: /^[A-z \u0600-\u06FF]{1,}$/,
  username: /^[a-z]{5,}\d*$/i,
  image: /\.(jpg|jpeg|png|gif)$/i,
  image64: /^data:image\/(png|jpg|jpeg)/i,
};
