module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING(40),
        allowNull: true,
        unique: true
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      studentNumber: {
        type: DataTypes.INTEGER(20),
        allowNumber: true
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
