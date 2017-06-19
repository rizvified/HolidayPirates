import axios from 'axios';
import { hotelBox, errorBox, reviewBox } from './templates';

const hotelCache = {};
const reviewCache = {};

// const httpGet = (url, cache) => {
//   console.log("HELLO");
//   if (typeof cache[url] !== 'undefined') {
//     console.log("WORKING");
//     return new Promise((resolve, reject) => {
//       console.log("Rerutn", cache[url]);
//       resolve(cache[url])
//     })
//   } else {
//     return axios.get(url).then(response => {
//       cache[url] = response;
//       return response;
//     });
//   }
// }

// method for fetching hotels
const _getHotels = () => {
  if($('.api_error') !== null) $('.api_error').remove();
  axios.get('http://fake-hotel-api.herokuapp.com/api/hotels?count=5', hotelCache)
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
    $( ".hotel_list" ).html(hotels);
    $(".load_reviews").on('click', e => {

      let id = $(e.target).data().hotelId;
      console.log($('#review_'+id).hasClass('.collapse.in'), $('#review_'+id));
      if ($('#review_'+id).hasClass('in')) {
        $('#review_'+id).collapse('hide');
      } else {
        _getReviews(id);
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
      const reviews = response.data.reduce((list, review) => {
        const {
          name,
          comment,
          positive
        } = review;
        list += reviewBox(name, comment, positive);
        return list;
      }, '')
      $(`#review_${id}`).html(reviews);
      $('#review_'+id).collapse('show');
  })
  .catch(error => error)
};

$('.load_hotels').on('click', e => {
  e.preventDefault();
  _getHotels();
});
