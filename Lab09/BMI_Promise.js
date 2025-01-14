function calBMIPromise(w, h){
    console.log(`เริ่มทำการคำนวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`);
    return new Promise((resolve)=>{
        setTimeout(() =>{
            const BMI = w / (h * h)
            let msg;
            if(BMI <= 18.5){
                msg = "You have underweight"
                //console.log(`BMI = ${BMI}  ==> ${txt}`);
            }else if(BMI <= 24.9){
                msg = "You have normal weight"
                //console.log(`BMI = ${BMI}  ==> ${txt}`);
            }else if(BMI <= 29.9){
                msg = "You have overweight"
                //console.log(`BMI = ${BMI}  ==> ${txt}`);
            }else{
                msg = "You are obesity"
                //console.log(`BMI = ${BMI}  ==> ${txt}`);
            }
            resolve(`BMI = ${BMI} ==> ${msg}`);
        }, 3000);
    });
}


calBMIPromise(50,1.56)
    .then(result => {
        console.log(result);
        return calBMIPromise(45,2);
    }).then(result => {
        console.log(result);
        return calBMIPromise(80,1.6);
    }).then(result => {
        console.log(result);
    })