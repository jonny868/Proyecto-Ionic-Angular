const ctrl = {};
const User = require("../models/auth.model");

const jwt = require("jsonwebtoken");
const { findById } = require("../models/auth.model");
const SECRET_KEY = "osmosisinversa";

//Routes
ctrl.home = (req, res) => {
  res.send("Hello World!");
};

ctrl.register = async (req, res) => {
  const { email, password } = req.body;
    const newUser = new User({email, password});
    await newUser.save();
		const token = await jwt.sign({_id: newUser._id}, SECRET_KEY);
    res.status(200).json({token});
};

ctrl.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("Email or Password Incorrect");
  if (user.password !== password) return res.status(401).send("Email or Password Incorrect");

  const token = jwt.sign({ _id: user._id }, SECRET_KEY);
  res.status(200).json({token});
};


ctrl.profile = async (req, res) => {
   await findById(id)
}

module.exports = ctrl;

ctrl.verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token ===null) {
        return res.status(401).send('Unauthorized request')
    }

    const payload = jwt.verify(token, SECRET_KEY)
    req.userId = payload.id
    next();
}
