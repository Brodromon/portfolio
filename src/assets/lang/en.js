import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import data from './en.json';
import {parsLangArray} from './helpers';

var newData = parsLangArray(data);

export default new MLanguage('en').create(newData);
