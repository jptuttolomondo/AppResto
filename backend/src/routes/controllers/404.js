module.exports = {
  get(req, res) {
    res.status(404).send("<h1>Ooops, no existe esta pagina!</h1>");
  },
};
