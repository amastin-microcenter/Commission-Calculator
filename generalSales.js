let salesData;

function isLastElement(parentElement){
    return (!(parentElement.indexOf(" ") != -1))
}

function lineBuilder(rawSales){
    rawSales = rawSales.split(/\r?\n/);
    let currentLine = rawSales[0];
    let lineItems = [];
    while (!(isLastElement(currentLine))){
        
        // Where the information for the current line is:
        // 45-PO-6934344 Sale 5 480772 CAT 5e Snagless Network Cable 10 ft. - Green 1 $9.99 $9.99
        
        // ==================
        //   TRANSACTION ID
        // ==================       
        let transactionID = currentLine.slice(0, currentLine.indexOf(" ")); // 45-PO-6934344
        currentLine = currentLine.replace(transactionID + " ", ""); // Sale 5 480772 CAT 5e Snagless Network Cable 10 ft. - Green 1 $9.99 $9.99

        // ==================
        //  TRANSACTION TYPE
        // ==================    
        let transactionType = currentLine.slice(0, currentLine.indexOf(" ")); // Sale
        currentLine = currentLine.replace(transactionType + " ", ""); // 5 480772 CAT 5e Snagless Network Cable 10 ft. - Green 1 $9.99 $9.99

        // ==================
        //     LINE NUMBER
        // ==================    
        let lineNumber = currentLine.slice(0, currentLine.indexOf(" ")); // 5
        currentLine = currentLine.replace(lineNumber + " ", ""); // 480772 CAT 5e Snagless Network Cable 10 ft. - Green 1 $9.99 $9.99
        
        // ==================
        //        SKU
        // ==================      
        let SKU = currentLine.slice(0, currentLine.indexOf(" ")); // 480772
        currentLine = currentLine.replace(SKU + " ", ""); // CAT 5e Snagless Network Cable 10 ft. - Green 1 $9.99 $9.99

        // ==================
        //    DESCRIPTION
        // ==================    
        let description = currentLine.slice(0, currentLine.indexOf("$")); // CAT 5e Snagless Network Cable 10 ft. - Green 1 $9.99
        description = description.slice(0, description.lastIndexOf(" ")); // CAT 5e Snagless Network Cable 10 ft. - Green 1
        description = description.slice(0, description.lastIndexOf(" ")); // CAT 5e Snagless Network Cable 10 ft. - Green
        currentLine = currentLine.replace(description + " ", ""); // 1 $9.99 $9.99

        // ==================
        //      QUANTITY
        // ==================    
        let quantity = currentLine.slice(0, currentLine.indexOf(" ")); // 1
        currentLine = currentLine.replace(quantity + " ", ""); // $9.99 $9.99
        
        // ==================
        //        PRICE
        // ==================    
        let price = currentLine.slice(0, currentLine.indexOf(" ")); // $9.99
        price = price.replace(/([()])//g); // ($29.99) ---> 29.99j
        currentLine = currentLine.replace(price + " ", "");
        currentLine = currentLine.replace(price + " ", "");
        
        let line = {
            transactionID: transactionID,
            transactionType: transactionType,
            lineNumber: lineNumber,
            sku: SKU,
            desc: description,
            quantity: quantity,
            price: price
        };
        
        lines.push(line);
     }
    return lines;
}

function calculateCommission(lineItem){
    const COMMISSION_OUT_OF_DEPARTMENT = 0.0075; // 0.75%
    const COMMISSION_UNDER_TEN = 0.06; // 6%
    const COMMISSION_UNDER_HUNDRED = 0.03; // 3%
    const COMMISSION_OVER_HUNDRED = 0.015; // 1.5%
    
    //if (lineItem.price)
}


function printme(){
    salesData = document.getElementsByName("sales")[0].value;
    let lineItems = lineBuilder(salesInfo);
    
}
