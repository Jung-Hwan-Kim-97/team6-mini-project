import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const setCookie = (name, value, option) =>
  cookies.set(name, value, { ...option })
const getCookie = name => cookies.get(name)

// 토큰 재발급 및 저장
const reIssue = async () => {
  const { memberId } = getCookie('accessToken')
  try {
    const accessToken = await instance.post('/auth/reissue', {
      data: memberId,
    })
    return accessToken
  } catch (error) {
    console.log(error)
  }
}

export { setCookie, getCookie, reIssue }
