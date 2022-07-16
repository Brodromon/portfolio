import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import data from './ukrainian.json';
import {parsLangArray} from './helpers';

var newData = parsLangArray(data);

export default new MLanguage('ukr').create(newData);
