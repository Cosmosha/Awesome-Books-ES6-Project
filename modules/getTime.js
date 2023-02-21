import { DateTime } from './luxon.js';

const getTime = document.querySelector('.time');

getTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

export default getTime;