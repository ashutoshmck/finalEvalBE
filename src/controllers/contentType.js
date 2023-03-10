const contentTypeService = require('../services/contentType');
const HTTPError = require('../utils/errors/http_errors');

const getAllContentTypes = async (req, res) => {
  try {
    const contentTypes = await contentTypeService.getAllContentTypes();
    res.status(200).json(contentTypes);
  } catch (error) {
    if (error instanceof HTTPError)
      res.status(error.code).json(error.message);
    res.status(500).json(error.message);
  }
};

const createContentType = async (req, res) => {
  try {
    const { name } = req.body;
    const newContentType = await contentTypeService.createContentType(name);
    res.status(201).json(newContentType);
  } catch (error) {
    if (error instanceof HTTPError)
      res.status(error.code).json(error.message);
    res.status(500).json(error.message);
  }
};

const updateName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedContentType = await contentTypeService.updateName(id, name);
    res.status(200).json(updatedContentType);
  } catch (error) {
    if (error instanceof HTTPError)
      res.status(error.code).json(error.message);
    res.status(500).json(error.message);
  }
};


const addFieldToContentType = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, type } = req.body;
    const updatedContentType = await contentTypeService.addFieldToContentType(id, name, type);
    res.status(200).json(updatedContentType);
  } catch (error) {
    if (error instanceof HTTPError)
      res.status(error.code).json(error.message);
    res.status(500).json(error.message);
  }
};

const updateFieldInContentType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;
    const updatedContentType = await contentTypeService.updateFieldInContentType(id, name, type);
    res.status(200).json(updatedContentType);
  } catch (error) {
    if (error instanceof HTTPError)
      res.status(error.code).json(error.message);
    res.status(500).json(error.message);
  }
};

const deleteFieldFromContentType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedContentType = await contentTypeService.deleteFieldFromContentType(id, name);
    res.status(200).json(updatedContentType);
  } catch (error) {
    if (error instanceof HTTPError)
      res.status(error.code).json(error.message);
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllContentTypes,
  createContentType,
  addFieldToContentType,
  updateName,
  deleteFieldFromContentType,
  updateFieldInContentType
};