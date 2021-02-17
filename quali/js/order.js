let table;

$(document).ready(function () {
    table = $('#example').DataTable();

    $('#form').on('submit', function (e) {
        e.preventDefault();
        let product = $("#product").val();
        let quantity = $("#quantity").val();
        let price = $("#price").val();

        addRow(product, quantity, price)

        $("#product").val('')
        $("#quantity").val('')
        $("#price").val('')

        $("#total_ht").text('');
        $("#tva").text('');
        let f = table.rows().data();

        let total_ht = 0;
        for (var i = 0; f.length > i; i++) {
            total_ht += Math.round(f[i][3]*100)/100;
        }
        $("#total_ht").text(new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Math.round(total_ht*100)/100));
        $("#tva").text(new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Math.round(total_ht*1.2*100)/100));
        

    });
});

function addRow(product, quantity, price) {
    table.row.add([product, quantity, price, quantity * price]).draw(true);
}
