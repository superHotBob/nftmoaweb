const handleCnameWrite = async () => {
  // dependencies
  const fs = require("fs");

  const cname = "";

  console.log("cname", cname);

  fs.writeFile("./build/CNAME", cname, err => {
    if (err) return console.error(err);
  });
};

handleCnameWrite();
