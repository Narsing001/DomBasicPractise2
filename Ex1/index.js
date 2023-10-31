// write a js peogram to change the tale particular value

const changeContent=()=>{
    const rn=window.prompt("Enter number of row (0,1,2)","0");
    const cn=window.prompt("Enter number of row (0,1)","0");
    const content=prompt(" rplace content");

    let x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;


   
}