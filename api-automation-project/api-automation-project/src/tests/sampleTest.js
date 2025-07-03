const requestHelper = require('../utils/requestHelper');
const { expect } = require('chai');

describe('Sample API Tests', () => {
    it('should return a 200 status for the GET request', async () => {
        const response = await requestHelper.getRequest('/api/sample-endpoint');
        expect(response.status).to.equal(200);
    });

    it('should create a resource and return a 201 status for the POST request', async () => {
        const data = { name: 'Sample', value: 'Test' };
        const response = await requestHelper.postRequest('/api/sample-endpoint', data);
        expect(response.status).to.equal(201);
        expect(response.data).to.include(data);
    });

    it('should return a 404 status for a non-existent endpoint', async () => {
        const response = await requestHelper.getRequest('/api/non-existent-endpoint');
        expect(response.status).to.equal(404);
    });
});