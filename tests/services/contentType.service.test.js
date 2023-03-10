const { content_types, collections } = require('../../database/models/index.js');
const contentTypeService = require('../../src/services/contentType');

describe('contentTypeService', () => {
  describe('createContentType', () => {
    it('should create a content type', async () => {
      jest.spyOn(content_types, 'create').mockResolvedValue({
        id: 1,
        name: 'test',
        fields: {},
        createdAt: '2020-10-10T00:00:00.000Z',
        updatedAt: '2020-10-10T00:00:00.000Z'
      });
      jest.spyOn(collections, 'create').mockResolvedValue({
        id: 1,
        name: 'test',
        content_type_id: 1
      });
      const contentType = await contentTypeService.createContentType('test');
      expect(contentType).toEqual(undefined);
    });
  });
  describe('getAllContentTypes', () => {
    it('should get all content types', async () => {
      jest.spyOn(content_types, 'findAll').mockResolvedValue([{
        id: 1,
        name: 'test',
        fields: {},
        createdAt: '2020-10-10T00:00:00.000Z',
        updatedAt: '2020-10-10T00:00:00.000Z'
      }]);
      const contentTypes = await contentTypeService.getAllContentTypes();
      expect(contentTypes).toEqual([{
        id: 1,
        name: 'test',
        fields: {},
        createdAt: '2020-10-10T00:00:00.000Z',
        updatedAt: '2020-10-10T00:00:00.000Z'
      }]);

    });
  });
  describe('updateName', () => {
    it('should update the name of a content type and return updated content type', async () => {
      jest.spyOn(content_types, 'update').mockResolvedValue([1,
        {
          dataValues: {
            id: 1,
            name: 'test',
            fields: {},
            createdAt: '2020-10-10T00:00:00.000Z',
          }
        }
      ]);
      jest.spyOn(collections, 'update').mockResolvedValue([1, [{
        id: 1,
        name: 'test',
        content_type_id: 1
      }]]);

      const contentType = await contentTypeService.updateName(1, 'test');
      expect(contentType).toEqual({
        id: 1,
        name: 'test',
        fields: {},
        createdAt: '2020-10-10T00:00:00.000Z',
      });
    });
  });

});