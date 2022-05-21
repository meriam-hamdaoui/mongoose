const errorMsg = (err, msg) => {
  err ? console.log("OUPS =>" + err) : console.log(msg);
};
module.exports = errorMsg;
