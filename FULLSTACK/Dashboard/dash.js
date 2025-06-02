let dragged = null;

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('dragstart', () => {
    dragged = box;
  });

  box.addEventListener('dragover', e => {
    e.preventDefault();
  });

  box.addEventListener('drop', () => {
    if (dragged && dragged !== box) {
      const temp = box.innerHTML;
      box.innerHTML = dragged.innerHTML;
      dragged.innerHTML = temp;
    }
  });
});