const contentTypeService = require('../../src/services/contentType');
const contentTypeController = require('../../src/controllers/contentType');
describe('Content Type Controller', () => {
  describe('getAllContentTypes', () => {
    it('should return status 200 and return all content types', async () => {
      const req = {
        params: {
          id: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      contentTypeService.getAllContentTypes = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'test',
          fields: [
            {
              name: 'test',
              type: 'text'
            }

          ]
        },
        {
          id: 2,
          name: 'test2',
          fields: [
            {
              name: 'test2',
              type: 'text'
            }
          ]
        }
      ]);

      await contentTypeController.getAllContentTypes(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([
        {
          id: 1,
          name: 'test',
          fields: [
            {
              name: 'test',
              type: 'text'
            }
          ]
        },
        {
          id: 2,
          name: 'test2',
          fields: [
            {

              name: 'test2',
              type: 'text'
            }
          ]
        }
      ]);
    });
  });
  describe('createContentType', () => {
    it('should return status 201 and return the new content type', async () => {
      const req = {
        body: {
          name: 'test'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      contentTypeService.createContentType = jest.fn().mockReturnValue({
        id: 1,
        name: 'test',
        fields: []
      });

      await contentTypeController.createContentType(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        name: 'test',
        fields: []
      });
    });
  });
  describe('updateName', () => {
    it('should return status 200 and return the updated content type', async () => {
      const req = {
        params: {
          id: 1
        },
        body: {
          name: 'test'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      contentTypeService.updateName = jest.fn().mockReturnValue({
        id: 1,
        name: 'test',
        fields: []
      });

      await contentTypeController.updateName(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        name: 'test',
        fields: []
      });
    });
  });
  describe('addFieldToContentType', () => {
    it('should return status 200 and return the updated content type', async () => {
      const req = {
        params: {
          id: 1
        },
        body: {
          name: 'test',
          type: 'text'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      contentTypeService.addFieldToContentType = jest.fn().mockReturnValue({
        id: 1,
        name: 'test',
        fields: [
          {
            name: 'test',
            type: 'text'
          }
        ]
      });

      await contentTypeController.addFieldToContentType(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        name: 'test',
        fields: [
          {
            name: 'test',
            type: 'text'
          }
        ]
      });
    });
  });
  describe('updateFieldInContentType', () => {
    it('should return status 200 and return the updated content type', async () => {
      const req = {
        params: {
          id: 1,
          fieldId: 1
        },
        body: {
          name: 'test',
          type: 'text'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      contentTypeService.updateFieldInContentType = jest.fn().mockReturnValue({
        id: 1,
        name: 'test',
        fields: [
          {
            name: 'test',
            type: 'text'
          }
        ]
      });

      await contentTypeController.updateFieldInContentType(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        name: 'test',
        fields: [
          {
            name: 'test',
            type: 'text'
          }
        ]
      });
    });
  });
  describe('deleteFieldFromContentType', () => {
    it('should return status 200 and return the updated content type', async () => {
      const req = {
        params: {
          id: 1
        },
        body: {
          name: 'test',
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      contentTypeService.deleteFieldFromContentType = jest.fn().mockReturnValue({
        id: 1,
        name: 'test',
        fields: [],
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
      });

      await contentTypeController.deleteFieldFromContentType(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        name: 'test',
        fields: [],
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
      });
    });
  }
  );
});
