import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import EditItem from './components/EditItem.vue';
import Home from './components/HomeComponent.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
    name: 'CreateItem',
    path: '/items/create',
    component: CreateItem
  },
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  },
  {
      name: 'EditItem',
      path: '/edit/:id',
      component: EditItem
   },
   {
      name: 'Home',
      path: '/',
      component: Home
   }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');










