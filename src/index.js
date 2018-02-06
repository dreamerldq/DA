import dva from 'dva'
import './index.css'
import router from './router'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
[
  'header',
  'newsNotice',
  'newsNoticeDetail',
  'login',
  'registered',
  'teacherList'
].forEach((model) => {
  app.model(require(`./models/${model}`).default)
})
// 4. Router
app.router(router)

// 5. Start
app.start('#root')
