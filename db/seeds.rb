puts "🍿 Seeding movies..."

movie1 = Movie.create(title: 'The Lion King', genre: 'Musical', year: 1994, director: 'Rob Minkoff', image_url: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/612YWU3cO1L._AC_SY879_.jpg')

puts "🍿 Seeding users..."

movie1 = User.create(username: 'HannahChrissy', password_digest: "I don't know", image_urL: "https://t4.ftcdn.net/jpg/02/65/00/69/240_F_265006936_2dlz2VtcqZZUbco1VnDpU2diyd8OagFS.jpg")

puts "✅ Done seeding!"