import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import data from './russian.json';
import {parsLangArray} from './helpers';

var newData = parsLangArray(data);

export default new MLanguage('ru').create(newData);
