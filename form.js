function form(){
    var title = document.getElementById("title").value;
    var brand = document.getElementById("brand").value;
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    var discount_per = document.getElementById("disper").value;
    var price = document.getElementById("price").value;
    var rating = document.getElementById("rating").value;
    var stock = document.getElementById("stock").value;

    var submit;

    console.log(title," ",brand," ",category," ",description," ",discount_per," ",price," ",rating," ",stock);

    document.getElementById("reg_form").addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get("title");
        const brand = formData.get("brand");
        const category = formData.get("category");
        const description = formData.get("description");
        const discount_per = formData.get("disper");
        const price = formData.get("price");
        const rating = formData.get("rating");
        const stock = formData.get("stock");

        console.log(title," ",brand," ",category," ",description," ",discount_per," ",price," ",rating," ",stock);

        // const fData = {
        //     title: title,
        //     brand: brand,
        //     category: category,
        //     description: description,
        //     discount_per: discount_per,
        //     price: price,
        //     rating: rating,
        //     stock: stock
        // }
        // alert(fData);
        // const jsonData = JSON.stringify(fData);
        // const endpoint = 'products.json';
        // fetch(endpoint, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: jsonData,
        // })
        // .then(response => response.json())
        // .then(responseData => {
        //     console.log("Data sent successfully:", responseData);
        // })
        // .catch(error => {
        //     console.error("Error sending data:", error);
        // });
    })
}
form();