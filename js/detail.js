const input = document.querySelector('#product-image');
const preview = document.querySelector('#image-preview');

input.addEventListener('change', () => {
  preview.innerHTML = '';
  const files = input.files;
  if (files) {
    for (let i = 0; i < files.length && i < 5; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const image = new Image();
        image.src = reader.result;
        image.classList.add('preview-image');
        preview.appendChild(image);
      });
      reader.readAsDataURL(file);
    }
  }
});