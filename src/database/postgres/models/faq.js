const { DataTypes, Sequelize, Model } = require("sequelize");
const { sequelize } = require("../index");

class Faqs extends Model {}
Faqs.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    question_hi: {
      type: DataTypes.STRING,
      allowNull:false
    },
    answer_hi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    question_bn: {
      type: DataTypes.STRING,
      allowNull:false
    },
    answer_bn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Faqs",
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Unable to create tables:", err);
  });

module.exports = { Faqs };
