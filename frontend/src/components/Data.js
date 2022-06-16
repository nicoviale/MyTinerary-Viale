const data =[
   {id:1, name:'Brazil', 
   country:'Rio de Janeiro', 
   description:'Rio de Janeiro is a huge coastal city in Brazil, famous for its Copacabana and Ipanema beaches, the 38m-high statue of Christ the Redeemer atop Corcovado Hill, and the Sugarloaf Mountain, a granite peak with cable cars ascending to its top. The city is also known for its sprawling favelas. The raucous Carnival festival, with parades of floats, extravagant costumes and samba dancers, is considered the largest in the world.', 
   imagen:'https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-rio-de-janeiro/rio-de-janeiro-panorama_YuJas-Shutterstock_2.jpg.image.694.390.low.jpg'},

   {id:2, name:'France', 
   country: 'Paris',
   description:'Paris, the capital of France, is a major European city and a world center for art, fashion, food and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the Seine River. Aside from such landmarks as the Eiffel Tower and the 12th-century Gothic Notre Dame Cathedral, the city is famous for its café culture and the designer fashion shops along Rue du Faubourg Saint-Honoré.', 
   imagen:'https://www.cronista.com/files/image/105/105120/5ff73cf703813_950_534!.png?s=bb779fdc70eccfd4885d07e35144288d&d=1617073903'},

   {id:3, name:'Italy',
    country: 'Roma',
    description:'Rome, the capital of Italy, is a sprawling cosmopolitan city displaying nearly 3,000 years of globally influential art, architecture and culture. Ancient ruins like those of the Forum and the Colosseum evoke the power of the ancient Roman Empire. Vatican City, the headquarters of the Roman Catholic Church, boasts St. Peters Basilica and the Vatican Museums, home to masterpieces such as Michelangelos Sistine Chapel frescoes.', 
    imagen:'https://i.pinimg.com/originals/4a/6f/4b/4a6f4b186c0b46b49a4b4ae4e8fa51d5.jpg'},

   {id:4, name:'Argentina', 
   country: 'Perito Moreno',
   description:'The Perito Moreno Glacier is a thick mass of ice located in the Lago Argentino department of the Santa Cruz province, in southwestern Argentina, in the Patagonia region. It is integrated into the Los Glaciares National Park. This glacier originates in the South Patagonian ice field', 
   imagen:'https://www.lugaresturisticosdeargentina.com/wp-content/uploads/2021/01/Calafate.png'},

   {id:5, name:'United States',
   country: 'Miami',
   description:'Miami is an international city in the southeastern corner of Florida. The Cuban influence is reflected in the cafes and tobacco shops on Calle Ocho in Little Havana. On the barrier islands, across the turquoise waters of Biscayne Bay, is Miami Beach, on which South Beach is located. This glamorous neighborhood is famous for its colorful art deco buildings, white sand, seaside hotels and trendy clubs.',
    imagen:'https://www.viajarmiami.com/img/guia-viaje-miami.jpg'},

   {id:6, name:'Peru', 
   country: 'Machu Picchu',
   description:'Machu Picchu is an Inca citadel located high in the Andes mountains in Peru, above the Urubamba River valley. Built in the 15th century and then abandoned, it is famous for its sophisticated dry stone walls that combine huge blocks without the use of mortar, fascinating buildings associated with astronomical alignments, and panoramic views. Its exact use remains a mystery.', 
   imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScja0Wzji0UO1w_CzYp8Jx0NnVKwDJhCGWWg&usqp=CAU'},

   {id:7, name:'Japan', 
   country: 'Tokio',
   description:'Tokyo, Japan bustling capital, mixes the ultra-modern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding forests. The Imperial Palace is located in the middle of large public gardens. The city various museums offer exhibits ranging from classical art (at the Tokyo National Museum) to a reconstructed kabuki theater (at the Edo-Tokyo Museum).', 
   imagen:'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/japon_tokio_shibuya_shutterstock_666197236_f11photo_shutterstock.jpg?itok=75ui5RtA'},
   
   {id:8, name:'England', 
   country: 'London',
   description:'London, the capital of England and the United Kingdom, is a 21st century city with a history dating back to Roman times. In its center are the imposing Palace of Parliament, the tower of the iconic "Big Ben" clock and Westminster Abbey, the site of British royal coronations. Across the River Thames, the London Eye observation wheel offers panoramic views of the South Bank cultural complex and the entire city.', 
   imagen:'https://elviajerofeliz.com/wp-content/uploads/2017/10/Rutas-por-Londres.jpg'},
   
   {id:9, name:'Republic Dominican',
    country: 'Punta Cana',
    description:'Punta Cana, the easternmost point of the Dominican Republic, borders the Caribbean Sea and the Atlantic Ocean. It is a region known for its 32 km of beaches and clear waters. The Bávaro area and Punta Cana combine to form what is known as La Costa del Coco, an area with exclusive all-inclusive resorts. It is popular for its zip lines, windsurfing, kayaking, and sailing.', 
    imagen:'https://resizer.glanacion.com/resizer/9M2k8iglhsjeyRbgJY6RDkj0fkI=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/Z7G7V67AERFZXMVE3PKJLPFYMQ.jpg'},   
    
    {id:10, name: 'Argentina', 
    country: 'Carlos Paz',
    description:'Villa Carlos Paz is a tourist town west of Córdoba, in central Argentina. It is located in the Punilla Valley, on the shores of Lake San Roque. In the center of the city is the huge wooden Cuckoo Clock. The top of Cerro de la Cruz, accessible by chairlift, offers views of the lake and the city. To the southwest is Quebrada del Condorito National Park, a large area of ​​rocky meadows known for its Andean condors.',
    imagen: 'https://media.staticontent.com/media/pictures/a27f56ca-be2d-4532-a280-24d298b3b718'},
   
    {id:11, name:'Brazil', 
    country: 'Buzios',
    description:'Armação dos Búzios (or Búzios) is a Brazilian resort located on a peninsula in the ocean, east of Rio de Janeiro. It is known as a luxurious vacation destination with many beaches. These include Ferradura, a quiet horseshoe-shaped bay with water sports, and Geribá, a popular surf spot. Between the streets of the city, the Rua das Pedras has cobblestones and offers restaurants and nightlife.', 
    imagen:'https://media.staticontent.com/media/pictures/93cabbd2-44dc-4f79-b7dd-0e8c0c37bc16'},
   
    {id:12, name:'United States', 
    country: 'New York',
    description:'New York includes 5 boroughs that are located where the Hudson River empties into the Atlantic Ocean. At its center is Manhattan, a densely populated district that is among the worlds leading commercial, financial, and cultural centers. Its iconic sites include skyscrapers, such as the Empire State Building, and the vast Central Park. The Broadway theater is located in the neon-lit area of ​​Times Square.', 
    imagen:'https://www.amfeafip.org.ar/uploads/2022/05/20220504012459000000_new-york-1-1.jpg'},       

]
export default data