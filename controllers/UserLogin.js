const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "missing data" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "your accont not found" });

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword)
      return res.status(400).json({ msg: "invalid password" });

    res.status(200).json({
      msg: "Success Login",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { UserLogin };
