import Raven from 'raven-js'

export default (message, category, data) => {
  Raven.captureBreadcrumb({
    message,
    category,
    data
  })
}