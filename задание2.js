
let x = 'true';
if (typeof(x) === 'string'
 || typeof(x) === 'boolean'
 || typeof(x) === 'number'
){
  console.log(typeof(x));
} else {
  console.log('Тип x не определен');
}
