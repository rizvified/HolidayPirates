import axios from 'axios';
import { hotelBox, errorBox } from './template';


$('.load_hotels').on('click', function(e) {
  e.preventDefault();
  _getHotels();
});

const _getHotels = () => {
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
    const alert = errorBox(error);
    $( ".hotel_list" ).append(alert);
 });
}
