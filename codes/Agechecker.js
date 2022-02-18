/*You’ve been asked by the local movie theater managers to
implement some JavaScript for a new automated system
they’re building. They want to be able to work out whether
someone is allowed into a PG-13 movie or not.
The rules are, if someone is 13 or over, they’re allowed
in. If they’re not over 13, but they are accompanied by an
adult, they’re also allowed in. Otherwise, they can’t see the
movie.*/
 
var age = 12;
var agerestriction=13
var accompanied = true;
 
var allowedtoenter = (age>= agerestriction || accompanied);
allowedtoenter;
