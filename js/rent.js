function generateRandomIndianName() {
    const indianNames = ["Ravi", "Divyansh", "Amit", "Anjali", "Suresh", "Neha", "Vijay", "Shilpa"];
    return indianNames[Math.floor(Math.random() * indianNames.length)];
}

function generateRandomPhoneNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return "+91" + randomNumber.toString().substring(0, 10);
}

function showPopup(linkId) {
    const email = generateRandomIndianName().toLowerCase() + "@example.com";
    const phone = generateRandomPhoneNumber();
    const popup = '<div class="modal fade" id="popup-modal" tabindex="-1" role="dialog" aria-labelledby="popup-modal-label" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="popup-modal-label">Contact the Seller</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p></p><p>Email: ' + email + '</p><p>Phone: ' + phone + '</p></div></div></div></div>';
    $("body").append(popup);
    $("#popup-modal").modal("show");
}

$(document).ready(function () {
    $("#popup-link1, #popup-link2").click(function () {
        showPopup($(this).attr('id'));
    });

    
});