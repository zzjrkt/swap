import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { RouteComponentProps } from 'react-router-dom'

// fires a GA pageview every time the route changes
<<<<<<< HEAD
export default function GoogleAnalyticsReporter({ location: { pathname, search } }: RouteComponentProps): null {
=======
export default function GoogleAnalyticsReporter({ location: { pathname, search } }: RouteComponentProps) {
>>>>>>> 9c8809b... first commit
  useEffect(() => {
    ReactGA.pageview(`${pathname}${search}`)
  }, [pathname, search])
  return null
}
