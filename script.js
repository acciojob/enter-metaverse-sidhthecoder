//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const statusText = document.getElementById('status');
  const enterBtn = document.getElementById('enterBtn');

  enterBtn.addEventListener('click', function() {
    statusText.textContent = 'Entered Metaverse';

    const h1 = document.createElement('h1');
    h1.textContent = statusText.textContent;

    statusText.parentNode.replaceChild(h1, statusText);
  });
});