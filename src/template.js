const hotelBox = (...details) => {
  return (
    `<div class="row">
      <h2 class="col-md-offset4 col-md-4">
        ${details[0]}
      </h2>
    </div>`
  )
};

const errorBox = (error) => {
  return `
    <div class="alert alert-danger" role="alert">
      ${error}
    </div>
  `
}

export {
  hotelBox,
  errorBox
}
