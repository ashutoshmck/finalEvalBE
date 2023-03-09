const db = require('../../database/models/index');

const createRecord = async (collectionId, content) => {
  const newRecord = await db.records.create({
    collection_id: collectionId,
    content: content
  });
  return newRecord.dataValues;
};

const getRecordsByCollectionId = async (collectionId) => {
  const records = await db.records.findAll({
    where: {
      collection_id: collectionId
    }
  });
  return records;
};

module.exports = { createRecord, getRecordsByCollectionId };