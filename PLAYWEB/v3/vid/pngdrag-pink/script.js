ball.onmousedown = function(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
   }

  function onMouseMove(event) {
     moveAt(event.pageX, event.pageY);

     ball.hidden = true;
     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
     ball.hidden = false;

     if (!elemBelow) return;
      }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function() {
     document.removeEventListener('mousemove', onMouseMove);
     ball.onmouseup = null;
  };

};
 ball.ondragstart = function() {
   return false;
 };


ball2.onmousedown = function(event) {

  let shiftX = event.clientX - ball2.getBoundingClientRect().left;
  let shiftY = event.clientY - ball2.getBoundingClientRect().top;

  ball2.style.position = 'absolute';
  ball2.style.zIndex = 1000;
  document.body.append(ball2);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
      ball2.style.left = pageX - shiftX + 'px';
      ball2.style.top = pageY - shiftY + 'px';
   }

  function onMouseMove(event) {
     moveAt(event.pageX, event.pageY);

     ball2.hidden = true;
     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
     ball2.hidden = false;

     if (!elemBelow) return;
      }

  document.addEventListener('mousemove', onMouseMove);

  ball2.onmouseup = function() {
     document.removeEventListener('mousemove', onMouseMove);
     ball2.onmouseup = null;
  };

};
 ball2.ondragstart = function() {
   return false;
 };


ball3.onmousedown = function(event) {

  let shiftX = event.clientX - ball3.getBoundingClientRect().left;
  let shiftY = event.clientY - ball3.getBoundingClientRect().top;

  ball3.style.position = 'absolute';
  ball3.style.zIndex = 1000;
  document.body.append(ball3);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
     ball3.style.left = pageX - shiftX + 'px';
     ball3.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    ball3.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball3.hidden = false;

    if (!elemBelow) return;
  }

  document.addEventListener('mousemove', onMouseMove);

  ball3.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball3.onmouseup = null;
  };

 };
ball3.ondragstart = function() {
  return false;
};


ball4.onmousedown = function(event) {

  let shiftX = event.clientX - ball4.getBoundingClientRect().left;
  let shiftY = event.clientY - ball4.getBoundingClientRect().top;

  ball4.style.position = 'absolute';
  ball4.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
      ball4.style.left = pageX - shiftX + 'px';
      ball4.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
     moveAt(event.pageX, event.pageY);

     ball4.hidden = true;
     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
     ball4.hidden = false;

     if (!elemBelow) return;
    }

  document.addEventListener('mousemove', onMouseMove);

  ball4.onmouseup = function() {
     document.removeEventListener('mousemove', onMouseMove);
     ball4.onmouseup = null;
  };

 };
  ball4.ondragstart = function() {
   return false;
 };
