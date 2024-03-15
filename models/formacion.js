const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Formacion:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the formacion.
 *         name:
 *           type: string
 *           description: The name of the formacion.
 *         description:
 *           type: string
 *           description: The description of the formacion.
 */
const Formacion = sequelize.define('Formacion', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Formacion;