let languageConfig = Object.assign({}, require("./fortran.win32.nexss.config"));
languageConfig.compilers = {
  gfortran: {
    install: "apt install gfortran",
    command: "gfortran",
    args: "<file> -o <file>.exe && <file>.exe",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.fortran.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
