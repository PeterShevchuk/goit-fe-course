const formatString = function (string) {
    if (string.length > 40) {
        string = string.substr(0, 40)+'...';
    }
    return string
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // повернеться оригінальний рядок
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // повернеться форматований рядок
  
  console.log(formatString('Curabitur ligula sapien.'));
  // повернеться оригінальний рядок
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );