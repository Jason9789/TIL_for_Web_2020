// 경매 모델은 입찰가(bid)와 입찰 시 메시지(msg)로 구성된다.
// 입찰 메시지는 Null 이어도 된다.
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "auction",
    {
      bid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        efaultValue: 0
      },
      msg: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
