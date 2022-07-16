import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import data from './german.json';
import {parsLangArray} from './helpers';

var newData = parsLangArray(data);

export default new MLanguage('de').create(newData);
