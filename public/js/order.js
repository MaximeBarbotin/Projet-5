// Récupération données
const params = new URLSearchParams(document.location.search.substring(1))
const orderId = params.get('orderId')
const firstName = params.get('firstName')
const lastName = params.get('lastName')
const total = params.get('total')

// Message confirmation commande
document.getElementById("order").innerHTML = `<p id="order_numer_message">Merci pour votre confiance ! </br> Votre commande  ${orderId} a bien été validée !</p>`