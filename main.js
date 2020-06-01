function openInfo(evt, tabName) {

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    var optionArray = restrictListProducts(products, s1.value);

    for (i = 0; i < optionArray.length; i++) {

        var productName = optionArray[i];
		
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        s2.appendChild(label);

        s2.appendChild(document.createElement("br"));
    }
}

function selectedItems() {

    var ele = document.getElementsByName("product");
    var selectedItems = [];

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            selectedItems.push(ele[i].value);
        }
    }

    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(selectedItems)));

}