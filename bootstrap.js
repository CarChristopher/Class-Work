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
				'img-200.jpg', // this is a local image in the same folder as the js script
				'This has a local image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi. '
				),

			new Post(
				'This Post: Crazy Fredrick',
				'https://google.com',
				'Bob Author',
				'https://unsplash.it/200',
				'Crazy Fredrick bought many very exquisite opal jewels.'
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



