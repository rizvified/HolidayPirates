import axios from 'axios';
import { hotelBox, errorBox, reviewBox } from './template';

$('.load_hotels').on('click', e => {
  e.preventDefault();
  _getHotels();
});

const _getHotels = () => {
  if($('.api_error') !== null) $('.api_error').remove();
  axios.get('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
  .then(function (response) {
    const hotels = response.data.reduce((list, hotel) => {
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
      list += hotelBox(id, name, description, date_start, date_end, price, rating, stars, city, country, images);
      return list;
    }, '');
    $( ".hotel_list" ).append(hotels);
    $(".load_reviews").on('click', e => {
      const id = $(e.target).data().hotelId;
      _getReviews(id);
    });
  })
  .catch(function (error) {
    console.log(error);
    const alert = errorBox();
    $( ".hotel_list" ).append(alert);
 })
};

const _getReviews = id => {
  axios.get(`http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`)
  .then(function (response) {
      const reviews = response.data.reduce((list, review) => {
        const {
          name,
          comment,
          positive
        } = review;
        list += reviewBox(name, comment, positive);
        return list;
      }, '')
      $(`#review_${id}`).append(reviews);
  })
  .catch(function (error) {
    console.log(error);
 })
};
