async function calBMIAsync(w,h,txt){
    console.log(`เริ่มทำการคำนวณ BMI ของคำน้ำหนัก ${w} ส่วนสูง ${h}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            const BMI = w / ( h * h )

            if(BMI <= 18.5){
                txt = "You have underweight"
                // console.log(BMI = ${BMI}  ==> ${txt});
            }else if(BMI <= 24.9){
                txt = "You have normal weight"
                // console.log(BMI = ${BMI}  ==> ${txt});
            }else if(BMI <= 29.9){
                txt = "You have overweight"
                // console.log(BMI = ${BMI}  ==> ${txt});
            }else{
                txt = "You are obesity"
                // console.log(BMI = ${BMI}  ==> ${txt});
            }

            resolve({BMI,txt})
        }, 3000)
    })
}

async function calculateAll(){
    let result = await calBMIAsync(50,1.56)
    console.log(`BMI = ${result.BMI} ==> ${result.txt}`);
    result = await calBMIAsync(45,2.0)
    console.log(`BMI = ${result.BMI} ==> ${result.txt}`);
    result = await calBMIAsync(80,1.6)
    console.log(`BMI = ${result.BMI} ==> ${result.txt}`);
}

calculateAll()