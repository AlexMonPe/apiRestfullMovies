import Movies from "../src/movies/modelMovies.js";
import Rent from "../src/rent/modelRent.js";
import Users from "../src/users/modelUsers.js";
import connection from "./BD.js";

//DB CONNECTION
connection();

//FAKE EXAMPLE OF MOCKRENT, THIS IDS ONLY EXISTS IN MY BD.
const mockRent = [{idMovie: "62331bfe92e3e46d1ae3aa27", idUser: "6232ee8dd2243c99605d3275"}]

await Rent.insertMany(mockRent);

const mockMovies = [
    {
        "_id" : ObjectId("6257ef313cbfb660260b2a7f"),
        "title" : "Eternals",
        "year" : 2021,
        "genre" : "Science Fiction",
        "actor" : "Gemma Chan",
        "duration" : 156,
        "overview" : "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
        "price" : 3,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        "trailer" : "https://www.youtube.com/watch?v=x_me3xsvDgk"
    }
    {
        "_id" : ObjectId("6257efa03cbfb660260b4cde"),
        "title" : "Venom: Let there be carnage",
        "year" : 2021,
        "genre" : "Science Fiction",
        "actor" : "Tom Hardy",
        "duration" : 97,
        "overview" : "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "price" : 4,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        "trailer" : "https://www.youtube.com/watch?v=GVwq2HlKYpE"
    }
    {
        "_id" : ObjectId("6257f2633cbfb660260c1c6a"),
        "title" : "The Godfather",
        "year" : 1972,
        "genre" : "Drama",
        "actor" : "Marlon Brando",
        "duration" : 175,
        "overview" : "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "price" : 2,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n6PvMAKL66gavIFxOyRB6czAeQO.jpg",
        "trailer" : "https://www.youtube.com/watch?v=Ew9ngL1GZvs"
    }
    {
        "_id" : ObjectId("6257f3213cbfb660260c4990"),
        "title" : "Schindler's List",
        "year" : 1993,
        "genre" : "Drama",
        "actor" : "Liam Neeson",
        "duration" : 195,
        "overview" : "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "price" : 3,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "trailer" : "https://www.youtube.com/watch?v=bJcLRFWxRno"
    }
    {
        "_id" : ObjectId("6257f3b53cbfb660260c7055"),
        "title" : "Interstellar",
        "year" : 2014,
        "genre" : "Science Fiction",
        "actor" : "Matthew McConaughey",
        "duration" : 169,
        "overview" : "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        "price" : 5,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailer" : "https://www.youtube.com/watch?v=0vxOhd4qlnA"
    }
    {
        "_id" : ObjectId("6257f4313cbfb660260c914c"),
        "title" : "Avengers: Endgame",
        "year" : 2019,
        "genre" : "Science Fiction",
        "actor" : "Robert Downey Jr.",
        "duration" : 181,
        "overview" : "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        "price" : 4,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "trailer" : "https://www.youtube.com/watch?v=hA6hldpSTF8"
    }
    {
        "_id" : ObjectId("6257f4ca3cbfb660260cbcae"),
        "title" : "Jurassic Park ",
        "year" : 1993,
        "genre" : "Science Fiction",
        "actor" : "Sam Neill",
        "duration" : 127,
        "overview" : "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
        "price" : 3,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
        "trailer" : "https://www.youtube.com/watch?v=hNX7hnG5Djo"
    }
    {
        "_id" : ObjectId("6257f5f33cbfb660260d0cdd"),
        "title" : "The Green Mile",
        "year" : 1999,
        "genre" : "Drama",
        "actor" : "Tom Hanks",
        "duration" : 188,
        "overview" : "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "price" : 2,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
        "trailer" : "https://www.youtube.com/watch?v=Bg7epsq0OIQ"
    }
    {
        "_id" : ObjectId("6257f5f33cbfb660260d0ce8"),
        "title" : "Forrest Gump",
        "year" : 1994,
        "genre" : "Drama",
        "actor" : "Tom Hanks",
        "duration" : 144,
        "overview" : "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "price" : 3,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        "trailer" : "https://www.youtube.com/watch?v=bLvqoHBptjg"
    }
    {
        "_id" : ObjectId("6257f5f33cbfb660260d0cf3"),
        "title" : "The Pianist",
        "year" : 2002,
        "genre" : "Drama",
        "actor" : "Adrien Brody",
        "duration" : 150,
        "overview" : "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
        "price" : 1,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
        "trailer" : "https://www.youtube.com/watch?v=u_jE7-6Uv7E"
    }
    {
        "_id" : ObjectId("6257f8053cbfb660260d9fda"),
        "title" : "Turning Red",
        "year" : 2022,
        "genre" : "Animation",
        "actor" : "Rosalie Chiang",
        "duration" : 100,
        "overview" : "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        "price" : 4,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
        "trailer" : "https://www.youtube.com/watch?v=XdKzUbAiswE"
    }
    {
        "_id" : ObjectId("6257f8053cbfb660260d9fe5"),
        "title" : "Encanto",
        "year" : 2021,
        "genre" : "Animation",
        "actor" : "Stephanie Beatriz",
        "duration" : 102,
        "overview" : "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        "price" : 5,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        "trailer" : "https://www.youtube.com/watch?v=CaimKeDcudo"
    }
    {
        "_id" : ObjectId("6257f8053cbfb660260d9ff1"),
        "title" : "Hotel Transylvania: Transformania",
        "year" : 2022,
        "genre" : "Animation",
        "actor" : "Selena Gomez",
        "duration" : 87,
        "overview" : "When Van Helsing's mysterious invention, the Monsterfication Ray, goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
        "price" : 4,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
        "trailer" : "https://www.youtube.com/watch?v=7AP86CYeR30"
    }
    {
        "_id" : ObjectId("6257f8053cbfb660260d9ffe"),
        "title" : "Ron's Gone Wrong",
        "year" : 2021,
        "genre" : "Animation",
        "actor" : "Zach Galifianakis",
        "duration" : 107,
        "overview" : "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
        "price" : 5,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/plzgQAXIEHm4Y92ktxU6fedUc0x.jpg",
        "trailer" : "https://www.youtube.com/watch?v=8I8nMtzN05s"
    }
    {
        "_id" : ObjectId("6257f8053cbfb660260da00c"),
        "title" : "Dragon Ball Z: Resurrection 'F'",
        "year" : 2015,
        "genre" : "Animation",
        "actor" : "Masako Nozawa",
        "duration" : 93,
        "overview" : "One peaceful day on Earth, two remnants of Frieza's army named Sorbet and Tagoma arrive searching for the Dragon Balls with the aim of reviving Frieza. They succeed, and Frieza subsequently seeks revenge on the Saiyans.",
        "price" : 5,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/soq3AxjALdBfdPAm8H7yuMmNL5Y.jpg",
        "trailer" : "https://www.youtube.com/watch?v=WiONylGn8Xw"
    }
    {
        "_id" : ObjectId("6257f9ea3cbfb660260e27b8"),
        "title" : "A Quiet Place Part II ",
        "year" : 2021,
        "genre" : "Thriller",
        "actor" : "Emily Blunt",
        "duration" : 97,
        "overview" : "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
        "price" : 4,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
        "trailer" : "https://www.youtube.com/watch?v=BpdDN9d9Jio"
    }
    {
        "_id" : ObjectId("6257f9ea3cbfb660260e27c4"),
        "title" : "Joker ",
        "year" : 2019,
        "genre" : "Thriller",
        "actor" : "Joaquin Phoenix",
        "duration" : 122,
        "overview" : "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "price" : 6,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "trailer" : "https://www.youtube.com/watch?v=-RFFRxcoKfA"
    }
    {
        "_id" : ObjectId("6257f9ea3cbfb660260e27d3"),
        "title" : "Escape Room: Tournament of Champions ",
        "year" : 2021,
        "genre" : "Thriller",
        "actor" : "Taylor Russell",
        "duration" : 88,
        "overview" : "Six people unwittingly find themselves locked in another series of escape rooms, slowly uncovering what they have in common to survive as they discover all the games that they've played before.",
        "price" : 4,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jGYJyPzVgrVV2bgClI9uvEZgVLE.jpg",
        "trailer" : "https://www.youtube.com/watch?v=KlfUbZJVInA"
    }
    {
        "_id" : ObjectId("6257f9ea3cbfb660260e27f0"),
        "title" : "World War Z",
        "year" : 2013,
        "genre" : "Thriller",
        "actor" : "Brad Pitt",
        "duration" : 116,
        "overview" : "Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.",
        "price" : 1,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1SWBSYJsnyhdNRfLI1T6RsCxAQ4.jpg",
        "trailer" : "https://www.youtube.com/watch?v=TvRCQM2HrXs"
    }
    {
        "_id" : ObjectId("6257f9ea3cbfb660260e2800"),
        "title" : "I Am Legend ",
        "year" : 2007,
        "genre" : "Thriller",
        "actor" : "Will Smith",
        "duration" : 101,
        "overview" : "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.",
        "price" : 3,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
        "trailer" : "https://www.youtube.com/watch?v=dtKMEAXyPkg"
    }
    {
        "_id" : ObjectId("6257fb593cbfb660260ea132"),
        "title" : "",
        "year" : 2021,
        "genre" : "",
        "actor" : "",
        "duration" : 97,
        "overview" : "",
        "price" : 4,
        "image" : "",
        "trailer" : ""
    }
    {
        "_id" : ObjectId("6257fb593cbfb660260ea13d"),
        "title" : "The Jack in the Box: Awakening",
        "year" : 2022,
        "genre" : "Horror",
        "actor" : "Matt McClure",
        "duration" : 99,
        "overview" : "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
        "price" : 1,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
        "trailer" : "https://www.youtube.com/watch?v=7InYvYQq8DU"
    }
    {
        "_id" : ObjectId("6257fb593cbfb660260ea148"),
        "title" : "No exit",
        "year" : 2022,
        "genre" : "Horror",
        "actor" : "Havana Rose Liu",
        "duration" : 96,
        "overview" : "Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.",
        "price" : 1,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg",
        "trailer" : "https://www.youtube.com/watch?v=GFvupyiNEz0"
    }
    {
        "_id" : ObjectId("6257fb593cbfb660260ea154"),
        "title" : "The Conjuring: The Devil Made Me Do It",
        "year" : 2021,
        "genre" : "Horror",
        "actor" : "Patrick Wilson",
        "duration" : 111,
        "overview" : "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
        "price" : 2,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
        "trailer" : "https://www.youtube.com/watch?v=qc6jN1BcJi0"
    }
    {
        "_id" : ObjectId("6257fb5a3cbfb660260ea164"),
        "title" : "It Chapter Two ",
        "year" : 2019,
        "genre" : "Horror",
        "actor" : "Bill Skarsgard",
        "duration" : 169,
        "overview" : "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        "price" : 4,
        "image" : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        "trailer" : "https://www.youtube.com/watch?v=zqUopiAYdRg"
    }
]

