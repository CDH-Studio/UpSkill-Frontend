const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("iddddd", req.headers);

    const [updated] = await Profile.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedProfile = await Profile.findOne({
        where: { id: id }
      });
      return res.status(200).json({ profile: updatedProfile });
    }
    throw new Error("Profile not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  updateProfile
};
