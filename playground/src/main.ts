import { createApp } from 'vue';
import { createLogger } from '@estjs/tools';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
app.use(router);
app.mount('#app');

createLogger('test', true);

const obj = {
  1: {
    2: {
      3: {
        4: {
          5: '123',
        },
      },
    },
  },
};
logger.log('123');
logger.info('123', obj);
logger.error('123', obj);
logger.warn('123');
logger.debug('123');
console.info(obj);
