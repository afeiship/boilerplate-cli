module.exports = function() {
  var cmd = {};
  cmd.command = "jump";
  cmd.desc = "Prints: jump distance";
  cmd.builder = {
    distance: {
      alias: "d",
      describe: "Start jump!",
      demand: false
    }
  };
  cmd.handler = function(argv) {
    console.log(argv);
    console.log("[jump:]", argv.distance);
  };
  return cmd;
};
