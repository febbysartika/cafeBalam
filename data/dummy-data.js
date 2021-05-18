import Category from '../models/Categori';
import Favorite from '../models/Favorite';
import Recep from '../models/Recep';

export const CATEGORIES = [
    new Category('1', "Liep's Cafe", 'https://www.jumanto.com/wp-content/uploads/2019/05/AlamatdanLokasiLiepsCafeLampung.jpg'),
    new Category('2', 'Bun Kopi', 'https://www.itrip.id/wp-content/uploads/2021/03/Bun-Kopi.jpg'),
    new Category('3', 'Flambojan Cafe', 'https://www.itrip.id/wp-content/uploads/2021/03/Flambojan-Cafe.jpg'),
    new Category('4', 'Flipfop Coffee', 'https://www.itrip.id/wp-content/uploads/2021/03/Flipflop-Coffee.jpg'),
    new Category('5', 'New Town Coffe', 'https://www.itrip.id/wp-content/uploads/2021/03/New-Town-Coffee.jpg'),
    new Category('6', 'Owl Cafe', 'https://www.itrip.id/wp-content/uploads/2021/03/Owl-Cafe.jpg'),
    new Category('7', 'Wood Stairs Cafe', 'https://www.itrip.id/wp-content/uploads/2021/03/Wood-Stairs-Cafe.jpg'),
    new Category('8', 'Matsue Coffee', 'https://www.itrip.id/wp-content/uploads/2021/03/Matsue-Coffee.jpg'),
    new Category('9', 'Kopi Tuya', 'https://www.itrip.id/wp-content/uploads/2021/03/Kopi-Tuya.jpg'),
    new Category('10', 'Cafe Kiyo', 'https://www.itrip.id/wp-content/uploads/2021/03/Cafe-Kiyo.jpg')
  ];

export const FAVORITE = [
  new Favorite('1','3'),
  new Favorite('2','9'),
  new Favorite('3','5')
]

