module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users:[]
    }

    find(key){
        return this.#storage[key]
    }


    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBookByName(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book){
        const bookExists = this.findBookByName(book.name)
        if(!bookExists)[
            this.#storage.books.push(book)
        ]
    }
    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    findPosterByName(PosterName){
        return this.#storage.posters.find(p => p.name === PosterName)
    }

    savePoster(Poster){
        const PosterExists = this.findBookByName(Poster.name)
        if(!PosterExists)[
            this.#storage.posters.push(Poster)
        ]
    }
    addPostersToStock(PosterName, quantity){
        const Poster = this.findPosterByName(PosterName)
        Poster?.addToStock(quantity)
    }

    removePostersFromStock(PosterName, quantity){
        const Poster = this.findPosterByName(PosterName)
        Poster?.removeFromStock(quantity)
    }

saveUser(user){
    const userExists = this.#storage.users.find(u=> u.email === user.email)
    if (!userExists){
      this.#storage.users.push(user)  
    }
}

saveOrder(order){
    this.#storage.orders.push(order)
}

showStorage(){
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
}
}