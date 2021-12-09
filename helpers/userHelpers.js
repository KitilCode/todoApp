const User = require("../models/user");

const findUser = async (theirPN) => {
  const user = await User.findOne({ phoneNumber: theirPN });
  console.log(user);
  return user;
};

module.exports = {
  findUser,
};
