const Router = require('express');
const router = Router();
const contentTypeController = require('../controllers/contentType');
const recordController = require('../controllers/record');
const authMiddleware = require('../utils/middleware/token');
const validator = require('../utils/middleware/validation');

router.route('/content_types')
  .get(authMiddleware.authenticateToken, contentTypeController.getAllContentTypes)
  .post(authMiddleware.authenticateToken, validator.validationMiddleware(validator.contentTypeSchema), contentTypeController.createContentType);

router.route('/content_types/:id/fields')
  .post(authMiddleware.authenticateToken, validator.validationMiddleware(validator.fieldSchema), contentTypeController.addFieldToContentType)
  .put(authMiddleware.authenticateToken, validator.validationMiddleware(validator.fieldSchema), contentTypeController.updateFieldInContentType)
  .patch(authMiddleware.authenticateToken, validator.validationMiddleware(validator.contentTypeSchema), contentTypeController.updateName)
  .delete(authMiddleware.authenticateToken, validator.validationMiddleware(validator.contentTypeSchema), contentTypeController.deleteFieldFromContentType);

router.route('/collections/:id/records')
  .get(authMiddleware.authenticateToken, recordController.getRecordsByCollectionId)
  .post(authMiddleware.authenticateToken, validator.validationMiddleware(validator.recordSchema), recordController.createRecord);

router.route('/collections/:id/records/:recordId')
  .put(authMiddleware.authenticateToken, validator.validationMiddleware(validator.recordSchema), recordController.updateRecordByCollectionId)
  .delete(authMiddleware.authenticateToken, recordController.deleteRecordByCollectionId);

module.exports = { router };