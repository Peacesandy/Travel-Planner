import {
    getTripDetails,
    checkServerOnline,
    fetchCoordinates,
    fetchWeather,
    fetchImage
} from "../src/client/js/app.js";

describe("Testing Requests Handling", () => {
    it("Checking core functionality. They should all be defined", () => {
        expect(getTripDetails).toBeDefined();
        expect(checkServerOnline).toBeDefined();
        expect(fetchCoordinates).toBeDefined();
        expect(fetchWeather).toBeDefined();
        expect(fetchImage).toBeDefined();
    });
});