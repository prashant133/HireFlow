const ApiError = require("../../utils/ApiError");
const Job = require("../jobs/job.model");

const createJob = async ({ title, description, location, recruiterId }) => {
  return await Job.create({
    title,
    description,
    location,
    recruiterId,
  });
};

const getAllJob = async () => {
  return await Job.find();
};

const getMyJob = async (recruiterId) => {
  return await Job.find({ recruiterId }).sort({ createdAt: -1 });
};

const updateJob = async ({ jobId, recruiterId, updateData }) => {
  const allowedFileds = ["title", "description", "location"];

  const safeUpdate = {};
  for (const key of allowedFileds) {
    if (updateData[key] !== undefined) safeUpdate[key] = updateData[key];
  }

  return Job.findOneAndUpdate(
    { _id: jobId, recruiterId }, // ownership
    { $set: safeUpdate },
    { new: true, runValidators: true },
  );
};

const deleteJob = async ({ jobId, recruiterId }) => {
  return Job.findOneAndDelete(
    { _id: jobId, recruiterId }, // ownership
  );
};

module.exports = { createJob, getAllJob, getMyJob, updateJob, deleteJob };
