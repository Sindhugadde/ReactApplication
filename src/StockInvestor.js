import React, { useState } from 'react';
import './App.css';

function StockInvestor() {
    const [stocks, setStocks] = useState([{ name: '', amount: '' }]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleStockChange = (index, event) => {
        const { name, value } = event.target;
        const newStocks = [...stocks];
        newStocks[index][name] = value;

        // Update the stocks
        setStocks(newStocks);

        // Calculate the total amount
        let total = 0;
        newStocks.forEach(stock => {
            total += parseFloat(stock.amount) || 0;
        });

        setTotalAmount(total);
    };

    const addStock = () => {
        setStocks([...stocks, { name: '', amount: '' }]);
    };

    return (
        <div className="App">
            <h1>Stock Investor Page</h1>
            {stocks.map((stock, index) => (
                <div key={index} className="stock-input">
                    <input
                        type="text"
                        name="name"
                        placeholder="Stock Name"
                        value={stock.name}
                        onChange={(event) => handleStockChange(index, event)}
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={stock.amount}
                        onChange={(event) => handleStockChange(index, event)}
                    />
                </div>
            ))}
            <button onClick={addStock}>Add Another Stock</button>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        </div>
    );
}

export default StockInvestor;
