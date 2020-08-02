import axios from 'axios';

export default axios.create({
 baseURL: 'https://api.yelp.com/v3/businesses',
 headers: {
     Authorization: 
     'Bearer 1Me5_bzINePhUe3kR84PkJIugxramVkwHVbUbsk5edjajRralj26A8oYgk6eeBs2OyvTPdR-maeZ03xubcDi7ZArrvvJVsvq4rnb-6ElHKikJE8NV6II3cyVxZ-ZXnYx'
 }
});
/*import axios from 'axios';

export default axios.create({
 
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 
        'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
    }
});*/