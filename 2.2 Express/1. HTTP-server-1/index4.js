// ZOD -> Schema validation, It is a validation library

/*
    ex schema for 
    {
        email
        password: string
        country: IN or US
    }

    const schema = zod.object({
        email: zod.string,
        password: zod.string,
        country: zod.literal("IN").or(zod.literal("US"))
    })
*/

const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());
const PORT = 3000;

const schema = zod.array(zod.number()); // check if input is array of numbers

app.post("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg: "Input is invalid",
    });
  } else {
    res.status(200).send({
      response,
      // OUTPUT when me post nothing -
      // {"response":{"success":false,"error":{"issues":[{"code":"invalid_type","expected":"array","received":"undefined","path":[],"message":"Required"}],"name":"ZodError"}}}

      // OUTPUT when we pass "kidneys": [1, 2]
      // {"response":{"success":true,"data":[1,2]}}
    });
  }
});

app.listen(PORT, () => console.log("Server is up"));
