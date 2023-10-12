export function getCurrentDate(separator=''){

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

//CONTAR OS DIAS DO MES
export const getDaysInMonth = function(month: number,year: number) {
   return new Date(year, month, 0).getDate();
  };
  

  console.log(getDaysInMonth(1, 2012));
  console.log(getDaysInMonth(2, 2012));
  console.log(getDaysInMonth(9, 2012));
  console.log(getDaysInMonth(12, 2012));