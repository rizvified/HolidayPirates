import moment from 'moment-timezone';

const hotelBox = (id, name, description, date_start, date_end, price, rating, stars, city, country, images) => {
  // converting datetime to german format
  const starting_date = moment(date_start).tz('Europe/Berlin').format('DD.MM.YYYY');
  const ending_date = moment(date_end).tz('Europe/Berlin').format('DD.MM.YYYY');
  // selects a random image from the images array
  const last_index = images.length-1;
  const image = Math.floor(Math.random() * ((last_index-images[0])+1) + images[0]);
  // creates stars equal to the value of stars' digit
  let ratings = '';
  for (let i = 0; i < stars; i += 1) {
    ratings += '<i class="fa fa-star"></i>';
  }

  return `
      <div class="row">
        <div class="hotelBox" id="hotel_${id}">
          <div class="col-md-4 no-pad">
            <div class="hotel_image">
              <img src="${images}" class="img-responsive h_image" alt="hotel"  />
            </div>
          </div>
          <div class="col-md-8 no-pad">
            <div class="hotel_details">
              <div class="row">
                <div class="col-md-9 ">
                  <div class="row">
                    <div class="col-md-12 ">
                      <h3 class="h_name pull-left">
                        ${name}
                      </h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 ">
                      <span class="h_location pull-left">
                        ${city} - ${country}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 ">
                  <span class="h_rating pull-right">
                    ${ratings}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 ">
                  <p class="h_description pull-left">
                    ${description}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5 ">
                  <button type="button" class="btn btn-default load_reviews" data-toggle="collapse" id="loader_${id}" data-hotel-id="${id}">Show Reviews</button>
                </div>
                <div class="col-md-7 ">
                  <div class="row">
                    <div class="col-md-12 ">
                      <h3 class="h_price pull-right">
                        ${price}&nbsp;&euro;
                      </h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 ">
                      <span class="h_dates pull-right">
                        ${starting_date}&nbsp;-&nbsp;${ending_date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="col-md-12 hotel_reviews no-pad">
                <div id="review_${id}" class="reviewBox collapse col-md-12"></div>
              </div>
            </div>
          </div>
  `
};

const reviewBox = (name, comment, positive, last_review) => {
  const type = positive ? '<i class="fa fa-plus-circle positive"></i>' : '<i class="fa fa-minus-circle negative"></i>'
  const separator =  last_review == true ? '' : '<hr>'
  return `
      <div class="row">
        <div class="col-md-1">
          <span class="c_type pull-right">
            ${type}
          </span>
        </div>
        <div class="col-md-11">
          <div class="row">
            <div class="col-md-12">
              <span class="commenter pull-left">
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
      ${separator}
    `
};

const errorBox = () => {
  return `
    <div class="alert alert-warning alert-dismissible errorBox" role="alert">
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
