/*const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

app.use(express.json());
app.post('/', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    console.log(response);
    res.json({
        response
    });
})


app.listen(port, () => {
    console.log(`Servier is running on ${port}`);
});
*/ 

const z = require("zod");

function validateInput(obj){
  
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const res = schema.safeParse(obj);
  console.log(res);
};

validateInput({
  email: "Souvikc3030@gmail.com", 
  password: "asdfasdfasdf122",
});
