class ProductsControllers {
    constructor() {
        this.productCounter = 0;
        this.products = []
    }

    getProducts(req, res) {
        return res.json(this.products)
    }

    addProduct(req, res) {
        const { name, price, category, discount } = req.body

        if (name && price && category && discount) {
            this.productCounter++
            this.products.push({
                id: this.productCounter,
                name,
                price,
                category,
                discount
            })
            return res.sendStatus(200)
        }
        return res.sendStatus(404)
    }

    findProductByCategory(req, res) {
        const category = req.params.category

        let productFound = []
        for (let i = 0; i < this.products.length; i++) {
            if (category === this.products[i].category) {
                productFound.push(this.products[i])
            }
        }

        if (productFound.length) {
            return res.json(productFound)
        }

        return res.sendStatus(404)
    }

    findProductById(req, res) {
        let id = req.params.id
        this.products.map((elem, index) => {
            if (elem.id == id) {
                return res.json(elem)
            }
        })
        return res.sendStatus(404)

    }

    findProductByRank(req, res) {
        const ranks = req.params.price.split("-");
        if (ranks.length != 2) {
            return res.sendStatus(404)
        }

        let productFound = []
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].price >= ranks[0] &&
                this.products[i].price <= ranks[1]) {
                productFound.push(this.products[i])
            }
        }
        if (productFound.length) {
            return res.json(productFound)
        }

        return res.sendStatus(404)
    }

}
module.exports = ProductsControllers
