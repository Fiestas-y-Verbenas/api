const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Agency;