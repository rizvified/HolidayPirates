import axios from 'axios';
import { hotelBox, errorBox, reviewBox } from './templates';
import sass from './main.scss'

// method for fetching hotels
const _getHotels = () => {
  if($('.api_error') !== null) $('.api_error').remove();
  axios.get('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
  .then(response => {
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
    $(".hotel_list").html(hotels);
    $(".load_reviews").on('click', e => {
      let id = $(e.target).data().hotelId;
      if ($(`#review_${id}`).hasClass('in')) {
        $(`#review_${id}`).collapse('hide');
        $(`#loader_${id}`).html('Show Reviews')
      } else {
        _getReviews(id);
        $(`#loader_${id}`).html('Hide Reviews')
      }

    });
  })
  .catch(error => {
    console.log(error);
    const alert = errorBox();
    $( ".hotel_list" ).html(alert);
 })
};

// method for fetching reviews
const _getReviews = id => {
  axios.get(`http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`)
  .then(response => {
      const marker = response.data.length-1;
      const reviews = response.data.reduce((list, review, index) => {
        const {
          name,
          comment,
          positive
        } = review;
        const last_review = true ? marker == index : false;
        console.log(last_review, 'getReview');
        list += reviewBox(name, comment, positive, last_review);
        return list;
      }, '')
      $(`#review_${id}`).html(reviews);
      $(`#review_${id}`).collapse('show');
  })
  .catch(error => error)
};

// the start of the awesome
$('.load_hotels').on('click', e => {
  e.preventDefault();
  _getHotels();
});
