import pinoHttp from "pino-http";
import pino from "pino";
import dayjs from "dayjs";

const transport = {
  target: "pino-pretty",
  options: {
    colorize: true,
    singleLine: true,
    ignore: "pid,hostname",
  },
};

const logger = pino({ transport });

const loggerMiddleware = pinoHttp({
  transport,
  base: { pid: false },
  timestamp: () => `,"time":"${dayjs().format()}"`,
  serializers: {
    req(req) {
      const { method, url, query, params } = req;
      return { request: `${method}:${url}`, query, params };
    },
    res(res) {
      const { statusCode } = res;
      return { statusCode };
    },
  },
});

export { logger, loggerMiddleware };
