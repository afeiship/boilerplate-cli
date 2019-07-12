module.exports = function() {
  let cmd = {};
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
