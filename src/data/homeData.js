//Home에서 사용 중
import {
  RiMoneyDollarBoxFill,
  RiCustomerService2Fill,
} from 'react-icons/ri'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { TbZoomMoney } from 'react-icons/tb'
import { SiAdguard } from 'react-icons/si'
import { nanoid } from 'nanoid'

export const buttonList = [
  { name: '제품 목록', icon: RiMoneyDollarBoxFill, id: nanoid(), path: 'null' },
  { name: '계좌 조회', icon: TbZoomMoney, id: nanoid(), path: 'null' },
  { name: '관심 상품', icon: FaHeart, id: nanoid(), path: '/favorite' },
  { name: '장바구니', icon: FaShoppingCart, id: nanoid(), path: '/cart' },
  { name: '소비자 보호', icon: SiAdguard, id: nanoid(), path: 'null' },
  { name: '상담/예약', icon: RiCustomerService2Fill, id: nanoid(), path: 'null' },
]

export const extraData = [
  {
    explainData:
      '고객님만을 위한 특별한 적금, THIS IS ALL FOR YOU! 안성 맞춤 서비스를 만나보세요',
    bannerImg:
      'https://firebasestorage.googleapis.com/v0/b/imgsources.appspot.com/o/1.jpg?alt=media&token=91efc01b-2ecf-4356-b90d-e298c140903e',
  },
  {
    explainData: '흩어진 자산, 한 눈에 모아 관리하고 부자되세요!',
    bannerImg:
      'https://firebasestorage.googleapis.com/v0/b/imgsources.appspot.com/o/2.png?alt=media&token=2a0bf811-fecd-478e-81e1-872a9109ed80',
  },
  {
    explainData:
      '우리아이 행복을 위한 프로젝트, 우리은행과 함께 처음부터 천천히 지금 시작하세요~',
    bannerImg:
      'https://firebasestorage.googleapis.com/v0/b/imgsources.appspot.com/o/3.jpg?alt=media&token=aa35bba6-7f8c-4c3e-95b2-d64f39a51238',
  },
]

  //더미 데이터를 위한 random 함수
export  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //최댓값은 제외, 최솟값은 포함
  }


  export const productListData = [
    {title: '고객님을 위한 맞춤 추천! 🌟', aosDuration: '1800', id: nanoid()},
    {title: 'FastBank의 또 다른 추천 상품을 확인해 보세요! 🪄', aosDuration: '1500', id: nanoid()},
    {title: '이런 상품은 어떠세요? 🤔', aosDuration: 'init', id: nanoid()},
  ]