const getTripDetails = async () => {
    const dest = document.getElementById("desired-dest");
    const startDate = document.getElementById("desired-startdate");

    // Check if destination input exists and is not empty
    if (!dest || dest.value.trim().length === 0) {
        alert("Please enter a valid city");
        return;
    }

    // Check if startDate input exists and is not empty
    if (!startDate || startDate.value.trim().length === 0) {
        alert("Please enter a valid date for your trip");
        return;
    }

    // Split the destination into city and country safely
    const [city, country] = dest.value.split(",").map(part => part ? part.trim() : '');

    // Validate that both city and country are provided
    if (!city) {
        alert("Please enter a valid city.");
        return;
    }

    if (!country) {
        alert("Please enter a valid country.");
        return;
    }

    let tripStartDate = startDate.value;

    try {
        const weather = await fetchCoordinates(city, country)
            .then((weather) => weather.json())
            .then(async (coordinates) => {
                return await fetchWeather(coordinates.lat, coordinates.lng, tripStartDate);
            });

        const imageData = await fetchImage(city);

        Client.populateTripDetails({ city, country }, weather, imageData);

    } catch (err) {
        console.error(err);
        console.log("Failed to process city information to retrieve weather");
    }
};

const fetchCoordinates = async (city, country) => {
    return await fetch(`http://localhost:8081/geo?city=${city}&country=${country}`)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            console.log(`Unable to retrieve coordinates for a city called ${city}`);
        });
};

const fetchWeather = async (lat, lon, tdate) => {
    return await fetch(`http://localhost:8081/weather?lat=${lat}&lon=${lon}&date=${tdate}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            console.log(`Unable to retrieve the weather for specified location`);
        });
};

const fetchImage = async (name) => {
    return await fetch(`http://localhost:8081/images?q=${name}`)
        .then((response) => response.json())
        .then((data) => {
            return data.webformatURL;
        })
        .catch((err) => {
            console.error(err);
            console.log(`Unable to retrieve an image matching the specified search pattern (${name})`);
        });
};

const checkServerOnline = async (name) => {
    return await fetch(`http://localhost:8081/status`)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            console.log(`Failed to get server response`);
        });
};

export {
    getTripDetails,
    checkServerOnline,
    fetchCoordinates,
    fetchWeather,
    fetchImage
};
