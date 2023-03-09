const recordService = require('../services/record');

const createRecord = async (req, res) => {
  try {
    const collectionId = req.params.id;
    const { content } = req.body;
    const newRecord = await recordService.createRecord(collectionId, content);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getRecordsByCollectionId = async (req, res) => {
  try {
    const collectionId = req.params.id;
    const records = await recordService.getRecordsByCollectionId(collectionId);
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createRecord, getRecordsByCollectionId };