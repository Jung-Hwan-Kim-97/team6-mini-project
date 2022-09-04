const getUserInfo = () => {
  if (!localStorage.length) return
  return JSON.parse(localStorage.getItem('userInfo'))
}
const hasLocalData = !!localStorage.getItem('userInfo')

export { getUserInfo, hasLocalData }
