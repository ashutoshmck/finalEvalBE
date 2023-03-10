const recordController = require('../../src/controllers/record');
const recordService = require('../../src/services/record');

describe('RecordController', () => {
  describe('createRecord', () => {
    it('should create a record', async () => {
      const req = {
        params: {
          id: 1
        },
        body: {
          content: {
            test: 'test'
          }
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      recordService.createRecord = jest.fn().mockReturnValue({
        id: 1,
        collection_id: 1,
        content: {
          test: 'test'
        }
      });
      await recordController.createRecord(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        collection_id: 1,
        content: {
          test: 'test'
        }
      });
    });
  });
  describe('getRecordsByCollectionId', () => {
    it('should return status 200 and return the records', async () => {
      const req = {
        params: {
          id: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      recordService.getRecordsByCollectionId = jest.fn().mockReturnValue([
        {
          id: 1,
          collection_id: 1,
          content: {
            test: 'test'
          }
        }
      ]);
      await recordController.getRecordsByCollectionId(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([
        {
          id: 1,
          collection_id: 1,
          content: {
            test: 'test'
          }
        }
      ]);
    });
  });
  describe('updateRecordByCollectionId', () => {
    it('should return status 200 and return the updated record', async () => {
      const req = {
        params: {
          recordId: 1
        },
        body: {
          content: {
            test: 'test'
          }
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      recordService.updateRecordByCollectionId = jest.fn().mockReturnValue({
        id: 1,
        collection_id: 1,
        content: {
          test: 'test'
        }
      });
      await recordController.updateRecordByCollectionId(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        collection_id: 1,
        content: {
          test: 'test'
        }
      });
    });
  });
  describe('deleteRecordByCollectionId', () => {
    it('should return status 200 and return the deleted record', async () => {
      const req = {
        params: {
          id: 1,
          recordId: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      recordService.deleteRecordByCollectionId = jest.fn().mockReturnValue({
        id: 1,
        collection_id: 1,
        content: {
          test: 'test'
        }
      });
      await recordController.deleteRecordByCollectionId(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        collection_id: 1,
        content: {
          test: 'test'
        }
      });
    });
  });
});