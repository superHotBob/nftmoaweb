const handleDeployWrite = async () => {
  // dependencies
  const fs = require("fs");

  let buildTxt = "#yarn\n";
  buildTxt += "yarn build:prod\n";

  console.log("buildTxt", buildTxt);

  fs.writeFile("./build.prod", buildTxt, err => {
    if (err) return console.error(err);
  });
};

handleDeployWrite();
