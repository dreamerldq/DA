import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
[
    'header',
    'newsNotice'
].forEach((model) => {
    app.model(require(`./models/${model}`).default);
})
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
