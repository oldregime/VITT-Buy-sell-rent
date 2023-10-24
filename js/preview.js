
// Get the form elements
const productName = document.getElementById("product-name");
const productSpecification = document.getElementById("product-specification");
const productPrice = document.getElementById("product-price");
const sellerName = document.getElementById("seller-name");
const productMobile = document.getElementById("product-mobile");
const productEmail = document.getElementById("product-email");
const productImage = document.getElementById("product-image");

// Get the preview elements
const previewName = document.getElementById("preview-name");
const previewPrice = document.getElementById("preview-price");
const previewMobile = document.getElementById("preview-mobile");
const previewEmail = document.getElementById("preview-email");
const previewImage = document.getElementById("preview-image");

// Add an event listener to the "Preview" button
const previewButton = document.getElementById("preview-button");
previewButton.addEventListener("click", function() {
  // Set the preview elements with the form values
  previewName.textContent = productName.value;
  previewPrice.textContent = productPrice.value;
  previewMobile.textContent = productMobile.value;
  previewEmail.textContent = productEmail.value;
  
  // Display the preview image
  if (productImage.files && productImage.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
    }
    reader.readAsDataURL(productImage.files[0]);
  }
  
  // Get submit button 
const submitBtn = document.querySelector('button[type="submit"]');

// Get popup
const thanksPopup = document.querySelector('#thanksPopup');

// Show popup when submit clicked
submitBtn.addEventListener('click', () => {
  thanksPopup.classList.add('active');
});
const closePopupBtn = document.querySelector('#closePopupBtn');

closePopupBtn.addEventListener('click', () => {
  thanksPopup.classList.remove('active'); 
});
  
});