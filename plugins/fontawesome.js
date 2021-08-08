import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(faTwitter, faInstagram, faGithub, faLinkedinIn);

// Register the component globally
Vue.component('FaIcon', FontAwesomeIcon);
