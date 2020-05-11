import http from "http";
import api from "./api.js";
import settings from "./settings.js";

const server = http.createServer(api)

server.listen(settings.server.port, () => {
    console.log(`[SERVER] :: Listening on port: ${settings.server.port}`);
});
