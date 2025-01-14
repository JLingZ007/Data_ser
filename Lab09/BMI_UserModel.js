function calculateBMI(w, h) {
    const bmi = w / (h * h);
    let txt = '';

    if (bmi <= 18.5) {
        txt = `BMI = ${bmi} ==> You have underweight`;
    } else if (bmi <= 24.9) {
        txt = `BMI = ${bmi} ==> You have normal weight`;
    } else if (bmi <= 29.9) {
        txt = `BMI = ${bmi} ==> You have overweight`;
    } else {
        txt = `BMI = ${bmi} ==> You are obesity`;
    }
    result = {bmi,txt}
    return (result);
}
module.exports = { calculateBMI };
