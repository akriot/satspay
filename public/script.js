document.addEventListener("DOMContentLoaded", () => {
  const albums = [
    // {
    //   year: "1987",
    //   title: "Born to Mack",
    //   tracks: ["Partytime", "Mack Attack", "Playboy Short II", "Freaky Tales", "Dope Fiend Beat", "Little Girls", "The Universal Mix"],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album01.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1988",
    //   title: "Life Is... Too Short",
    //   tracks: [
    //     "Life Is... Too Short",
    //     "Rhymes",
    //     "I Ain't Trippin'",
    //     "Nobody Does It Better",
    //     "Oakland",
    //     "Don't Fight the Feelin'",
    //     "CussWords",
    //     "City of Dope",
    //     "Pimp the Ho",
    //     "Outro",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album02.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1990",
    //   title: "Short Dog's in the House",
    //   tracks: [
    //     "Short Dog's In The House",
    //     "It's Your Life",
    //     "The Ghetto",
    //     "Short But Funky",
    //     "In The Oaktown",
    //     "Dead Or Alive",
    //     "Punk Bitch",
    //     "Ain't Nothin' But A Word To Me (with Ice Cube)",
    //     "Hard On The Boulevard",
    //     "Pimpology",
    //     "Paula & Janet",
    //     "Rap Like Me",
    //     "The Ghetto (Reprise)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album03.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1992",
    //   title: "Shorty the Pimp",
    //   tracks: [
    //     "Intro",
    //     "In The Trunk",
    //     "I Ain't Nothin' But A Dog",
    //     "Hoes",
    //     "No Love From Oakland",
    //     "I Want To Be Free",
    //     "Hoochie (feat. Dwayne Wiggins)",
    //     "Step Daddy",
    //     "It Don't Stop",
    //     "So You Wanna Be A Gangsta",
    //     "Something To Ride To (feat. Ant Banks & Pooh-Man)",
    //     "Extra Special Thanks",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album04.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1993",
    //   title: "Get In Where You Fit In",
    //   tracks: [
    //     "Don't Fight The Intro",
    //     "I'm A Player",
    //     "Just Another Day",
    //     "Gotta Get Some Lovin'",
    //     "Money In The Ghetto",
    //     "Blowjob Betty",
    //     "All My Bitches Are Gone",
    //     "The Dangerous Crew",
    //     "Get In Where You Fit In",
    //     "Playboy Short",
    //     "Way Too Real",
    //     "It's All Good",
    //     "Oakland Style",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album05.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1995",
    //   title: "Cocktails",
    //   tracks: [
    //     "Ain't Nothin' Like Pimpin'",
    //     "Cocktails",
    //     "Can I Get A Bitch",
    //     "Coming Up $hort",
    //     "Thangs Change",
    //     "Rap Paystyle",
    //     "Giving Up The Funk",
    //     "Top Down",
    //     "We Do This",
    //     "Game",
    //     "Sample The Funk",
    //     "Don't Fuck For Free",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album06.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1996",
    //   title: "Gettin' It",
    //   tracks: [
    //     "Gettin' It (feat. Parliament Funkadelic)",
    //     "Survivin' The Game",
    //     "That's Why",
    //     "Bad Ways",
    //     "Fuck My Car",
    //     "Take My Bitch",
    //     "Pimp Me",
    //     "Baby D",
    //     "Nasty Rhymes",
    //     "Never Talk Down (feat. Rappin' 4-Tay & MC Breed)",
    //     "I Must Confess",
    //     "So Watcha Sayin'",
    //     "I've Been Watching You (feat. Parliament Funkadelic)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album07.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1998",
    //   title: "Nationwide: Independence Day",
    //   tracks: [
    //     "Nationwide Independence Day",
    //     "Hit 'Em Up (feat. Short Dog)",
    //     "Independence Day (feat. Keith Murray)",
    //     "Get Your Hustle On (feat. Baby D)",
    //     "Spread Your Love (feat. Murda One)",
    //     "Abstract Hustle (feat. 38 Deep & Kat)",
    //     "When You See Me (feat. G-Side)",
    //     "All About It (feat. Pimp C of UGK)",
    //     "Time After Time (feat. Casual & Dollar Will)",
    //     "Are You Ready For This (feat. Badwayz)",
    //     "Lady Luv (feat. Zu)",
    //     "Wreckognize (feat. MDDL FNGZ)",
    //     "Paper Chase (feat. Al Block)",
    //     "Playa Hatin' Hoes (feat. Playa Playa)",
    //     "Pimpin' Ain't Easy (feat. Polyester Playas)",
    //     "Couldn't Be A Better Player (feat. Lil Jon & The Eastside Boyz)",
    //     "Don't Stop (feat. Lyrical Giants)",
    //     "Get All Your Change (feat. Big Zack & Trauma Black)",
    //     "Whatever Man (Remix feat. Redman)",
    //     "I Ain't Gonna Forget This (feat. Badwayz & Jamal)",
    //     "If I Wasn't High (feat. Studd)",
    //     "Hellbound (feat. Slink Capone)",
    //     "Who Loves Ya (feat. Jay-O-Felony)",
    //     "Same Old Song (feat. Father Dom)",
    //     "Keep It Real (feat. Silk-E-Fyne)",
    //     "Killa Team (feat. Joe Riz & George Clinton)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album08.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "1999",
    //   title: "Can't Stay Away",
    //   tracks: [
    //     "Ain't No Bitches",
    //     "Don't Trust Her (feat. Badwayz)",
    //     "G-2000 (feat. Badwayz, Zu, Al Block & Hellkilla)",
    //     "Can't Stay Away",
    //     "Can't Stay Away (Outro)",
    //     "Don't Stop Rappin' (feat. Eightball & MJG)",
    //     "Good Life",
    //     "Here We Go (feat. Jay-Z & Jermaine Dupri Remix)",
    //     "Here We Go (feat. Jay-Z & Lil Jon Remix)",
    //     "How Does It Feel (feat. Dwayne Wiggins)",
    //     "Invasion Of The Flat Booty Bitches",
    //     "Longevity (feat. Scarface)",
    //     "More Freaky Tales",
    //     "In The Studio (feat. Quint Black)",
    //     "Nation Riders (feat. Slink Capone, Murda One & G-Side)",
    //     "What Happened To The Groupies (feat. B-Legit)",
    //     "You Might Get Geed (feat. Daz, E-40 & Soopa Fly)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album09.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2000",
    //   title: "You Nasty",
    //   tracks: [
    //     "2 Bitches",
    //     "All The Time",
    //     "Anything Is Possible",
    //     "Be My Dirty Love",
    //     "Call Me Daddy",
    //     "Don't Hate The Player",
    //     "Just Like Dope",
    //     "Nation Riders Anthem",
    //     "Old School",
    //     "Pimp Shit",
    //     "Recognize Game",
    //     "She Know",
    //     "Where They At",
    //     "You Nasty",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album10.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2001",
    //   title: "Chase the Cat",
    //   tracks: [
    //     "Keep Fuckin' Me",
    //     "iluvit",
    //     "Late Night Creep",
    //     "More Freaky Tales",
    //     "This Is How We Eat",
    //     "Candy Paint",
    //     "Fire",
    //     "Can I Hit It",
    //     "Pimpin' Ken",
    //     "Domestic Violence",
    //     "Player for Life",
    //     "Analyze the Game",
    //     "Talkin' Shit",
    //     "U Stank",
    //     "Don't Ever Give Up",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album11.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2002",
    //   title: "What's My Favorite Word?",
    //   tracks: [
    //     "Triple X",
    //     "Get That Cheese",
    //     "That's Right",
    //     "The Old Fashioned Way",
    //     "Quit Hatin' 1",
    //     "Quit Hatin' 2",
    //     "Lollypops",
    //     "Female Players",
    //     "Cali O",
    //     "Pimp Life",
    //     "Call It Gangster",
    //     "Set Up",
    //     "She Loves Her",
    //     "The Movie",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album12.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2003",
    //   title: "Married to the Game",
    //   tracks: [
    //     "Choosin' (feat. Jagged Edge)",
    //     "What She Gonna Do",
    //     "That's How It Goes Down (feat. Oobie)",
    //     "You Can't Fuck With Us (feat. Petey Pablo & N.O.R.E.)",
    //     "Shake That Monkey (feat. Lil Jon & The Eastside Boyz)",
    //     "Burn Rubber",
    //     "Hey, Let's Go (feat. Devin The Dude & Cutty Cartel)",
    //     "Pimpandho.com",
    //     "Hobo Hoeing",
    //     "Get It",
    //     "Married To The Game",
    //     "California Girls",
    //     "What's A Pimp",
    //     "Don't Act Like That",
    //     "Short Short",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album13.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2006",
    //   title: "Blow the Whistle",
    //   tracks: [
    //     "Call Her A Bitch",
    //     "Blow The Whistle",
    //     "Burn Rubber 2",
    //     "Keep Bouncin' (feat. Snoop & Will.I.Am)",
    //     "Pimpin' Forever",
    //     "Money Maker (feat. Pimp C & Rick Ross)",
    //     "Strip Down",
    //     "Nothing Feels Better",
    //     "Sophisticated",
    //     "Playa",
    //     "16 Hoes (feat. Jazze Pha & Bun B)",
    //     "Baller (feat. David Banner)",
    //     "Sadity (feat. Kurupt & Daz)",
    //     "I Want Your Girl (feat. E-40, Dolla Will & F.A.B)",
    //     "It's Time To Go",
    //     "Shake It Baby",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album14.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2006",
    //   title: "Gangsters & Strippers",
    //   tracks: [
    //     "Gangsters and Strippers",
    //     "Booty Bounce Bopper (feat. The Pack)",
    //     "Oakland (feat. The Movement)",
    //     "Sugar Daddy (feat. Murda Mob & The P)",
    //     "Gang Bang Music (feat. The Up All Nite Crew & Strik)",
    //     "Moven (feat. Boo Ski of Murda Mob)",
    //     "Uno (feat. Lil Uno of The Pack)",
    //     "Dime a Dozen (feat. The Up All Nite)",
    //     "Run Up (feat. The Up All Nite)",
    //     "Come and See About Me (feat. Murda Mob)",
    //     "Girl Get Your Money (feat. Malika Shanell)",
    //     "Let's Get High (feat. Ice Mizzle & G-Q)",
    //     "Greatest P (feat. I & Dolla Will)",
    //     "What's That About (feat. Murda Mob)",
    //     "It's the Mob (feat. Murda Mob)",
    //     "Fight Fair (feat. The Pack)",
    //     "Show Me How U Do It",
    //     "Birthday Suite (feat. Dolla Will & Play)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album15.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2006",
    //   title: "Pimpin' Inc",
    //   tracks: [
    //     "A Pimp's Theme Song",
    //     "Hard On A Bitch",
    //     "Where The Pimps At (feat. Kool Ace)",
    //     "I'm Pimpin'",
    //     "Keep It Real (feat. Hoe Mobb, Deep Murda One)",
    //     "I'm A Pimp (feat. 50 Cent & UGK)",
    //     "Pimpin' Forever (feat. Jazze Pha & Big Zak)",
    //     "Back Back (feat. The Bishop of Crunk)",
    //     "Six Figga Niggas (feat. Jay-Z, B.G., Lil Jon & Chyna Whyte)",
    //     "Buy U Some 2 (feat. Erick Sermon & Lloyd)",
    //     "I'm Wit It (feat. The Game)",
    //     "Cootie Cootie Coo (feat. E-40)",
    //     "I Wanna Do It",
    //     "Tear It Up (Remix feat. Young Jeezy & Lloyd)",
    //     "Blind Man (Interlude)",
    //     "Pimpin' Inc (feat. Shanell)",
    //     "I Wanna Pimp You Hoe",
    //     "The Hater (Interlude)",
    //     "Fuck Them (feat. The Bishop of Crunk)",
    //     "One Love (feat. New Edition)",
    //     "We Want It (feat. C-Bo)",
    //     "About That Money (feat. P. Diddy Outro)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album16.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2007",
    //   title: "Get Off the Stage",
    //   tracks: [
    //     "Get Off The Stage",
    //     "Broke Bitch",
    //     "This My One (feat. E-40)",
    //     "Shittin' On 'Em",
    //     "F.U.C.K.Y.O.U (feat. Mistah F.A.B, MS Hollywood & Ginger)",
    //     "Gangstas & Strippers",
    //     "Dum Ditty Dum (feat. The Pack)",
    //     "Pull Them Panties Down (feat. Kool Ace)",
    //     "I Like It (feat. Dolla Will)",
    //     "It Ain't Over (feat. Tanu)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album17.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2010",
    //   title: "Respect the Pimpin'",
    //   tracks: [
    //     "Bitch I'm A Pimp",
    //     "Respect The Pimpin' (feat. Snoop Dogg, Silk-E & Elijah Baker)",
    //     "That's Not Your Bitch (feat. Jazze Pha)",
    //     "Get Ya Money",
    //     "Y'all Ready (feat. Mac Minister & Richie Rich)",
    //     "Bitches Need Love Too (feat. Jazze Pha)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album18.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2010",
    //   title: "Still Blowin'",
    //   tracks: [
    //     "Maggot Brain (feat. Silk-E)",
    //     "I'm Gone",
    //     "I Want That",
    //     "Fed Up (feat. Kool Ace)",
    //     "Player Card (feat. SNL)",
    //     "Still Blowin'",
    //     "All For Love (feat. Town Bizness)",
    //     "I'm A Pimp (feat. Earl Hayes)",
    //     "Checking My Hoes (feat. Baby & Jazze Pha)",
    //     "Lil Shorty",
    //     "International Player",
    //     "Porno Bitch",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album19.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2012",
    //   title: "E-40 Function",
    //   tracks: [
    //     "This Shit Pound (feat. Stressmatic)",
    //     "Slide Through (feat. Tyga)",
    //     "Smoke That Shit",
    //     "Let's Have A Party (feat. Cousin Fik & Knotch)",
    //     "Dump Truck (feat. Travis Porter & Young Chu)",
    //     "Singles",
    //     "Entrepreneur",
    //     "Bout My Money (feat. Jeremih & Turf Talk)",
    //     "Say I (feat. Wiz Khalifa)",
    //     "Workin' The Trunk",
    //     "West Coast Shit (feat. Ice Cube)",
    //     "One Foot (feat. Suga Free)",
    //     "Check That Bitch",
    //     "Everyday",
    //     "Let Me See You Twerk (feat. Dolla Will)",
    //     "Toasted (feat. Decadez)",
    //     "Cali",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album21.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2012",
    //   title: "E-40 Mob",
    //   tracks: [
    //     "We Are The Pioneers",
    //     "Sheesh (feat. Stressmatic)",
    //     "Fire Fighter (feat. Knotch)",
    //     "Whip Out",
    //     "Money Motivated",
    //     "Ballin' Is Fun (feat. B-Legit)",
    //     "Ride With Me",
    //     "Do You Remember (feat. Kurupt & Battlecat)",
    //     "Street Money",
    //     "My Stapler",
    //     "I Don't Work For Nobody",
    //     "Ask About Me (feat. B-Legit)",
    //     "If We Ain't Fuckin' (feat. T. Nelson)",
    //     "Gang Of 'Em (feat. Beeda Weeda & Rankin' Scroo)",
    //     "Knockin' A Bitch",
    //     "Poncherellos (feat. Stressmatic)",
    //     "Stressin'",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album22.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2012",
    //   title: "No Trespassing",
    //   tracks: [
    //     "What The Fuck",
    //     "Get Her Like",
    //     "Playa Fo Life",
    //     "Trying To Come Up (feat. C.O.)",
    //     "Cush Cologne (feat. Rico The Kidd & DJ Upgrade)",
    //     "The Magazine (feat. Chase Hattan)",
    //     "I Got Caught (feat. Martin Luther)",
    //     "I'm A Stop (feat. 50 Cent)",
    //     "Hog Ridin' (feat. Richie Rich)",
    //     "Porno Bitch",
    //     "Shut Up Nancy (feat. Kokane)",
    //     "Boss (feat. Silk-E)",
    //     "Hey (feat. Silk-E)",
    //     "Money On The Floor (feat. E-40)",
    //     "Double Header (feat. Wallpaper)",
    //     "Respect The Pimpin' (feat. Snoop Dogg)",
    //     "Da Boom Cha (feat. DB The General, Rico The Kid, DJ Upgrade, Prince Lefty, Ginger & Yung Lott)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album20.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2014",
    //   title: "19999",
    //   tracks: [
    //     "19999",
    //     "I'm Trippin' (feat. Mistah F.A.B & The Hoodstarz)",
    //     "Booty Tricks (feat. Reject Bounce & Extindo Gang)",
    //     "On The Weekend (feat. V. Bozeman, Holiday Reign & Reject)",
    //     "Latina Love",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album23.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2018",
    //   title: "The Pimp Tape",
    //   tracks: [
    //     "Go $hort Dog",
    //     "Break A Bitch",
    //     "Tables",
    //     "Ain't My Girlfriend",
    //     "Give Her Some Money",
    //     "Save All That Love",
    //     "How To Be A Player",
    //     "Pull Yo Trophies Out",
    //     "Don't Shoot",
    //     "Dr. Dre (Interlude)",
    //     "The Game Taught Me",
    //     "Give Me Back My Eyes",
    //     "Only Dimes",
    //     "Twerk Train",
    //     "Sexy Dancer",
    //     "I Got Shit To Do",
    //     "Pay Her",
    //     "$hort Dog Wedding",
    //     "Pop That Pussy",
    //     "How To Be A Player (Reprise)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album24.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2019",
    //   title: "The Vault",
    //   tracks: [
    //     "Bancroft",
    //     "Mercy",
    //     "All Bitches Ain't Women",
    //     "Whatcha Got (feat. Pimp C)",
    //     "Me And Ya Momma (feat. Mike Epps)",
    //     "No Time For That (feat. Mistah F.A.B)",
    //     "Bigger Than The Both of Us (feat. Gin Gin)",
    //     "Burn Rubber On A Bitch",
    //     "Pimp School",
    //     "Information",
    //     "You Say It (feat. Yung Holliday)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album25.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2020",
    //   title: "Terms & Conditions (with E-40)",
    //   tracks: [
    //     "Ain't Gone Do It",
    //     "Oaklandish",
    //     "Digital Trick",
    //     "Pimpin's All I Know",
    //     "10k (Remix)",
    //     "Real Oakland",
    //     "Triple Gold Sox",
    //     "Good Pussy Walk",
    //     "I Stay Up",
    //     "Fuck Yo Speakers",
    //     "Making a Play",
    //     "MOB",
    //     "Still",
    //     "Pass the Chalice",
    //     "Girl I See You Winning",
    //     "Swangin'",
    //     "Dapper Don",
    //     "Dress Like a D Boy",
    //     "Tricks",
    //     "Ps and Qs",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album26.jpg",
    //   price: 17000,
    // },
    // {
    //   year: "2023",
    //   title: "Mt. Westmore",
    //   tracks: [
    //     "California (feat. E-40, Ice Cube & Snoop)",
    //     "Motto (feat. E-40, Ice Cube & Snoop)",
    //     "Big Subwoofer (feat. E-40, Ice Cube & Snoop)",
    //     "Too Big (feat. E-40, Ice Cube & Snoop)",
    //     "Activated (feat. E-40, Ice Cube & Snoop)",
    //     "Have a Nice Day (feat. E-40, Ice Cube & Snoop)",
    //     "Ghetto Gutter (feat. E-40, Ice Cube & Snoop)",
    //     "Free Game (feat. E-40, Ice Cube & Snoop)",
    //     "I Got Pull (feat. E-40, Ice Cube & Snoop)",
    //     "Up and Down (feat. E-40, Ice Cube & Snoop)",
    //     "Do My Best (feat. E-40, Ice Cube & Snoop)",
    //     "Lace You Up (feat. E-40, Ice Cube & Snoop)",
    //     "Tribal (feat. E-40, Ice Cube & Snoop)",
    //     "How Many (feat. E-40, Ice Cube & Snoop)",
    //     "On Camera (feat. E-40, Ice Cube & Snoop)",
    //     "Mash (feat. E-40, Ice Cube & Snoop)",
    //   ],
    //   image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album30.jpg",
    //   price: 17000,
    // },
    {
      year: "1987",
      title: "Born to Mack",
      tracks: [
        { title: "Partytime", url: "https://cryptostream.tech/ts/0001_too_short_1987_born_to_mack_01_Partytime.mp3" },
        { title: "Mack Attack", url: "https://cryptostream.tech/ts/0002_too_short_1987_born_to_mack_02_Mack_Attack.mp3" },
        { title: "Playboy Short II", url: "https://cryptostream.tech/ts/0003_too_short_1987_born_to_mack_03_Playboy_short_II.mp3" },
        { title: "Freaky Tales", url: "https://cryptostream.tech/ts/0004_too_short_1987_born_to_mack_05_Freaky_Tales.mp3" },
        { title: "Dope Fiend Beat", url: "https://cryptostream.tech/ts/0005_too_short_1987_born_to_mack_06_Dope_Fiend_Beat.mp3" },
        { title: "Little Girls", url: "https://cryptostream.tech/ts/0006_too_short_1987_born_to_mack_07_Little_Girls.mp3" },
        { title: "The Universal Mix", url: "https://cryptostream.tech/ts/0007_too_short_1987_born_to_mack_08_The_Universal_Mix.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album01.jpg",
      price: 17000,
    },
    {
      year: "1988",
      title: "Life Is... Too Short",
      tracks: [
        { title: "Life Is... Too Short", url: "https://cryptostream.tech/ts/0009_too_short_1988_life_is_too_short_01_Life_Is_Too_Short.mp3" },
        { title: "Rhymes", url: "https://cryptostream.tech/ts/0010_too_short_1988_life_is_too_short_02_Rhymes.mp3" },
        { title: "I Ain't Trippin'", url: "https://cryptostream.tech/ts/0011_too_short_1988_life_is_too_short_03_I_Aint_Trippn.mp3" },
        { title: "Nobody Does It Better", url: "https://cryptostream.tech/ts/0012_too_short_1988_life_is_too_short_04_Nobody_Does_It_Better.mp3" },
        { title: "Oakland", url: "https://cryptostream.tech/ts/0013_too_short_1988_life_is_too_short_05_Oakland.mp3" },
        { title: "Don't Fight the Feelin'", url: "https://cryptostream.tech/ts/0014_too_short_1988_life_is_too_short_06_Dont_Fight_The_Feelin.mp3" },
        { title: "CussWords", url: "https://cryptostream.tech/ts/0015_too_short_1988_life_is_too_short_07_CussWords.mp3" },
        { title: "City of Dope", url: "https://cryptostream.tech/ts/0016_too_short_1988_life_is_too_short_08_City_of_Dope.mp3" },
        { title: "Pimp the Ho", url: "https://cryptostream.tech/ts/0017_too_short_1988_life_is_too_short_09_Pimp_the_Ho.mp3" },
        { title: "Outro", url: "https://cryptostream.tech/ts/0018_too_short_1988_life_is_too_short_10_Outro.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album02.jpg",
      price: 17000,
    },
    {
      year: "1990",
      title: "Short Dog's in the House",
      tracks: [
        { title: "Short Dog's In The House", url: "https://cryptostream.tech/ts/0020_too_short_1990_short_dogs_in_the_house_01_Short_Dogs_In_The_House.mp3" },
        { title: "It's Your Life", url: "https://cryptostream.tech/ts/0021_too_short_1990_short_dogs_in_the_house_02_Its_Your_Life.mp3" },
        { title: "The Ghetto", url: "https://cryptostream.tech/ts/0022_too_short_1990_short_dogs_in_the_house_03_The_Ghetto.mp3" },
        { title: "Short But Funky", url: "https://cryptostream.tech/ts/0023_too_short_1990_short_dogs_in_the_house_04_Short_But_Funky.mp3" },
        { title: "In The Oaktown", url: "https://cryptostream.tech/ts/0024_too_short_1990_short_dogs_in_the_house_05_In_The_Oaktown.mp3" },
        { title: "Dead Or Alive", url: "https://cryptostream.tech/ts/0025_too_short_1990_short_dogs_in_the_house_06_Dead_Or_Alive.mp3" },
        { title: "Punk Bitch", url: "https://cryptostream.tech/ts/0026_too_short_1990_short_dogs_in_the_house_07_Punk_Bitch.mp3" },
        { title: "Ain't Nothin' But A Word To Me (with Ice Cube)", url: "https://cryptostream.tech/ts/0027_too_short_1990_short_dogs_in_the_house_08_Aint_Nothin_But_A_Word_To_Me_with_Ice_Cube.mp3" },
        { title: "Hard On The Boulevard", url: "https://cryptostream.tech/ts/0028_too_short_1990_short_dogs_in_the_house_09_Hard_On_The_Boulevard.mp3" },
        { title: "Pimpology", url: "https://cryptostream.tech/ts/0029_too_short_1990_short_dogs_in_the_house_10_Pimpology.mp3" },
        { title: "Paula & Janet", url: "https://cryptostream.tech/ts/0030_too_short_1990_short_dogs_in_the_house_11_Paula_Janet.mp3" },
        { title: "Rap Like Me", url: "https://cryptostream.tech/ts/0031_too_short_1990_short_dogs_in_the_house_12_Rap_Like_Me.mp3" },
        { title: "The Ghetto (Reprise)", url: "https://cryptostream.tech/ts/0032_too_short_1990_short_dogs_in_the_house_13_The_GhettoReprise.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album03.jpg",
      price: 17000,
    },
    {
      year: "1992",
      title: "Shorty the Pimp",
      tracks: [
        { title: "Intro", url: "https://cryptostream.tech/ts/0034_too_short_1992_shorty_the_pimp_01_intro.mp3" },
        { title: "In The Trunk", url: "https://cryptostream.tech/ts/0035_too_short_1992_shorty_the_pimp_02_in_the_trunk.mp3" },
        { title: "I Ain't Nothin' But A Dog", url: "https://cryptostream.tech/ts/0036_too_short_1992_shorty_the_pimp_03_i_aint_nothing_but_a_dog.mp3" },
        { title: "Hoes", url: "https://cryptostream.tech/ts/0037_too_short_1992_shorty_the_pimp_04_hoes.mp3" },
        { title: "No Love From Oakland", url: "https://cryptostream.tech/ts/0038_too_short_1992_shorty_the_pimp_05_no_love_from_oakland.mp3" },
        { title: "I Want To Be Free", url: "https://cryptostream.tech/ts/0039_too_short_1992_shorty_the_pimp_06_i_want_to_be_free.mp3" },
        { title: "Hoochie (feat. Dwayne Wiggins)", url: "https://cryptostream.tech/ts/0040_too_short_1992_shorty_the_pimp_07_hoochie_feat_dwayne_wiggins.mp3" },
        { title: "Step Daddy", url: "https://cryptostream.tech/ts/0041_too_short_1992_shorty_the_pimp_08_step_daddy.mp3" },
        { title: "It Don't Stop", url: "https://cryptostream.tech/ts/0042_too_short_1992_shorty_the_pimp_09_it_dont_stop.mp3" },
        { title: "So You Wanna Be A Gangsta", url: "https://cryptostream.tech/ts/0043_too_short_1992_shorty_the_pimp_10_so_you_wanna_be_a_gangsta.mp3" },
        { title: "Something To Ride To (feat. Ant Banks and Pooh Man)", url: "https://cryptostream.tech/ts/0044_too_short_1992_shorty_the_pimp_11_something_to_ride_to_feat_ant_banks_and_pooh_man.mp3" },
        { title: "Extra Special Thanks", url: "https://cryptostream.tech/ts/0045_too_short_1992_shorty_the_pimp_12_extra_special_thanks.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album04.jpg",
      price: 17000,
    },
    {
      year: "1993",
      title: "Get In Where You Fit In",
      tracks: [
        { title: "Don't Fight The Intro", url: "https://cryptostream.tech/ts/0047_too_short_1993_get_in_where_you_fit_in_01_Dont_Fight_The_Intro.mp3" },
        { title: "I'm A Player", url: "https://cryptostream.tech/ts/0048_too_short_1993_get_in_where_you_fit_in_02_Im_A_Player.mp3" },
        { title: "Just Another Day", url: "https://cryptostream.tech/ts/0049_too_short_1993_get_in_where_you_fit_in_03_Just_Another_Day.mp3" },
        { title: "Gotta Get Some Lovin'", url: "https://cryptostream.tech/ts/0050_too_short_1993_get_in_where_you_fit_in_04_Gotta_Get_Some_Lovin.mp3" },
        { title: "Money In The Ghetto", url: "https://cryptostream.tech/ts/0051_too_short_1993_get_in_where_you_fit_in_05_Money_In_The_Ghetto.mp3" },
        { title: "Blowjob Betty", url: "https://cryptostream.tech/ts/0052_too_short_1993_get_in_where_you_fit_in_06_Blowjob_Betty.mp3" },
        { title: "All My Bitches Are Gone", url: "https://cryptostream.tech/ts/0053_too_short_1993_get_in_where_you_fit_in_07_All_My_Bitches_Are_Gone.mp3" },
        { title: "The Dangerous Crew", url: "https://cryptostream.tech/ts/0054_too_short_1993_get_in_where_you_fit_in_08_The_Dangerous_Crew.mp3" },
        { title: "Get In Where You Fit In", url: "https://cryptostream.tech/ts/0055_too_short_1993_get_in_where_you_fit_in_09_Get_In_Where_You_Fit_In.mp3" },
        { title: "Playboy Short", url: "https://cryptostream.tech/ts/0056_too_short_1993_get_in_where_you_fit_in_10_Playboy_Short.mp3" },
        { title: "Way Too Real", url: "https://cryptostream.tech/ts/0057_too_short_1993_get_in_where_you_fit_in_11_Way_Too_Real.mp3" },
        { title: "It's All Good", url: "https://cryptostream.tech/ts/0058_too_short_1993_get_in_where_you_fit_in_12_Its_All_Good.mp3" },
        { title: "Oakland Style", url: "https://cryptostream.tech/ts/0059_too_short_1993_get_in_where_you_fit_in_13_Oakland_Style.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album05.jpg",
      price: 17000,
    },
    {
      year: "1995",
      title: "Cocktails",
      tracks: [
        { title: "Ain't Nothing Like Pimpin'", url: "https://cryptostream.tech/ts/0060_too_short_1995_cocktails_01_Tooshort_Aint_Nothing_Like_Pimpin.mp3" },
        { title: "Cocktails", url: "https://cryptostream.tech/ts/0061_too_short_1995_cocktails_02_Cocktails.mp3" },
        { title: "Can I Get A Bitch", url: "https://cryptostream.tech/ts/0062_too_short_1995_cocktails_03_Can_I_Get_A_Bitch.mp3" },
        { title: "Coming Up $hort", url: "https://cryptostream.tech/ts/0063_too_short_1995_cocktails_04_Coming_Up_$hort.mp3" },
        { title: "Thangs Change", url: "https://cryptostream.tech/ts/0064_too_short_1995_cocktails_05_Thangs_Change.mp3" },
        { title: "Rap Paystyle", url: "https://cryptostream.tech/ts/0065_too_short_1995_cocktails_06_Rap_Paystyle.mp3" },
        { title: "Giving Up The Funk", url: "https://cryptostream.tech/ts/0066_too_short_1995_cocktails_07_Giving_Up_The_Funk.mp3" },
        { title: "Top Down", url: "https://cryptostream.tech/ts/0067_too_short_1995_cocktails_08_Top_Down.mp3" },
        { title: "We Do This", url: "https://cryptostream.tech/ts/0068_too_short_1995_cocktails_09_We_Do_This.mp3" },
        { title: "Game", url: "https://cryptostream.tech/ts/0069_too_short_1995_cocktails_10_Game.mp3" },
        { title: "Sample The Funk", url: "https://cryptostream.tech/ts/0070_too_short_1995_cocktails_11_Sample_The_Funk.mp3" },
        { title: "Don't Fuck For Free", url: "https://cryptostream.tech/ts/0071_too_short_1995_cocktails_12_Dont_Fuck_For_Free.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album06.jpg",
      price: 17000,
    },
    {
      year: "1996",
      title: "Gettin' It",
      tracks: [
        { title: "Gettin' It (feat. Parliament-Funkadelic)", url: "https://cryptostream.tech/ts/0073_too_short_1996_gettin_it_01_Gettin_It_Ft_Parliament_Funkadelic.mp3" },
        { title: "Survivin' The Game", url: "https://cryptostream.tech/ts/0074_too_short_1996_gettin_it_02_Survivin_The_Game.mp3" },
        { title: "That's Why", url: "https://cryptostream.tech/ts/0075_too_short_1996_gettin_it_03_Thats_Why.mp3" },
        { title: "Bad Ways", url: "https://cryptostream.tech/ts/0076_too_short_1996_gettin_it_04_Bad_Ways.mp3" },
        { title: "Fuck My Car", url: "https://cryptostream.tech/ts/0077_too_short_1996_gettin_it_05_Fuck_My_Car.mp3" },
        { title: "Take My Bitch", url: "https://cryptostream.tech/ts/0078_too_short_1996_gettin_it_06_Take_My_Bitch.mp3" },
        { title: "Pimp Me", url: "https://cryptostream.tech/ts/0079_too_short_1996_gettin_it_08_Pimp_Me.mp3" },
        { title: "Baby D", url: "https://cryptostream.tech/ts/0080_too_short_1996_gettin_it_09_Baby_D.mp3" },
        { title: "Nasty Rhymes", url: "https://cryptostream.tech/ts/0081_too_short_1996_gettin_it_10_Nasty_Rhymes.mp3" },
        { title: "Never Talk Down (feat. Rappin' 4-Tay & MC Breed)", url: "https://cryptostream.tech/ts/0082_too_short_1996_gettin_it_11_Never_Talk_Down_Rappin_4_Tay_Mc_Breed.mp3" },
        { title: "I Must Confess", url: "https://cryptostream.tech/ts/0083_too_short_1996_gettin_it_12_I_Must_Confess.mp3" },
        { title: "So Watcha Sayin'", url: "https://cryptostream.tech/ts/0084_too_short_1996_gettin_it_13_So_Watcha_Sayin.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album07.jpg",
      price: 17000,
    },
    {
      year: "1998",
      title: "Nationwide: Independence Day",
      tracks: [
        { title: "Short Dog Hit 'Em Up", url: "https://cryptostream.tech/ts/0088_too_short_1998_nationwide_independence_day_101too_short_short_dog_hit_em_up.mp3" },
        { title: "Independence Day (with Keith Murray)", url: "https://cryptostream.tech/ts/0089_too_short_1998_nationwide_independence_day_102_with_keith_murray_independence_day.mp3" },
        { title: "Get Your Hustle On (feat. Baby D)", url: "https://cryptostream.tech/ts/0090_too_short_1998_nationwide_independence_day_103_baby_d_featuringtoo_short_get_your_hustle_on.mp3" },
        { title: "Spread Your Love (feat. Murda One)", url: "https://cryptostream.tech/ts/0091_too_short_1998_nationwide_independence_day_104_murda_one_spread_your_love.mp3" },
        { title: "Abstract Hustle (feat. 38 Deep & Kat)", url: "https://cryptostream.tech/ts/0092_too_short_1998_nationwide_independence_day_105_38_deep_and_kat_abstract_hustle.mp3" },
        { title: "When You See Me (feat. G Side)", url: "https://cryptostream.tech/ts/0093_too_short_1998_nationwide_independence_day_106_g_side_when_you_see_me.mp3" },
        { title: "All About It (feat. Pimp C of UGK)", url: "https://cryptostream.tech/ts/0094_too_short_1998_nationwide_independence_day_107_and_pimp_c_of_ugk_all_about_it.mp3" },
        { title: "Time After Time (feat. Casual & Dollar Will)", url: "https://cryptostream.tech/ts/0095_too_short_1998_nationwide_independence_day_108_casual_and_dollar_will_time_after_time.mp3" },
        { title: "Are You Ready For This (feat. Badwayz)", url: "https://cryptostream.tech/ts/0096_too_short_1998_nationwide_independence_day_109_badwayz_are_you_ready_for_this.mp3" },
        { title: "Lady Luv (feat. Zu)", url: "https://cryptostream.tech/ts/0097_too_short_1998_nationwide_independence_day_110_zu_lady_luv.mp3" },
        { title: "Wreckognize (feat. Mddl Fngz)", url: "https://cryptostream.tech/ts/0098_too_short_1998_nationwide_independence_day_111_mddl_fngz_wreckognize.mp3" },
        { title: "Paper Chase (feat. Al Block)", url: "https://cryptostream.tech/ts/0099_too_short_1998_nationwide_independence_day_112_al_block_paper_chase.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album08.jpg",
      price: 17000,
    },
    {
      year: "2000",
      title: "You Nasty",
      tracks: [
        { title: "Bitches", url: "https://cryptostream.tech/ts/0131_too_short_2000_you_nasty_2_Bitches.mp3" },
        { title: "All The Time", url: "https://cryptostream.tech/ts/0132_too_short_2000_you_nasty_All_The_Time.mp3" },
        { title: "Anything Is Possible", url: "https://cryptostream.tech/ts/0133_too_short_2000_you_nasty_Anything_Is_Possible.mp3" },
        { title: "Be My Dirty Love", url: "https://cryptostream.tech/ts/0134_too_short_2000_you_nasty_Be_My_Dirty_Love.mp3" },
        { title: "Call Me Daddy", url: "https://cryptostream.tech/ts/0135_too_short_2000_you_nasty_Call_Me_Daddy.mp3" },
        { title: "Don't Hate The Player", url: "https://cryptostream.tech/ts/0136_too_short_2000_you_nasty_Dont_Hate_The_Player.mp3" },
        { title: "Just Like Dope", url: "https://cryptostream.tech/ts/0137_too_short_2000_you_nasty_Just_Like_Dope.mp3" },
        { title: "Nation Riders Anthem", url: "https://cryptostream.tech/ts/0138_too_short_2000_you_nasty_Nation_Riders_Anthem.mp3" },
        { title: "Old School", url: "https://cryptostream.tech/ts/0139_too_short_2000_you_nasty_Old_School.mp3" },
        { title: "Pimp Shit", url: "https://cryptostream.tech/ts/0140_too_short_2000_you_nasty_Pimp_Shit.mp3" },
        { title: "Recognize Game", url: "https://cryptostream.tech/ts/0141_too_short_2000_you_nasty_Recognize_Game.mp3" },
        { title: "She Know", url: "https://cryptostream.tech/ts/0142_too_short_2000_you_nasty_She_Know.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album09.jpg",
      price: 17000,
    },
    {
      year: "2002",
      title: "What's My Favorite Word?",
      tracks: [
        { title: "Triple X", url: "https://cryptostream.tech/ts/0160_too_short_2002_whats_my_favorite_word_01_Triple_X.mp3" },
        { title: "Get That Cheese", url: "https://cryptostream.tech/ts/0161_too_short_2002_whats_my_favorite_word_02_Get_That_Cheese.mp3" },
        { title: "That's Right", url: "https://cryptostream.tech/ts/0162_too_short_2002_whats_my_favorite_word_03_Thats_Right.mp3" },
        { title: "The Old Fashioned Way", url: "https://cryptostream.tech/ts/0163_too_short_2002_whats_my_favorite_word_04_The_Old_Fashioned_Way.mp3" },
        { title: "Quit Hatin' 1", url: "https://cryptostream.tech/ts/0164_too_short_2002_whats_my_favorite_word_05_Quit_Hatin_1.mp3" },
        { title: "Quit Hatin' 2", url: "https://cryptostream.tech/ts/0165_too_short_2002_whats_my_favorite_word_06_Quit_Hatin_2.mp3" },
        { title: "Lollypops", url: "https://cryptostream.tech/ts/0166_too_short_2002_whats_my_favorite_word_07_Lollypops.mp3" },
        { title: "Female Players", url: "https://cryptostream.tech/ts/0167_too_short_2002_whats_my_favorite_word_08_Female_Players.mp3" },
        { title: "Cali-O", url: "https://cryptostream.tech/ts/0168_too_short_2002_whats_my_favorite_word_09_Cali_O.mp3" },
        { title: "Pimp Life", url: "https://cryptostream.tech/ts/0169_too_short_2002_whats_my_favorite_word_10_Pimp_Life.mp3" },
        { title: "Call It Gangster", url: "https://cryptostream.tech/ts/0170_too_short_2002_whats_my_favorite_word_11_Call_It_Gangster.mp3" },
        { title: "Set Up", url: "https://cryptostream.tech/ts/0171_too_short_2002_whats_my_favorite_word_12_Set_Up.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album10.jpg",
      price: 17000,
    },
    {
      year: "2003",
      title: "Married to the Game",
      tracks: [
        { title: "Choosin'", url: "https://cryptostream.tech/ts/0191_too_short_2003_married_to_the_game_01_choosin.mp3" },
        { title: "What She Gonna Do?", url: "https://cryptostream.tech/ts/0192_too_short_2003_married_to_the_game_02_what_she_gonna_do.mp3" },
        { title: "That's How It Goes Down", url: "https://cryptostream.tech/ts/0193_too_short_2003_married_to_the_game_03_thats_how_it_goes_down.mp3" },
        { title: "Getting It", url: "https://cryptostream.tech/ts/0194_too_short_2003_married_to_the_game_04_getting_it.mp3" },
        { title: "Married To The Game", url: "https://cryptostream.tech/ts/0195_too_short_2003_married_to_the_game_05_married_to_the_game.mp3" },
        { title: "California Girls", url: "https://cryptostream.tech/ts/0196_too_short_2003_married_to_the_game_06_california_girls.mp3" },
        { title: "PimpandHo.com", url: "https://cryptostream.tech/ts/0197_too_short_2003_married_to_the_game_07_pimpandho.com.mp3" },
        { title: "Get It Crunk", url: "https://cryptostream.tech/ts/0198_too_short_2003_married_to_the_game_08_get_it_crunk.mp3" },
        { title: "Shake That Monkey", url: "https://cryptostream.tech/ts/0199_too_short_2003_married_to_the_game_09_shake_that_monkey.mp3" },
        { title: "Burn Rubber Part 2", url: "https://cryptostream.tech/ts/0200_too_short_2003_married_to_the_game_10_burn_rubber_part_2.mp3" },
        { title: "Pimp On", url: "https://cryptostream.tech/ts/0201_too_short_2003_married_to_the_game_11_pimp_on.mp3" },
        { title: "Hobo Hoeing", url: "https://cryptostream.tech/ts/0202_too_short_2003_married_to_the_game_12_hobo_hoeing.mp3" },
        { title: "Shake That Monkey (Clean)", url: "https://cryptostream.tech/ts/0203_too_short_2003_married_to_the_game_13_shake_that_monkey_clean.mp3" },
        { title: "Get It", url: "https://cryptostream.tech/ts/0204_too_short_2003_married_to_the_game_14_get_it.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album11.jpg",
      price: 17000,
    },
    {
      year: "2006",
      title: "Blow the Whistle",
      tracks: [
        { title: "Call Her a Bitch", url: "https://cryptostream.tech/ts/0221_too_short_2006_blow_the_whistle_01_call_her_a_bitch.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0222_too_short_2006_blow_the_whistle_02_burn_rubber.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0223_too_short_2006_blow_the_whistle_03_keep_bouncin.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0224_too_short_2006_blow_the_whistle_04_heart_of_the_city.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0225_too_short_2006_blow_the_whistle_05_blow_the_whistle.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0226_too_short_2006_blow_the_whistle_06_what_happened.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0227_too_short_2006_blow_the_whistle_07_how_does_it_feel.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0228_too_short_2006_blow_the_whistle_08_how_does_it_feel.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0229_too_short_2006_blow_the_whistle_09_playboy_short_2.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0230_too_short_2006_blow_the_whistle_10_nothin_feels_better.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0231_too_short_2006_blow_the_whistle_11_17_5.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0232_too_short_2006_blow_the_whistle_12_pimpin_forever.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0233_too_short_2006_blow_the_whistle_13_i_want_your_girl.mp3" },
        { title: "Burn Rubber", url: "https://cryptostream.tech/ts/0234_too_short_2006_blow_the_whistle_14_buddha.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album12.jpg",
      price: 17000,
    },
    {
      year: "2007",
      title: "Get off the Stage",
      tracks: [
        { title: "Gangsters & Strippers", url: "https://cryptostream.tech/ts/0247_too_short_2007_get_off_the_stage_01_gangsters_strippers.mp3" },
        { title: "This My One", url: "https://cryptostream.tech/ts/0248_too_short_2007_get_off_the_stage_02_this_my_one.mp3" },
        { title: "Fuckin' U Right", url: "https://cryptostream.tech/ts/0249_too_short_2007_get_off_the_stage_03_fuckin_u_right.mp3" },
        { title: "I Like It", url: "https://cryptostream.tech/ts/0250_too_short_2007_get_off_the_stage_04_i_like_it.mp3" },
        { title: "Pimp Shit", url: "https://cryptostream.tech/ts/0251_too_short_2007_get_off_the_stage_05_pimp_shit.mp3" },
        { title: "It Ain't Over", url: "https://cryptostream.tech/ts/0252_too_short_2007_get_off_the_stage_06_it_aint_over.mp3" },
        { title: "Sick Wid It", url: "https://cryptostream.tech/ts/0253_too_short_2007_get_off_the_stage_07_sick_wid_it.mp3" },
        { title: "Skip The Talking", url: "https://cryptostream.tech/ts/0254_too_short_2007_get_off_the_stage_08_skip_the_talking.mp3" },
        { title: "Pull Them Panties Down", url: "https://cryptostream.tech/ts/0255_too_short_2007_get_off_the_stage_09_pull_them_panties_down.mp3" },
        { title: "Onions", url: "https://cryptostream.tech/ts/0256_too_short_2007_get_off_the_stage_10_onions.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album13.jpg",
      price: 17000,
    },
    {
      year: "2008",
      title: "Still Blowin'",
      tracks: [
        { title: "I Love My Momma", url: "https://cryptostream.tech/ts/0257_too_short_2008_still_blowin_01_i_love_my_momma.mp3" },
        { title: "Big Dawgs (feat. Rick Ross)", url: "https://cryptostream.tech/ts/0258_too_short_2008_still_blowin_02_big_dawgs_feat_rick_ross.mp3" },
        { title: "Sugar Daddy (feat. Trey Songz)", url: "https://cryptostream.tech/ts/0259_too_short_2008_still_blowin_03_sugar_daddy_feat_trey_songz.mp3" },
        { title: "Shut You Down (feat. Trick Daddy)", url: "https://cryptostream.tech/ts/0260_too_short_2008_still_blowin_04_shut_you_down_feat_trick_daddy.mp3" },
        { title: "So Hot (feat. Lil Jon & Ice Cube)", url: "https://cryptostream.tech/ts/0261_too_short_2008_still_blowin_05_so_hot_feat_lil_jon_ice_cube.mp3" },
        { title: "Life Of The Party", url: "https://cryptostream.tech/ts/0262_too_short_2008_still_blowin_06_life_of_the_party.mp3" },
        { title: "Bitch I'm A Player", url: "https://cryptostream.tech/ts/0263_too_short_2008_still_blowin_07_bitch_im_a_player.mp3" },
        { title: "Erin", url: "https://cryptostream.tech/ts/0264_too_short_2008_still_blowin_08_erin.mp3" },
        { title: "Still Blowin'", url: "https://cryptostream.tech/ts/0265_too_short_2008_still_blowin_09_still_blowin.mp3" },
        { title: "I Wanna Fuck You", url: "https://cryptostream.tech/ts/0266_too_short_2008_still_blowin_10_i_wanna_fuck_you.mp3" },
        { title: "If You Fuckin' Tonight (feat. Snoop Dogg)", url: "https://cryptostream.tech/ts/0267_too_short_2008_still_blowin_11_if_you_fuckin_tonight_feat_snoop_dogg.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album14.jpg",
      price: 17000,
    },
    {
      year: "2010",
      title: "Respect the Game",
      tracks: [
        { title: "Respect the Game", url: "https://cryptostream.tech/ts/0268_too_short_2010_respect_the_game_01_respect_the_game.mp3" },
        { title: "Break the Bank", url: "https://cryptostream.tech/ts/0269_too_short_2010_respect_the_game_02_break_the_bank.mp3" },
        { title: "Shut Up Lil Bitch (feat. 50 Cent)", url: "https://cryptostream.tech/ts/0270_too_short_2010_respect_the_game_03_shut_up_lil_bitch_feat_50_cent.mp3" },
        { title: "She Knows (feat. E-40)", url: "https://cryptostream.tech/ts/0271_too_short_2010_respect_the_game_04_she_knows_feat_e_40.mp3" },
        { title: "Can't Stay Away", url: "https://cryptostream.tech/ts/0272_too_short_2010_respect_the_game_05_cant_stay_away.mp3" },
        { title: "I'm a Player (feat. Devin the Dude)", url: "https://cryptostream.tech/ts/0273_too_short_2010_respect_the_game_06_im_a_player_feat_devin_the_dude.mp3" },
        { title: "Freaky Tales", url: "https://cryptostream.tech/ts/0274_too_short_2010_respect_the_game_07_freaky_tales.mp3" },
        { title: "I Like It (feat. Snoop Dogg)", url: "https://cryptostream.tech/ts/0275_too_short_2010_respect_the_game_08_i_like_it_feat_snoop_dogg.mp3" },
        { title: "Money On The Floor", url: "https://cryptostream.tech/ts/0276_too_short_2010_respect_the_game_09_money_on_the_floor.mp3" },
        { title: "Life of the Party", url: "https://cryptostream.tech/ts/0277_too_short_2010_respect_the_game_10_life_of_the_party.mp3" },
        { title: "Dope Fiend Beat", url: "https://cryptostream.tech/ts/0278_too_short_2010_respect_the_game_11_dope_fiend_beat.mp3" },
        { title: "Outro", url: "https://cryptostream.tech/ts/0279_too_short_2010_respect_the_game_12_outro.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album15.jpg",
      price: 17000,
    },
    {
      year: "2012",
      title: "No Trespassing",
      tracks: [
        { title: "What the Fuck", url: "https://cryptostream.tech/ts/0280_too_short_2012_no_trespassing_01_what_the_fuck.mp3" },
        { title: "I Got Caught", url: "https://cryptostream.tech/ts/0281_too_short_2012_no_trespassing_02_i_got_caught.mp3" },
        { title: "Playa for Life", url: "https://cryptostream.tech/ts/0282_too_short_2012_no_trespassing_03_playa_for_life.mp3" },
        { title: "Trying to Come Up", url: "https://cryptostream.tech/ts/0283_too_short_2012_no_trespassing_04_trying_to_come_up.mp3" },
        { title: "I'm a Pimp", url: "https://cryptostream.tech/ts/0284_too_short_2012_no_trespassing_05_im_a_pimp.mp3" },
        { title: "Ballin'", url: "https://cryptostream.tech/ts/0285_too_short_2012_no_trespassing_06_ballin.mp3" },
        { title: "Respect the Pimpin'", url: "https://cryptostream.tech/ts/0286_too_short_2012_no_trespassing_07_respect_the_pimpin.mp3" },
        { title: "It's Gucci", url: "https://cryptostream.tech/ts/0287_too_short_2012_no_trespassing_08_its_gucci.mp3" },
        { title: "Hustle Hard", url: "https://cryptostream.tech/ts/0288_too_short_2012_no_trespassing_09_hustle_hard.mp3" },
        { title: "In the Trunk", url: "https://cryptostream.tech/ts/0289_too_short_2012_no_trespassing_10_in_the_trunk.mp3" },
        { title: "Money in the Bank", url: "https://cryptostream.tech/ts/0290_too_short_2012_no_trespassing_11_money_in_the_bank.mp3" },
        { title: "Trying to Get It", url: "https://cryptostream.tech/ts/0291_too_short_2012_no_trespassing_12_trying_to_get_it.mp3" },
        { title: "Out My Mind", url: "https://cryptostream.tech/ts/0292_too_short_2012_no_trespassing_13_out_my_mind.mp3" },
        { title: "Boss (feat. E-40)", url: "https://cryptostream.tech/ts/0293_too_short_2012_no_trespassing_14_boss_feat_e_40.mp3" },
        { title: "Porn Star", url: "https://cryptostream.tech/ts/0294_too_short_2012_no_trespassing_15_porn_star.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album16.jpg",
      price: 17000,
    },
    {
      year: "2019",
      title: "The Pimp Tape",
      tracks: [
        { title: "Ain't My Girlfriend", url: "https://cryptostream.tech/ts/0295_too_short_2019_the_pimp_tape_01_aint_my_girlfriend.mp3" },
        { title: "Tables", url: "https://cryptostream.tech/ts/0296_too_short_2019_the_pimp_tape_02_tables.mp3" },
        { title: "Only Dimes", url: "https://cryptostream.tech/ts/0297_too_short_2019_the_pimp_tape_03_only_dimes.mp3" },
        { title: "Sexy Dancer", url: "https://cryptostream.tech/ts/0298_too_short_2019_the_pimp_tape_04_sexy_dancer.mp3" },
        { title: "How to Be a Player", url: "https://cryptostream.tech/ts/0299_too_short_2019_the_pimp_tape_05_how_to_be_a_player.mp3" },
        { title: "Save All That Love", url: "https://cryptostream.tech/ts/0300_too_short_2019_the_pimp_tape_06_save_all_that_love.mp3" },
        { title: "Dick (feat. G-Eazy)", url: "https://cryptostream.tech/ts/0301_too_short_2019_the_pimp_tape_07_dick_feat_g_eazy.mp3" },
        { title: "Freaky Tales", url: "https://cryptostream.tech/ts/0302_too_short_2019_the_pimp_tape_08_freaky_tales.mp3" },
        { title: "Sloppy Second Leftovers", url: "https://cryptostream.tech/ts/0303_too_short_2019_the_pimp_tape_09_sloppy_second_leftovers.mp3" },
        { title: "Oaklandish", url: "https://cryptostream.tech/ts/0304_too_short_2019_the_pimp_tape_10_oaklandish.mp3" },
        { title: "Porno Bitch", url: "https://cryptostream.tech/ts/0305_too_short_2019_the_pimp_tape_11_porno_bitch.mp3" },
        { title: "Go Shawty Go", url: "https://cryptostream.tech/ts/0306_too_short_2019_the_pimp_tape_12_go_shawty_go.mp3" },
        { title: "Special", url: "https://cryptostream.tech/ts/0307_too_short_2019_the_pimp_tape_13_special.mp3" },
        { title: "Big Booty Bitches", url: "https://cryptostream.tech/ts/0308_too_short_2019_the_pimp_tape_14_big_booty_bitches.mp3" },
        { title: "Only Dimes (Remix)", url: "https://cryptostream.tech/ts/0309_too_short_2019_the_pimp_tape_15_only_dimes_remix.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album17.jpg",
      price: 17000,
    },
    {
      year: "2021",
      title: "Ain't Gone Do It / Terms and Conditions",
      tracks: [
        { title: "Ain't Gone Do It", url: "https://cryptostream.tech/ts/0310_too_short_2021_aint_gone_do_it_01_aint_gone_do_it.mp3" },
        { title: "Mentor (feat. Ice Cube & Snoop Dogg)", url: "https://cryptostream.tech/ts/0311_too_short_2021_aint_gone_do_it_02_mentor_feat_ice_cube_snoop_dogg.mp3" },
        { title: "Give It To Me", url: "https://cryptostream.tech/ts/0312_too_short_2021_aint_gone_do_it_03_give_it_to_me.mp3" },
        { title: "Real Oakland (feat. Guapdad 4000)", url: "https://cryptostream.tech/ts/0313_too_short_2021_aint_gone_do_it_04_real_oakland_feat_guapdad_4000.mp3" },
        { title: "Creepin'", url: "https://cryptostream.tech/ts/0314_too_short_2021_aint_gone_do_it_05_creepin.mp3" },
        { title: "Double Tap (feat. Rayven Justice)", url: "https://cryptostream.tech/ts/0315_too_short_2021_aint_gone_do_it_06_double_tap_feat_rayven_justice.mp3" },
        { title: "Boombox", url: "https://cryptostream.tech/ts/0316_too_short_2021_aint_gone_do_it_07_boombox.mp3" },
        { title: "That's My Favorite Song", url: "https://cryptostream.tech/ts/0317_too_short_2021_aint_gone_do_it_08_thats_my_favorite_song.mp3" },
        { title: "Ain't Gone Do It (Remix)", url: "https://cryptostream.tech/ts/0318_too_short_2021_aint_gone_do_it_09_aint_gone_do_it_remix.mp3" },
        { title: "On Me (feat. Mistah F.A.B.)", url: "https://cryptostream.tech/ts/0319_too_short_2021_aint_gone_do_it_10_on_me_feat_mistah_fab.mp3" },
        { title: "Funky Fresh (feat. Ne-Yo & Snoop Dogg)", url: "https://cryptostream.tech/ts/0320_too_short_2021_aint_gone_do_it_11_funky_fresh_feat_ne_yo_snoop_dogg.mp3" },
        { title: "You Can't Make Me (feat. Stressmatic)", url: "https://cryptostream.tech/ts/0321_too_short_2021_aint_gone_do_it_12_you_cant_make_me_feat_stressmatic.mp3" },
        { title: "Check Yo Bitch (feat. IAMSU!)", url: "https://cryptostream.tech/ts/0322_too_short_2021_aint_gone_do_it_13_check_yo_bitch_feat_iamsu.mp3" },
        { title: "Can't Fuck With Us", url: "https://cryptostream.tech/ts/0323_too_short_2021_aint_gone_do_it_14_cant_fuck_with_us.mp3" },
        { title: "Don't Suck Dick (feat. P-Lo)", url: "https://cryptostream.tech/ts/0324_too_short_2021_aint_gone_do_it_15_dont_suck_dick_feat_p_lo.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album18.jpg",
      price: 17000,
    },
    {
      year: "2023",
      title: "Mt. Westmore",
      tracks: [
        { title: "California", url: "https://cryptostream.tech/ts/2023_mt_westmore_01_california.mp3" },
        { title: "Big Subwoofer", url: "https://cryptostream.tech/ts/2023_mt_westmore_02_big_subwoofer.mp3" },
        { title: "Activated", url: "https://cryptostream.tech/ts/2023_mt_westmore_03_activated.mp3" },
        { title: "Motto", url: "https://cryptostream.tech/ts/2023_mt_westmore_04_motto.mp3" },
        { title: "Too Big", url: "https://cryptostream.tech/ts/2023_mt_westmore_05_too_big.mp3" },
        { title: "Tribe & the Soul", url: "https://cryptostream.tech/ts/2023_mt_westmore_06_tribe_and_the_soul.mp3" },
        { title: "How Many", url: "https://cryptostream.tech/ts/2023_mt_westmore_07_how_many.mp3" },
        { title: "Up & Down", url: "https://cryptostream.tech/ts/2023_mt_westmore_08_up_and_down.mp3" },
        { title: "Do My Best", url: "https://cryptostream.tech/ts/2023_mt_westmore_09_do_my_best.mp3" },
        { title: "Lock and Load", url: "https://cryptostream.tech/ts/2023_mt_westmore_10_lock_and_load.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album30.jpg",
      price: 17000,
    },
  ];
//   const albumContainer = document.querySelector(".album-container");
//   const checkoutCard = document.querySelector(".checkout-card");
//   const albumDetails = document.getElementById("album-details");
//   const totalCostElem = document.getElementById("total-cost");
//   const clearButton = document.getElementById("clear-button");
//   const checkoutButton = document.createElement("button");
//   checkoutButton.id = "checkout-button";
//   checkoutButton.textContent = "Check Out";
//   clearButton.after(checkoutButton);
//   const sortAscButton = document.getElementById("sort-asc");
//   const sortDescButton = document.getElementById("sort-desc");

//   let totalCost = 0;
//   let cartItems = [];

//   function displayAlbums(albumList) {
//     albumContainer.innerHTML = "";
//     albumList.forEach((album) => {
//       const albumDiv = document.createElement("div");
//       albumDiv.classList.add("album");
//       albumDiv.innerHTML = `
//               <img src="${album.image}" alt="${album.title}">
//               <div class="album-name">${album.title}</div>
//               <div class="album-year">${album.year}</div>
//               <button class="add-to-cart">Add to cart</button>
//           `;
//       albumDiv.querySelector(".add-to-cart").addEventListener("click", () => addToCart(album));
//       albumDiv.querySelector("img").addEventListener("click", () => showModal(album));
//       albumContainer.appendChild(albumDiv);
//     });
//   }

//   function addToCart(album) {
//     totalCost += album.price;
//     cartItems.push(album);
//     totalCostElem.textContent = `Total: ${totalCost} sats`;
//     showAlbumDetails();
//   }

//   function showAlbumDetails() {
//     albumDetails.innerHTML = "";
//     cartItems.forEach((album, index) => {
//       const albumDetailDiv = document.createElement("div");
//       albumDetailDiv.classList.add("album-details-item");
//       albumDetailDiv.innerHTML = `
//               <img src="${album.image}" alt="${album.title}" class="thumbnail">
//               ${album.title}
//               <span class="delete-icon" data-index="${index}">&times;</span>
//           `;
//       albumDetails.appendChild(albumDetailDiv);
//     });
//     checkoutCard.classList.add("active");
//     addDeleteFunctionality();
//   }

//   function addDeleteFunctionality() {
//     const deleteIcons = document.querySelectorAll(".delete-icon");
//     deleteIcons.forEach((icon) => {
//       icon.addEventListener("click", (event) => {
//         const index = event.target.getAttribute("data-index");
//         removeFromCart(index);
//       });
//     });
//   }

//   function removeFromCart(index) {
//     const removedAlbum = cartItems.splice(index, 1)[0];
//     totalCost -= removedAlbum.price;
//     totalCostElem.textContent = `Total: ${totalCost} sats`;
//     showAlbumDetails();
//   }

//   function showModal(album) {
//     const backdrop = document.createElement("div");
//     backdrop.classList.add("modal-backdrop");
//     const modal = document.createElement("div");
//     modal.classList.add("custom-modal");
//     modal.innerHTML = `
//           <span class="close">&times;</span>
//           <img src="${album.image}" alt="${album.title}">
//           <h3>${album.title} - ${album.year}</h3>
//           <ul class="track-list">
//               ${album.tracks.map((track) => `<li>${track}</li>`).join("")}
//           </ul>
//       `;
//     document.body.appendChild(backdrop);
//     document.body.appendChild(modal);

//     backdrop.addEventListener("click", () => closeModal(modal, backdrop));
//     modal.querySelector(".close").addEventListener("click", () => closeModal(modal, backdrop));
//   }

//   function closeModal(modal, backdrop) {
//     modal.remove();
//     backdrop.remove();
//   }

//   clearButton.addEventListener("click", () => {
//     checkoutCard.classList.remove("active");
//     albumDetails.innerHTML = "";
//     totalCost = 0;
//     cartItems = [];
//     totalCostElem.textContent = "Total: 0 sats";
//   });

//   // checkoutButton.addEventListener("click", () => {
//   //   alert("Proceed to checkout");
//   // });

//   sortAscButton.addEventListener("click", () => {
//     displayAlbums(albums.sort((a, b) => a.year.localeCompare(b.year) || a.title.localeCompare(b.title)));
//   });

//   sortDescButton.addEventListener("click", () => {
//     displayAlbums(albums.sort((a, b) => b.year.localeCompare(a.year) || b.title.localeCompare(a.title)));
//   });

//   displayAlbums(albums);
// });
const albumContainer = document.querySelector(".album-container");
  const checkoutCard = document.querySelector(".checkout-card");
  const albumDetails = document.getElementById("album-details");
  const totalCostElem = document.getElementById("total-cost");
  const clearButton = document.getElementById("clear-button");
  const checkoutButton = document.createElement("button");
  checkoutButton.id = "checkout-button";
  checkoutButton.textContent = "Check Out";
  clearButton.after(checkoutButton);
  const sortAscButton = document.getElementById("sort-asc");
  const sortDescButton = document.getElementById("sort-desc");

  let totalCost = 0;
  let cartItems = [];

  function displayAlbums(albumList) {
    albumContainer.innerHTML = "";
    albumList.forEach((album) => {
      const albumDiv = document.createElement("div");
      albumDiv.classList.add("album");
      albumDiv.innerHTML = `
              <img src="${album.image}" alt="${album.title}">
              <div class="album-name">${album.title}</div>
              <div class="album-year">${album.year}</div>
              <button class="add-to-cart">Add to cart</button>
          `;
      albumDiv.querySelector(".add-to-cart").addEventListener("click", () => addToCart(album));
      albumDiv.querySelector("img").addEventListener("click", () => showModal(album));
      albumContainer.appendChild(albumDiv);
    });
  }

  function addToCart(album) {
    totalCost += album.price;
    cartItems.push(album);
    totalCostElem.textContent = `Total: ${totalCost} sats`;
    showAlbumDetails();
  }

  function showAlbumDetails() {
    albumDetails.innerHTML = "";
    cartItems.forEach((album, index) => {
      const albumDetailDiv = document.createElement("div");
      albumDetailDiv.classList.add("album-details-item");
      albumDetailDiv.innerHTML = `
              <img src="${album.image}" alt="${album.title}" class="thumbnail">
               ${album.title}
              <span class="delete-icon" data-index="${index}">&times;</span>
          `;
      albumDetails.appendChild(albumDetailDiv);
    });
    checkoutCard.classList.add("active");
    addDeleteFunctionality();
  }

  function addDeleteFunctionality() {
    const deleteIcons = document.querySelectorAll(".delete-icon");
    deleteIcons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        removeFromCart(index);
      });
    });
  }

  function removeFromCart(index) {
    const removedAlbum = cartItems.splice(index, 1)[0];
    totalCost -= removedAlbum.price;
    totalCostElem.textContent = `Total: ${totalCost} sats`;
    showAlbumDetails();
  }

  function showModal(album) {
    const backdrop = document.createElement("div");
    backdrop.classList.add("modal-backdrop");
    const modal = document.createElement("div");
    modal.classList.add("custom-modal");
    modal.innerHTML = `
          <span class="close">&times;</span>
          <img src="${album.image}" alt="${album.title}">
          <h3>${album.title} - ${album.year}</h3>
          <ul class="track-list">
              ${album.tracks.map((track) => `<li><a href="${track.url}" target="_blank">${track.title}</a></li>`).join("")}
          </ul>
      `;
    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    backdrop.addEventListener("click", () => closeModal(modal, backdrop));
    modal.querySelector(".close").addEventListener("click", () => closeModal(modal, backdrop));
  }

  function closeModal(modal, backdrop) {
    modal.remove();
    backdrop.remove();
  }

  clearButton.addEventListener("click", () => {
    checkoutCard.classList.remove("active");
    albumDetails.innerHTML = "";
    totalCost = 0;
    cartItems = [];
    totalCostElem.textContent = "Total: 0 sats";
  });

  // checkoutButton.addEventListener("click", () => {
  //   alert("Proceed to checkout");
  // });

  sortAscButton.addEventListener("click", () => {
    displayAlbums(albums.sort((a, b) => a.year.localeCompare(b.year) || a.title.localeCompare(b.title)));
  });

  sortDescButton.addEventListener("click", () => {
    displayAlbums(albums.sort((a, b) => b.year.localeCompare(a.year) || b.title.localeCompare(a.title)));
  });

  displayAlbums(albums);
});