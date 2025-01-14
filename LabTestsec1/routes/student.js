var express = require("express");
var router = express.Router();
const students = require("../model/student");

port = [{
        name: "Jirawat",
        contact: {
                email: "chirawat.s@kkumail.com",
                linkedin: "https://www.linkedin.com/in/jirawat",
        },
}]



router.get("/", (req, res, next) => {
  students.find()
    .then((data) => {
      res.render("student", { students: data });
    })
    
});


router.get("/portfolio", function (req, res, next) {
  res.render("portfolio");
});




router.get('/insert', (req, res,next) => {
    const student = new students({
      StudentID : '653380123-6',
      Name : 'Jirawat',
      YearofStudy : '3',
      Email : 'chirawat.s@kkumail.com'
    })
    student.save().then((result) => {
    res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })  
})

router.delete('/:id', async (req,res,next) => {
  const id = req.params.id
  await students.findByIdAndDelete(id)
})

router.get('/editForm/:id', async (req, res, next) => {
  const id = req.params.id
  const student = await students.findById(id)
  res.render('editForm', { student })
})

router.post('/update', async (req, res, next) =>{
  const { id, studentid, name, yearofstudy, email } = req.body;
  await students.findByIdAndUpdate(id, {
    StudentID: studentid,
    Name: name,
    YearofStudy: yearofstudy,
    Email: email
  })
  res.redirect('/student')
} )

module.exports = router;
