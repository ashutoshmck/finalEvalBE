const db = require('../../database/models/index');

const createContentType = async (name) => {
  const contentType = {
    name: name,
    fields: {}
  };
  const newContentType = await db.content_types.create(contentType);
  console.log(newContentType.id);
  const collection = {
    name: name,
    content_type_id: newContentType.id
  };
  await db.collections.create(collection);
  return newContentType.dataValues;
};

const getAllContentTypes = async () => {
  const contentTypes = await db.content_types.findAll();
  return contentTypes;
};

const addFieldToContentType = async (id, name, type) => {
  const contentType = await db.content_types.findOne({
    where: {
      id: id
    }
  });
  const fields = contentType.fields;
  fields[name] = type;
  const updatedContentType = await db.content_types.update({
    fields: fields
  }, {
    where: {
      id: id
    },
    returning: true,
    plain: true
  });
  return updatedContentType[1].dataValues;
};

module.exports = { createContentType, getAllContentTypes, addFieldToContentType };