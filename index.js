const BadApplePlayer = (function() {

  const audio = new Audio("song.mp3");
  const tickMs = 40;
  const player = document.getElementById("player");

  let frame = 0;
  let root = document.createElement("div");
  let playing = false;

  /**
   * Creates a checkbox from a specified number representing
   * the "pixel" to be shown.
   * @param {number} n Pixel
   * @returns {HTMLElement} The checkbox element
   */
  function elementFrom(n) {
    const e = document.createElement("input");
    e.type = "checkbox";
    e.disabled = n == 2;
    e.checked = n > 0;
    return e;
  }

  function draw() {
    root.remove();
    root = document.createElement("div");
    const data = frames[frame];

    for (const rowData of data) {
      const row = document.createElement("div");
      for (const pixel of rowData) {
        row.appendChild(elementFrom(pixel));
      }
      root.appendChild(row);
    }

    player.appendChild(root);
    frame++;

    if (playing) {
      setTimeout(draw, tickMs);
    }
  }

  /**
   * Plays bad apple.
   */
  function play() {

    if (playing) {
      // already being played
      return;
    }
    
    audio.play();
    playing = true;
    draw();
  }

  /**
   * Pauses bad apple.
   */
  function pause() {
    audio.pause();
    playing = false;
  }

  // expose methods
  return {
    play,
    pause
  };
})();
