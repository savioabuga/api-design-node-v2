import http from 'http'
import {createServer} from 'http'

import app from './server'

app.listen(3001, () => {
  console.log('http://localhost:3001')
})
