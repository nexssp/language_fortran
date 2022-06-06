let languageConfig = Object.assign({}, require("./fortran.win32.nexss.config"));
languageConfig.compilers = {
    gfortran: {
        install: "brew install gcc",
        command: "gfortran",
        args: "<file> -o <file> && <file>",
        help: ``,
    },
};
languageConfig.errors = require("./nexss.fortran.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;