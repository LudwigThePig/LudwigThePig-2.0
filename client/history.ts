import { createBrowserHistory } from 'history'

export default createBrowserHistory({
  basename: '/',
  forceRefresh: false,
  keyLength: 6,
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});