import "./home.css";

function Home() {
    return (
        <div className="home">
            <img
                src="https://static6.depositphotos.com/1001911/621/v/600/depositphotos_6218229-stock-illustration-book-worm.jpg"
                alt="bookworm"
            />
            <h1>Welcome to Bookworms!</h1>
            <h3>
                <a href="/catalog">Click here to browse our catalog</a>
            </h3>
        </div>
    );
}

export default Home;
