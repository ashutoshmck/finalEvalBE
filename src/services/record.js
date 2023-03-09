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

const updateRecordByCollectionId = async (collectionId, content) => {
  const updatedRecord = await db.records.update({
    content: content
  }, {
    where: {
      collection_id: collectionId
    },
    returning: true,
    plain: true
  });
  return updatedRecord[1].dataValues;
};

const deleteRecordByCollectionId = async (collectionId, recordId) => {
  const deletedRecord = await db.records.destroy({
    where: {
      collection_id: collectionId,
      id: recordId
    }
  });
  return deletedRecord;
};

module.exports = { createRecord, getRecordsByCollectionId, updateRecordByCollectionId, deleteRecordByCollectionId };