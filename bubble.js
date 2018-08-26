var i = 0;
var j = 0;
var swapped = false;

function setup() {
  createCanvas(501,500);

  data = new dataVisualization();
  data.setHeight(500);
  data.setWidth(500);
  data.setBackgroundColor(150);
  data.setDataCount(10);
  data.setDataMin(0);
  data.setDataMax(100);
  data.calcDataWidth();
  data.getNewData();
  data.draw();
}

function draw(){
  bubbleSort(data.data);
}


function bubbleSort(array, swapped) {

    data.draw(i);
    if(array[i] > array[i + 1]) {
      swap(array, i, i + 1);
    }
    if(i < array.length){
      i++;
    } else {
      i = 0;
      j++;
      console.log(j)
      if(j == array.length - 1) {
        noLoop();
      }
    }

}

function swap(array, i, j) {
  swapped = true;
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
