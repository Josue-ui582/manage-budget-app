document.getElementById('addRowBtn').addEventListener('click', function() {
    
    const tableBody = document.querySelector('#productTable tbody');
    const newRow = document.createElement('tr');

    
    const productNameCell = document.createElement('td');
    const productNameInput = document.createElement('input');
    productNameInput.type = 'text';
    productNameInput.placeholder = 'Type de dépense';
    productNameInput.style.width = "100%";
    productNameInput.style.fontSize = "20px";
    productNameInput.style.padding = "5px";
    productNameInput.style.outline = "none";
    productNameInput.style.border = "none";
    productNameCell.appendChild(productNameInput);

    
    const productPriceCell = document.createElement('td');
    const productPriceInput = document.createElement('input');
    productPriceInput.type = 'number';
    productPriceInput.placeholder = 'Coût de la dépense';
    productPriceInput.style.width = "100%";
    productPriceInput.style.fontSize = "20px";
    productPriceInput.style.padding = "5px";
    productPriceInput.style.outline = "none";
    productPriceInput.style.border = "none";
    productPriceCell.appendChild(productPriceInput);

    
    newRow.appendChild(productNameCell);
    newRow.appendChild(productPriceCell);

    
    tableBody.appendChild(newRow);
});