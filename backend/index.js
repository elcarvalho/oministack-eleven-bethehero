const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.json({
    evento: "Semana OminiStack 11.0",
    aluno: ""
  });
});

app.listen(3333);
