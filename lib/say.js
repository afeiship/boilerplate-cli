module.exports = function () {
  var cmd = {};
  cmd.command = "say <prefix>";
  cmd.desc = "Prints: <prefix> name surname";
  cmd.builder = {
    wow: {
      alias: "w",
      describe: "Say wow!",
      demand: false
    }
  };
  cmd.handler = function (argv) {
    console.log(argv);
    console.log("[say:]", argv.wow);
  };
  return cmd;
};
