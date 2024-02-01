// Task 1

class Library {
    #books = [];

    get books() {
        return this.#books.join(', ');
    }

    addBook(title) {

        if (this.#books.includes(title)) {
            throw new Error('The book alrady exists in labrary!');
        } else {
            this.#books.push(title);
            return this.#books.join(', ');
        }
    }

    removeBook(title) {
        if (this.#books.includes(title)) {
            const indexOfTitle = this.#books.indexOf(title);
            this.#books.splice(indexOfTitle, 1);
            return this.#books.join(', ');
        } else {
            throw new Error('There is no such book in the labrary!');
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    constructor(arrayOfBooks) {
        if (arrayOfBooks.length == 0 || arrayOfBooks === undefined) {
            throw new Error('Array must not be empty!')
        } else if ((new Set(arrayOfBooks)).size != arrayOfBooks.length) {
            throw new Error('Array must have no duplicates!')
        } else {
            this.#books = arrayOfBooks;
        }
    }
}

const books = new Library(['title1', 'title11']);
console.log(books.books);
console.log(books.addBook('title2'));
console.log(books.removeBook('title2'));
books.hasBook('title1');

// Task 2

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const formEl = document.querySelector('.reviews-box');
const textAreaEl = document.querySelector('.reviews__input');
const reviewsEl = document.querySelector('.reviews_content');
const result = [];

initialData.forEach(element => {
    const prodName = document.createElement('div');
    prodName.textContent = element.product;
    reviewsEl.appendChild(prodName);
    element.reviews.forEach(review => {
        const reviewText = document.createElement('div');
        reviewText.textContent = review.text;
        prodName.appendChild(reviewText);
    })
});

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const reviewEl = formEl.querySelector('.reviews__input');
    if (reviewEl.value.length < 50 || reviewEl.value.length > 500) {
        reviewEl.value = '';
        alert('Длина введенного отзыва должна быть менее 50 или более 500 символов')
    } else {
        const text = reviewEl.value;
        const elToAdd = document.createElement('div');
        reviewsEl.appendChild(elToAdd);
        elToAdd.textContent = `${text}`;
        const data = { reviews: reviewEl.value };
        result.push(data);
        console.log(data);
        console.log(result);
        reviewEl.value = '';
    }
});