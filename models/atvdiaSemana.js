
const db = require("../db");

exports.getAll = () => db.query("SELECT * FROM tasks_week_days");
