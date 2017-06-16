import axios from 'axios';
import { hotelBox } from './template';


$('.load_hotels').on('click', function(e) {
  e.preventDefault();
  getHotels();
});

const getHotels = () => {
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
   console.log(error);
 });
}
