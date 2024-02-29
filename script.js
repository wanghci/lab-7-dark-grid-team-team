
document.getElementById('dark').addEventListener('click', function(event) {
    document.body.classList.add('dark');
  });

document.getElementById('os').addEventListener('click', function(event) {
    if (window.matchMedia('(prefers-color-scheme: Dark)').matches) {
        document.body.classList.add('dark');
    } else if (window.matchMedia('(prefers-color-scheme: Light)').matches) {
        document.body.classList.remove('dark');
        document.body.classList.add('');
    }
  });