// Studio LHB Design Data
// To edit: find the design by name, update its cats array, save and commit.
// Categories: abstract, animal, blender, botanical, coastal, fall, food-kitchen, geometric, holiday, night-sky, origami, rainbow, recreation, spring, summer, vintage-retro, winter, baby-kids
//
const designs = [
  {
    name: "Back to School ABC 123 Apples Books Teacher Classroom",
    img: "Back to School ABC 123 Apples Books Teacher Classroom.jpeg",
    alt: "Back to School ABC 123 Apples Books Teacher Classroom — One way, grid pattern on a table runner by Studio LHB",
    cats: ["baby-kids", "fall"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17704171"
  },
  {
    name: "Brick Row Blue Abstract Watercolor Tree of Life",
    img: "Brick Row Blue Abstract Watercolor Tree of Life.jpeg",
    alt: "Brick Row Blue Abstract Watercolor Tree of Life — One way, half drop pattern on wallpaper by Studio LHB",
    cats: ["abstract", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17328318"
  },
  {
    name: "Brick Row Watercolor Scalloped Fan Shaped Seashells",
    img: "Brick Row Watercolor Scalloped Fan Shaped Seashells.jpeg",
    alt: "Brick Row Watercolor Scalloped Fan Shaped Seashells — One way, brick row pattern on a tea towel by Studio LHB",
    cats: ["coastal", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16385186"
  },
  {
    name: "Celebrate with Champagne Bottles Bubbles and Glass Flutes",
    img: "Celebrate with Champagne Bottles Bubbles and Glass Flutes.jpeg",
    alt: "Celebrate with Champagne Bottles Bubbles and Glass Flutes — Two way pattern on a placemat by Studio LHB",
    cats: ["holiday"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16263125"
  },
  {
    name: "Chefcore Kitchen Half Drop Kiwi Fruit Slices",
    img: "Chefcore Kitchen Half Drop Kiwi Fruit Slices.jpeg",
    alt: "Chefcore Kitchen Half Drop Kiwi Fruit Slices — Two way, half drop pattern on napkins by Studio LHB",
    cats: ["food-kitchen", "summer", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16444972"
  },
  {
    name: "Chefcore Kitchen Two Way Summer Watermelon Slices",
    img: "Chefcore Kitchen Two Way Summer Watermelon Slices.jpeg",
    alt: "Chefcore Kitchen Two Way Summer Watermelon Slices — Two way, half drop pattern on napkins by Studio LHB",
    cats: ["food-kitchen", "summer", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16474256"
  },
  {
    name: "Colorful Tossed Japanese Origami Paper Butterflies",
    img: "Colorful Tossed Japanese Origami Paper Butterflies.jpeg",
    alt: "Colorful Tossed Japanese Origami Paper Butterflies — Toss pattern on wallpaper by Studio LHB",
    cats: ["origami", "animals", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16282423"
  },
  {
    name: "Colorful Tossed Rainbow Japanese Origami Paper Hearts",
    img: "Colorful Tossed Rainbow Japanese Origami Paper Hearts.jpeg",
    alt: "Colorful Tossed Rainbow Japanese Origami Paper Hearts — Toss pattern on a standard pillowcase by Studio LHB",
    cats: ["origami", "rainbow", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16281324"
  },
  {
    name: "Cute Halloween Skull Trio with Hair Bows and Bowties",
    img: "Cute Halloween Skull Trio with Hair Bows and Bowties.jpeg",
    alt: "Cute Halloween Skull Trio with Hair Bows and Bowties — One way, half drop pattern on table runner and napkins by Studio LHB",
    cats: ["holiday", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17966739"
  },
  {
    name: "Delicate Half Drop Powder Blue Snowflake Trio",
    img: "Delicate Half Drop Powder Blue Snowflake Trio.jpeg",
    alt: "Delicate Half Drop Powder Blue Snowflake Trio — Four way, half drop pattern on throw blanket by Studio LHB",
    cats: ["holiday", "winter"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/18271190"
  },
  {
    name: "Diamond Layout Beach Rocks and Sea Glass",
    img: "Diamond Layout Beach Rocks and Sea Glass.jpeg",
    alt: "Diamond Layout Beach Rocks and Sea Glass — Four way, diamond layout on table runner and napkins by Studio LHB",
    cats: ["coastal", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479412-diamond-layout-beach-rocks-sea-glass-by-studiolhb"
  },
  {
    name: "Festive Colorful Multicolor Rainbow Polka Dots Half Drop",
    img: "Festive Colorful Multicolor Rainbow Polka Dots Half Drop.jpeg",
    alt: "Festive Colorful Multicolor Rainbow Polka Dots Half Drop — One way, half drop pattern on throw blanket by Studio LHB",
    cats: ["geometric", "baby-kids", "rainbow"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16253288"
  },
  {
    name: "Fresh Citrus Oranges Fruit Diamond Geometric",
    img: "Fresh Citrus Oranges Fruit Diamond Geometric.jpeg",
    alt: "Fresh Citrus Oranges Fruit Diamond Geometric — Two way pattern on a table runner by Studio LHB",
    cats: ["food-kitchen", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479093-fresh-citrus-oranges-fruit-diamond-geometric-by-studiolhb"
  },
  {
    name: "Grid Diamond Star Cross Stitch Geometric Blender",
    img: "Grid Diamond Star Cross Stitch Geometric Blender.jpeg",
    alt: "Grid Diamond Star Cross Stitch Geometric Blender — Four way pattern on a throw pillow by Studio LHB",
    cats: ["blender", "geometric", "abstract"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479441-grid-diamond-star-cross-stitch-geometric-blender-by-studiolhb"
  },
  {
    name: "Half Brick Boho Botanical Sprig Leaf Blender",
    img: "Half Brick Boho Botanical Sprig Leaf Blender.jpeg",
    alt: "Half Brick Boho Botanical Sprig Leaf Blender — Two way pattern on a table runner and napkins by Studio LHB",
    cats: ["coastal", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479411-half-brick-boho-botanical-sprig-leaf-blender-by-studiolhb"
  },
  {
    name: "Half Drop Abstract Watercolor Tree of Life",
    img: "Half Drop Abstract Watercolor Tree of Life.jpeg",
    alt: "Half Drop Abstract Watercolor Tree of Life — Two way, half drop pattern on throw pillow by Studio LHB",
    cats: ["abstract", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17328670"
  },
  {
    name: "Half Drop Botanical Three Green Leaf Clusters",
    img: "Half Drop Botanical Three Green Leaf Clusters.jpeg",
    alt: "Half Drop Botanical Three Green Leaf Clusters — Two way, half drop pattern on a tea towel by Studio LHB",
    cats: ["botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16849388"
  },
  {
    name: "Half Drop Diamond Star Cross Geometric Blender",
    img: "Half Drop Diamond Star Cross Geometric Blender.jpeg",
    alt: "Half Drop Diamond Star Cross Geometric Blender — Four way pattern on a throw pillow by Studio LHB",
    cats: ["blender", "geometric"],
    status: "coming soon",
    url: null
  },
  {
    name: "Half Drop Geometric Dots Tonal Blender Quilting Coordinate",
    img: "Half Drop Geometric Dots Tonal Blender Quilting Coordinate.jpeg",
    alt: "Half Drop Geometric Dots Tonal Blender Quilting Coordinate — Four way pattern on throw blanket by Studio LHB",
    cats: ["blender", "geometric"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479324-half-drop-geometric-dots-tonal-blender-quilting-coordinate-by-studiolhb"
  },
  {
    name: "Half Drop Iridescent Feathers Blender",
    img: "Half Drop Iridescent Feathers Blender.jpeg",
    alt: "Half Drop Iridescent Feathers Blender — One way, half drop pattern on throw pillow by Studio LHB",
    cats: ["animal", "blender"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479409-half-drop-iridescent-feathers-blender-by-studiolhb"
  },
  {
    name: "Half Drop Irregular Organic Shaped Sea Glass",
    img: "Half Drop Irregular Organic Shaped Sea Glass.jpeg",
    alt: "Half Drop Irregular Organic Shaped Sea Glass — Two way pattern on a throw blanket by Studio LHB",
    cats: ["geometric", "coastal", "blender"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479397-half-drop-irregular-organic-shaped-sea-glass-by-studiolhb"
  },
  {
    name: "Half Drop Ornate Decorative Layered Diamond Brooch",
    img: "Half Drop Ornate Decorative Layered Diamond Brooch.jpeg",
    alt: "Half Drop Ornate Decorative Layered Diamond Brooch — Two way, half drop pattern on wallpaper by Studio LHB",
    cats: ["geometric", "vintage-retro"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479116-half-drop-ornate-decorative-layered-diamond-brooch-by-studiolhb"
  },
  {
    name: "Half Drop Pink Girls Tropical Flamingo Silhouette",
    img: "Half Drop Pink Girls Tropical Flamingo Silhouette.jpeg",
    alt: "Half Drop Pink Girls Tropical Flamingo Silhouette — One way, half drop pattern on wallpaper by Studio LHB",
    cats: ["animal", "summer", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1481922-half-drop-pink-girls-tropical-flamingo-silhouette-by-studiolhb"
  },
  {
    name: "Half Drop Cupped Floral Blender Quilting Low Volume Coordinate",
    img: "Half Drop Cupped Floral Blender Quilting Low Volume Coordinate.jpeg",
    alt: "Half Drop Cupped Floral Blender Quilting Low Volume Coordinate — One way, half drop pattern on throw pillow by Studio LHB",
    cats: ["botanical", "blender", "spring", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/21755027"
  },
  {
    name: "Half Drop Textured Lily Botanical Blender Low Volume",
    img: "Half Drop Textured Lily Botanical Blender Low Volume.jpeg",
    alt: "Half Drop Textured Lily Botanical Blender Low Volume — One way, half drop pattern on throw pillow by Studio LHB",
    cats: ["botanical", "blender", "spring", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/21779068"
  },
  {
    name: "Half Drop Tonal Geranium Botanical Blender Low Volume",
    img: "Half Drop Tonal Geranium Botanical Blender Low Volume.jpeg",
    alt: "Half Drop Tonal Geranium Botanical Blender Low Volume — One way, half drop pattern on throw pillow by Studio LHB",
    cats: ["botanical", "blender", "spring", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/21779210"
  },
  {
    name: "Half Drop Vintage Victorian Gold Key with Tiny Heart",
    img: "Half Drop Vintage Victorian Gold Key with Tiny Heart.jpeg",
    alt: "Half Drop Vintage Victorian Gold Key with Tiny Heart — One way, half drop pattern on throw blanket by Studio LHB",
    cats: ["vintage-retro"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17841702"
  },
  {
    name: "Harlequin Diamond Grid Lattice Bow Tie Blender",
    img: "Harlequin Diamond Grid Lattice Bow Tie Blender.jpeg",
    alt: "Harlequin Diamond Grid Lattice Bow Tie Blender — Two way pattern on napkins by Studio LHB",
    cats: ["blender", "geometric"],
    status: "coming soon",
    url: null
  },
  {
    name: "Harlequin Diamond Grid Lattice Geometric Blender",
    img: "Harlequin Diamond Grid Lattice Geometric Blender.jpeg",
    alt: "Harlequin Diamond Grid Lattice Geometric Blender — Four way pattern on a throw pillow by Studio LHB",
    cats: ["blender", "geometric"],
    status: "coming soon",
    url: null
  },
  {
    name: "Harlequin Diamond Grid Lattice Ribbon Bow Blender",
    img: "Harlequin Diamond Grid Lattice Ribbon Bow Blender.jpeg",
    alt: "Harlequin Diamond Grid Lattice Ribbon Bow Blender — One way pattern on napkins by Studio LHB",
    cats: ["blender", "geometric"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479446-harlequin-diamond-grid-lattice-ribbon-bow-blender-by-studiolhb"
  },
  {
    name: "Hot Pink Striped Valentines Day Heart Chocolate",
    img: "Hot Pink Striped Valentines Day Heart Chocolate.jpeg",
    alt: "Hot Pink Striped Valentines Day Heart Chocolate — Two way pattern on a table runner by Studio LHB",
    cats: ["food-kitchen", "holiday"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16256969"
  },
  {
    name: "Illustrated Two Way Homemade Artisan Bread Loaf",
    img: "Illustrated Two Way Homemade Artisan Bread Loaf.jpeg",
    alt: "Illustrated Two Way Homemade Artisan Bread Loaf — Two way pattern on napkins by Studio LHB",
    cats: ["food-kitchen"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16253471"
  },
  {
    name: "Japanese Origami Geometric Party Dogs and Cats in Birthday Hats",
    img: "Japanese Origami Geometric Party Dogs and Cats in Birthday Hats.jpeg",
    alt: "Japanese Origami Geometric Party Dogs and Cats in Birthday Hats — One way, brick row pattern on a table runner and napkins by Studio LHB",
    cats: ["animal", "origami", "baby-kids", "holiday"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479078-japanese-origami-geometric-party-dogs-cats-birthday-hats-by-studiolhb"
  },
  {
    name: "Japanese Swimming Koi Fish and Beaded Stripe Lines",
    img: "Japanese Swimming Koi Fish and Beaded Stripe Lines.jpeg",
    alt: "Japanese Swimming Koi Fish and Beaded Stripe Lines — Two way pattern on wallpaper by Studio LHB",
    cats: ["botanical", "animal"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16475879"
  },
  {
    name: "Japanese Origami Paper Cranes",
    img: "Japanese Origami Paper Cranes.jpeg",
    alt: "Japanese Origami Paper Cranes — One way, half drop pattern on throw blanket by Studio LHB",
    cats: ["origami", "animals"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479053-japanese-origami-paper-cranes-by-studiolhb"
  },
  {
    name: "Mid Century Modern Folk Art Rustic Botanical Flowers",
    img: "Mid Century Modern Folk Art Rustic Botanical Flowers.jpeg",
    alt: "Mid Century Modern Folk Art Rustic Botanical Flowers — One way, brick row pattern on wallpaper by Studio LHB",
    cats: ["vintage-retro", "botanical", "abstract"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479296-mid-century-modern-folk-art-rustic-botanical-flowers-by-studiolhb"
  },
  {
    name: "Monochromatic Coquette Bows and Hearts Blender",
    img: "Monochromatic Coquette Bows and Hearts Blender.jpeg",
    alt: "Monochromatic Coquette Bows and Hearts Blender — One way pattern on throw pillow by Studio LHB",
    cats: ["baby-kids", "blender"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479384-monochromatic-coquette-bows-hearts-blender-by-studiolhb"
  },
  {
    name: "Multicolored Vintage Retro Paper Admit One Tickets",
    img: "Multicolored Vintage Retro Paper Admit One Tickets.jpeg",
    alt: "Multicolored Vintage Retro Paper Admit One Tickets — One way pattern on tea towel by Studio LHB",
    cats: ["vintage-retro"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479100-multicolored-vintage-retro-paper-admit-one-tickets-by-studiolhb"
  },
  {
    name: "Nursery Woodland Japanese Origami Baby Foxes",
    img: "Nursery Woodland Japanese Origami Baby Foxes.jpeg",
    alt: "Nursery Woodland Japanese Origami Baby Foxes — One way pattern on throw blanket by Studio LHB",
    cats: ["baby-kids", "animal", "origami"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16297446"
  },
  {
    name: "Happy Birthday Candles",
    img: "Happy Birthday Candles.jpeg",
    alt: "Happy Birthday Candles — One way pattern on placemat by Studio LHB",
    cats: ["baby-kids", "holiday"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1481688-happy-birthday-candles-by-studiolhb"
  },
  {
    name: "One Way Cute Baby Nursery Whales and Seaweed",
    img: "One Way Cute Baby Nursery Whales and Seaweed.jpeg",
    alt: "One Way Cute Baby Nursery Whales and Seaweed — One way pattern on wallpaper by Studio LHB",
    cats: ["baby-kids", "animal", "coastal"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1481995-one-way-cute-baby-nursery-whales-seaweed-by-studiolhb"
  },
  {
    name: "One Way Cute Little Kid Ghosts in Vintage Costumes",
    img: "One Way Cute Little Kid Ghosts in Vintage Costumes.jpeg",
    alt: "One Way Cute Little Kid Ghosts in Vintage Costumes — One way pattern on tea towel by Studio LHB",
    cats: ["baby-kids", "holiday"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17985240"
  },
  {
    name: "One Way Half Drop Berry Crocus Botanical Flower",
    img: "One Way Half Drop Berry Crocus Botanical Flower.jpeg",
    alt: "One Way Half Drop Berry Crocus Botanical Flower — One way pattern on table runner by Studio LHB",
    cats: ["winter", "spring", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/19211808"
  },
  {
    name: "One Way Half Drop Monochrome Blender Hearts",
    img: "One Way Half Drop Monochrome Blender Hearts.jpeg",
    alt: "One Way Half Drop Monochrome Blender Hearts — One way, half drop pattern on throw pillow by Studio LHB",
    cats: ["baby-kids", "blender", "geometric"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479338-one-way-half-drop-monochrome-blender-hearts-by-studiolhb"
  },
  {
    name: "One Way Half Drop Textured Coffee Bean Chefcore",
    img: "One Way Half Drop Textured Coffee Bean Chefcore.jpeg",
    alt: "One Way Half Drop Textured Coffee Bean Chefcore — One way pattern on napkins by Studio LHB",
    cats: ["food-kitchen"],
    status: "coming soon",
    url: null
  },
  {
    name: "One Way Multicolor Festive Christmas Ornaments Baubles",
    img: "One Way Multicolor Festive Christmas Ornaments Baubles.jpeg",
    alt: "One Way Multicolor Festive Christmas Ornaments Baubles — One way pattern on table runner by Studio LHB",
    cats: ["holiday", "winter"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/18331371"
  },
  {
    name: "One Way Texture Watercolor Blue Mushroom Fungi",
    img: "One Way Texture Watercolor Blue Mushroom Fungi.jpeg",
    alt: "One Way Texture Watercolor Blue Mushroom Fungi — One way pattern on throw blanket by Studio LHB",
    cats: ["food-kitchen", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479315-one-way-texture-watercolor-blue-mushroom-fungi-by-studiolhb"
  },
  {
    name: "Organic Watercolor Night Sky Stars and Dots Toss Blender",
    img: "Organic Watercolor Night Sky Stars and Dots Toss Blender.jpeg",
    alt: "Organic Watercolor Night Sky Stars and Dots Toss Blender — Toss pattern on wallpaper by Studio LHB",
    cats: ["night-sky", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479068-organic-watercolor-night-sky-stars-dots-toss-blender-by-studiolhb"
  },
  {
    name: "Origami Geometric Cats and Dogs",
    img: "Origami Geometric Cats and Dogs.jpeg",
    alt: "Origami Geometric Cats and Dogs — Two way pattern on tea towel by Studio LHB",
    cats: ["animals", "origami", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1480256-origami-geometric-cats-dogs-by-studiolhb"
  },
  {
    name: "Origami Kimono and Fans or Sakura Cherry Blossom",
    img: "Origami Kimono and Fans or Sakura Cherry Blossom.jpeg",
    alt: "Origami Kimono and Fans or Sakura Cherry Blossom — One way pattern on table runner by Studio LHB",
    cats: ["origami", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1481161-origami-kimono-fans-sakura-cherry-blossom-by-studiolhb"
  },
  {
    name: "Pinball Arcade Toss Retro Game Room",
    img: "Pinball Arcade Toss Retro Game Room.jpeg",
    alt: "Pinball Arcade Toss Retro Game Room — Toss pattern on napkins by Studio LHB",
    cats: ["vintage-retro", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479039-pinball-arcade-toss-retro-game-room-by-studiolhb"
  },
  {
    name: "Pink Green Blue Purple Origami Water Balloon Box",
    img: "Pink Green Blue Purple Origami Water Balloon Box.jpeg",
    alt: "Pink Green Blue Purple Origami Water Balloon Box — One way pattern on table runner and napkins by Studio LHB",
    cats: ["origami", "geometric", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479425-pink-green-blue-purple-origami-water-balloon-box-by-studiolhb"
  },
  {
    name: "Paper Fans with Hearts and Beaded Stripes",
    img: "Paper Fans with Hearts and Beaded Stripes.jpeg",
    alt: "Paper Fans with Hearts and Beaded Stripes — One way pattern on throw pillow by Studio LHB",
    cats: ["origami", "spring"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16460457"
  },
  {
    name: "Playful Whimsical Diagonal Striped Puffy Clouds",
    img: "Playful Whimsical Diagonal Striped Puffy Clouds.jpeg",
    alt: "Playful Whimsical Diagonal Striped Puffy Clouds — One way pattern on throw pillow by Studio LHB",
    cats: ["night-sky", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16361698"
  },
  {
    name: "Watercolor Paw Print Toss",
    img: "Watercolor Paw Print Toss.jpeg",
    alt: "Watercolor Paw Print Toss — Toss pattern on throw pillow by Studio LHB",
    cats: ["animals"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479051-watercolor-paw-print-toss-by-studiolhb"
  },
  {
    name: "Red Cherry Fruit, Pink Sakura Cherry Blossoms and Paper Fans",
    img: "Red Cherry Fruit Pink Sakura Cherry Blossoms and Paper Fans.jpeg",
    alt: "Red Cherry Fruit, Pink Sakura Cherry Blossoms and Paper Fans — One way pattern on standard pillowcase by Studio LHB",
    cats: ["botanical", "origami", "food-kitchen", "spring"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479103-red-cherry-fruit-pink-sakura-cherry-blossoms-fans-by-studiolhb"
  },
  {
    name: "Red Cherry Watermelon Apple Strawberry Fruit",
    img: "Red Cherry Watermelon Apple Strawberry Fruit.jpeg",
    alt: "Red Cherry Watermelon Apple Strawberry Fruit — One way pattern on tea towel by Studio LHB",
    cats: ["botanical", "food-kitchen", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1480971-red-cherry-watermelon-apple-strawberry-fruit-by-studiolhb"
  },
  {
    name: "Red Orange Yellow Carrot Root Vegetable Garden",
    img: "Red Orange Yellow Carrot Root Vegetable Garden.jpeg",
    alt: "Red Orange Yellow Carrot Root Vegetable Garden — One way pattern on placemat by Studio LHB",
    cats: ["botanical", "food-kitchen"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479435-red-orange-yellow-carrot-root-vegetable-garden-by-studiolhb"
  },
  {
    name: "Retro Vintage Heart Round Floral Coquette Sunglasses",
    img: "Retro Vintage Heart Round Floral Coquette Sunglasses.jpeg",
    alt: "Retro Vintage Heart Round Floral Coquette Sunglasses — One way pattern on throw blanket by Studio LHB",
    cats: ["baby-kids", "vintage-retro", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479138-retro-vintage-heart-round-floral-coquette-sunglasses-by-studiolhb"
  },
  {
    name: "Round Valentines Day Truffles with Sprinkles",
    img: "Round Valentines Day Truffles with Sprinkles.jpeg",
    alt: "Round Valentines Day Truffles with Sprinkles — Two way pattern on a table runner and napkins by Studio LHB",
    cats: ["food-kitchen", "holiday"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16257222"
  },
  {
    name: "Watercolor Easter Bunnies Silhouettes and Spring Cottagecore",
    img: "Watercolor Easter Bunnies Silhouettes and Spring Cottagecore.jpeg",
    alt: "Watercolor Easter Bunnies Silhouettes and Spring Cottagecore — One way pattern on napkins by Studio LHB",
    cats: ["baby-kids", "holiday", "spring"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479123-watercolor-easter-bunnies-silhouettes-spring-cottagecore-by-studiolhb"
  },
  {
    name: "Throwback to the 90s Vintage Retro Paper Folded Notes",
    img: "Throwback to the 90s Vintage Retro Paper Folded Notes.jpeg",
    alt: "Throwback to the 90s Vintage Retro Paper Folded Notes — One way pattern on throw blanket by Studio LHB",
    cats: ["vintage-retro"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479114-throwback-90s-vintage-retro-paper-folded-notes-by-studiolhb"
  },
  {
    name: "Tiny Dancer Girl Ballet Pointe Shoes with Hearts",
    img: "Tiny Dancer Girl Ballet Pointe Shoes with Hearts.jpeg",
    alt: "Tiny Dancer Girl Ballet Pointe Shoes with Hearts — One way pattern on tea towel by Studio LHB",
    cats: ["baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17437990"
  },
  {
    name: "Tonal Blender Pansy Quilting Coordinate Low Volume",
    img: "Tonal Blender Pansy Quilting Coordinate Low Volume.jpeg",
    alt: "Tonal Blender Pansy Quilting Coordinate Low Volume — One way pattern on throw pillow by Studio LHB",
    cats: ["botanical", "blender", "spring", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479322-tonal-blender-pansy-quilting-coordinate-low-volume-by-studiolhb"
  },
  {
    name: "Tonal Lily Floral Half Drop Mini Blender",
    img: "Tonal Lily Floral Half Drop Mini Blender.jpeg",
    alt: "Tonal Lily Floral Half Drop Mini Blender — One way pattern on throw pillow by Studio LHB",
    cats: ["botanical", "blender", "spring", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/21770936"
  },
  {
    name: "Toss Overlapping Rainbow Lucky Japanese Origami Stars",
    img: "Toss Overlapping Rainbow Lucky Japanese Origami Stars.jpeg",
    alt: "Toss Overlapping Rainbow Lucky Japanese Origami Stars — Toss pattern on a standard pillowcase by Studio LHB",
    cats: ["origami", "night-sky", "rainbow"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16298150"
  },
  {
    name: "Toss Retro Pinball Wizard Arcade Gaming Entertainment Version 2",
    img: "Toss Retro Pinball Wizard Arcade Gaming Entertainment Version 2.jpeg",
    alt: "Toss Retro Pinball Wizard Arcade Gaming Entertainment Version 2 — Toss pattern on table runner by Studio LHB",
    cats: ["vintage-retro"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479426-toss-retro-pinball-wizard-arcade-gaming-entertainment-version-2-by-studiolhb"
  },
  {
    name: "Toss Watercolor Cabincore Nature Woodland Forest",
    img: "Toss Watercolor Cabincore Nature Woodland Forest.jpeg",
    alt: "Toss Watercolor Cabincore Nature Woodland Forest — Toss pattern on table runner and napkins by Studio LHB",
    cats: ["botanical", "food-kitchen"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479334-toss-watercolor-cabincore-nature-woodland-forest-by-studiolhb"
  },
  {
    name: "Tossed Cabincore Cozy Woodland Forest Outdoor Botanical",
    img: "Tossed Cabincore Cozy Woodland Forest Outdoor Botanical.jpeg",
    alt: "Tossed Cabincore Cozy Woodland Forest Outdoor Botanical — Toss pattern on wallpaper by Studio LHB",
    cats: ["botanical", "food-kitchen"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/18167991"
  },
  {
    name: "Tossed Fall Harvest Pumpkins Gourds and Leaves",
    img: "Tossed Fall Harvest Pumpkins Gourds and Leaves.jpeg",
    alt: "Tossed Fall Harvest Pumpkins Gourds and Leaves — Toss pattern on tea towel by Studio LHB",
    cats: ["botanical", "food-kitchen", "fall"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/18050877"
  },
  {
    name: "Tossed Harvest Sliced Bartlett Pears Fruit and Leaves",
    img: "Tossed Harvest Sliced Bartlett Pears Fruit and Leaves.jpeg",
    alt: "Tossed Harvest Sliced Bartlett Pears Fruit and Leaves — Toss pattern on tea towel by Studio LHB",
    cats: ["botanical", "food-kitchen", "fall"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1482010-tossed-harvest-sliced-bartlett-pears-fruit-leaves-by-studiolhb"
  },
  {
    name: "Tossed Modern Nautical Beach Seashells Sea Glass Coral",
    img: "Tossed Modern Nautical Beach Seashells Sea Glass Coral.jpeg",
    alt: "Tossed Modern Nautical Beach Seashells Sea Glass Coral — Toss pattern on throw pillow by Studio LHB",
    cats: ["botanical", "coastal"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479390-tossed-modern-nautical-beach-seashells-sea-glass-coral-by-studiolhb"
  },
  {
    name: "Tossed Multicolored Badminton Racket Shuttlecock Birdie",
    img: "Tossed Multicolored Badminton Racket Shuttlecock Birdie.jpeg",
    alt: "Tossed Multicolored Badminton Racket Shuttlecock Birdie — Toss pattern on standard pillowcase by Studio LHB",
    cats: ["recreation"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16804931"
  },
  {
    name: "Tossed Southwest Desert Cactus and Pink Flowers",
    img: "Tossed Southwest Desert Cactus and Pink Flowers.jpeg",
    alt: "Tossed Southwest Desert Cactus and Pink Flowers — Toss pattern on a standard pillowcase by Studio LHB",
    cats: ["botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/18014590"
  },
  {
    name: "Christmas Bell Mitten Star Holiday Cookies",
    img: "Christmas Bell Mitten Star Holiday Cookies.jpeg",
    alt: "Christmas Bell Mitten Star Holiday Cookies — One way pattern on table runner and napkins by Studio LHB",
    cats: ["food-kitchen", "holiday", "winter"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16195569"
  },
  {
    name: "Triangle Clustered Scalloped Fan Shaped Seashells",
    img: "Triangle Clustered Scalloped Fan Shaped Seashells.jpeg",
    alt: "Triangle Clustered Scalloped Fan Shaped Seashells — One way pattern on throw pillow by Studio LHB",
    cats: ["coastal", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16385390"
  },
  {
    name: "Two Directional Compact Bartlett Pear Fruit Rows",
    img: "Two Directional Compact Bartlett Pear Fruit Rows.jpeg",
    alt: "Two Directional Compact Bartlett Pear Fruit Rows — Two way pattern on a placemat by Studio LHB",
    cats: ["botanical", "food-kitchen"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16253461"
  },
  {
    name: "Two Way Blue Gradient Arrows Chevron Geometric Stripe",
    img: "Two Way Blue Gradient Arrows Chevron Geometric Stripe.jpeg",
    alt: "Two Way Blue Gradient Arrows Chevron Geometric Stripe — Two way pattern on curtains by Studio LHB",
    cats: ["geometric"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/17287008"
  },
  {
    name: "Two Way Chefcore Brick Pattern Yellow Banana Fruit",
    img: "Two Way Chefcore Brick Pattern Yellow Banana Fruit.jpeg",
    alt: "Two Way Chefcore Brick Pattern Yellow Banana Fruit — Two way pattern on wallpaper by Studio LHB",
    cats: ["food-kitchen", "botanical", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479094-two-way-chefcore-brick-pattern-yellow-banana-fruit-by-studiolhb"
  },
  {
    name: "Two Way Dramatic Jewel Tulip Flower Bloom",
    img: "Two Way Dramatic Jewel Tulip Flower Bloom.jpeg",
    alt: "Two Way Dramatic Jewel Tulip Flower Bloom — Two way pattern on a table runner and napkins by Studio LHB",
    cats: ["botanical", "spring"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479317-two-way-dramatic-jewel-tulip-flower-bloom-by-studiolhb"
  },
  {
    name: "Two Way Festive Christmas Holiday Ornaments Bauble Snowflakes Stars",
    img: "Two Way Festive Christmas Holiday Ornaments Bauble Snowflakes Stars.jpeg",
    alt: "Two Way Festive Christmas Holiday Ornaments Bauble Snowflakes Stars — Two way pattern on a table runner and napkins by Studio LHB",
    cats: ["holiday", "winter"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16253371"
  },
  {
    name: "Geometric Blueberries Fruit",
    img: "Geometric Blueberries Fruit.jpeg",
    alt: "Geometric Blueberries Fruit — Two way pattern on a table runner and napkins by Studio LHB",
    cats: ["botanical", "food-kitchen", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16426307"
  },
  {
    name: "Two Way Green Bartlett Pear Kiwi Avocado Fruit",
    img: "Two Way Green Bartlett Pear Kiwi Avocado Fruit.jpeg",
    alt: "Two Way Green Bartlett Pear Kiwi Avocado Fruit — Two way pattern on a placemat by Studio LHB",
    cats: ["botanical", "food-kitchen", "fall", "summer"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16411270"
  },
  {
    name: "Two Way Half Brick Rustic Woodland Cabincore Pinecones",
    img: "Two Way Half Brick Rustic Woodland Cabincore Pinecones.jpeg",
    alt: "Two Way Half Brick Rustic Woodland Cabincore Pinecones — Two way pattern on a table runner and napkins by Studio LHB",
    cats: ["botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479314-two-way-half-brick-rustic-woodland-cabincore-pinecones-by-studiolhb"
  },
  {
    name: "Two Way Half Drop Pastel Ice Cream Cone Summer Treat",
    img: "Two Way Half Drop Pastel Ice Cream Cone Summer Treat.jpeg",
    alt: "Two Way Half Drop Pastel Ice Cream Cone Summer Treat — Two way pattern on napkins by Studio LHB",
    cats: ["food-kitchen", "summer", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1482030-two-way-half-drop-pastel-ice-cream-cone-summer-treat-by-studiolhb"
  },
  {
    name: "Two Way Half Drop Textured Coffee Bean Chefcore",
    img: "Two Way Half Drop Textured Coffee Bean Chefcore.jpeg",
    alt: "Two Way Half Drop Textured Coffee Bean Chefcore — Two way pattern on napkins by Studio LHB",
    cats: ["food-kitchen"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479373-two-way-half-drop-textured-coffee-bean-chefcore-by-studiolhb"
  },
  {
    name: "Two Way Iridescent Feathers Blender",
    img: "Two Way Iridescent Feathers Blender.jpeg",
    alt: "Two Way Iridescent Feathers Blender — Two way pattern on napkins by Studio LHB",
    cats: ["animal", "blender"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479407-two-way-iridescent-feathers-blender-by-studiolhb"
  },
  {
    name: "Two Way Multicolored Badminton Recreation Sport Racket",
    img: "Two Way Multicolored Badminton Recreation Sport Racket.jpeg",
    alt: "Two Way Multicolored Badminton Recreation Sport Racket — Two way pattern on tea towel by Studio LHB",
    cats: ["recreation"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16803453"
  },
  {
    name: "Two Way Multicolored Badminton Shuttlecock",
    img: "Two Way Multicolored Badminton Shuttlecock.jpeg",
    alt: "Two Way Multicolored Badminton Shuttlecock — Two way pattern on wallpaper by Studio LHB",
    cats: ["recreation"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479111-two-way-multicolored-badminton-shuttlecock-by-studiolhb"
  },
  {
    name: "Two Way Red White Stripe Candy Cane with Green Bow",
    img: "Two Way Red White Stripe Candy Cane with Green Bow.jpeg",
    alt: "Two Way Red White Stripe Candy Cane with Green Bow — Two way pattern on a placemat by Studio LHB",
    cats: ["food-kitchen", "holiday", "winter"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/18378709"
  },
  {
    name: "Two Way Watercolor Sea Turtle Geometric Shell",
    img: "Two Way Watercolor Sea Turtle Geometric Shell.jpeg",
    alt: "Two Way Watercolor Sea Turtle Geometric Shell — Two way pattern on standard pillowcase by Studio LHB",
    cats: ["coastal", "animal"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479693-two-way-watercolor-sea-turtle-geometric-blue-shell-by-studiolhb"
  },
  {
    name: "Two Way Whimsical Botanical Carrot Root Vegetable Garden",
    img: "Two Way Whimsical Botanical Carrot Root Vegetable Garden.jpeg",
    alt: "Two Way Whimsical Botanical Carrot Root Vegetable Garden — Two way pattern on napkins by Studio LHB",
    cats: ["food-kitchen", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16253387"
  },
  {
    name: "Vintage Retro Cherry Strawberry Glass Jam Jars",
    img: "Vintage Retro Cherry Strawberry Glass Jam Jars.jpeg",
    alt: "Vintage Retro Cherry Strawberry Glass Jam Jars — One way pattern on placemat by Studio LHB",
    cats: ["food-kitchen", "vintage-retro", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479099-vintage-retro-cherry-strawberry-glass-jam-jars-by-studiolhb"
  },
  {
    name: "Watercolor Boho Coastal Beach Seashell Toss",
    img: "Watercolor Boho Coastal Beach Seashell Toss.jpeg",
    alt: "Watercolor Boho Coastal Beach Seashell Toss — Toss pattern on table runner by Studio LHB",
    cats: ["coastal", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479332-watercolor-boho-coastal-beach-seashell-toss-by-studiolhb"
  },
  {
    name: "Watercolor Geometric Origami Paper Cups",
    img: "Watercolor Geometric Origami Paper Cups.jpeg",
    alt: "Watercolor Geometric Origami Paper Cups — Two way pattern on curtains by Studio LHB",
    cats: ["geometric", "origami", "abstract"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/16317195"
  },
  {
    name: "Watercolor Paw Print Toss Blender with Hearts",
    img: "Watercolor Paw Print Toss Blender with Hearts.jpeg",
    alt: "Watercolor Paw Print Toss Blender with Hearts — Toss pattern on napkins by Studio LHB",
    cats: ["animals", "blender"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479329-watercolor-paw-print-toss-blender-hearts-by-studiolhb"
  },
  {
    name: "Watercolor Paw Print Half Drop",
    img: "Watercolor Paw Print Half Drop.jpeg",
    alt: "Watercolor Paw Print Half Drop — Two way pattern on throw pillow by Studio LHB",
    cats: ["animals"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479052-watercolor-paw-print-half-drop-by-studiolhb"
  },
  {
    name: "Watercolor Spring Easter Bunny Silhouette",
    img: "Watercolor Spring Easter Bunny Silhouette.jpeg",
    alt: "Watercolor Spring Easter Bunny Silhouette — One way pattern on placemat by Studio LHB",
    cats: ["animals", "holiday", "baby-kids", "spring"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1479128-watercolor-spring-easter-bunny-silhouette-by-studiolhb"
  },
  {
    name: "Wild West Rustic Vintage Southwestern Americana",
    img: "Wild West Rustic Vintage Southwestern Americana.jpeg",
    alt: "Wild West Rustic Vintage Southwestern Americana — One way pattern on throw blanket by Studio LHB",
    cats: ["animals"],
    status: "live",
    url: "https://www.spoonflower.com/en/artists/fabric/18121844"
  },
  {
    name: "Woodland Fox Forest Animal Baby Nursery Room",
    img: "Woodland Fox Forest Animal Baby Nursery Room.jpeg",
    alt: "Woodland Fox Forest Animal Baby Nursery Room — One way pattern on standard pillowcase by Studio LHB",
    cats: ["animals", "baby-kids"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1481975-woodland-fox-forest-animal-baby-nursery-room-by-studiolhb"
  },
  {
    name: "Half Drop Bright Cheerful Yellow Sunflower",
    img: "Half Drop Bright Cheerful Yellow Sunflower.jpeg",
    alt: "Half Drop Bright Cheerful Yellow Sunflower — Four way pattern on napkins by Studio LHB",
    cats: ["blender", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1482046-half-drop-bright-cheerful-yellow-sunflower-by-studiolhb"
  },
   {
    name: "Hothouse Tropical Floral Vibrant Maximalist",
    img: "Hothouse Tropical Floral Vibrant Maximalist.jpeg",
    alt: "Hothouse Tropical Floral Vibrant Maximalist — One way pattern on throw blanket by Studio LHB",
    cats: ["summer", "botanical"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1484161-hothouse-tropical-floral-vibrant-maximalist-by-studiolhb"
   },
 {
    name: "Rustic Circus Diamond Dot Stripe Half Drop",
    img: "New Rustic Circus Diamond Dot Stripe Half Drop.jpeg",
    alt: "Rustic Circus Diamond Dot Stripe Half Drop — Two way diamond and polka dot stripe pattern on table runner by Studio LHB",
    cats: ["blender", "geometric"],
    status: "live",
    url: "https://www.spoonflower.com/en/collections/1485611-rustic-circus-diamond-dot-stripe-half-drop-by-studiolhb"
   },   
 {
    name: "Lemon Citrus Fruit Slice Rustic Block Print",
    img: "Lemon Citrus Fruit Slice Rustic Block Print.jpeg",
    alt: "Lemon Citrus Fruit Slice Rustic Block Print — Two way lemon slice block print on table runner and napkins by Studio LHB",
    cats: ["blender", "geometric", "abstract", "botanical", "food-kitchen"],
    status: "coming soon",
    url: null
   },  
   {
    name: "Tonal Textured Square Quilt Blocks",
    img: "Tonal Textured Square Quilt Blocks.jpeg",
    alt: "Tonal Textured Square Quilt Blocks — Non directional patchwork geometric square print on table runner and napkins by Studio LHB",
    cats: ["blender", "geometric", "abstract"],
    status: "coming soon",
    url: null
   }, 
  {
    name: "Earthy Textural Boho Geometric Sun Blender",
    img: "Earthy Textural Boho Geometric Sun Blender.jpeg",
    alt: "Earthy Textural Boho Geometric Sun Blender — One way geometric boho sun blender on toss pillow by Studio LHB",
    cats: ["blender", "geometric", "abstract"],
    status: "coming soon",
    url: null
   }, 
   {
    name: "Abstract Blue Textured Floral Lattice Trellis Blender",
    img: "Abstract Blue Textured Floral Lattice Trellis Blender.jpeg",
    alt: "Abstract Blue Textured Floral Lattice Trellis Blender — Two way geometric abstract botanical floral lattice hexagon blender on toss pillow by Studio LHB",
    cats: ["blender", "geometric", "abstract", "botanical"],
    status: "coming soon",
    url: null
   }, 
   {
    name: "Textured Delicate Botanical Ginkgo Leaf Blender",
    img: "Textured Delicate Botanical Ginkgo Leaf Blender.jpeg",
    alt: "Textured Delicate Botanical Ginkgo Leaf Blender — Toss botanical green monochrome ginkgo leaf blender on table runner and napkins by Studio LHB",
    cats: ["blender", "botanical"],
    status: "coming soon",
    url: null
   }, 
    {
    name: "Nautical Coastal Vertical Ticking Stripe",
    img: "Nautical Coastal Vertical Ticking Stripe.jpeg",
    alt: "Nautical Coastal Vertical Ticking Stripe — Vertical stripe on wallpaper by Studio LHB",
    cats: ["blender", "geometric"],
    status: "coming soon",
    url: null
   }, 
  {
    name: "Bubble Polka Dots Geometric Blender Toss",
    img: "Bubble Polka Dots Geometric Blender Toss.jpeg",
    alt: "Bubble Polka Dots Geometric Blender Toss — Bubble toss on wallpaper by Studio LHB",
    cats: ["blender", "geometric"],
    status: "coming soon",
    url: null
   }, 
  {
    name: "Rustic Abstract Wood Grain Botanical Blender",
    img: "Rustic Abstract Wood Grain Botanical Blender.jpeg",
    alt: "Rustic Abstract Wood Grain Botanical Blender — Two Way wood grain pattern on toss pillow by Studio LHB",
    cats: ["blender", "abstract," "botanical"],
    status: "coming soon",
    url: null
   }, 
];

