const buttons = document.querySelectorAll('.accordionBtn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');

    buttons.forEach(otherButton => {
      const otherItem = otherButton.parentElement;
      if (otherButton !== button) {
        otherItem.classList.remove('open', 'active');
        otherButton.classList.remove('txtBold');
      }
    });

    if (!isOpen) {
      item.classList.add('open', 'active');
      button.classList.add('txtBold');
    } else {
      item.classList.remove('open', 'active');
      button.classList.remove('txtBold');
    }
  });
});