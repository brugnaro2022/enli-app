const express = require("express");
const auth = require("./auth");

module.exports = function(server) {
  /*
   * Protected routes for JWT Token
   */
  const protectedApi = express.Router();
  server.use("/api", protectedApi);

  protectedApi.use(auth);

  const Wallet = require("../api/wallet/walletService");
  Wallet.register(protectedApi, "/wallets");

  /*
   * Open routes
   */
  const openApi = express.Router();
  server.use("/oapi", openApi);

  const AuthService = require("../api/user/authService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);
};
