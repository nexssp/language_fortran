let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Fortran";
languageConfig.authors = ["John Backus", "IBM"];
languageConfig.description =
  "Fortran is compiled imperative programming language that is especially suited to numeric computation and scientific computing.";
languageConfig.url = "https://www.fortran.com/";
languageConfig.extensions = [".f90", ".f"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "";
languageConfig.builders = {};
languageConfig.compilers = {
  gfortran: {
    install: "scoop install gcc",
    command: "gfortran",
    args: "<file> -o <fileNoExt> && <fileNoExt>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.fortran.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
