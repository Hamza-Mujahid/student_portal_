exports.getallbootcamp = async (req, res, next) => {
  try {
    const getdata = await bootcamp.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    res.send(getdata);
    if (getdata) {
      console.log("Access Granted");
    } else {
      console.log("Access Denied");
    }
  } catch (e) {
    console.log(e);
  }
};