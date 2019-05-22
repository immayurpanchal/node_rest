exports.getProducts = (req, res, next) => {
    res.status(200).json([{title: 'Rich dad Poor dad', price: 20.99, author: 'Robert T. Kiyosaki'}]);
}