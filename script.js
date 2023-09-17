const form=document.getElementById("form");

// const button=document.getElementById("button");
// const height=document.getElementById("height");
// const weight=document.getElementById("weight");
// const height=parseInt(document.getElementById("height").value)  //page is reloaded so height takes (empty value)
// const weight=parseInt(document.getElementById("weight").value)
form.addEventListener("submit",function(e){
    e.preventDefault()
    const height=parseInt(document.getElementById("height").value)
    const weight=parseInt(document.getElementById("weight").value)
    // const height1=parseInt(height.value)
    // const weight1=parseInt(weight.value)
    const result=document.getElementById("result");

    // const text=document.createTextNode("the kamdar")
    // result.append(text)


    result.innerHTML=(weight/((height*height)/10000)).toFixed(2)
    
    if(height=="" || height==0 || isNaN(height)){
        result.innerHTML=`this is not a number ${height}`;
    }
    else if (weight=="" || weight==0 || isNaN(weight)) {
         result.innerHTML=`this is also not a number${weight}`;
    } else {
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
    }
const div=document.getElementById("weight-guide")
const bmi=(weight/((height*height)/10000)).toFixed(2)
const child=div.children
    if(bmi==18.6){
        child[1].innerHTML=`Its under-weight ${bmi}`

    }
    else if(bmi>18.6 && bmi<24.6){
     child[2].innerHTML=`Its normal-weight ${bmi}`
    }
    else{
        child[3].innerHTML=`Over-Weight ${bmi}`
    }

})