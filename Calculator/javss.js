const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height == ' '|| height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height $(height)`;
    }else if(weight == ' ' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `please give a valid weight $(weight)`;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        
        if (bmi < 18.6 ) {
            results.innerHTML=`<span> the under Weight ${bmi}</span>`
        } else if(bmi > 18.6 || bmi < 26.9 )
        {
            results.innerHTML=`<span> Normal weight ${bmi}</span>`
        }
        else 
        {
            results.innerHTML=`<span> over weighted ${bmi}</span>`
        }
    }

})