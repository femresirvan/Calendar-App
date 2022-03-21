const User = require('../models/user');

const createEvent = async (req, res, next) => {
  try {
    const query = { _id: req.params.userId };
    const data = {
      $push: {
        events: req.body.events,
      },
    };
    const result = await User.updateOne(query, data);
    if (!result) return next({ msg: 'There is no event with the query.', status: 404 });
    console.log(result);
    if (result.modifiedCount === 0 && result.upsertedCount === 0 && result.matchedCount === 0) {
      return next({
        success: false,
        msg: 'There is no event with the query.',
        status: 404,
      });
    }
    return res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    next({ msg: err });
  }
};

/**
 * TODO
 */
const getEvents = async (req, res, next) => {
  try {
    const filter = { _id: req.params.id };
    const projection = { events: 1 };
    const result = await User.find(filter, projection);
    if (!result) return next({ msg: 'There is no data with the query.', status: 404 });
    return res.status(200).json({
      success: true,
      msg: 'You got whole events successfully.',
      data: result,
    });
  } catch (err) {
    next({ msg: err });
  }
};

const deleteEvent = (req, res, next) => {};

const updateEvent = (req, res, next) => {};

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
