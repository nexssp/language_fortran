let languageConfig = Object.assign({}, require("./fortran.win32.nexss.config"));

const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();

const distName = os.name();

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
  //   languageConfig.compilers.gfortran.install = os.replacePMByDistro(
  //     "apk add gfortran"
  //   );
  //   break;
  default:
    languageConfig.compilers.gfortran.install = os.replacePMByDistro(
      languageConfig.compilers.gfortran.install
    );
    break;
}

module.exports = languageConfig;
