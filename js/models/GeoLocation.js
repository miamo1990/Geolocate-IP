const API_URL = 'http://ip-api.com/json';
const API_URL_IPv6 = 'http://ip-api.com/json';
class GeoLocation {
    constructor() {
        this.url = API_URL + '/';
        this.data = {
            browser: {
                userAgent: ''
            },
            geoLocation: {
                ipAddress: '',
                countryCode: '',
                countryName: '',
                city: '',
                state: '',
                stateCode: '',
                continent: '',
                continentCode: '',
                timezone: '',
                latitude: 0,
                longitude: 0
            }
        };
    }

    get(key) {
        return this.data[key];
    }

    fetch(options = {}) {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.data = data;
                if (options.success) options.success();
            })
            .catch(error => {
                if (options.error) options.error();
            });
    }

    toJSON() {
        return JSON.parse(JSON.stringify(this.data));
    }
}

class GeoLocation6 {
    constructor() {
        this.url = API_URL_IPv6 + '/api/ip';
        this.data = {
            browser: {
                userAgent: ''
            },
            geoLocation: {
                ipAddress: '',
                countryCode: '',
                countryName: '',
                city: '',
                state: '',
                stateCode: '',
                continent: '',
                continentCode: '',
                timezone: '',
                latitude: 0,
                longitude: 0
            }
        };
    }

    get(key) {
        return this.data[key];
    }

    fetch(options = {}) {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.data = data;
                if (options.success) options.success();
            })
            .catch(error => {
                if (options.error) options.error();
            });
    }

    toJSON() {
        return JSON.parse(JSON.stringify(this.data));
    }
}
