import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {
  Router,
  RouterContext,
  match,
  createMemoryHistory,
  browserHistory
} from 'react-router'
import routes from './Routes'
import wrapper from './wrapper'

if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app')
  ReactDOM.render(<Router history={browserHistory} routes={routes} />, outlet)
}

export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  return match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      throw new Error(err)
    }
    const html = ReactDOMServer.renderToStaticMarkup(
      <RouterContext {...renderProps} />
    )
    return callback(null, wrapper({ html }))
  })
}

if (module.hot) {
  module.hot.accept()
}
