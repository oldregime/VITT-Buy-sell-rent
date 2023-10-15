// dropdown.js

document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        var dropdown = this.closest('.btn-group').querySelector('.dropdown-toggle');
        var selectedValue = this.getAttribute('data-value');
        dropdown.innerHTML = this.innerHTML;
        // You can use the selectedValue to perform actions based on the user's selection
    });
});
