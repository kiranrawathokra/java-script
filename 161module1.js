import { format } from './date-fns';
const currentDate = new Date();
const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
console.log(`Formatted Date: ${formattedDate}`);