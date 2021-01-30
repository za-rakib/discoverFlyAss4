//ticket number function
function handleTicketNumber(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-class-ticket-count');

    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = 0;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    calculateTotal();
}

// price calculate function
function calculateTotal() {
    //subtotal 
    const firstTicketNumber = getTicketInput('first');
    const economyTicketNumber = getTicketInput('economy');
    const subtotalPrice = firstTicketNumber * 150 + economyTicketNumber * 100;
    document.getElementById('subtotal-price').innerText = '$' + subtotalPrice;
    //tax
    const taxAmount = subtotalPrice * .1;
    document.getElementById('tax-amount').innerText = '$' + taxAmount;
    //total
    const totalPrice = subtotalPrice + taxAmount;
    document.getElementById('total-price').innerText = '$' + totalPrice;

}
function getTicketInput(ticket) {
    const ticketInput = document.getElementById(ticket + '-class-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
//booking 

document.getElementById('booking-button').addEventListener('click', function () {

    //calculateTotal();
    alert(
        "You have conformed " + document.getElementById("first-class-ticket-count").value + " first class ticket , " + document.getElementById("economy-class-ticket-count").value + " economy class ticket." + " Your total cost is: " + document.getElementById(
            "total-price").innerText +
        " only." + "\r\n" + "Thank you for staying with us! Have a safe journey sir.")

})

