import "./config/env";
import { serverHttp } from "./http";
import "./websocket";

serverHttp.listen(5555, () => console.log("server running"));
