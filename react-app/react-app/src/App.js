import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://bubble-game-yvyo.onrender.com/')  // ← رابط الخادم الجديد
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Bubble Game</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
