const env = process.env.NODE_ENV || "development"; // Currently only set on heroku

let dbname = "TodoApp";

if (env === "development") {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = `mongodb://localhost:27017/${dbname}`;
} else if (env === "test") {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest";
}