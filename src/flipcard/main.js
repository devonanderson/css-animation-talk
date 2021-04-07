const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.flip-container').classList.toggle('is-flipped')
  });
});

const yesButton = document.querySelector('.flip-action--yes');

yesButton.addEventListener('click', () => {
  const container = yesButton.closest('.flip-container');
  container.classList.add('is-success');

  setTimeout(() => container.classList.remove('is-success'), 5000);
});