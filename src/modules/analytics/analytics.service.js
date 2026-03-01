const Application = require("../applications/application.model");
const mongoose = require("mongoose");

const getApplicantsPerJob = async (recruiterId) => {
  return Application.aggregate([
    {
      $lookup: {
        from: "jobs",
        localField: "jobId",
        foreignField: "_id",
        as: "job",
      },
    },
    { $unwind: "$job" },

    {
      $match: {
        "job.recruiterId": new mongoose.Types.ObjectId(recruiterId),
      },
    },

    {
      $group: {
        _id: "$job._id",
        title: { $first: "$job.title" },
        totalApplicants: { $sum: 1 },
      },
    },

    {
      $project: {
        _id: 0,
        jobId: "$_id",
        title: 1,
        totalApplicants: 1,
      },
    },

    { $sort: { totalApplicants: -1 } },
  ]);
};

const getStatusBreakdown = async (recruiterId) => {
  return Application.aggregate([
    {
      $lookup: {
        from: "jobs",
        localField: "jobId",
        foreignField: "_id",
        as: "job",
      },
    },
    { $unwind: "$job" },

    {
      $match: {
        "job.recruiterId": new mongoose.Types.ObjectId(recruiterId),
      },
    },

    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },

    {
      $project: {
        _id: 0,
        status: "$_id",
        count: 1,
      },
    },

    { $sort: { count: -1 } },
  ]);
};

module.exports = { getApplicantsPerJob, getStatusBreakdown };
