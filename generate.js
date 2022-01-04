let randnum = [];
let abc = document.getElementById('output')



function myfunction() {
   
    var size = Number(document.getElementById('input-size').value);
    randnum = new Array(size)

    for (let i = 0; i < size; i++) {

        let rand = Math.random() * 1000;
        randnum[i] = Math.floor(rand);
      }

      console.log(randnum);
      document.getElementById("input").innerHTML = randnum;

      comparisons()

}

function bubbleSort(){
    var startTime = performance.now()
    let newlist = randnum.slice(0)
    var arr = randnum
    console.log(newlist)

    bubblesorting(arr)
    var endTime = performance.now()
    let timeTaken = (endTime - startTime)/1000
    console.log(arr);
    console.log('It took ' + (endTime - startTime)/1000+ 'ms.');
    document.getElementById('output').innerHTML = timeTaken;
    document.getElementById('sorted-array').innerHTML = arr
    randnum = newlist
}



function selectionSort(){
    var startTime = performance.now()
    let newlist = randnum.slice(0)
    let arr = randnum
    console.log(newlist)

    selectionsorting(arr)
    var endTime = performance.now()
    let timeTaken = (endTime - startTime)/1000
    console.log(arr);
    console.log('It took ' + (endTime - startTime)/1000+ 'ms.');
    document.getElementById('output').innerHTML = timeTaken;
    document.getElementById('sorted-array').innerHTML = arr
    randnum = newlist

}

function insertionSort(){
    var startTime = performance.now()
    let newlist = randnum.slice(0)
    let arr = randnum
    console.log(newlist)

    insertionsorting(arr)
    var endTime = performance.now()
    let timeTaken = (endTime - startTime)/1000
    console.log(arr);
    console.log('It took ' + (endTime - startTime)/1000+ 'ms.');
    document.getElementById('output').innerHTML = timeTaken;
    document.getElementById('sorted-array').innerHTML = arr
    randnum = newlist
}

function mergeSort(){
    var startTime = performance.now()
    let newlist = randnum.slice(0)

    let arr = randnum
    console.log(newlist)

    mergesorting(arr,0,arr.length-1)
    var endTime = performance.now()
    let timeTaken = (endTime - startTime)/1000
    console.log(arr);
    console.log('It took ' + (endTime - startTime)/1000+ 'ms.');
    document.getElementById('output').innerHTML = timeTaken;
    document.getElementById('sorted-array').innerHTML = arr
    randnum = newlist

}

function quickSort2(){
  let newlist = randnum.slice(0)

  let arr = randnum
  console.log(newlist)

  var startTime = performance.now()
  QuickSortMedian(arr,0,arr.length-1)
  var endTime = performance.now()
  let timeTaken = (endTime - startTime)/1000
  console.log('It took ' + (endTime - startTime)/1000+ 'ms.');
  document.getElementById('output').innerHTML = timeTaken;
  document.getElementById('sorted-array').innerHTML = arr
  randnum = newlist

}

function quickSort(){
    var startTime = performance.now()
    let newlist = randnum.slice(0)

  let arr = randnum
  console.log(newlist)

  quicksorting(arr, 0 , arr.length-1)
  var endTime = performance.now()
  let timeTaken = (endTime - startTime)/1000
  console.log('It took ' + (endTime - startTime)/1000+ 'ms.');
  document.getElementById('output').innerHTML = timeTaken;
  document.getElementById('sorted-array').innerHTML = arr
  randnum = newlist
}

function heapSort(){
    var startTime = performance.now()
    let newlist = randnum.slice(0)

    var arr = randnum

    console.log(newlist)

  heapsorting(arr)
  var endTime = performance.now()  
  let timeTaken = (endTime - startTime)/1000
  console.log(arr);
  console.log('It took ' + (endTime - startTime)/1000+ 'ms.');
  document.getElementById('output').innerHTML = timeTaken;
  document.getElementById('sorted-array').innerHTML = arr
  randnum = newlist

}


function comparisons(){
  let comp = document.getElementById('comparisons')
  comp.innerHTML = ''
  let compArr = randnum.slice(0);
  let arr = randnum;

  let startTime;
  let endTime;
  let timesObj = {}

  startTime = performance.now()
  bubblesorting(arr)
  endTime = performance.now()
  timesObj['Bubble Sort'] = (endTime-startTime)/1000
  randnum = compArr;
  arr =  randnum.slice(0)

  console.log(arr)
  

  startTime = performance.now()
  selectionsorting(arr)
  endTime = performance.now()
  timesObj['Selection Sort'] = (endTime-startTime)/1000
  randnum = compArr;
  arr =  randnum.slice(0)
  console.log(arr)


  startTime = performance.now()
  insertionsorting(arr)
  endTime = performance.now()
  timesObj['Insertion Sort'] = (endTime-startTime)/1000
  randnum = compArr;
  arr =  randnum.slice(0)
  console.log(arr)


  startTime = performance.now()
  mergesorting(arr,0,arr.length-1)
  endTime = performance.now()
  timesObj['Merge Sort'] = (endTime-startTime)/1000
  randnum = compArr;
  arr =  randnum.slice(0)
  console.log(arr)


  startTime = performance.now()
  heapsorting(arr)
  endTime = performance.now()
  timesObj['Heap Sort'] = (endTime-startTime)/1000
  randnum = compArr;
  arr =  randnum.slice(0)

  console.log(arr)

  startTime = performance.now()
  quicksorting(arr,0,arr.length-1)
  endTime = performance.now()
  timesObj['Quick Sort'] = (endTime-startTime)/1000
  randnum = compArr;
  arr =  randnum.slice(0)

  console.log(arr)

  startTime = performance.now()
  QuickSortMedian(arr,0,arr.length-1)
  endTime = performance.now()
  timesObj['3 Median Sort'] = (endTime-startTime)/1000
  randnum = compArr;
  arr =  randnum.slice(0)
  console.log(randnum)


  for(let i = 0 ;i<Object.keys(timesObj).length;i++){
    let p = document.createElement("p")
    p.innerHTML = `${Object.keys(timesObj)[i]}: ${timesObj[Object.keys(timesObj)[i]]}`
    comp.append(p)
  }
  console.log(timesObj)


}