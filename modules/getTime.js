import { DateTime } from './luxon.js';

const getTime = document.querySelector('.time');

getTime.innerHTML = DateTime.now();

export default getTime;