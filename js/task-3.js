function getElementWidth(content, padding, border) {
    const parsedContent = Number.parseFloat(content);
    const parcedPadding = Number.parseFloat(padding) * 2;
    const parcedBorder = Number.parseFloat(border) * 2;
    const totalElementWidth = parsedContent + parcedPadding + parcedBorder;
    
    return totalElementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
