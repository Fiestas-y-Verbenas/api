// Require the necessary packages
require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const i18n = require("i18n-express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");


// Define the necessary variables
const app = express();
const port = 3010;

// Define the necessary middlewares
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(i18n({
    translationsPath: path.join(__dirname, 'i18n'),
    siteLangs: ["es", "en"],
    textsVarName: 'translation'
}));

// Define body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

// Define the swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fiestas y Verbenas API',
            version: '1.0.0',
        },
    },
    apis: [
        './*/*.js'
    ]
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define your routes here
//require('./routes/v2/apps.routes')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});