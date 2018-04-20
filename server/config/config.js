const env = process.env.NODE_ENV || "development"; // Currently only set on heroku

let dbname = "TodoApp";

if (env === "development" || env === "test") {
    const config = require('./config.json');
    let envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
};