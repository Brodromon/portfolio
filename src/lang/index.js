import Vue from 'vue';
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
// import store from '@/store';

import Polish from "./pl";
import English from "./en";
import German from "./de";
import Russian from "./ru";
import Ukrainian from "./ukr";

import {parsPath, replacePath} from './helpers';

Vue.use(MLInstaller);

var LANG_DEBUG = false;

var lang = new MLCreate({
  middleware: (component, path) => {
    if (!path || path == null || path == undefined)
      return '';

    path = replacePath(path);

    var newPath = parsPath(path);

    var index = component.$ml.list.indexOf(component.$ml.current);
    var strIndex = component.$ml.db[index][newPath];

    if (!strIndex && !LANG_DEBUG) {
      component.$ml.db[index][newPath] = path;
    }

    return newPath;
  },
  initial: 'en',
  save: false,
  languages: [
    Polish,
    English,
    German,
    Russian,
    Ukrainian
  ]
});


export default lang;
