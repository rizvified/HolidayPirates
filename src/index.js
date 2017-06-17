import axios from 'axios';
import { hotelBox, errorBox } from './template';

$('.load_hotels').on('click', function(e) {
  e.preventDefault();
  _getHotels();
});

const _getHotels = () => {
  if($('.api_error') !== null) $('.api_error').remove();
  axios.get('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
  .then(function (response) {
    const hotels = response.data.map((hotel, index) =>{
      const {
        id,
        name,
        description,
        date_start,
        date_end,
        price,
        rating,
        stars,
        city,
        country,
        images
       } = hotel;
      const parsed = hotelBox(id, name, description, date_start, date_end, price, rating, stars, city, country, images)
      $( ".hotel_list" ).append(parsed);
    });
  })
  .catch(function (error) {
    const alert = errorBox();
    $( ".hotel_list" ).append(alert);
 })
};

const _getReviews = (id) => {
  axios.get(`http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`)
  .then(function (response) {
      console.log(response);
      $(`.${id} .reviews`).append(response);
  })
  .catch(function (error) {
    console.log(error);
 })
};
