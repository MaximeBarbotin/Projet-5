class Ajax {

    get(url) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject()
                    }
                }
            }

            xhr.open('GET', url)
            xhr.send();
        })
    }

    postOrder(orderTeddies) {
        //TO DO: Validation de la commande
        return new Promise(function (resolve) {
            var XHR = new XMLHttpRequest();
            XHR.onreadystatechange = function () {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                    var response = JSON.parse(this.responseText);
                    resolve(response)
                }
            }
            XHR.open("POST", "https://oc-p5-api.herokuapp.com/api/teddies/order");
            XHR.setRequestHeader('Content-Type', 'application/json');
            XHR.send(JSON.stringify(orderTeddies));

        })
    }


}