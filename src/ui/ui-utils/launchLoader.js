export default function () {
  const startLoad = Date.now()
  window.addEventListener('load', function () {
    const endLoad = Date.now()
    const elapsedTimeLoading = endLoad - startLoad
    if (elapsedTimeLoading < 400) {
      setTimeout(() => {
        document.querySelector('.lds-ring').classList.toggle('hide-loader')
      }, 700)
    } else if (elapsedTimeLoading >= 400) {
      setTimeout(() => {
        document.querySelector('.lds-ring').classList.toggle('hide-loader')
      }, 600)
    } else if (elapsedTimeLoading >= 900) {
      document.querySelector('.lds-ring').classList.toggle('hide-loader')
    }
  })
}
