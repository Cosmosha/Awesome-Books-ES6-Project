import { DateTime } from './luxon.js';

const getTime = document.querySelector('.time');

getTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

export default getTime;