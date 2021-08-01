import * as React from 'react';

interface ProductData {
    receipt: number,
    name: string,
    type: string,
    isImported: number,
    price: number,
    qty: number,
}

const dataList: ProductData[] = [
    { receipt: 1, name: "book", type: "Books", isImported: 0, price: 124.99, qty: 1 },
    { receipt: 1, name: "music CD", type: "Music", isImported: 0, price: 149.99, qty: 1 },
    { receipt: 1, name: "chocolate bar", type: "Food", isImported: 0, price: 40.85, qty: 1 },
    { receipt: 2, name: "imported box of chocolates", type: "Food", isImported: 1, price: 100.00, qty: 1 },
    { receipt: 2, name: "imported bottle of perfume", type: "", isImported: 1, price: 470.50, qty: 1 },
    { receipt: 3, name: "imported bottle of perfume", type: "", isImported: 1, price: 270.99, qty: 1 },
    { receipt: 3, name: "bottle of perfume", type: "", isImported: 0, price: 180.99, qty: 1 },
    { receipt: 3, name: "packet of headache pills", type: "Medicines", isImported: 0, price: 19.75, qty: 1 },
    { receipt: 3, name: "imported box of chocolates", type: "Food", isImported: 1, price: 210.25, qty: 1 },
]


let price: number;
price = 0;

let Totalprice: number;
Totalprice = 0;

function TaxCalulation(receiptCount: any) {
    return (
        <tbody>
            {dataList.map(dataList =>
                <tr>
                    {dataList.receipt === receiptCount ?
                        dataList.isImported > 0 ?
                            (dataList.type !== 'Books' && dataList.type !== 'Food' && dataList.type !== 'Medicines') ?
                                <td>
                                    <span style={{ display: "none" }}>
                                        {price = price + (dataList.price)}
                                        {Totalprice = Totalprice + (dataList.price + dataList.price * 15 / 100)}
                                    </span>
                                    {dataList.qty + " " + dataList.name + ": " + (dataList.price + dataList.price * 15 / 100).toFixed(2)}
                                </td>
                                :
                                <td>
                                    <span style={{ display: "none" }}>
                                        {price = price + (dataList.price)}
                                        {Totalprice = Totalprice + (dataList.price + dataList.price * 5 / 100)}
                                    </span>
                                    {dataList.qty + " " + dataList.name + ": " + (dataList.price + dataList.price * 5 / 100).toFixed(2)}
                                </td>
                            :
                            (dataList.type !== 'Books' && dataList.type !== 'Food' && dataList.type !== 'Medicines') ?
                                <td>
                                    <span style={{ display: "none" }}>
                                        {price = price + (dataList.price)}
                                        {Totalprice = Totalprice + (dataList.price + dataList.price * 10 / 100)}
                                    </span>
                                    <span style={{ padding: "20px" }}>
                                        {dataList.qty + " " + dataList.name + ": " + (dataList.price + dataList.price * 10 / 100).toFixed(2)}
                                    </span>
                                </td>
                                :
                                <td>
                                    <span style={{ display: "none" }}>
                                        {price = price + (dataList.price)}
                                        {Totalprice = Totalprice + (dataList.price)}
                                    </span>
                                    {dataList.qty + " " + dataList.name + ": " + (dataList.price).toFixed(2)}
                                </td>

                        :
                        null
                    }

                </tr>
            )}

            <tr><td><b>Tax:</b> {(Totalprice - price).toFixed(2)}</td></tr>
            <tr><td><b>Total:</b> {(Totalprice).toFixed(2)}</td></tr>
            <tr style={{ display: "none" }}>{price = 0}</tr>
            <tr style={{ display: "none" }}>{Totalprice = 0}</tr>
        </tbody>
    )
}

class Tax extends React.Component {

    public render() {
        return (
            <p>
                <h1>Tax Calculator</h1>
                <table className="receipt-table">
                    <thead>Receipt 1</thead>
                        {TaxCalulation(1)}
                </table>
                <table className="receipt-table">
                    <thead>Receipt 2</thead>
                        {TaxCalulation(2)}
                </table>
                <table className="receipt-table">
                    <thead>Receipt 3</thead>
                        {TaxCalulation(3)}
                </table>
            </p>
        );
    }
}

export default Tax;