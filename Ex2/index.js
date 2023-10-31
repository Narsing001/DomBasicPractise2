const createTable=()=>{
   
    rn = window.prompt("Input number of rows", 1);
    cn = window.prompt("Input number of columns",1);
      
     for(let c=0;c<parseInt(rn,10);c++){
       let x=document.getElementById('myTable').insertRow(c);
        for(let a=0;a<parseInt(cn,10);a++){
            const y=x.insertCell(a);
            y.innerHTML="Row-"+c+"colum-"+a;
        }
     }

//   for(var r=0;r<parseInt(rn,10);r++)
//    {
//    var x=document.getElementById('myTable').insertRow(r);
//    for(var c=0;c<parseInt(cn,10);c++)  
//   {
//    var y=  x.insertCell(c);
//    y.innerHTML="Row-"+r+" Column-"+c; 
//   }
//  }
}