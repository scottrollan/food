import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer LYfp3gdDPpBeyAeKFkcOqoVfsVUpurJz9WvYbCDpNqf7fF1DCMwVcAV98oYJCJ2uYMEHIeneNBCSvrIky6lWNxS0ruojpk9OBRp_zNzbtMCBEN-y24KIYRqSWHz8XnYx',
  },
});
