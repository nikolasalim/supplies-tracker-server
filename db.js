const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(
  databaseURL /* , {
  dialect: "postgres",
  dialectOptions: {
    useUTC: false,
    timezone: "+02:00"
  }
} */
);

db.sync({ force: false })
  .then(console.log("Database connected!"))
  .catch(console.error);

module.exports = db;
