const Wallet = require("./wallet");
const errorHandler = require("../common/errorHandler");

Wallet.methods(["get", "post", "put", "delete"]);
Wallet.updateOptions({ new: true, runValidators: true });
Wallet.after("post", errorHandler).after("put", errorHandler);

Wallet.route("count", (req, res, next) => {
  Wallet.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

Wallet.route("summary", (req, res, next) => {
  res.send('ok')
  // res.send({ credit: 0, debt: 0 });
  // Wallet.aggregate(
  //   {
  //     $project: {
  //       credit: { $sum: "$credits.value" },
  //       debt: { $sum: "$debts.value" }
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: null,
  //       credit: { $sum: "$credit" },
  //       debt: { $sum: "$debt" }
  //     }
  //   },
  //   {
  //     $project: { _id: 0, credit: 1, debt: 1 }
  //   },
  //   (error, result) => {
  //     if (error) {
  //       res.status(500).json({ errors: [error] });
  //     } else {
  //       res.json(result[0] || { credit: 0, debt: 0 });
  //     }
  //   }
  // );
});

module.exports = Wallet;
