// Import necessary functions from other modules
import { getTripDetails } from './js/handleRequests.js';
import {
    populateTripDetails,
    bookCurrentTrip,
    populateDestinations,
    initializeTravelPlanner,
    cancelTrip
} from './js/updateUI.js';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';

// Define the Client object with the appropriate functions
window.Client = { getTripDetails, populateDestinations };

window.onload = () => {
    Client.populateDestinations();
};


// Export functions for use in other modules
export {
    getTripDetails,
    populateTripDetails,
    bookCurrentTrip,
    populateDestinations,
    initializeTravelPlanner,
    cancelTrip
};
