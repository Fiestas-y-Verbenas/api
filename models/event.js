const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the event.
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the event.
 *         time:
 *           type: string
 *           format: time
 *           description: The time of the event.
 *         description:
 *           type: string
 *           description: The description of the event.
 *         observations:
 *           type: string
 *           description: Any additional observations for the event.
 */
const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Event;
