let a = prompt("Введите число a", ''),
    b = prompt("Введите число b", '');

  let num;
    

    function outputMore() {
    		 if(a > b) {
    		       num = a;
    		  } 
    		    else if(b > a) {
    		 	 num = b;
    		 }
    		  
             return num;
    }

    alert(outputMore());

      