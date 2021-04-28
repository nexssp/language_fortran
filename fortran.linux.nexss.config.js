let languageConfig = Object.assign({}, require("./fortran.win32.nexss.config"));

const sudo = process.sudo;

const distName = process.distro;

languageConfig.compilers = {
  gfortran: {
    install: `${sudo}apt install -y gfortran`,
    command: "gfortran",
    args: "<file> -o <file>.exe && ./<file>.exe",
    help: ``,
  },
};

switch (distName) {
  // case os.distros.ALPINE:
  //   languageConfig.compilers.gfortran.install = process.replacePMByDistro(
  //     "apk add gfortran"
  //   );
  //   break;
  default:
    languageConfig.compilers.gfortran.install = process.replacePMByDistro(
      languageConfig.compilers.gfortran.install
    );
    break;
}

module.exports = languageConfig;
