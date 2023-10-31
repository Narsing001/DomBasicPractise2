// Write a JavaScript function to get the values of First and Last names of the following form.
// Sample HTML file :

const getFormvalue=()=>{
    
    const x=document.getElementById('form1')
  for(let i=0;i<x.length;i++){
      if(x.elements[i].value!='Submit'){
        console.log(x.elements[i].value)
      }
  }
}