const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const savedTheme = localStorage.getItem('Theme');
const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector("body");
function classToggle(addClass, removeClass){
  bodyRef.classList.remove(removeClass);
  bodyRef.classList.add(addClass);
};
if (savedTheme === Theme.DARK){
  inputRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
}
inputRef.addEventListener('change', onThemeChange);
function onThemeChange(event){
  if(event.currentTarget.checked){
    classToggle(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  }
  else{
    classToggle(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);}
};
