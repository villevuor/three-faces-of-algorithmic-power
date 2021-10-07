const songs = [
  {id: '55S2PQgSMYAhgoTCcGCDfw', tags: ['colorful','playful','fascinating']}, // 5 Seconds Of Summer: Youngblood
  {id: '44aN5xKL3kGHvQ5bXVk6B8', tags: ['chill','stylish']}, // Adam Lambert: Ghost town
  {id: '1brwdYwjltrJo7WHpIvbYt', tags: ['chill','fascinating']}, // Alan Walker: Faded
  {id: '0JiVRyTJcJnmlwCZ854K4p', tags: ['dynamic','inspiring']}, // Alan Walker: Alone
  {id: '19MBk3PbNFE36wqIqkMq9H', tags: ['chill','playful','fresh']}, // Alvaro Soler: La cintura
  {id: '5x57rkFCUreqWU0GhIDiQi', tags: ['chill','fascinating','oldbutgold']}, // Anna Puu: Kolme pientä sanaa
  {id: '2pq6zPY0TMGnVtIRFGClfF', tags: ['stylish']}, // Anna Puu: Säännöt rakkaudelle
  {id: '4Zt76QBD0dVdEa4VnUd2Sl', tags: ['dynamic','fresh']}, // Anna Puu: Me ollaan runo
  {id: '6oE4lcT77ywkRa7YBew8K4', tags: ['dynamic','colorful']}, // Anssi Kela: Levoton tyttö
  {id: '7GywmNFyZbKvEBkBR2gxOs', tags: ['inspiring','fascinating']}, // Anssi Kela: Ilves
  {id: '1yn5xgyK5SuEukAcqs0X9N', tags: ['oldbutgold']}, // Antti Ketonen: Olisitpa sylissäni
  {id: '4Sk3IcLo2nDenuBs8JBWBg', tags: ['dynamic','oldbutgold']}, // Apulanta: Lokin päällä lokki
  {id: '5SxkdsY1ufZzoq9iXceLw9', tags: ['dynamic','playful','inspiring']}, // Ariana Grande: No tears left to cry
  {id: '2lvZlCIDkDHWc2Q9Y51GUJ', tags: ['playful','oldbutgold']}, // Arttu Wiskari: Suomen muotoisen pilven alla
  {id: '3DxOpRtAzmGviFnsn0aM8m', tags: ['playful','peaceful']}, // Arttu Wiskari: Tässäkö tää oli feat. leavings-orkesteri
  {id: '0uUNN1nSoUx1A4fkDCWDQ7', tags: ['colorful','fresh']}, // Ava Max: So am i
  {id: '25sgk305KZfyuqVBQIahim', tags: ['dynamic','playful']}, // Ava Max: Sweet but psycho
  {id: '76nqCfJOcFFWBJN32PAksn', tags: ['colorful','fascinating','oldbutgold']}, // Ava Max: Kings & queens
  {id: '7vgv8KZBSo0TPzyIWG9yzV', tags: ['stylish','fresh']}, // Ava Max: Salt
  {id: '6g1NlCpW7fgqDnWbCCDrHl', tags: ['dynamic','oldbutgold']}, // Avicii: Wake me up (feat. aloe blacc)
  {id: '0xIVvRmjztR1AwuHrkhH41', tags: ['playful','peaceful']}, // Avicii: Addicted to you
  {id: '3zKST4nk4QJE77oLjUZ0Ng', tags: ['chill','inspiring']}, // Avicii: Hey brother
  {id: '6nsLzJfvp5OLd4mgqUJkpq', tags: ['dynamic','stylish','fascinating']}, // Avicii: Waiting for love
  {id: '4q8PHoRsPUB52LFylX8Ulz', tags: ['colorful','playful']}, // Axwell & Ingrosso: More than you know
  {id: '0tc8HGXosQDC8TTAaON1TP', tags: ['fascinating','peaceful']}, // Behm: Hei rakas
  {id: '2Fxmhks0bxGSBdJ92vM42m', tags: ['dynamic','colorful']}, // Billie Eilish: Bad guy
  {id: '0nJW01T7XtvILxQgC5J7Wh', tags: ['chill','peaceful']}, // Bruno Mars: When i was your man
  {id: '6YUTL4dYpB9xZO5qExPf05', tags: ['dynamic','oldbutgold']}, // Calvin Harris: Summer
  {id: '4iLqG9SeJSnt0cSPICSjxv', tags: ['stylish','fresh']}, // Charlie Puth: Attention
  {id: '3CMhZ0nXeDD6FvfcN3wQaz', tags: ['inspiring','oldbutgold']}, // Cheek: Timantit on ikuisia
  {id: '4PazzXLJb56Afcyh20zfhm', tags: ['chill','stylish','inspiring']}, // Chisu: Kohtalon oma
  {id: '6fvRNluQqH2XBuNrF5N7PB', tags: ['dynamic','colorful']}, // Chisu: Kolmas pyörä
  {id: '3gwWNMjqyz2nmkm8NBz5e1', tags: ['peaceful']}, // Chisu: Tie
  {id: '3s4U7OHV7gnj42VV72eSZ6', tags: ['colorful','fascinating']}, // Clean Bandit: Rather be
  {id: '2Wyqnc6LHeEZxDS41DcAJn', tags: ['chill','playful']}, // Cris Cab: Liar liar
  {id: '3EPXxR3ImUwfayaurPi3cm', tags: ['fresh','peaceful']}, // Dean Lewis: Be alright
  {id: '43gqZgmUlq1iSs466nFABx', tags: ['colorful','playful']}, // Donkeyboy: Crazy something normal
  {id: '2ekn2ttSfGqwhhate0LSR0', tags: ['colorful','fascinating']}, // Dua Lipa: New rules
  {id: '5px6upUHM3fhOP621Edp4V', tags: ['inspiring','fresh']}, // Dua Lipa: Physical
  {id: '6WrI0LAC5M1Rw2MnX2ZvEg', tags: ['stylish','inspiring']}, // Dua Lipa: Don't start now
  {id: '1raaNykBg1bDnWENUiglUA', tags: ['dynamic','inspiring']}, // Dua Lipa: Break my heart
  {id: '0FE9t6xYkqWXU2ahLh6D8X', tags: ['dynamic','colorful','inspiring','oldbutgold']}, // Ed Sheeran: Shape of you
  {id: '0afhq8XCExXpqazXczTSve', tags: ['chill','colorful']}, // Ed Sheeran: Galway girl
  {id: '7rehjyv0IQ0WQoB6wZRfnY', tags: ['inspiring','fresh']}, // Elastinen: Supervoimii
  {id: '3rZnv4pdkJaeYf2LxaVSC0', tags: ['colorful','playful','fresh']}, // Elastinen: Epäröimättä hetkeekään feat. jenni vartiainen
  {id: '7y2YUIyCuVhBidENVT0068', tags: ['chill','stylish','peaceful']}, // Ellie Goulding: Love me like you do
  {id: '6xf85mBVo3o0E4oZHurPcB', tags: ['chill','fascinating']}, // Elokuu: Saatilla
  {id: '3ff4lPdQZfMJ79xn5JM64K', tags: ['dynamic','colorful']}, // Elokuu: Tänään lähtee
  {id: '6hLf8Sb409PqHrGuueYEbJ', tags: ['playful','oldbutgold']}, // Erin: Ei taida tietää tyttö
  {id: '0mCwwVKGNbg66djvgGA5VC', tags: ['dynamic','fascinating']}, // Erin: Mitä tänne jää
  {id: '58sSa4CQ4T4GwyV97T2tcR', tags: ['fresh','peaceful']}, // Erin: Yhtenä sunnuntaina
  {id: '3seNictp7GWitSNKlujwnY', tags: ['dynamic','stylish']}, // Evelina: Tornado
  {id: '6KnoWZOxQvN9LeeULoNhkK', tags: ['colorful','fascinating']}, // Haloo Helsinki!: Vapaus käteen jää
  {id: '0ZciUHnvsaQo1dY9puKMoN', tags: ['stylish','oldbutgold']}, // Haloo Helsinki!: Maailma on tehty meitä varten
  {id: '4awkMNWVKjEwMtXO198g32', tags: ['dynamic','playful']}, // Haloo Helsinki!: Huuda!
  {id: '5zdMmHZqGHkQyfU6velIMU', tags: ['stylish','playful']}, // Haloo Helsinki!: Kuussa tuulee
  {id: '6aZ6jat6EhEm4bPplxmS7Z', tags: ['dynamic','colorful']}, // Haloo Helsinki!: Pulp fiction
  {id: '6M4WAZc5myzgRISbmgUF8Q', tags: ['fresh','fascinating']}, // Haloo Helsinki!: Hulluuden highway
  {id: '2iTTqVKKvCpQB69znecpJB', tags: ['stylish','peaceful']}, // Haloo Helsinki!: Rakas
  {id: '4h1nlsgutqwzk2ZqYaZdOF', tags: ['inspiring','oldbutgold']}, // Haloo Helsinki!: Kaksi ihmistä
  {id: '09B6dlqZvb9kRbcI06TKxH', tags: ['chill','fascinating']}, // Happoradio: älä puhu huomisesta
  {id: '6PxQvNC0mkyb9DaBmYwgTL', tags: ['dynamic','stylish','inspiring']}, // Herra Ylppö & Ihmiset: Mustat hevoset
  {id: '2Oehrcv4Kov0SuIgWyQY9e', tags: ['oldbutgold','peaceful']}, // Imagine Dragons: Demons
  {id: '0tKcYR2II1VCQWT79i5NrW', tags: ['colorful','playful']}, // Imagine Dragons: Thunder
  {id: '1erDNx55IWAE9OYuBTRYgc', tags: ['chill','fresh']}, // Imagine Dragons: Bad liar
  {id: '20Lq4oIqlCDOKkw7yPHaQw', tags: ['dynamic','inspiring']}, // Irina: Haluun olla yksin
  {id: '1iMDYK2zADlyjDaFt4IhDP', tags: ['chill','playful']}, // J. Karjalainen: Meripihkahuone
  {id: '6vdtB7Cs0kjNl892DgqWlO', tags: ['fascinating','oldbutgold']}, // J. Karjalainen: Mennyt mies
  {id: '7FxidSR6IoL3qMRXxFJ8pd', tags: ['colorful','fresh']}, // Janieck: Does it matter
  {id: '0YJurhJWs69FIKpQFat84h', tags: ['inspiring','fresh']}, // Janna: Sä et ole hullu
  {id: '2xHdiCxtPYgyaEc6ZWfq74', tags: ['chill','stylish']}, // Jari Sillanpää: Sinä ansaitset kultaa
  {id: '7oGZAicScQt96OAW4AruYy', tags: ['colorful','oldbutgold']}, // Jason Derülo: Want to want me
  {id: '59qrUpoplZxbIZxk6X0Bm3', tags: ['dynamic','fresh']}, // Jason Derülo: Take you dancing
  {id: '73ZCyrTwTbkSVPXMMIeOQu', tags: ['oldbutgold','peaceful']}, // Jenni Vartiainen: Duran duran
  {id: '0uwLRwdb0r1PG0czjyV8St', tags: ['stylish','inspiring']}, // Jenni Vartiainen: Junat ja naiset
  {id: '756ptGGDLKOVkbap9MdYiT', tags: ['stylish','inspiring']}, // Jenni Vartiainen: Suru on kunniavieras
  {id: '6YxMB7YsT4K3tT5YehPMah', tags: ['chill']}, // Jenni Vartiainen: Eden
  {id: '7JdSnlSslOrjBTZN1l6UZt', tags: ['inspiring','peaceful']}, // Jenni Vartiainen: Minä sinua vaan
  {id: '3hBHT6EFwiAABsMA1ZZBhf', tags: ['fresh','peaceful']}, // Jenni Vartiainen: Väärään suuntaan
  {id: '2ABJ0REB7mwS792y1AMrkT', tags: ['inspiring','fascinating']}, // Jesse Kaikuranta: Järjetön rakkaus
  {id: '0AzAKlEGsBfigjWpp9AOdE', tags: ['chill','oldbutgold']}, // Jesse Kaikuranta: Vie mut kotiin
  {id: '1QXlowTYHcD9gwQWLlMOb4', tags: ['stylish','peaceful']}, // Jesse Kaikuranta: Näytän sulle rannan
  {id: '4y3OI86AEP6PQoDE6olYhO', tags: ['colorful','fresh']}, // Jonas Brothers: Sucker
  {id: '4ftuEtDpcgvfefycI7LeAi', tags: ['inspiring','peaceful']}, // Jonna Tervomaa: Minä toivon
  {id: '6n7EGv01tp8eoH3PRYW60z', tags: ['dynamic','playful']}, // Jonne Aaron: Ota mut
  {id: '2nNRWUZBeGLuxegmFhJeCZ', tags: ['fresh','fascinating']}, // Jubel: On the beach
  {id: '7EkWy2cj5jchNPtoTUgjdd', tags: ['chill','peaceful']}, // Juha Tapio: Sitkeä sydän
  {id: '3Uvu26v1SM5Ji8UekGo95o', tags: ['playful','peaceful']}, // Juha Tapio: Tykkään susta niin että halkeen
  {id: '3KlUczsFjh0PTiiCl1DanF', tags: ['dynamic','oldbutgold']}, // Juha Tapio: Sinun vuorosi loistaa
  {id: '3lptv5Ztu0qRLDjqBDTDPT', tags: ['chill','inspiring']}, // Juha Tapio: Jotain niin oikeaa
  {id: '7FRmWYGyVGHRikck2A2NP2', tags: ['inspiring','fascinating']}, // Juha Tapio: Kuka näkee sut
  {id: '7gti9ege3PKzW3mbEQDlix', tags: ['stylish','fascinating']}, // Juha Tapio: Kun viela ehtii
  {id: '3Rzvgy2HjTKKHMcKU3X5gB', tags: ['colorful','playful','oldbutgold']}, // Jukka Poika: älä tyri nyt
  {id: '3hB5DgAiMAQ4DzYbsMq1IT', tags: ['chill','oldbutgold','peaceful']}, // Justin Bieber: Love yourself
  {id: '1Nr2iMEdzwY5ct32Xk2VB2', tags: ['chill','playful']}, // Jvg: Huominen on huomenna (feat. anna abreu)
  {id: '6tWsQ6m7PTW3WBJMvgXIyq', tags: ['fascinating','peaceful']}, // Jvg: Hehkuu
  {id: '7mGdJWJETc696zijUeZ2FD', tags: ['dynamic','stylish']}, // Jvg: Popkorni
  {id: '3Pakcg38hbn3d3YZYRQ7LE', tags: ['colorful','fresh']}, // Jvg: Ikuinen vappu
  {id: '6U6nJuhVibDkzV4Uq1cYbA', tags: ['dynamic','inspiring']}, // Kaija Koo: En pelkää pimeää
  {id: '6qRo9iqxJvDY5d9hCfJIyE', tags: ['stylish','fresh']}, // Kaija Koo: Onnellinen loppu
  {id: '6nEam9LEhHRmAcwh0SHLPl', tags: ['chill','oldbutgold']}, // Kasmir: Vadelmavene
  {id: '7q5vLran701pFHiu6Lw5nX', tags: ['chill','playful']}, // Kuningasidea: Enemmän duoo ku sooloo
  {id: '0kISdbvD6LJRdlFAE6YJIz', tags: ['inspiring','fascinating','peaceful']}, // Kuningasidea: Pohjolan tuulet
  {id: '66QouRqsyl2RpZfjysEfOe', tags: ['stylish','peaceful']}, // Laura Närhi: Tuhlari
  {id: '44BHl3n0aFIzMhz1bv7jUG', tags: ['fresh','peaceful']}, // Lauri Tähkä: Palavaa vettä
  {id: '4xqU0uR2FkuZPxicdOADZC', tags: ['dynamic','fascinating']}, // Lauri Tähkä: Jääkukkia
  {id: '2TIlqbIneP0ZY1O0EzYLlc', tags: ['playful','oldbutgold']}, // Lewis Capaldi: Someone you loved
  {id: '1xN7BpTAWnZkuSLOtRP6Qc', tags: ['dynamic','playful']}, // Loreen: Euphoria
  {id: '5kHiHWLcbsvTDtmHxBiaID', tags: ['stylish','fascinating']}, // Lost Frequencies: Are you with me
  {id: '4QjVfuu7om31HBan0jlX4p', tags: ['dynamic','colorful']}, // Mabel: Don't call me up
  {id: '32OlwWuMpZ6b0aN2RZOeMS', tags: ['dynamic','colorful']}, // Mark Ronson: Uptown funk
  {id: '4c24laIQGNc7QTICHZZKOq', tags: ['chill','playful']}, // Marlon Roudette: When the beat drops out
  {id: '4gbVRS8gloEluzf0GzDOFc', tags: ['dynamic','fascinating','oldbutgold']}, // Maroon 5: Maps
  {id: '2iuZJX9X9P0GKaE93xcPjk', tags: ['chill','playful']}, // Maroon 5: Sugar
  {id: '0mvkwaZMP2gAy2ApQLtZRv', tags: ['stylish','playful']}, // Michael Buble: It's a beautiful day
  {id: '2WyRfGeHo97VC5mP1BBSzr', tags: ['inspiring','fascinating']}, // Miley Cyrus: Mothers daughter
  {id: '27ycaQnQAxaPiyeg3nr2aB', tags: ['dynamic','chill','fresh']}, // Miley Cyrus: Midnight sky
  {id: '5tjrH5xrpkgKgYd8zQgU8X', tags: ['playful','inspiring']}, // Milky Chance: Stolen dance
  {id: '4poybupy26pTWPr9zY1i7h', tags: ['colorful','stylish']}, // Nea: Some say
  {id: '02pGdlK2UgDoPqWu0d4pZq', tags: ['inspiring','peaceful']}, // Neljä Ruusua: Mustia ruusuja
  {id: '4bCOAuhvjsxbVBM5MM8oik', tags: ['dynamic','playful','inspiring']}, // Nickelback: When we stand together
  {id: '0RzBCMUkbxaHFrGUTctWGo', tags: ['chill','peaceful']}, // Nopsajalka: Lupaan olla
  {id: '1QzFhzIOW7CyRJLpmq5CM0', tags: ['chill','fascinating','oldbutgold']}, // Onerepublic: Counting stars
  {id: '1rqqCSm0Qe4I9rUvWncaom', tags: ['dynamic','playful']}, // Panic At The Disco: High hopes
  {id: '4Q7NePRrh6S0WzKMz8CbCA', tags: ['colorful','fascinating','peaceful']}, // Pariisin Kevät: Kesäyö
  {id: '6NPVjNh8Jhru9xOmyQigds', tags: ['chill','fascinating','oldbutgold']}, // Pharrel Williams: Happy
  {id: '1jF7IL57ayN4Ity3jQqGu0', tags: ['dynamic','playful','inspiring','peaceful']}, // Pink: Try
  {id: '2cijv3TEyA7WmXFcHbUjXh', tags: ['dynamic','playful','peaceful']}, // Pmmp: Rakkaalleni
  {id: '4waYSI6TTW0guhTJc4gWzq', tags: ['chill','fresh']}, // Reino Nordin: Antaudun
  {id: '1mwt9hzaH7idmC5UCoOUkz', tags: ['chill','stylish','oldbutgold']}, // Rihanna: Diamonds
  {id: '5XzmZjXhMjDHr7ZfJ6DELQ', tags: ['colorful','peaceful']}, // Rihanna: Fourfiveseconds
  {id: '6xtcFXSo8H9BZN637BMVKS', tags: ['stylish','fresh','peaceful']}, // Rita Ora: Let you love me
  {id: '43jBqV3j3Xi1g6wO0bhIMd', tags: ['playful','fascinating']}, // Sage The Gemini: Now and later
  {id: '24Yi9hE78yPEbZ4kxyoXAI', tags: ['dynamic','colorful']}, // Saint Jhn: Roses (imanbek remix)
  {id: '62NVyyEBiRxGae3SeB97nl', tags: ['colorful','peaceful']}, // Sam Smith: Stay with me
  {id: '3rgobpftjUoUTxURC4sw8k', tags: ['inspiring','oldbutgold','peaceful']}, // Samuli Edelmann: Tähtipölyä
  {id: '2NZeivlB6l6SYShgexgcB9', tags: ['stylish','peaceful']}, // Samuli Putro: Olet puolisoni nyt
  {id: '1nuPaBJRRRKsh0T2uPt66c', tags: ['chill','oldbutgold']}, // Sanni: 2080-luvulla
  {id: '48BhFviee97yuYMh4IqMXJ', tags: ['playful','fresh']}, // Sanni: Jacuzzi
  {id: '79jX8RM5CgPqDKdGEKNW9K', tags: ['stylish','playful','peaceful']}, // Shawn Mendes: In my blood
  {id: '0sf12qNH5qcw8qpgymFOqD', tags: ['colorful','stylish']}, // The Weeknd: Blinding lights
  {id: '1wAXODAAL6hY64ZdhrnjBO', tags: ['dynamic','inspiring','fascinating']}, // Train: Drive by
  {id: '5VGBgPVFO3e0lWz4WHYntQ', tags: ['inspiring','fresh','fascinating']}, // Tungevaag & Raaban: All for love
  {id: '51Of5p3lKZeOg6itfs4og4', tags: ['dynamic','chill','peaceful']}, // Twocolors: Lovefool
  {id: '76x6TqUwSb13zagZW6V3qy', tags: ['dynamic','colorful','fresh']}, // Uniklubi: Bailaten koko elämä
  {id: '1s4bArqPAaQgy0yJK9lXhB', tags: ['stylish','inspiring','peaceful']}, // Vesala: Tequila
  {id: '1G0u9V4wCkgcPe2cZF4MOm', tags: ['colorful','fascinating']}, // Vesala: Muitaki ihmisii
  {id: '6pIZ0u32c2Lku8PmCWtnMy', tags: ['dynamic','colorful','oldbutgold']}, // Years & Years: King
]

export default songs;