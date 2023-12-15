// Array para armazenar os itens com quantidades
let items = [];

// Função para criar um novo item
function createItem() {
    const newItemText = document.getElementById("item").value;
    const newQuantity = document.getElementById("quantity").value;
    const newPrice = document.getElementById("price").value;

    if (newItemText && newQuantity && newPrice) {
        const newItem = { item: newItemText, quantity: newQuantity, price: newPrice };
        saveItemToDatabase(newItem); // Salvar no banco de dados
    }
}

// Função para exibir os itens na tabela
function displayItems() {
    const itemTableBody = document.getElementById("itemTableBody");
    itemTableBody.innerHTML = "";

    items.forEach((item, index) => {
        const row = itemTableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = item.item;
        cell2.textContent = item.quantity;
        cell3.textContent = item.price;

        // Botões de edição e exclusão
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.onclick = () => editItem(index);
        editButton.style.backgroundColor = "#FFC436";
        editButton.style.borderWidth = ".5px";
        editButton.style.borderRadius = "15px";
        editButton.style.margin = "5px";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.style.backgroundColor = "#C70039";
        deleteButton.style.borderWidth = ".5px";
        deleteButton.style.borderRadius = "15px";
        deleteButton.style.margin = "5px";

        deleteButton.onclick = () => deleteItem(item.id); // Chama função de exclusão com ID do item

        cell4.appendChild(editButton);
        cell4.appendChild(deleteButton);
    });
}

// Função para editar um item
function editItem(index) {
    const itemToEdit = items[index];
    document.getElementById("item").value = itemToEdit.item;
    document.getElementById("quantity").value = itemToEdit.quantity;
    document.getElementById("price").value = itemToEdit.price;
    items.splice(index, 1);
    displayItems();
}

// Função para excluir um item
function deleteItem(id) {
    // Lógica para excluir item no banco de dados
}

// Função para salvar item no banco de dados
function saveItemToDatabase(item) {
    // Lógica para salvar item no banco de dados
}

// Inicializa a exibição dos itens
displayItems();
