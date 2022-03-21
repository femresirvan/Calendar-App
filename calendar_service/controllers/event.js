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
    if (result.modifiedCount === 0 && result.upsertedCount === 0 && result.matchedCount === 0) {
      return next({
        success: false,
        msg: 'There is no event with the query.',
        status: 404,
      });
    }
    return res.json({
      success: true,
      msg: 'The event has been created successfully',
    });
  } catch (err) {
    next({ msg: err });
  }
};

const getEvents = async (req, res, next) => {
  try {
    const filter = { _id: req.params.userId };
    const projection = { events: 1 };
    const result = await User.findOne(filter, projection);
    if (!result) return next({ msg: 'There is no data with the query.', status: 404 });
    return res.status(200).json({
      success: true,
      msg: 'The event (or events) has been read successfully.',
      data: result.events,
    });
  } catch (err) {
    next({ msg: err });
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const query = { _id: req.params.userId };
    const data = {
      $pull: {
        events: { _id: req.params.eventId },
      },
    };
    const result = await User.updateOne(query, data);
    if (!result) return next({ msg: 'There is no event with the query.', status: 404 });
    if (result.modifiedCount === 0 && result.upsertedCount === 0 && result.matchedCount === 0) {
      return next({
        success: false,
        msg: 'There is no event with the query.',
        status: 404,
      });
    }
    return res.json({
      success: true,
      msg: 'The event has been deleted successfully',
    });
  } catch (err) {
    next({ msg: err });
  }
};

/**
 * TODO
 */

const updateEvent = (req, res, next) => {};

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
