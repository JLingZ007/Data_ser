function calBMI(w,h, callback) {
    console.log(`เริ่มทำการคำนวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`)
    setTimeout(() => {
        const bmi = w / (h * h)
        callback(bmi)
    }, 3000)
}

function result(bmi) {
    if (bmi <= 18.5) {
        console.log(`BMI = ${bmi} ==> You have underweight`);
    } else if (bmi <= 24.9) {
        console.log(`BMI = ${bmi} ==> You have normal weight`);
    } else if (bmi <= 29.9) {
        console.log(`BMI = ${bmi} ==> You have overweight`);
    } else {
        console.log(`BMI = ${bmi} ==> You are obesity`);
    }
}
calBMI(50,1.56,(result) => {
    console.log(`BMI = ${result}`)
    calBMI(45,2,(result) =>{
        console.log(`BMI = ${result}`)
        calBMI(80,1.6,(result) => {
            console.log(`BMI = ${result}`)
        })
    })
});

