const bodyParser = require('body-parser');
const people = require('./peopleRoute');
const levels = require('./levelsRoute');
const teams = require('./teamsRoute');

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    people,
    levels,
    teams,
  );
};
