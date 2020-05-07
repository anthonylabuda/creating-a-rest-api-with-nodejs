import http from "http";
import api from "../api";

const port = process.env.PORT || 3000;

const server = http.createServer(api)

server.listen(port, () => {
    console.log(`[SERVER] :: Listening on port: ${port}`);
});
