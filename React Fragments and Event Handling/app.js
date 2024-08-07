
const handleClick = () => {
    alert("Hello");
};


const App = () => {
    return (
        <>
            <p>React is a JavaScript library.</p>
            <div className="main" style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                <p>Click the below button to alert 'Hello'.</p>
                <button onClick={handleClick}>Alert Hello</button>
            </div>
        </>
    );
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
