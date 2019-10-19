 
let   sum = prompt(" Сумма депозиту", ''),
      rate = prompt("На скільки місяців", '6 или 12');


      if(rate == 12) {
      	deposit = sum * 0.175;
      } else if(rate == 6) {
 		 deposit =  sum * 0.06;
      }
 

alert(deposit / 365 );

