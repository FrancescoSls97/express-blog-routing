const express = require("express");
const router = express.Router();
const posts = require("../posts");
//index req
router.get("/", (req, res) => {
  res.send(posts);
});

//show req
router.get("/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;

  res.send(`Hai richiesto il post con id: ${id}`);
});

//store req
router.post("/", function (req, res) {
  res.send(`Stai creando unnuovo post`);
});

//update
router.put("/:id", function (req, res) {
  const id = req.params.id;
  res.send(`Modifica totale al post con id: ${id}`);
});

//modify
router.patch("/:id", function (req, res) {
  const id = req.params.id;
  res.send(`Modifica parziale al post con id: ${id}`);
});

//delete
router.delete("/:id", function (req, res) {
  const id = req.params.id;
  res.send(`Cancella il post con id: ${id}`);
});
