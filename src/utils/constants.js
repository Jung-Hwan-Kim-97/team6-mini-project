const baseURL = ''
const STATUS = {
  SUCCESS: 'success',
  FAILED: 'failed',
}
const ID_LABEL = {
  email: '이메일',
  name: '유저이름',
  password: '비밀번호',
  confirm_password: '비밀번호 확인',
  phone: '전화번호',
  age: '나이',
}
const FORM_REGEX = {
  name: /^[ㄱ-ㅎ가-힣]{2,4}$/,
  password: /^[a-zA-Z0-9]{8,16}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  phone: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
}
const FORM_ERR_MSG = {
  required: '해당란을 입력해주세요.',
  invalidName: '2~4자의 한글을 입력하세요.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
  invalidEmail: '올바른 이메일이 아닙니다.',
  invalidPhone: '올바른 전화번호가 아닙니다.',
  invalidAgeMax: '최대 100세까지 가능합니다.',
  invalidAgeMin: '최소 20세까지 가능합니다.',
}
const PLACEHOLDER = {
  name: 'ex) 홍길동',
  email: 'ex) abcde@naver.com',
  password: '********',
  phone: 'ex) 010-1234-5678',
  age: 'ex) 20',
}
const JOB_ARR = ['무직', '회사원', '자영업', '주부', '기타']
export {
  baseURL,
  STATUS,
  ID_LABEL,
  FORM_REGEX,
  FORM_ERR_MSG,
  PLACEHOLDER,
  JOB_ARR,
}
