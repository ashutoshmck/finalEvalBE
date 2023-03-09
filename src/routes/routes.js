const Router = require('express');
const router = Router();
const contentTypeController = require('../controllers/contentType');
const recordController = require('../controllers/record');

router.route('/content_types')
  .get(contentTypeController.getAllContentTypes)
  .post(contentTypeController.createContentType);

router.route('/content_types/:id')
  .post(contentTypeController.addFieldToContentType);

router.route('/collections/:id/records')
  .get(recordController.getRecordsByCollectionId)
  .post(recordController.createRecord);
module.exports = { router };