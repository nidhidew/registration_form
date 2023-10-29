function fetchData() {
  let data = fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.products);
      tableData(json.products);
    });
  return data;
}

fetchData();

function tableData(products) {
  // var prod = data.products;
  // console.log("data  ",prod);
  const tableBody = document.getElementById("table-body");

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.brand}</td>
          <td>${product.category}</td>
          <td>${product.description}</td>
          <td>${product.discountPercentage}</td>
          <td>${product.price}</td>
          <td>${product.rating}</td>
          <td>${product.stock}</td>
          <td>
          <button class="btn delete-button"><span class="material-symbols-outlined">delete
          </span>
          </button><button class="btn" id="edit-button"><span class="material-symbols-outlined">edit</span></button>
          </td>
        `;

    tableBody.appendChild(row);
    const deleteButton = row.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        deleteRow(row);
    });
    return row;
  });
  
  // Get the modal and buttons
        var modal = document.getElementById("myModal");
        var openModalBtn = document.getElementById("edit-button");
        var closeModalBtn = document.getElementById("closeModalBtn");
    
        // Open the modal when the button is clicked
        openModalBtn.onclick = function() {
            console.log("clicked");
            modal.style.display = "block";
        }
    
        // Close the modal when the close button is clicked
        closeModalBtn.onclick = function() {
            modal.style.display = "none";
        }
    
        // Close the modal when clicking outside the modal content
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

}

function deleteRow(row) {
    const tableBody = document.getElementById("table-body");
    tableBody.removeChild(row);
}

