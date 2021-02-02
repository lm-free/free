const app = new Vue({
	el:'#app',
	data: {
		books:[
			{
				id:1,
				name:'算法导论',
				date:'2001-9',
				price:85.00,
				count:1
			},
			{
				id:2,
				name:'算法导论2',
				date:'2006-9',
				price:85.00,
				count:1
			},
			{
				id:3,
				name:'算法导论3',
				date:'2003-9',
				price:85.00,
				count:1
			},
			{
				id:4,
				name:'算法导论4',
				date:'2004-9',
				price:85.00,
				count:1
			},
			{
				id:5,
				name:'算法导论5',
				date:'2005-9',
				price:85.00,
				count:1
			},
		]
	},
	methods: {
		// getFinalPrice(price) {
		// 	return '$' + price.toFixed(2)
		// }
		decrement (index) {
			this.books[index].count--
		},
		increment (index) {
			this.books[index].count++
		},
		removeHander (index) {
			this.books.splice(index,1)
		}
	},
	computed: {
		//普通for循环 为什么用let 块级作用域 大括号作用域
		totalPrice () {
			// 1.普通for循环
			// let totalPrice = 0
			// for(let i =0; i<this.books.length;i++){
			// 	totalPrice += this.books[i].price*this.books[i].count
			// }
			// return totalPrice

			//2。for
			// let totalPrice = 0
			// for(let i in this.books) {
			// 	const book = this.books[i]
			// 	totalPrice += book.price * book.count
			// }
			// return totalPrice
			//3.let
			let totalPrice = 0
			for(let item of this.books) {
				totalPrice += item.price * item.count
			}
			return totalPrice

			//reduce
		}

	},
	filters: {
		showPrice (price) {
			return '$' + price.toFixed(2)
		}
	}
})

//函数式编程