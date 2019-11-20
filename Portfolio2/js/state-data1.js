var n = prompt("Enter your name: ", " ");

	  document.getElementById("demo").innerHTML = "Hello " + n + "<br>" + "Welcome to our page!";

var stateData = {
	mdx: {
		name: 'Acura',
		body: 'MDX',
		mpg: '21-23 MPG Combined',
		price: '$44,400 — $60,150',
		year: '2020',
		head: ' Minato, Tokyo, Japan',
		founder: 'Honda Motor Company'
	},
	ac: {
		name: 'Acura',
		body: 'NSX',
		mpg: '21 MPG Combined',
		price: '$157,500',
		year: '2019',
		head: ' Minato, Tokyo, Japan',
		founder: 'Honda Motor Company'
	},
	am: {
		name: 'Aston Martin',
		body: 'DB11',
		mpg: '17-20 MPG Combined',
		price: '$201,495 — $241,000',
		year: '2019',
		head: ' Gaydon, United Kingdom',
		founder: ' Lionel Martin, Robert Bamford'
	},
	au: {
		name: 'Audi',
		body: 'R8',
		mpg: '16 MPG Combined',
		price: '$169,900 — $208,100',
		year: '2020',
		head: ' Ingolstadt, Germany',
		founder: ' Volkswagen Group'
	},
	be: {
		name: 'Bentley',
		body: 'Flying Spur',
		mpg: '14-16 MPG Combined',
		price: '$149,081 — $312,985',
		year: '2018',
		head: ' Cricklewood, London, United Kingdom',
		founder: ' W. O. Bentley, H. M. Bentley'
	},
	bmw: {
		name: 'BMW',
		body: 'Alpina B7',
		mpg: '20 MPG Combined',
		price: '$139,350',
		year: '2019',
		head: ' Munich, Germany',
		founder: ' Karl Rapp, Camillo Castiglioni'
	},
	bu: {
		name: 'Buggati',
		body: 'Veyron',
		mpg: '15 MPG Combined',
		price: '$179,288',
		year: '2012',
		head: ' Molsheim, France',
		founder: ' Ettore Bugatti'
	},
	bk: {
		name: 'Buick',
		body: 'Cascada',
		mpg: '24 MPG Combined',
		price: '$33,070 — $37,070',
		year: '2019',
		head: ' USA',
		founder: '  David Dunbar'
	},
	ca: {
		name: 'Cadillac',
		body: 'Escalade',
		mpg: '17 MPG Combined',
		price: '$75,195 — $95,295',
		year: '2020',
		head: ' Warren, Michigan, United States',
		founder: '  Henry M. Leland, William Murphy'
	},
	ch: {
		name: 'Chevy',
		body: 'Camaro',
		mpg: '16-23 MPG Combined',
		price: '$25,000 — $68,000',
		year: '2019',
		head: ' Detroit, MI',
		founder: ' Louis Chevrolet, William C. Durant'
	},
	chr: {
		name: 'Chrysler',
		body: '300',
		mpg: '19-23 MPG Combined',
		price: '$29,470 — $41,945',
		year: '2019',
		head: ' Auburn Hills, MI',
		founder: ' Walter Chrysler'
	},
	do: {
		name: 'Dodge',
		body: 'Durango',
		mpg: '15-21 MPG Combined',
		price: '$30,495 — $62,995',
		year: '2020',
		head: ' Auburn Hills, MI',
		founder: ' Walter Chrysler'
	},
	fe: {
		name: 'Ferrari',
		body: 'Enzo',
		mpg: '10 MPG Combined',
		price: '$2,978,100 — $3,355,224',
		year: '2003',
		head: ' Maranello, Italy',
		founder: ' Enzo Ferrari'
	},
	fi: {
		name: 'FIAT',
		body: '124 Spider',
		mpg: '30 MPG Combined',
		price: '$25,390 — $29,390',
		year: '2020',
		head: ' Turin, Italy',
		founder: ' Giovanni Agnelli'
	},
	fo: {
		name: 'Ford',
		body: 'Mustang',
		mpg: '18-24 MPG Combined',
		price: '$26,670 — $47,810',
		year: '2020',
		head: ' Dearborn, MI',
		founder: ' Henry Ford'
	},
	ge: {
		name: 'Genesis',
		body: 'G80',
		mpg: '18-21 MPG Combined',
		price: '$42,550 — $60,000',
		year: '2020',
		head: ' Seoul, South Korea',
		founder: ' Hyundai Motor Group'
	},
	gmc: {
		name: 'GMC',
		body: 'Acadia',
		mpg: '21-23 MPG Combined',
		price: '$29,800 — $48,300',
		year: '2020',
		head: ' Detroit, Michigan, United States',
		founder: ' William C. Durant'
	},
	ks: {
		name: 'Kansas',
		abbr: 'KS',
		capitol: 'Topeka',
		pop: '3,090,416',
		statehood: '1861',
		mammal: 'American Buffalo',
		bird: 'Western Meadowlark',
		tree: 'Cottonwood Tree',
		flower: 'Wild Native Sunflower',
		nickname: 'Sunflower State'
	},
	ky: {
		name: 'Kentucky',
		abbr: 'KY',
		capitol: 'Frankfort',
		pop: '4,395,295',
		statehood: '1792',
		mammal: 'Gray Squirrel',
		bird: 'Cardinal',
		tree: 'Tulip Poplar',
		flower: 'Goldenrod',
		nickname: 'Bluegrass State'
	},
	la: {
		name: 'Louisiana',
		abbr: 'LA',
		capitol: 'Baton Rouge',
		pop: '4,625,470',
		statehood: '1812',
		mammal: 'Black Bear',
		bird: 'Brown Pelican',
		tree: 'Bald Cypress',
		flower: 'Magnolia',
		nickname: 'Pelican State'
	},
	me: {
		name: 'Maine',
		abbr: 'ME',
		capitol: 'Augusta',
		pop: '4,625,470',
		statehood: '1820',
		mammal: 'Moose',
		bird: 'Chickadee',
		tree: 'Eastern White Pine',
		flower: 'White Pine Cone and Tassle',
		nickname: 'Pine Tree State'
	},
	md: {
		name: 'Maryland',
		abbr: 'MD',
		capitol: 'Annapolis',
		pop: '4,625,470',
		statehood: '1788',
		mammal: 'Thoroughbred Horse',
		bird: 'Baltimore Oriole',
		tree: 'White Oak',
		flower: 'Black-Eyed Susan',
		nickname: 'Old Line State'
	},
	ma: {
		name: 'Massachusetts',
		abbr: 'MA',
		capitol: 'Boston',
		pop: '6,692,824',
		statehood: '1788',
		mammal: 'Right Whale',
		bird: 'Black-Capped Chickadee',
		tree: 'American Elm',
		flower: 'Mayflower',
		nickname: 'Bay State'
	},
	mi: {
		name: 'Michigan',
		abbr: 'MI',
		capitol: 'Lansing',
		pop: '9,895,622',
		statehood: '1837',
		mammal: 'White-Tailed Deer',
		bird: 'Robin',
		tree: 'White Pine',
		flower: 'Apple Blossom',
		nickname: 'Wolverine State/Great Lake State'
	},
	mn: {
		name: 'Minnesota',
		abbr: 'MN',
		capitol: 'Saint Paul',
		pop: '5,420,380',
		statehood: '1858',
		mammal: 'N/A',
		bird: 'Loon',
		tree: 'Norway Pine',
		flower: 'Lady Slipper',
		nickname: 'North Star State/Land of 10,000 Lakes'
	},
	ms: {
		name: 'Mississippi',
		abbr: 'MS',
		capitol: 'Jackson',
		pop: '2,991,207',
		statehood: '1817',
		mammal: 'Bottlenosed Dolphin',
		bird: 'Mockingbird',
		tree: 'Magnolia',
		flower: 'Magnolia',
		nickname: 'Magnolia State'
	},
	mo: {
		name: 'Missouri',
		abbr: 'MO',
		capitol: 'Jefferson City',
		pop: '6,044,171',
		statehood: '1821',
		mammal: 'Missouri Mule',
		bird: 'Bluebird',
		tree: 'Flowering Dogwood',
		flower: 'White Hawthorn Blossom',
		nickname: 'Show Me State'
	},
	mt: {
		name: 'Montana',
		abbr: 'MT',
		capitol: 'Helena',
		pop: '1,015,165',
		statehood: '1889',
		mammal: 'Grizzly Bear',
		bird: 'Western Meadowlark',
		tree: 'Ponderosa Pine',
		flower: 'Bitterroot',
		nickname: 'Treasure State'
	},
	ne: {
		name: 'Nebraska',
		abbr: 'NE',
		capitol: 'Lincoln',
		pop: '1,868,516',
		statehood: '1867',
		mammal: 'White-Tailed Deer',
		bird: 'Western Meadowlark',
		tree: 'Cottonwood',
		flower: 'Goldenrod',
		nickname: 'Cornhusker State'
	},
	nv: {
		name: 'Nevada',
		abbr: 'NV',
		capitol: 'Carson City',
		pop: '2,790,136',
		statehood: '1864',
		mammal: 'Desert Bighorn Sheep',
		bird: 'Mountain Bluebird',
		tree: 'Single-Leaf Piñon',
		flower: 'Sagebrush',
		nickname: 'The Silver State'
	},
	nh: {
		name: 'New Hampshire',
		abbr: 'NH',
		capitol: 'Concord',
		pop: '1,323,459',
		statehood: '1788',
		mammal: 'White-Tailed Deer',
		bird: 'Purple Finch',
		tree: 'White Birch',
		flower: 'Purple Lilac',
		nickname: 'Granite State'
	},
	nj: {
		name: 'New Jersey',
		abbr: 'NJ',
		capitol: 'Trenton',
		pop: '1,323,459',
		statehood: '1787',
		mammal: 'Horse',
		bird: 'Eastern Goldfinch',
		tree: 'Red Oak',
		flower: 'Common Violet',
		nickname: 'Garden State'
	},
	nm: {
		name: 'New Mexico',
		abbr: 'NM',
		capitol: 'Santa Fe',
		pop: '1,323,459',
		statehood: '1912',
		mammal: 'American Black Bear',
		bird: 'Greater Roadrunner',
		tree: 'Piñon Pine',
		flower: 'Soaptree Yucca',
		nickname: 'Land of Enchantment'
	},
	ny: {
		name: 'New York',
		abbr: 'NY',
		capitol: 'Albany',
		pop: '19,651,127',
		statehood: '1788',
		mammal: 'Beaver',
		bird: 'Bluebird',
		tree: 'Sugar Maple',
		flower: 'Rose',
		nickname: 'Empire State'
	},
	nc: {
		name: 'North Carolina',
		abbr: 'NC',
		capitol: 'Raleigh',
		pop: '9,848,060',
		statehood: '1789',
		mammal: 'Gray Squirrel',
		bird: 'Cardinal',
		tree: 'Pine',
		flower: 'Dogwood',
		nickname: 'Old North State/Tar Heel State'
	},
	nd: {
		name: 'North Dakota',
		abbr: 'ND',
		capitol: 'Bismarck',
		pop: '723,393',
		statehood: '1889',
		mammal: 'Nokota Horse',
		bird: 'Western Meadowlark',
		tree: 'American Elm',
		flower: 'Wild Prairie Rose',
		nickname: 'Peace Garden State/Flickertail State/Roughrider State'
	},
	oh: {
		name: 'Ohio',
		abbr: 'OH',
		capitol: 'Columbus',
		pop: '11,570,808',
		statehood: '1803',
		mammal: 'White-Tailed Deer',
		bird: 'Cardinal',
		tree: 'Ohio Buckeye',
		flower: 'Red Carnation',
		nickname: 'Buckeye State'
	},
	ok: {
		name: 'Oklahoma',
		abbr: 'OK',
		capitol: 'Oklahoma City',
		pop: '3,850,568',
		statehood: '1907',
		mammal: 'Raccoon',
		bird: 'Scissor-Tailed Flycatcher',
		tree: 'Redbud',
		flower: 'Red Carnation',
		nickname: 'Sooner State'
	},
	or: {
		name: 'Oregon',
		abbr: 'OR',
		capitol: 'Salem',
		pop: '3,930,065',
		statehood: '1859',
		mammal: 'American Beaver',
		bird: 'Western Meadowlark',
		tree: 'Douglas-Fir',
		flower: 'Oregon Grape',
		nickname: 'Beaver State'
	},
	pa: {
		name: 'Pennsylvania',
		abbr: 'PA',
		capitol: 'Harrisburg',
		pop: '12,773,801',
		statehood: '1787',
		mammal: 'White-Tailed Deer',
		bird: 'Ruffed Grouse',
		tree: 'Hemlock',
		flower: 'Mountain Laurel',
		nickname: 'Keystone State'
	},
	ri: {
		name: 'Rhode Island',
		abbr: 'RI',
		capitol: 'Providence',
		pop: '1,051,511',
		statehood: '1790',
		mammal: 'N/A',
		bird: 'Rhode Island Hen',
		tree: 'Red Maple',
		flower: 'Violet',
		nickname: 'The Ocean State'
	},
	sc: {
		name: 'South Carolina',
		abbr: 'SC',
		capitol: 'Columbia',
		pop: '4,774,839',
		statehood: '1788',
		mammal: 'White-Tailed Deer',
		bird: 'Carolina Wren',
		tree: 'Sabal Palmetto',
		flower: 'Yellow Jessamine',
		nickname: 'Palmetto State'
	},
	sd: {
		name: 'South Dakota',
		abbr: 'SD',
		capitol: 'Pierre',
		pop: '844,877',
		statehood: '1889',
		mammal: 'Coyote',
		bird: 'Chinese Ring-Necked Pheasant',
		tree: 'Black Hills Spruce',
		flower: 'Pasque',
		nickname: 'Mount Rushmore State'
	},
	tn: {
		name: 'Tennessee',
		abbr: 'TN',
		capitol: 'Nashville',
		pop: '6,495,978',
		statehood: '1796',
		mammal: 'Raccoon',
		bird: 'Mockingbird',
		tree: 'Tulip Poplar',
		flower: 'Iris',
		nickname: 'Volunteer State'
	},
	tx: {
		name: 'Texas',
		abbr: 'TX',
		capitol: 'Austin',
		pop: '26,448,193',
		statehood: '1845',
		mammal: 'Longhorn',
		bird: 'Mockingbird',
		tree: 'Pecan',
		flower: 'Bluebonnet',
		nickname: 'Lone Star State'
	},
	ut: {
		name: 'Utah',
		abbr: 'UT',
		capitol: 'Salt Lake City',
		pop: '2,900,872',
		statehood: '1896',
		mammal: 'Rock-Mountain Elk',
		bird: 'California Gull',
		tree: 'Blue Spruce',
		flower: 'Sego Lily',
		nickname: 'The Beehive State'
	},
	vt: {
		name: 'Vermont',
		abbr: 'VT',
		capitol: 'Montpelier',
		pop: '626,630',
		statehood: '1791',
		mammal: 'Morgan Horse',
		bird: 'Hermit Thrush',
		tree: 'Sugar Maple',
		flower: 'Red Clover',
		nickname: 'Green Mountain State'
	},
	va: {
		name: 'Virginia',
		abbr: 'VA',
		capitol: 'Richmond',
		pop: '8,260,405',
		statehood: '1788',
		mammal: 'Virginia Big-Eared Bat',
		bird: 'Cardinal',
		tree: 'Flowering Dogwood',
		flower: 'Flowering Dogwood',
		nickname: 'Old Dominion State'
	},
	wa: {
		name: 'Washington',
		abbr: 'WA',
		capitol: 'Olympia',
		pop: '6,971,406',
		statehood: '1889',
		mammal: 'Olympic Marmot',
		bird: 'Willow Goldfinch',
		tree: 'Western Hemlock',
		flower: 'Rhododendron',
		nickname: 'The Evergreen State'
	},
	dc: {
		name: 'Washington, District of Columbia',
		abbr: 'DC',
		capitol: 'N/A',
		pop: '658,893',
		statehood: 'N/A',
		mammal: 'N/A',
		bird: 'Wood Thrush',
		tree: 'Scarlet Oak',
		flower: 'American Beauty Rose',
		nickname: 'Federal City'
	},
	wv: {
		name: 'West Virginia',
		abbr: 'WV',
		capitol: 'Charleston',
		pop: '1,854,304',
		statehood: '1863',
		mammal: 'Black Bear',
		bird: 'Cardinal',
		tree: 'Sugar Maple',
		flower: 'Rhododendron',
		nickname: 'Mountain State'
	},
	wi: {
		name: 'Wisconsin',
		abbr: 'WI',
		capitol: 'Madison',
		pop: '5,742,713',
		statehood: '1848',
		mammal: 'Badger',
		bird: 'Robin',
		tree: 'Sugar Maple',
		flower: 'Wood Violet',
		nickname: 'Badger State'
	},
	wy: {
		name: 'Wyoming',
		abbr: 'WY',
		capitol: 'Cheyenne',
		pop: '582,658',
		statehood: '1890',
		mammal: 'American Buffalo',
		bird: 'Western Meadlowlark',
		tree: 'Plains Cottonwood',
		flower: 'Indian Paintbrush',
		nickname: 'Equality State'
	}
};

function validateForm() {
  var fName = document.getElementById("first-name").value;
  if (fName == "") {
    alert("First Name must be filled out");
    return false;
	}

	 var lName = document.getElementById("last-name").value;
	 if (lName == "") {
	   alert("Last Name must be filled out");
	   return false;
  }

	var eMail = document.getElementById("email").value;
	if (eMail == "") {
		alert("Email must be filled out");
		return false;
	}

	var phone = document.getElementById("phone").value;
	if (phone == "") {
		alert("Phone must be filled out");
		return false;
	}

	var pExp = document.getElementById("prev-vol").value;
	if (pExp == "") {
		alert("Specific Car must be filled out");
		return false;
	}
}