export const RECEP =[
  new Recep(
    '1',
    '1',
    '4,5/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    12,
    'Alamat: Jl. Wolter Monginsidi No.33, Gotong Royong, Kec. Tj. Karang Pusat, Kota Bandar Lampung',
    [
      'Wifi',
      'Toilet',
      'Mushola',
      'Tempat Foto Kekinian Instagram',
      'Tempat Makan Outdoor dan Indoor',
      'Parkir cukup luas baik untuk motor maupun mobil'
    ],
    [
      'Coffee Cream Brulee',
      'Double Expresso',
      'Caramel Moca Latte',
      'Honey Lemon Tea',
      'Yakiniku Don',
      'Omurice',
      'Lobster Termidor (L/M)',
    ],
  ),

  new Recep(
    '2',
    '2',
    '4,6/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    11,
    'Alamat: Jalan ZA Pagar Alam No.57, Kota Bandar Lampung',
    [
      'Wifi',
      'Toilet',
      'Tempat duduk : Ruangan Outdoor, Ruangan Smooking Area dan Ruangan Full Ac',
      'Working Space',
      'Spot Foto Instagramable'
    ],
    [
      'Cookies & Cream Frappe',
      'Balmon (Banana Lemon & Soda)',
      'Kopi Red Velvet',
      'Honey Lemon Tea',
      'Roomie',
      'Egg Fried Rice',
      'Pancake Chocomaltine',
    ],
  ),

  new Recep(
    '3',
    '3',
    '4,6/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    9,
    ' Jl. Flamboyan, Kec. Engal, Kota Bandar Lampung, Lampung',
    [
      'Wifi',
      'Toilet',
      'Konsep Tempat yang unik',
      'Working Space',
      'Spot Foto Instagramable'
    ],
    [
      'Espresso',
      'Americano',
      'Chocolate',
      'Avocade Coffe',
      'Drip Coffe',
      'Latte',
      'Te Sate',
      'Kebab'
    ],
  ),

  new Recep(
    '4',
    '4',
    '4,6/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    10,
    'Jl. Pulau Sebuku No.10, Tanjung Baru, Kecamatan Sukabumi, Kota Bandar Lampung (Satu area dengan Hotel Omah Akas)',
    [
      'Wifi',
      'Toilet',
      'Tempat duduk di dalam dan luar ruangan',
      'Dapat memesan ruang VIP',
      'Spot Foto bergaya Bohemian'
    ],
    [
      'Kopi Arabika Preanger Jawa Barat',
      'Kopi Fine Robusta Lampung Barat',
      'Espresso',
      'Es Kopi Semut',
      'Fruity Es Teler',
      'Pisang Goreng Gula Semut',
      'Singkong Keju',
      'Roti Bakar'
    ],
  ),

  new Recep(
    '5',
    '5',
    '4,6/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    10,
    'Jl. Jenderal Ahmad Yani No.1, Palapa, Kec. Tj. Karang Pusat, Kota Bandar Lampung',
    [
      'Wifi',
      'Toilet',
      'Ruangan AC',
      'Tempat duduk di dalam dan luar ruangan'
      
    ],
    [
      'Coffee Mocha',
      'Blender Ice Cappuccino',
      'Kopi Tradisional',
      'Kopi Tarik Cokelat',
      'Es Kopi Susu Regum',
      'Green Tea Frappuccino',
      'Nasi Lemak',
      'Martabak Telu Bebek',
      'Ayam Goreng SIngapura',
      'Sapi Lada Hitam'
    ],
  ),

  new Recep(
    '6',
    '6',
    '4,2/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    10.30,
    'Jalan Sultan Agung nomor 9 simpang PKOR Wayhalim (Komplek Rumah Toko (Ruko) Central Niaga)',
    [
      'Wifi',
      'Toilet',
      'Ruangan AC',
      'Smoking Area atau tempat pengunjung yang hendak merokok',
      'Terdepat 60 pilihan permainan'
    ],
    [
      'Matcha Lava',
      'Chocomellow Melted',
      'Yakult Bublegum',
      'Milkshake Bublegum',
      'Spicy Honey Wing',
      'Es Krim',
      'Pancake',
      'Roti Bakar'
    ],
  ),

  new Recep(
    '7',
    '7',
    '4,2/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    10.30,
    'Jalan Sultan Agung nomor 9 simpang PKOR Wayhalim (Komplek Rumah Toko (Ruko) Central Niaga)',
    [
      'Wifi',
      'Toilet',
      'Ruangan AC',
      'Smoking Area atau tempat pengunjung yang hendak merokok',
      'Terdepat 60 pilihan permainan'
    ],
    [
      'Matcha Lava',
      'Chocomellow Melted',
      'Yakult Bublegum',
      'Milkshake Bublegum',
      'Spicy Honey Wing',
      'Es Krim',
      'Pancake',
      'Roti Bakar'
    ],
  ),

  new Recep(
    '8',
    '8',
    '5/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    14,
    'Jl. P. Antasari No.87, Kedamaian, Kota Bandar Lampung',
    [
      'Wifi',
      'Toilet',
      'Nuansa Khas Jepang',
      'Tempat Indoor dengan AC',
      'Spot Outdoor',
      'Lorong Tempat Spot Foto Ala Jepang'
    ],
    [
      'Matsue',
      'Kirameru',
      'Itammasi',
      'Okawa',
      'Taro (Iced)',
      'Red Velvet (Iced)',
      'Chocolate (Iced)',
      'Greentea (Iced)'
    ],
  ),

  new Recep(
    '9',
    '9',
    '4,5/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    10,
    'Jl. ZA. Pagar Alam No.3, Labuhan Ratu, Kec. Kedaton, Kota Bandar Lampung',
    [
      'Wifi',
      'Ruangan AC',
      'Konsep Monokrom',
      'Tempat duduk Indoor dan Outdoor'
    ],
    [
      'Kopi Susu Tuya',
      'Kopi Rum Raisin',
      'Kopi Rose',
      'Longan Chrysanthemum',
      'Peaches And Cream',
      'Boba Aren',
      'Boba Bomb',
      'Sukulos'
    ],
  ),

  new Recep(
    '10',
    '10',
    '4,6/5',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    11,
    'Jl. Cut Nyak Dien, Palapa, Kec. Tj. Karang Pusat, Kota Bandar Lampung',
    [
      'Wifi',
      'Toilet',
      'Memiliki tema Tropical Japanase',
      'Spot Outdoor',
      'Event Cafe seperti akustik, nobar film dan jamming DJ'
    ],
    [
      'Ice Milo Coffee Kayo',
      'Iced Coffe Caramel Latte',
      'Orange Squash',
      'Tropical Blue',
      'Lemon Squash',
      'Thaitea Kiyo',
      'Rice Bowl Tada',
      'Sate Taichan',
      'Ayam Telor Manis',
      'Cemilan Singkong'
    ],
  )
  
]