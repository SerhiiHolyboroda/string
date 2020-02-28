let  checkForSpace = document.querySelector('.CheckForSpace') ;
 
 
let ButtonCheckForSpace = document.querySelector('.ButtonCheckForSpace') ;
ButtonCheckForSpace.addEventListener( 'click' , function(){
    let arr1 =  checkForSpace.value;
    
    alert(arr1.split(' ').length-1)

 
 
 

})


let  checkForEmail = document.querySelector('.CheckForSpace') ;
 
 
let ButtonCheckForEmail = document.querySelector('.ButtonCheckForEmail') ;
ButtonCheckForEmail.addEventListener( 'click' , function(){
    let arr2 =  checkForEmail.value;
    console.log(arr2 )
  console.log(arr2.indexOf('@'))
  console.log(arr2 )
  
 
     
 

})

let  checkForHTML= document.querySelector('.CheckForHTML') ;
let ButtonCheckForHTML = document.querySelector('.ButtonCheckForHTML') ;
ButtonCheckForHTML.addEventListener( 'click' , function(){
    let arr3 =  checkForHTML.value;
    console.log(arr3 )
 
    alert(arr3.split('Html').length-1)
 

})

let  Cutting = document.querySelector('.Cutting') ;
let CuttingOf = document.querySelector('.CuttingOf') ;
CuttingOf.addEventListener( 'click' , function(){
    let str4 =  Cutting.value;
    console.log(str4.split('http: //').length-1  == 1)
    if(str4.split('http: //').length-1 == 1){
    console.log((str4.replace('http: //', '')));
}else{
    console.log((str4.replace('https: //', '')));
}
    // alert(arr4.slice(arr4.split('http: //'))  )
    // alert(arr4.slice(arr4.split('https: //'))  )

})