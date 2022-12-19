import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (username, email, password) => {
  try {
    let user = await User.findOne({ email });

    if (user) {
      throw {
        status: 400,
        message: "This email is already taken",
      };
    } else {
      const salt = await bcrypt.genSalt(16);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return newUser;
    }
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const loginUser = (username, password) => {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ username });
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "3d",
        }
      );
      const { password, ...others } = user._doc;
      return resolve({ ...others, accessToken });
    } else {
      return reject({
        status: 400,
        message: "Wrong credentials",
      });
    }
  });
};

// const loginUser = async (username, password) => {
//   try {
//     const user = await User.findOne({ username });
//     console.log(user);
//     const accessToken = jwt.sign(
//       {
//         id: user.id,
//         isAdmin: user.isAdmin,
//       },
//       process.env.JWT_KEY,
//       {
//         expiresIn: "3d",
//       }
//     );

//     if (user && (await bcrypt.compare(password, user.password))) {
//       const { password, ...others } = user._doc;
//       return { ...others, accessToken };
//     }
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//     return { status: 400, message: "Wrong credentials" };
//   }
// };

export default { createUser, loginUser };
