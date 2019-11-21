const PROXY_CONFIG = [
  {
    context: [
      "/api/**",
    ],
    target: "https://swapi.co",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    bypass: function (req, res, proxyOptions) {
      req.headers["Access-Control-Allow-Origin"] = "*";
      req.headers["X-Forwarded-Host"] = "localhost:8090";
      req.headers["X-Forwarded-For"] = "localhost";
      req.headers["X-Forwarded-Port"] = "8090";
    }
  }
];

module.exports = PROXY_CONFIG;
