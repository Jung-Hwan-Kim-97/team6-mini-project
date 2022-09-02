import axios from 'axios'
import { setCookie, getCookie, reIssue } from '~/utils'

const instance = axios.create({
  baseURL, //인증 로직이 필요한 url , 추후 작성
  withCredentials: true,
})
// 모든 요청의 헤더에 accessToken 포함시킴
instance.interceptors.request.use(
  config => {
    const accessToken = getCookie('accessToken')
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`
    return config
  },
  error => Promise.reject(error),
)
// accessToken 만료로 401 에러시 로그인 재요청
instance.interceptors.response.use(
  res => res,
  async error => {
    const { config, response } = error
    if (response.status === 401) {
      const accessToken = await reIssue()
      if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`
      return instance(config)
    }
    return Promise.reject(error)
  },
)
