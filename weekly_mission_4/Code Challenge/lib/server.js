
const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "VisualPartners Api welcome!"});
});

app.get("/students",(request,response) => {
    const Students = StudentController.Students();
    response.json(Students)
});

app.get("/v1/students/certification",(request,response) => {
    const Students = StudentController.haveCertification();
    response.json(Students)
});

app.get("/v1/students/credits",(request,response) => {
    const Students = StudentController.Credits();
    response.json(Students)
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});