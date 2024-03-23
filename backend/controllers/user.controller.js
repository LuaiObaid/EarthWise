import User from "../models/user.model.js";
//import Stoires from "../models/stories.model.js";
import { errorHandler } from "../utilis/error.js";
import brcyptjs from "bcryptjs";


export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(
      errorHandler(401, "You can not update the account you are not authorized")
    );
  try {
    if (req.body.password) {
      req.body.password = brcyptjs.hashSync(req.body.password, 10);
    }
    const upadatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...rest } = upadatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "you can only delete your account"));

  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("uset has been deleted!");
  } catch (error) {
    next(error);
  }
};

/*export const getUserStoires = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const userStories = await stories.find({ userRef: req.params.id });
      res.status(200).json(userStories);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};*/
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(errorHandler(404, "User not found"));
    const { password: pass, ...rest } = user_doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
