import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import data from './polish.json';
import {parsLangArray} from './helpers';

var newData = parsLangArray(data);

export default new MLanguage('pl').create(newData);
