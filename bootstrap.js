// Insert clever comment


// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Brownie Recipe', 		// this is the TITLE place in the class
				'http://www.marthastewart.com/1502268/brownie-recipes',	// this is the LINK place in the class
				'Martha Stewart',			// this is the AUTHOR place in the class
				'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/18/1/FNK_Brownie-Guide-Classic-Brownies_s4x3.jpg.rend.hgtvcom.616.462.jpeg',	// this is the IMAGE place in the class
				'Brownies that melt in your mouth.' // this is the BODY place in the class
				),

			new Post(
				'Chocolate Gelato Recipe',
				'http://theitaliandishblog.com/imported-20090913150324/2011/2/8/chocolate-gelato.html',
				'The Italian Dish',
				'http://theheritagecook.com/wp-content/uploads/2012/06/chocolate-sorbet-gelato2.jpg', // this is a local image in the same folder as the js script
				'This is the perfect treat for summer with the combination of cold and rich chocolate'
				),

			new Post(
				'Lemon Meringue pie',
				'https://www.bettycrocker.com/recipes/classic-lemon-meringue-pie/8f991b88-55b0-4740-b12c-251958d663a6',
				'Betty Crocker',
				'http://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps23527_HC1154010B03_08_1bC_RMS.jpg',
				'Lemin Meringe pie as it is known today, is a 19th-century product. The earliest recorded recipe was attributed to Alexander Frehse, a Swiss baker from Romandie.'
				),

			new Post(
				'Another Post: promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'https://unsplash.it/200',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});


