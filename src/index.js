import { el, setChildren } from 'redom';

const ROW_CELL_COUNT = 6;

function getStartRowCellIndexesArray(rowCellCount) {
  const arr = [];
  for (let i = 0; i < rowCellCount; i++) {
    arr.push(i * rowCellCount);
  }
  return arr;
}

const startRowCellIndexes = getStartRowCellIndexesArray(ROW_CELL_COUNT);

function createGrid(container, elCount) {
  let createdElCount = 0;

  while (createdElCount < elCount) {
    container.append(el('.grid-element'));
    createdElCount++;
  }
}

function createAudioEl(file) {
  const audioEl = el('audio.audio-element', { controls: true });
  audioEl.src = URL.createObjectURL(file);
  audioEl.load();

  const context = new AudioContext();
  const src = context.createMediaElementSource(audioEl);
  const analyser = context.createAnalyser();

  src.connect(analyser);
  analyser.connect(context.destination);
  analyser.fftSize = 256;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  audioEl.addEventListener('play', requestAnimationFrame(renderFrame));

  function renderFrame() {
    if (audioEl.paused) {
      return;
    }
    analyser.getByteFrequencyData(dataArray);
    const gridCells = document.querySelectorAll('.grid-element');
    gridCells.forEach((cell) => (cell.style.backgroundColor = 'transparent'));

    for (let i = 0; i < ROW_CELL_COUNT; i++) {
      const columnHeight = Math.ceil(dataArray[i] / (256 / ROW_CELL_COUNT));

      const activeRowCellIndexes = startRowCellIndexes
        .map((value, index, array) => array[array.length - 1 - index])
        .slice(0, columnHeight);

      activeRowCellIndexes.forEach((ind) => {
        gridCells[ind + i].style.backgroundColor = 'red';
      });
    }

    requestAnimationFrame(renderFrame);
  }

  return audioEl;
}

function getContentEls() {
  const gridContainer = el('.grid-container', {
    style: `grid-template-columns: repeat(${ROW_CELL_COUNT}, 50px)`,
  });
  createGrid(gridContainer, Math.pow(ROW_CELL_COUNT, 2));

  const addFileInput = el('input.add-file-input', {
    type: 'file',
    accept: 'audio/*',
    onchange() {
      const file = addFileInput.files[0];
      if (file) {
        const audioEl = createAudioEl(file);
        gridContainer.after(audioEl);
      }
    },
  });

  return [gridContainer, addFileInput];
}

const contentEl = el('.content', getContentEls());
setChildren(document.querySelector('.container'), [contentEl]);