await Movies.insertMany(mockMovies);

const mockUsers = [
    {
        "_id" : ObjectId("6257ecc506715748e8b31e79"),
        "name" : "yoly",
        "email" : "yoly@yoly.com",
        "password" : "$2b$10$5Y3Ptl.8W2fRRMdgi2kaEO/GhS6Z3c7Q6Zy59jkWTvV4hR.RJIqnC",
        "role" : "client",
        "__v" : 0
    }
    {
        "_id" : ObjectId("6257ecef06715748e8b31e7b"),
        "name" : "David",
        "email" : "david@david.es",
        "password" : "$2b$10$bnozcnQxni8Rlr5ypQEYDeR/uSF/Qhp52c2aPc/doKbkBWigrMVmG",
        "role" : "client",
        "__v" : 0
    }
    {
        "_id" : ObjectId("6257ed0506715748e8b31e7d"),
        "name" : "Susana",
        "email" : "susana@susana.com",
        "password" : "$2b$10$h5pnsH3CRhzlbWNMIabFUOYC7F67JyGIsva0zDgF4MpfSLrOgtTqu",
        "role" : "client",
        "__v" : 0
    }
    {
        "_id" : ObjectId("6257edca06715748e8b31e7f"),
        "name" : "mihai",
        "email" : "mihai@mihai.com",
        "password" : "$2b$10$VUp3uFG4z.5JJysyzUBG..nRNsUzuMIckN17/5rTQx9dbfWwzZ9Ku",
        "role" : "client",
        "__v" : 0
    }
    {
        "_id" : ObjectId("6257ee67f3d250154fa1521c"),
        "name" : "alex",
        "email" : "alex@alex.com",
        "password" : "$2b$10$YZ1fF0Mw21ntxC8vveRtpO8XHU0FyDrxhGYM/PmpJyc.XkhAi64Am",
        "role" : "Admin",
        "__v" : 0
    }
]

await Users.insertMany(mockUsers)

console.log('1 Rent, 4 Movies, 5 Users added');

