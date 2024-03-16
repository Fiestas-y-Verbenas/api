const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Agency:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the agency.
 *         name:
 *           type: string
 *           description: The name of the agency.
 *         province:
 *           type: string
 *           description: The province of the agency.
 *         address:
 *           type: string
 *           description: The address of the agency.
 */
const Agency = sequelize.define('Agency', {
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
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Agency;