import moment from 'moment-timezone';

const hotelBox = (id, name, description, date_start, date_end, price, rating, stars, city, country, images) => {
  // converting datetime to german format
  const starting_date = moment(date_start).tz('Europe/Berlin').format('DD.MM.YYYY');
  const ending_date = moment(date_end).tz('Europe/Berlin').format('DD.MM.YYYY');
  // creates stars equal to the value of stars' digit
  let ratings = '';
  for (let i = 0; i < stars; i += 1) {
    ratings += '<i class="fa fa-star"></i>';
  }

  return `
    <div class="row">
      <div class="hotel" id="hotel_${id}">
          <div class="col-md-4">
            <span class="hotel_image_container">
              <img src="${images[0]}" class="img-responsive hotel_image" alt="hotel"  />
            </span>
          </div>
          <div1 class="col-md-8 hotel_details">
          <div class="row">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12">
                  <h2>
                    <h2 class="hotel_name pull-left">
                      ${name}
                    </h2>
                  </h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <span class="hotel_location pull-left">
                    ${city} - ${country}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <span class="hotel_rating pull-right">
                ${ratings}
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p class="hotel_description pull-left">
                ${description}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <button type="button" class="btn btn-primary load_reviews" data-toggle="collapse" data-hotel-id="${id}">Load Reviews</button>
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12">
                  <span class="hotel_price pull-right">
                    ${price}&euro;
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <span class="hotel_dates pull-right">
                    ${starting_date} - ${ending_date}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div id="review_${id}" class="reviewBox collapse col-md-12">
          </div>
      </div>
    </div>
    `
};

const reviewBox = (name, comment, positive) => {
  const type = positive ? '<i class="fa fa-plus-circle"></i>' : '<i class="fa fa-minus-circle"></i>'
  return `
      <div class="row">
        <div class="col-md-3">
          <span class="comment_type">
            ${type}
          </span>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-12">
              <span class="commenter">
                ${name}
              </span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p class="comment">
                ${comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    `
};

const errorBox = () => {
  return `
    <div class="alert alert-warning alert-dismissible api_error" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      An error occured
    </div>
    `
}

export {
  hotelBox,
  errorBox,
  reviewBox
}
