const request = require('supertest');
const { app } = require('../src/server/server'); // Adjust the path as needed

describe('Express Server', () => {
    it('should return 200 for the status endpoint', async () => {
        const response = await request(app).get('/status');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: "online", code: 5555 });
    });

    it('should return a list of destinations', async () => {
        const response = await request(app).get('/destinations');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        // You can add more expectations based on the expected structure of the response
    });

    it('should return 200 and the trip data', async () => {
        const response = await request(app).get('/trips');
        expect(response.status).toBe(200);
        // Add further expectations depending on your tripsData structure
    });

    it('should add a trip and return 201', async () => {
        const tripData = {
            destination: "New York",
            startDate: "2024-01-01",
            endDate: "2024-01-10"
        };

        const response = await request(app)
            .post('/trips')
            .send(tripData);

        expect(response.status).toBe(201);
        expect(response.text).toBe("Successfully stored trip data");
    });

    it('should cancel a trip and return success message', async () => {
        const tripId = "JJ0001"; // Replace with a valid trip ID if necessary
        const response = await request(app)
            .put('/trips')
            .send({ id: tripId });

        expect(response.status).toBe(200);
        expect(response.text).toContain(`Trip ${tripId}`);
    });
});

// Export the app using CommonJS syntax
module.exports = { app };
