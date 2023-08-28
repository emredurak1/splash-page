const changeBackground = function (background) {
  const { body } = document;
  if (body.classList.contains(`background-${background}`)) {
    [1, 2, 3].forEach((i) => body.classList.remove(`background-${i}`));
  } else {
    [1, 2, 3].forEach((i) => body.classList.remove(`background-${i}`));
    body.classList.add(`background-${background}`);
  }
};