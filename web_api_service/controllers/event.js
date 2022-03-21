/**
 * TODO
 */
const createEvent = (req, res, next) => {};

const temporaryController = (req, res, next) => {
  return res.json(req.user);
};

module.exports = {
  createEvent,
  temporaryController,
};
