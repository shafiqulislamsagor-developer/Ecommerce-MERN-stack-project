const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "user is logged in",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };
