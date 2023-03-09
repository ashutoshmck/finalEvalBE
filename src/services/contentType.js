const db = require('../../database/models/index');

const createContentType = async (name) => {
  const contentType = {
    name: name,
    fields: {}
  };
  const newContentType = await db.content_types.create(contentType);
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

const updateName = async (id, name) => {
  const updatedContentType = await db.content_types.update({
    name: name
  }, {
    where: {
      id: id
    },
    returning: true,
    plain: true
  });
  await db.collections.update({
    name: name
  }, {
    where: {
      content_type_id: id
    },
    returning: true,
    plain: true
  });
  return updatedContentType[1].dataValues;
};

const deleteFieldFromContentType = async (id, name) => {
  const contentType = await db.content_types.findOne({
    where: {
      id: id
    }
  });

  const fields = contentType.fields;
  delete fields[name];
  const updatedContentType = await db.content_types.update({
    fields: fields
  }, {
    where: {
      id: id
    },
    returning: true,
    plain: true
  });
  const records = await db.records.findAll({
    where: {
      collection_id: id
    }
  });
  records.forEach(async (record) => {
    const content = record.content;
    delete content[name];
    await db.records.update({
      content: content
    }, {
      where: {
        id: record.id
      },
      returning: true,
      plain: true
    });
  });
  return updatedContentType[1].dataValues;
};

module.exports = { createContentType, getAllContentTypes, addFieldToContentType, updateName, deleteFieldFromContentType };