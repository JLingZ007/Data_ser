function calBMI(w, h, callback) {
    console.log(`เริ่มทำการคำนวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`)
    setTimeout(() => {
        const bmi = w / (h ** 2)

        let msg;
        if (bmi <= 18.5) {
            msg = "You have underweight\n"
        }
        else if (bmi <= 24.9) {
            msg = "You have normal weight\n"
        }
        else if (bmi <= 29.9) {
            msg = "You have overweight\n"
        }
        else {
            msg = "You are obesity\n"
        }

        callback(bmi, msg)
    }, 3000)
}

calBMI(50, 1.56, (result, msg) => {
    console.log(`BMI = ${result} ==> ${msg}`)
    calBMI(45, 2, (result, msg) => {
        console.log(`BMI = ${result} ==> ${msg}`)
        calBMI(80, 1.6, (result, msg) => {
            console.log(`BMI = ${result} ==> ${msg}`)
        })
    })
})