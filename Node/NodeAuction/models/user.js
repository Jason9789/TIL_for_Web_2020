// 사용자 모델은 이메일, 닉네임, 비밀번호, 보유 자금으로 구성된다.
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true
      },
      nick: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      money: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
