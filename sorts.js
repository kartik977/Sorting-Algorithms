
    function bubblesorting(arr) {
     
     for(var i = 0; i < arr.length; i++){
         
        // Last i elements are already in place  
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
          if(arr[j] > arr[j+1]){
              
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
      }
      return arr
    }
    
    //mergesort
    
    // l is for left index and r is
    // right index of the sub-array
    // of arr to be sorted */
    function mergesorting(arr,l, r){
      if(l>=r){
          return;//returns recursively
      }
      let m =l+ parseInt((r-l)/2);
      mergesorting(arr,l,m);
      mergesorting(arr,m+1,r);
      return merge(arr,l,m,r);
    }
    
    function merge(arr, l, m, r)
    {
        let n1 = m - l + 1;
        let n2 = r - m;
      
        // Create temp arrays
        var L = new Array(n1); 
        var R = new Array(n2);
      
        // Copy data to temp arrays L[] and R[]
        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
      
        // Merge the temp arrays back into arr[l..r]
      
        // Initial index of first subarray
        var i = 0;
      
        // Initial index of second subarray
        var j = 0;
      
        // Initial index of merged subarray
        var k = l;
      
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
      
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
      
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    

    function heapsorting(arr) {
        var n = arr.length;
     
        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);
    
        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
    
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
        return arr
    }
    
    function heapify(arr, n, i)
    {
            let largest = i; 
            let l = 2 * i + 1; 
            let r = 2 * i + 2; 
     
            // If left child is larger than root
            if (l < n && arr[l] > arr[largest])
                largest = l;
     
           
            if (r < n && arr[r] > arr[largest])
                largest = r;
     
            // If largest is not root
            if (largest != i) {
                var swap = arr[i];
                arr[i] = arr[largest];
                arr[largest] = swap;
     
                heapify(arr, n, largest);
            }
    }
        
    function selectionsorting(arr){
        n = arr.length
        for(var i = 0 ; i<n; i++){
            let minPos = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minPos]) {
                    minPos = j;
                }
            }
            if(i !==minPos){
                [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
            }
        }
        return arr
    }

    function insertionsorting(arr){
        n = arr.length
        for(var i =0; i<n; i++){
            let key = arr[i];
            let j = i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }
        return arr

    }

    function swap(arr, leftIndex, rightIndex){
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    }

    //-----------------------------------------------------//
    function partition(arr, left, right) {
        var pivot   = arr[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function pivot(arr, start = 0, _end = arr.length - 1) {

        function swap(array, i, j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
    
        let pivot = arr[start]
        let swapidx = start;
    
        for (let i = start + 1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                swapidx++
                swap(arr, swapidx, i)
            }
        }
        swap(arr, start, swapidx)
    
        return swapidx
    }
    
    function quicksorting(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            let pivotIndex = pivot(arr, left, right)//index of 4 ie 3
            //left
            quicksorting(arr, left, pivotIndex - 1)
            //right
            quicksorting(arr, pivotIndex + 1, right)
        }
        return arr
    }



    //Quick sort -median 

    function QuickSortMedian(arr, left = 0, right = arr.length-1){
        var numSwaps = 0;
        var numComps = 0;
    
        var n = arr.length - 1;
        console.log('unsorted array: ',arr);
        
        medianQuickSort(arr, 0, n);
        console.log('sorted array: ',arr);
    
        console.log("\n\tSwaps: " + numSwaps);
        console.log("\tComparisons: " + numComps);
        return arr
    
        function Pivot(arr,low,high) {
    
            var first = arr[low];
            var last = arr[arr.length - 1];
            var mid = (high) / 2;
    
            console.log("\tMiddle of Arr at Index= " + mid + " : " + arr[mid]);
            var sortingArr = [arr[low], arr[mid], arr[high]];
    
            sortingArr.sort();
    
            var middleValue = sortingArr[1];
            console.log("\t"+sortingArr.toString());
    
            let temp = arr[high];
            arr[high] = middleValue;
            if (middleValue == arr[low]) {
                arr[low] = temp;
            } else if (middleValue == arr[mid]) {
                arr[mid] = temp;
            }
    
            console.log(arr);
            return Partition(arr, low, high);
    
        }
    
        function medianQuickSort( arr, low, high) {
            if (low >= high)
                return;
    
            if (low < high) {
    
                var pi = Pivot(arr, low, high);
    
                QuickSort(arr, low, high);
    
            }
        }
    
        function QuickSort(arr, low, high) {
    
            if (low < high) {
                var pi = Partition(arr, low, high);
    
                // Recursively sort elements before
                // partition and after partition
                QuickSort(arr, low, pi - 1);
                QuickSort(arr, pi + 1, high);
            }
        }
    
        function Partition(arr, low, high) {
            var pivot = arr[high];
            var i = (low - 1); 
    
            for (var j = low; j < high; j++) {
                
                if (arr[j] <= pivot) {
                    i++;
    
                    
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    numSwaps++;
                }
                numComps++;
            }
    
            
            var temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            numSwaps++;
            return i + 1;
    
        }
    }