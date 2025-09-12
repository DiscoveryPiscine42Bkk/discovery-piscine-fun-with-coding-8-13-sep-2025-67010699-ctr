(function(){
  const balloon = document.getElementById('balloon');

  
  let size = 200;           
  const minSize = 200;
  const explodeThreshold = 420;
  const growStep = 10;
  const shrinkStep = 5;
  const colors = ['red','green','blue'];
  let colorIndex = 0;
  let busy = false; 

  function apply(){
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.background = colors[colorIndex % colors.length];

    balloon.style.setProperty('--size', size + 'px');
  }


  function nextColor(){
    colorIndex = (colorIndex + 1) % colors.length;
  }

  function prevColor(){
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  }


  function explodeAndReset(){
    busy = true;
    balloon.classList.add('explode');


    setTimeout(() => {
      balloon.classList.remove('explode');

      size = minSize;
      colorIndex = 0;
      apply();

      setTimeout(()=> busy = false, 90);
    }, 450);
  }


  balloon.addEventListener('click', (e) => {
    if (busy) return;
    size += growStep;
    nextColor();
    apply();

    if (size > explodeThreshold) {

      explodeAndReset();
    }
  });


  balloon.addEventListener('mouseleave', (e) => {
    if (busy) return;

    size = Math.max(minSize, size - shrinkStep);
    prevColor();
    apply();
  });

  apply();


  balloon.setAttribute('tabindex','0');
  balloon.addEventListener('keydown', (ev) => {
    if (ev.key === ' ' || ev.key === 'Enter') {
      ev.preventDefault();
      balloon.click();
    }

    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (!busy) {
        size = Math.max(minSize, size - shrinkStep);
        prevColor();
        apply();
      }
    }
  });
})();