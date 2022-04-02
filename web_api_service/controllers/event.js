/* eslint-disable no-underscore-dangle */
const axios = require('axios');

const createEvent = async (req, res, next) => {
  axios({
    method: 'post',
    headers: { 'content-type': 'application/json' },
    url: `http://calendar_service:3001/api/users/${req.user._id}/events/`,
    data: req.body,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      next({ msg: err });
    });
};

const getEvents = async (req, res, next) => {
  axios({
    method: 'get',
    url: `http://calendar_service:3001/api/users/${req.user._id}/events/`,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      next({ msg: err });
    });
};

const updateEvent = async (req, res, next) => {};

const deleteEvent = async (req, res, next) => {
  axios({
    method: 'delete',
    url: `http://calendar_service:3001/api/users/${req.user._id}/events/${req.params.eventId}`,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      next({ msg: err });
    });
};

const temporaryController = (req, res, next) => res.json(req.user);

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
  temporaryController,
};
