var addresses;

fetch('addresses.json')
    .then((response) => response.json())
    .then((json) => addresses = json);

function onChange() {
    // console.log(addresses);
    var input = document.getElementById("address").value;
    // console.log(input);
    if (input.length == 55) {
        if (addresses.includes(input.slice(-8))) {
            document.getElementById("eligible").textContent = "Your account is eligible for the airdrop";
        } else {
            document.getElementById("eligible").textContent = "Your account is not eligible for the airdrop";
        } 
    } else {
        document.getElementById("eligible").textContent = "";
    }
}
