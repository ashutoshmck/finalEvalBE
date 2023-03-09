const Router = require('express');
const router = Router();
const contentTypeController = require('../controllers/contentType');
const recordController = require('../controllers/record');

router.route('/content_types')
  .get(contentTypeController.getAllContentTypes)
  .post(contentTypeController.createContentType);

router.route('/content_types/:id')
  .post(contentTypeController.addFieldToContentType)
  .patch(contentTypeController.updateName)
  .delete(contentTypeController.deleteFieldFromContentType);

router.route('/collections/:id/records')
  .get(recordController.getRecordsByCollectionId)
  .post(recordController.createRecord);

router.route('/collections/:id/records/:recordId')
  .put(recordController.updateRecordByCollectionId)
  .delete(recordController.deleteRecordByCollectionId);

module.exports = { router };