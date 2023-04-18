let x = 7

    switch (typeof x) {
      case "Number":
      console.log('x-число');
      break;
      case "String":
      console.log('x-строка');
      break;
      case "Boolean":
      console.log('x-логический тип');
      break;
      default:
      console.log('Тип x не определен');
    }