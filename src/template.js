const hotelBox = (id, name, description, date_start, date_end, price, rating, stars, city, country, images) => {
  return `
    <div class="row">
      <div class="hotel" id="hotel_${id}">
          <div class="col-md-4 hotel_image">
          <img src="${images[0]}" class="img-responsive" alt="hotel"  />
          </div>
          <div1 class="col-md-8 hotel_details">
          <div class="row">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12 hotel_name">
                  <h2>
                    ${name}
                  </h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 hotel_location">
                  ${city} - ${country}
                </div>
              </div>
            </div>
            <div class="col-md-5 hotel_rating">
              ${stars}
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 hotel_description">
              <p>
                ${description}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <button type="button" class="btn btn-primary load_reviews" data-toggle="collapse" data-hotel-id="${id}" data-target="review_${id}">Load Reviews</button>
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12 hotel_price">
                  ${price}
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 hotel_dates">
                  ${date_start} - ${date_end}
                </div>
              </div>
            </div>
          </div>
          </div>
          <div id="review_${id}" class="col-md-12">
          </div>
      </div>
    </div>
    `
};

const reviewBox = (name, comment, positive) => {
  return `
      <div class="row">
        <div class="col-md-3">
          ${positive}
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-12">
              ${name}
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              ${comment}
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
