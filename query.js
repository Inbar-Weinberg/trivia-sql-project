const {
  sequelize,
  Sequelize,
  Capital,
  ConcatData,
  CountryGeneral,
} = require("./models");

// sequelize
//   .authenticate()
//   .then(() => console.log("Connection has been established successfully."))
//   .catch((error) => console.error("Unable to connect to the database:", error));
//Capital.sync({ alter: true });

// Capital.findAll({
//   where: {
//     country: "Israel",
//   },
// }).then((res) => res.map((x) => console.log(x.toJSON())));
// CountryGeneral.create(
//   { country: "Test1", phonesPer1000: 1000 }, 
//   {fields:["phonesPer1000", 'country']}
// );
// CountryGeneral.findAll({
//   where: {
//     country: "Test1",
//   },
// }).then((res) => res.map((x) => console.log(x.toJSON())));
