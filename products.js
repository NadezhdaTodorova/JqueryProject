$(document).ready(function () {
        $.ajax({
            type: "POST",
            url: "AllProducts.json",
            contentType: "application/json; charset=utf-8",
            data: "{products:" + JSON.stringify(name) + "}",
            dataType: "html",
            success: function (data) {
                setFishProductsToScreen(data);
                console.log(data);
            }
        });

    $("#fish").click(function () {

        $.ajax({
            type: "POST",
            url: "fish.json",
            contentType: "application/json; charset=utf-8",
            data: "{products:" + JSON.stringify(name) + "}",
            dataType: "html",
            success: function (data) {
                setFishProductsToScreen(data);
            }
        });
    return false;
});

        $("#accessories").click(function () {

        $.ajax({
            type: "POST",
            url: "accessories.json",
            contentType: "application/json; charset=utf-8",
            data: "{products:" + JSON.stringify(name) + "}",
            dataType: "html",
            success: function (data) {
                setFishProductsToScreen(data);
            }
        });
    return false;
});

        $("#fishProd").click(function () {

        $.ajax({
            type: "POST",
            url: "fishProducts.json",
            contentType: "application/json; charset=utf-8",
            data: "{products:" + JSON.stringify(name) + "}",
            dataType: "html",
            success: function (data) {
                setFishProductsToScreen(data);
            }
        });
    return false;
});
    
    $("#allproducts").click(function () {

        $.ajax({
            type: "POST",
            url: "AllProducts.json",
            contentType: "application/json; charset=utf-8",
            data: "{products:" + JSON.stringify(name) + "}",
            dataType: "html",
            success: function (data) {
                setFishProductsToScreen(data);
            }
        });
    return false;
});


        function setFishProductsToScreen(data) {
            var jsonObj = $.parseJSON(data);
            var html = '<div class="row">';
            $.each(jsonObj, function (key, value) {
                console.log(value);
            html += '<div class="col-sm-6 col-md-3 padding-bottom-2">';
                html += '<img src="' + value.photo_url + '" height="180" width="180" />';
                html += '<div class="product-name">' + value.name + '</div>';
                html += '<div style="color:#EF6C36;">' + value.price + '<span style="color:#EF6C36;"> лв/кг</span>' + '</div>';
                html += '</div>';
            });
            html += '</div>';            
            $("#product1").html(html);

        }

});

function buyProduct(Product_Id, ID, userId) {

    if (userId === "null") {
        
        alert("Моля, влезте в профила си");

    } else {
        $.post('/MyCart/AddToCart',
            { Product_Id: Product_Id, ID: ID }, function (data) {
                alert("Успешно добавихте продукт във вашата количка");
            });
    }
};

