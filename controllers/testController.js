const testController = (req, res) => {
  res.status(200).send({
    message: "Welcome to users",
    success: true,
  });
};

module.exports = { testController };
