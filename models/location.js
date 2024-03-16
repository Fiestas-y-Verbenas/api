const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Location:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the location.
 *         name:
 *           type: string
 *           description: The name of the location.
 *         province:
 *           type: string
 *           description: The province of the location.
 *         lat:
 *           type: integer
 *           description: The latitude of the location.
 *         lng:
 *           type: integer
 *           description: The longitude of the location.
 *         description:
 *           type: string
 *           description: The description of the location.
 *         comision:
 *           type: string
 *           description: The commission of the location.
 */
const Location = sequelize.define('Location', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lng: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    comision: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Location;
