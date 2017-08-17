var moment = require('moment');

console.log(moment().format());
console.log(moment());

var now = moment();

console.log('current ts:', now.unix());

var ts = 1503008296;

var current = moment.unix(ts);

console.log('moment: ',current.format('MMM D, YY @ HH:mm'));
console.log('moment challenge: ',current.format('MMMM Do, YYYY @ hh:mm A'));
