import config from "config";
export default {
  accessTokenKey: config.get<string>("accessTokenKey"),
  refreshTokenKey: config.get<string>("refreshTokenKey"),
};
