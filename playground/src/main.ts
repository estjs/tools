import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';
import { Logger } from '../../dist';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
app.use(router);
app.mount('#app');
const log = new Logger('test', true);

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
log.log('123');
log.info('123', obj);
log.error('123', obj);
log.warn('123');
log.debug('123');
