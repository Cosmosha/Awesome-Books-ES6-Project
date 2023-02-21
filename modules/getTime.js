// eslint-disable-next-line import/no-unresolved
import { DateTime } from '../../../../../node_modules/luxon/build/es6/luxon.js';

const getTime = document.querySelector('.time');

getTime.innerHTML = DateTime.now();

export default getTime;