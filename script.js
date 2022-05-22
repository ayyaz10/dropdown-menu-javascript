document.addEventListener('click', e => {
  const isDropwdownButton = e.target.matches("[data-dropdown-button]");
  if(!isDropwdownButton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;

  if(isDropwdownButton) {
    console.log(isDropwdownButton)
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
  }
  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if(dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  })
})

// console.log('helo world')