const Health = require("../models/Health");

module.exports.createHealthTips = async (req, res) => {
  const { title, description } = req.body;
  if (!(title && description)) {
    return res.status(400).json({
      message: "title && description are required fields",
    });
  }
  const HealthInfo = new Health({
    title: title,
    description: description,
  });
  if (!HealthInfo) {
    return res.status(400).json({
      message: "Health tips not created",
    });
  }
  await HealthInfo.save();

  return res.status(201).json({
    HealthInfo: HealthInfo,
  });
};

module.exports.getHealthTips = async (req, res) => {
  const HealthInfo = await Health.find();
  if (!HealthInfo) {
    return res.status(404).json({
      message: "No Health tips found",
    });
  }
  return res.status(200).json({
    HealthInfo: HealthInfo,
  });
};

module.exports.getHealthTipsById = async (req, res) => {
  const healthTipId = req.params.id;
  const healthTip = await Health.findById(healthTipId);

  if (!healthTip) {
    return res.status(404).json({
      message: "No such health tip found for this particular id.",
    });
  }

  return res.status(200).json({
    healthTip: healthTip,
  });
};

module.exports.updatedHealthTip = async (req, res) => {
  const healthTipId = req.params.id;

  const updatedHealthTip = await Health.findByIdAndUpdate(
    healthTipId,
    req.body,
    { new: true }
  );
  if (!updatedHealthTip) {
    return res.status(404).json({
      message: "No such health tip found for this particular id ",
    });
  }

  return res.status(200).json({
    updatedHealthTip: updatedHealthTip,
  });
};

module.exports.deleteHealthTip = async (req, res) => {
  const deleteHealthTipId = req.params.id;

  const deletedHealthTip = await Health.findByIdAndDelete(deleteHealthTipId);

  if (!deletedHealthTip) {
    return res.status(404).send({
      message: "No such health tip found for this particular id",
    });
  }

  return res.status(200).send({
    deletedHealthTip: deletedHealthTip,
  });
};