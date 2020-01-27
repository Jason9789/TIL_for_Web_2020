module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "post",
    {
      title: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      content: {
        type: DataTypes.STRING(10000),
        allowNull: false
      },
      img: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
