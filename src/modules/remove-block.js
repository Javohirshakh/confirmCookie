export const checkAndRemove = (element) => {
  element.addEventListener('click', event => {
    localStorage.setItem('confirm', 'true')
    element.remove()
  })
  if(localStorage.getItem('confirm') === 'true') {
    element.remove()
  } else {
    console.log('not confirmed')
  }
}