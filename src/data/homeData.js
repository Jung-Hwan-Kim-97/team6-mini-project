//Home에서 사용 중

import {
  RiMoneyDollarBoxFill,
  RiMoneyDollarCircleFill,
  RiCustomerService2Fill,
} from 'react-icons/ri'
import { BsPiggyBankFill } from 'react-icons/bs'
import { TbZoomMoney } from 'react-icons/tb'
import { SiAdguard } from 'react-icons/si'
import { nanoid } from 'nanoid'


export const buttonList = [
  { name: '계좌 조회', icon: RiMoneyDollarBoxFill, id: nanoid() },
  { name: '빠른 조회', icon: TbZoomMoney, id: nanoid() },
  { name: '예금', icon: BsPiggyBankFill, id: nanoid() },
  { name: '적금', icon: RiMoneyDollarCircleFill, id: nanoid() },
  { name: '소비자 보호', icon: SiAdguard, id: nanoid() },
  { name: '상담/예약', icon: RiCustomerService2Fill, id: nanoid() },
]

