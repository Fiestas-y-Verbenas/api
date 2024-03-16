const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Formation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the formation.
 *           example: 1
 *         name:
 *           type: string
 *           description: The name of the formation.
 *           example: Formation 1
 *         description:
 *           type: string
 *           description: The description of the formation.
 *           example: This is the description of Formation 1.
 *         year_fundation:
 *           type: integer
 *           description: The year of foundation of the formation.
 *           example: 2000
 *         province:
 *           type: string
 *           description: The province of the formation.
 *           example: Province 1
 *         type:
 *           type: string
 *           description: The type of the formation.
 *           example: Type 1
 */
const Formation = sequelize.define('Formation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    year_fundation: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    province: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Formation;