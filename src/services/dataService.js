const catalog = [
    {
        title: "Brave New World",
        price: 12.99,
        category: "book",
        image: "https://m.media-amazon.com/images/I/41-n-3hZMeL._SX325_BO1,204,203,200_.jpg",
    },
    {
        title: "Man and His Symbols",
        price: 8.0,
        category: "book",
        image: "https://img.thriftbooks.com/api/images/m/f3c99bc9e96a34dfc7b0f7e0179a9eef9196dd3f.jpg",
    },
    {
        title: "Animal Farm",
        price: 8.99,
        category: "book",
        image: "https://m.media-amazon.com/images/I/41lnnyUJzuL._SL350_.jpg",
    },
];
class DataService {
    getCatalog() {
        return catalog;
    }
}

export default DataService;
