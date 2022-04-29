const myTable = document.getElementById('pixelCanvas');
const submitBtn = document.getElementById('inputSubmit');
const colorPickerBtn = document.getElementById('colorPicker');
const myForm = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');


/**
  * @desc create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
*/
function makeGrid(event, height, width) {
	event.preventDefault();
	height = inputHeight.value;
	width = inputWidth.value;

	for (let i = 1; i <= parseInt(height); i++) {
		const row = document.createElement('tr');
		myTable.appendChild(row);
		for (let j = 1; j <= parseInt(width); j++) {
			const column = document.createElement('td');
			row.appendChild(column);
		}
	}

}