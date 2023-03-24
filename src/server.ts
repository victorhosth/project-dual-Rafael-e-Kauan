import Express from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";
import mainRoutes from "./routes";

dotenv.config();

const server = Express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(Express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.listen(process.env.PORT, () => {
    console.log(`server is running in port ${process.env.PORT}`);
});
