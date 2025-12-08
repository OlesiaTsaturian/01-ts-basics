interface Product {
    readonly id: number;
    title:
}

const product = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
