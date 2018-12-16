//flower data

const data = [
    {
        id: 1,
        flowerName: "Jade Vine",
        scientificName: "Strongylodon macrobotrys", 
        interestingFact: "Pollinated by bats, which are drawn to the glowing luminosity of the flowers at twilight.", 
        lastBloom: "Every two years ",
        location: "Philippine Rainforest",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539893878/R1781-2-large.jpg',
    },
    {
        id: 2,
        flowerName: "Dame's Rocket",
        scientificName: "Hesperis matronalis", 
        interestingFact: "Leaves and seeds are edible and believed to be an aphrodisiac", 
        lastBloom: "Every two years ",
        location: "North America",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539893731/440px-Sweet_Rockets.png',

    },

    {
        id: 3,
        flowerName: "Morning Glory",
        scientificName: "Convolvulaceae", 
        interestingFact: "Used in many ancient cultures for a variety of medicinal purposes Aztec priests were known to use the plant as a hallucinogenic", 
        lastBloom: "Every Spring ",
        location: "Throughout the globe",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539893333/fcbbf6b6863a83b8c924acb98eb192a093121ce8-tc-img-preview.jpg',

    },
    {
        id: 4,
        flowerName: "Chocolate cosmos",
        scientificName: "Cosmos atrosanguineus", 
        interestingFact: "Light chocolate fragrance that becomes most notable at the end of day ", 
        lastBloom: "Every Autumn  ",
        location: "Mexico",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539893472/cosmos_atrosanguineus_n10.jpg',

    },
    {
        id: 5,
        flowerName: "White Lotus",
        scientificName: "Nymphaeaceae", 
        interestingFact: "Also known as  Egyptian white water lily because the blossoms float on water with the support of its lily pads.", 
        lastBloom: "Every Spring",
        location: "Southeast Asia and East Africa",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539702431/White-Lotus-610x400.jpg',

    },
    {
        id: 6,
        flowerName: "Juliet Rose",
        scientificName: "Rosaceae", 
        interestingFact: "Cost $3 Million dollars and 15 years to develope.", 
        lastBloom: "Every spring ",
        location: "North America",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539894243/shutterstock-535807882.jpg',

    },
    {
        id: 7,
        flowerName: "Asian Bleeding Heart",
        scientificName: "Lamprocapnos spectabilis", 
        interestingFact: "Fuschia outter petals and white inner petals resemble a heart.,", 
        lastBloom: "Early spring ",
        location: "Northern China, Korea and Japan",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539893608/pl2000022929.jpg',

    },
    {
        id: 8,
        flowerName: "Shenzhen Orchid",
        scientificName: "Orchidaceae ", 
        interestingFact: "This flower is completely man made. It took the researchers eight years to grow and observe the flower. Has a delicate taste.", 
        lastBloom: "4-5 year cycle ",
        location: "North America",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539702441/Shenzhen-Nongke-Orchid-610x386.jpg',

    },
    {
        id: 9,
        flowerName: "Corpse Lily",
        scientificName: "Rafflesia arnoldii", 
        interestingFact: "largest individual flower on Earth. It has a very strong and unpleasant odour of decaying flesh,", 
        lastBloom: "7 year cycle ",
        location: "Indonesia",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1539702416/Rafflesia-Arnoldii-610x370.jpg',

    },
    {
        id: 10,
        flowerName: "Venus Slipper",
        scientificName: "Paphiopedilum", 
        interestingFact: "There pouch traps insects seeking nectar, and to leave again they have to climb up past the staminode, behind which they collect or deposit pollinia. ,", 
        lastBloom: "Early to mid-spring in cooler tempurature",
        location: "Southeast Asia, the Indian Subcontinent, southern China, New Guinea and the Solomon and Bismarck Islands",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1540667085/Paphiopedilum_henryanum_Orchi_001.jpg',

    },
    {
        id: 11,
        flowerName: "Hooker's Lips",
        scientificName: "Psychotria elata", 
        interestingFact: "The red 'lips' are bracts which are temporary before the mature flower develops. Its unique shape attracts humming birds and butterflies, which are flower's primary pollinators.", 
        lastBloom: "December to March",
        location: "Rain forests in Central and South American",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1544541154/Screen_Shot_2018-12-11_at_10.11.49_AM.png'

    },
    {
        id: 12,
        flowerName: "Hydnora Africana",
        scientificName: "Achlorophyllous Hydnoraceae", 
        interestingFact: "The plant grows underground, except for a fleshy flower that emerges above ground and emits an odor of feces to attract its natural pollinators, dung beetles and carrion beetles ", 
        lastBloom: "Every 2 years",
        location: "Southern Africa",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1544541547/Screen_Shot_2018-12-11_at_10.18.49_AM.png'

    },
    {
        id: 13,
        flowerName: "Holy Ghost Orchid",
        scientificName: "Peristeria elata", 
        interestingFact: "Its perfume is similar to beer ", 
        lastBloom: "July to October",
        location: "Ecuador and Venezuela",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1544541937/Screen_Shot_2018-12-11_at_10.25.10_AM.png'

    },
    {
        id: 14,
        flowerName: "Crane Flower",
        scientificName: "Strelitzia", 
        interestingFact: "Polinated by sunbirds. The weight of the bird when standing on the spathe opens it to release the pollen onto the bird's feet", 
        lastBloom: "July to October",
        location: "South Africa",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1544542192/Screen_Shot_2018-12-11_at_10.29.33_AM.png'

    },
    {
        id: 15,
        flowerName: "Lobster Claws",
        scientificName: "Heliconia", 
        interestingFact: "The leaves in different positions on the plant have a different absorption potential of sunlight for photosynthesis when exposed to different degrees of sunlight", 
        lastBloom: "July to August",
        location: "Islands of the western Pacific and Maluku",
        imgUrl : 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1544542619/Screen_Shot_2018-12-11_at_10.36.37_AM.png'

    }

]

export default data