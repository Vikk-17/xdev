const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

app.use(express.json());
app.post('/', (req, res) => {
    const kidneys = req.body.kidneys;
    const responst = schema.safeParse(kidneys);
    
    res.jsom({
        response
    });
})


app.listen(app, () => {
    console.log(`Servier is running on ${port}`);
});

