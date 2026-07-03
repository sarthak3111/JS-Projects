const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

//     const height=parseInt(document.querySelector('#height').value)
//     const weight=parseInt(document.querySelector('#weight').value)
//     const results=document.querySelector('#results')

//     if(height<=0 || isNaN(height)){
//         results.innerHTML='Please provide a valid height';
//     }
//     else if(weight<=0 || isNaN(weight)){
//         results.innerHTML='Please provide a valid weight';
//     }
//     else{
//         const bmi=(weight/((height*height)/10000)).toFixed(2)
//         if(bmi<18.5){
//             results.innerHTML=`Your BMI is ${bmi} and you are underweight`;
//         }
//         else if(bmi>18.5&&bmi<24.9){
//             results.innerHTML=`Your BMI is ${bmi} and you are normal weight`;
//         }
//         else{
//             results.innerHTML=`Your BMI is ${bmi} and you are overweight`;
//         }
//     }
// })
//ALTERNATE using getElementById
const height=parseInt(document.getElementById('height').value)
    const weight=parseInt(document.getElementById('weight').value)
    const results=document.getElementById('results')

    if(height<=0 || isNaN(height)){
        results.innerHTML='Please provide a valid height';
    }
    else if(weight<=0 || isNaN(weight)){
        results.innerHTML='Please provide a valid weight';
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.5){
            results.innerHTML=`Your BMI is ${bmi} and you are underweight`;
        }
        else if(bmi>18.5&&bmi<24.9){
            results.innerHTML=`Your BMI is ${bmi} and you are normal weight`;
        }
        else{
            results.innerHTML=`Your BMI is ${bmi} and you are overweight`;
        }
    }
})
