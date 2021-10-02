function start() {

  const audio = new Audio("song.mp3");
  const delay = 60;

  let frame = 0;
  let root = document.createElement("div");

  function elementFrom(n) {
    const e = document.createElement("input");
    e.type = "checkbox";
    switch (n) {
      case 0:
        e.checked = true;
        break;
      case 1:
        e.checked = false;
        break;
      case 2:
        e.checked = true;
        e.disabled = true;
        break;
    }
    return e;
  }

  function draw() {
    root.remove();
    root = document.createElement("div");

    const data = frames[frame];
    for (const a of data) {
      const r = document.createElement("div");
      for (const b of a) {
        const e = elementFrom(b);
        r.appendChild(e);
      }
      root.appendChild(r);
    }

    document.body.appendChild(root);
    frame++;
    setTimeout(draw, delay);
  }

  draw();
  audio.play();
}
