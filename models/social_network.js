const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


const Social_Network = sequelize.define('Social_Network', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Social_Network;