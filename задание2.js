let x =  prompt  ("input");

switch (x) {
  case "string":
    alert( 'number' );
    break;
  case "number":
    alert( 'string!' );
    break;
  case "boolean":
    alert( 'boolean' );
    break;
  default:
    alert( "Тип x-не определен" );
}