let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    columnDefs: [
        { className: "centered", targets: [0, 1, 2, 3, 4, 5, 6] },
        { orderable: false, targets: [5, 6] },
        { searchable: false, targets: [0, 5, 6] }
    ],
    pageLength: 4,
    destroy: true
};

const initDataTable = async () => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }

    await list();

    dataTable = $("#datatable").DataTable(dataTableOptions);

    dataTableIsInitialized = true;
};

const listProductos = async () => {
    try {
        const response = await fetch("http://127.0.0.1:3000/productos/");
        const data = await response.json();

        let content = ``;
        data.productos.forEach((productos, index) => {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${Productos.nombre}</td>
                    <td>${Productos.precio}</td>
                    <td>${Productos.descripcion}</td>
                    <td>${Productos.stock}</td>
                    </td>
                </tr>`;
        });
        productos.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});