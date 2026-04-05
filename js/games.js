const games = [
  {
     id: 1,
    title: "The Last of Us Part one",
    series:"The Last of Us",
     cover: "image/download.jpeg",
    genre: ["Action", "Survival", "Story-Rich","Adventure"],
    platform: ["PS4", "PS5", "PC"],
    releaseYear: 2013,
    developer: "Naughty Dog",
   
    rating: 9.5,
    shortDesc: "A brutal journey across post-apocalyptic America.",
    story: `Twenty years after a deadly fungal infection destroyed civilization,
      a hardened survivor named Joel is hired to smuggle a teenage girl
      named Ellie across the dangerous ruins of America. What begins as
      a simple job slowly transforms into a powerful bond between two`,
    characters: [
      { name: "Joel Miller", role: "Protagonist" },
      { name: "Ellie Williams", role: "Companion" }
    ],
    tags: ["Post-Apocalyptic", "Emotional", "Dark"]
  },
  { 
  id: 2,
    
    title: "Red Dead Redemption 2",
    series:"Red Dead Redemption",
    cover: "image/rdr2.jpg",
    genre: ["Action", "Adventure", "Story-Rich","Open World"],
    platform: ["PS4", "Xbox", "PC"],
    releaseYear: 2018,
    developer: "Rockstar Games",
    rating: 9.7,
     shortDesc: "An outlaw's final chapter in the dying American frontier.",
    story: `Arthur Morgan is a loyal member of the Van der Linde gang, a band
      of outlaws surviving in the last days of the Wild West. As the law
      closes in and the gang begins to fall apart from within, Arthur
      must choose between his own freedom and loyalty to the people
      he has ridden with his entire life. A sweeping story of loyalty,
      betrayal and redemption set across the vast American wilderness.`,
    characters: [
      { name: "Arthur Morgan", role: "Protagonist" },
      { name: "Dutch van der Linde", role: "Gang Leader" },
      { name: "John Marston", role: "Gang Member" }
    ],
    tags: ["Western", "Open World", "Emotional"]
  
  },
   
  { 
  id: 3,
    
    title: "GTA: San Andreas",
    cover: "image/gtasan.jpg",
    series:"Grand Theft Auto",
    genre: ["Action", "Adventure", "Story-Rich","RPG","Open World"],
    platform: ["PS2"," Xbox"," PC", "iOS", "Android", "PS3", "Xbox 360","PS4", "PS5 ","Xbox Series X/S", "Nintendo Switch"],
    releaseYear: 2004,
    developer: "Rockstar Games",
    rating: 9.4,
    shortDesc: "A massive 90s gangland sandbox where CJ seeks redemption across a fictional California.",
    story: `The story follows Carl "CJ" Johnson, who returns to his hometown of Los Santos 
    after five years in
     Liberty City following the murder of his mother. Upon arrival, he is immediately 
     framed for a crime by corrupt police officers (CRASH).
    CJ reunites with his brother, Sweet, to restore their gang, 
    the Grove Street Families, to its former glory. However, after a shocking betrayal by
     his childhood friends Big Smoke and
     Ryder, CJ is exiled from the city. His journey
     takes him across the state—from the hills 
    of San Fierro to the deserts of Las Venturas—as he builds a business empire, 
    works for mysterious government agents, and eventually returns home to
     take final revenge and reclaim his neighborhood.`,
    characters: [
      { name: "Carl 'CJ' Johnson", role: "Protagonist" },
     
    ],
    tags: ["Crime","90s Culture", "Gang Warfare", "RPG Elements", "Driving"," Sandbox"]
  
  },
   {
    id: 4,
    title: "God of War",
    series: "God of War",       // ✅ add this
    cover: "image/godofwar.jpeg",
    genre: ["Action", "Adventure", "RPG"],
    platform: ["PS4", "PS5", "PC"],
    releaseYear: 2018,
    developer: "Santa Monica Studio",
    rating: 9.8,
    shortDesc: "A father and son journey through Norse mythology.",
    story: `Kratos starts a new life in the Norse wilderness with his son Atreus.
      Together they must scatter the ashes of his wife from the highest peak
      in all the nine realms, facing gods and monsters along the way.`,
    characters: [
      { name: "Kratos", role: "Protagonist" },
      { name: "Atreus", role: "Son / Companion" }
    ],
    tags: ["Norse", "Mythology", "Father-Son"]
  },
  {
  id: 5,
  title: "God of War II",
  series: "God of War",
  cover: "image/gow2.jpg",
  genre: ["Action", "Adventure"],
  platform: ["PS2", "PS3","PC"],
  releaseYear: 2007,
  developer: "Santa Monica Studio",
  rating: 9.2,
  shortDesc: "Kratos battles his way through the Sisters of Fate to change his destiny.",
  story: `Now the new God of War, Kratos is betrayed by Zeus who strips him
    of his godly power and kills him. Saved by the Titan Gaia, Kratos
    fights his way through a world of monsters and legends to reach
    the Sisters of Fate — three powerful beings who control the destiny
    of every living thing. Kratos seeks to rewrite his fate and take
    revenge on Zeus, setting the stage for an all-out war between the
    Titans and the gods of Olympus.`,
  characters: [
    { name: "Kratos", role: "Protagonist" },
    { name: "Zeus", role: "Main Villain" },
    { name: "Gaia", role: "Titan Ally" },
    { name: "Perseus", role: "Enemy" },
    { name: "Icarus", role: "Enemy" }
  ],
  tags: ["Greek Mythology", "Titans", "Fate", "Epic"]
},
{
  id: 6,
  title: "God of War III",
  series: "God of War",
  cover: "image/gow3.jpg",
  genre: ["Action", "Adventure"],
  platform: ["PS3", "PS4"],
  releaseYear: 2010,
  developer: "Santa Monica Studio",
  rating: 9.3,
  shortDesc: "Kratos tears down Olympus itself in his final war against Zeus.",
  story: `The epic conclusion of the Greek saga. Kratos rides the Titan Gaia
    up Mount Olympus itself to wage war against Zeus and the gods.
    One by one Kratos destroys the gods of Olympus — Poseidon, Hades,
    Helios, Hermes, Hercules and more — in increasingly spectacular battles.
    But as Kratos gets closer to Zeus, a devastating truth about hope,
    revenge and what it truly costs to be consumed by hatred begins to
    emerge. The finale is one of the most powerful and violent endings
    in all of gaming history.`,
  characters: [
    { name: "Kratos", role: "Protagonist" },
    { name: "Zeus", role: "Final Boss" },
    { name: "Hades", role: "God of the Underworld" },
    { name: "Hermes", role: "Messenger God" },
    { name: "Hercules", role: "Demigod Enemy" },
    { name: "Pandora", role: "Key Ally" }
  ],
  tags: ["Greek Mythology", "Final War", "Olympus", "Brutal"]
},
{
  id: 7,
  title: "God of War: Ghost of Sparta",
  series: "God of War",
  cover: "image/gowsp.jpg",
  genre: ["Action", "Adventure"],
  platform: ["PSP", "PS3","PC"],
  releaseYear: 2010,
  developer: "Ready at Dawn",
  rating: 8.7,
  shortDesc: "Kratos searches for his long lost brother Deimos.",
  story: `Set between God of War and God of War II, this story reveals
    a deeply personal chapter of Kratos' past. Haunted by visions of
    his lost brother Deimos, Kratos travels to the Domain of Death
    to find him. He discovers that Deimos has been imprisoned for years
    by Thanatos, the God of Death, because of an ancient prophecy.
    Ghost of Sparta reveals the origins of Kratos' iconic red tattoo
    and deepens his tragic backstory in a way that makes the main
    series even more emotional.`,
  characters: [
    { name: "Kratos", role: "Protagonist" },
    { name: "Deimos", role: "Brother" },
    { name: "Thanatos", role: "God of Death / Villain" },
    { name: "Athena", role: "Guide" }
  ],
  tags: ["Greek Mythology", "Brotherhood", "Origin Story"]
},
{
  id: 8,
  title: "God of War: Ascension",
  series: "God of War",
  cover: "image/gowasce.jpg",
  genre: ["Action", "Adventure"],
  platform: ["PS3"],
  releaseYear: 2013,
  developer: "Santa Monica Studio",
  rating: 8.5,
  shortDesc: "Before the blades — Kratos breaks his oath to Ares.",
  story: `A prequel set before the original God of War. Kratos has broken
    his blood oath to Ares and is imprisoned by the Furies — three
    powerful beings who enforce the bonds between mortals and gods.
    This is the earliest point in Kratos' story, showing him still
    haunted by the murder of his family and fighting to break free
    from Ares' control. It explores a more human side of Kratos
    before rage fully consumed him.`,
  characters: [
    { name: "Kratos", role: "Protagonist" },
    { name: "Megaera", role: "The Fury — Villain" },
    { name: "Alecto", role: "The Fury Queen — Final Boss" },
    { name: "Orkos", role: "Unexpected Ally" }
  ],
  tags: ["Greek Mythology", "Prequel", "Furies", "Origin"]
},
{
  id: 9,
  title: "God of War (2018)",
  series: "God of War",
  cover: "image/gow2018.jpg",
  genre: ["Action", "Adventure", "RPG"],
  platform: ["PS4", "PS5", "PC"],
  releaseYear: 2018,
  developer: "Santa Monica Studio",
  rating: 9.8,
  shortDesc: "A father and son journey through the nine Norse realms.",
  story: `Years after the fall of Olympus, Kratos has left Greece behind
    and built a quiet life in the Norse wilderness with his son Atreus.
    When his wife Faye passes away, her final wish is for her ashes to
    be scattered at the highest peak of the nine realms. What follows
    is an unforgettable journey across Midgard, Alfheim, Helheim and
    beyond — filled with giants, gods and dark secrets. The relationship
    between the gruff Kratos and his curious young son Atreus is one
    of the most beautifully written father-son stories in all of gaming.`,
  characters: [
    { name: "Kratos", role: "Protagonist" },
    { name: "Atreus", role: "Son / Companion" },
    { name: "Freya", role: "Witch of the Woods" },
    { name: "Baldur", role: "Main Villain" },
    { name: "Mimir", role: "Smartest Man Alive" }
  ],
  tags: ["Norse Mythology", "Father-Son", "Emotional", "Epic"]
},
  {
    id: 10,
    title: "God of War Ragnarok",
    series: "God of War",       // ✅ same series name
    cover: "image/godr.jpg",
    genre: ["Action", "Adventure", "RPG"],
    platform: ["PS4", "PS5","PC"],
    releaseYear: 2022,
    developer: "Santa Monica Studio",
    rating: 9.6,
    shortDesc: "Kratos and Atreus face the end of the world.",
    story: `Fimbulwinter has begun and Ragnarok — the end of all things — is near.
      Kratos and Atreus must travel to each of the nine realms in search of
      answers, while the gods of Asgard prepare for war. A breathtaking
      conclusion to the Norse saga that tests every bond between father and son.`,
    characters: [
      { name: "Kratos", role: "Protagonist" },
      { name: "Atreus", role: "Son" },
      { name: "Thor", role: "Antagonist" },
      { name: "Odin", role: "Main Villain" }
    ],
    tags: ["Norse", "Ragnarok", "Epic"]
  },
  {
  id: 11,
  title: "The Last of Us Part II",
  series: "The Last of Us",      // ✅ links with Part I
  cover: "image/lastofus2.jpg",
  genre: ["Action", "Survival", "Story-Rich", "Adventure"],
  platform: ["PS4", "PS5","PC"],
  releaseYear: 2020,
  developer: "Naughty Dog",
  rating: 9.3,
  shortDesc: "A brutal story of love, loss and the cycle of revenge.",
  story: `Five years after the events of the first game, Ellie is now living
    in a peaceful settlement in Jackson, Wyoming with Joel. But when a
    shocking and devastating event tears her world apart, Ellie embarks
    on a relentless journey to Seattle driven by one single purpose — 
    revenge. What follows is one of the darkest and most emotionally
    challenging stories ever told in a video game. The narrative boldly
    shifts perspectives, forcing the player to see the same brutal world
    through completely different eyes — questioning everything about
    who the real enemy is and what revenge truly costs a person.`,
  characters: [
    { name: "Ellie Williams", role: "Protagonist" },
    { name: "Joel Miller", role: "Returning Character" },
    { name: "Abby", role: "Second Protagonist" },
    { name: "Dina", role: "Ellie's Partner" },
    { name: "Jesse", role: "Close Friend" },
    { name: "Tommy Miller", role: "Joel's Brother" },
    { name: "Lev", role: "Abby's Companion" }
  ],
  tags: ["Post-Apocalyptic", "Revenge", "Emotional", "Dark", "Brutal"]
},
  {
  id: 12,
  title: "GTA III",
  series: "Grand Theft Auto",
  cover: "image/gtaIII.jpg",
  genre: ["Action", "Adventure", "Open World"],
  platform: ["PS2", "Xbox", "PC", "iOS", "Android"],
  releaseYear: 2001,
  developer: "Rockstar Games",
  rating: 9.0,
  shortDesc: "The game that changed open world gaming forever.",
  story: `Claude is a silent criminal who gets betrayed and left for dead
    by his girlfriend Catalina during a bank robbery in Liberty City.
    After escaping from prison transport, Claude works his way up through
    the city's criminal underworld — working for the Leone Mafia, the
    Yakuza, the Cartel and many more. His only goal is to find Catalina
    and take his revenge. GTA III was the first fully 3D open world game
    in the series and completely revolutionized the action adventure genre
    forever changing what video games could be.`,
  characters: [
    { name: "Claude", role: "Silent Protagonist" },
    { name: "Catalina", role: "Betrayer / Villain" },
    { name: "8-Ball", role: "Explosives Expert / Ally" },
    { name: "Don Salvatore Leone", role: "Mafia Boss" },
    { name: "Maria", role: "Salvatore's Girlfriend" }
  ],
  tags: ["Liberty City", "Crime", "Revolution", "Open World"]
},
{
  id: 13,
  title: "GTA Vice City",
  series: "Grand Theft Auto",
  cover: "image/gtavice.jpg",
  genre: ["Action", "Adventure", "Open World"],
  platform: ["PS2", "Xbox", "PC", "iOS", "Android", "PS4", "PS5", "Xbox Series X/S"],
  releaseYear: 2002,
  developer: "Rockstar Games",
  rating: 9.3,
  shortDesc: "A neon drenched 80s crime empire story in sunny Vice City.",
  story: `Tommy Vercetti is released from prison after serving fifteen years
    for the Forelli crime family. He is sent to Vice City to oversee a
    drug deal — but the deal goes wrong, the money and drugs disappear
    and people end up dead. Now Tommy must find who set him up, recover
    the money and build his own criminal empire from scratch. Set in a
    gorgeous 1980s Miami inspired city dripping with neon lights, 
    fast cars, loud music and ruthless ambition, Vice City remains one
    of the most beloved and stylish entries in the entire series.`,
  characters: [
    { name: "Tommy Vercetti", role: "Protagonist" },
    { name: "Sonny Forelli", role: "Mafia Boss / Villain" },
    { name: "Ken Rosenberg", role: "Lawyer / Ally" },
    { name: "Lance Vance", role: "Partner / Ally" },
    { name: "Ricardo Diaz", role: "Drug Lord" },
    { name: "Avery Carrington", role: "Property Developer" }
  ],
  tags: ["1980s", "Neon", "Miami", "Crime Empire", "Iconic"]
},
{
  id: 15,
  title: "GTA IV",
  series: "Grand Theft Auto",
  cover: "image/gtaiv.jpg",
  genre: ["Action", "Adventure", "Open World", "Story-Rich"],
  platform: ["PS3", "Xbox 360", "PC"],
  releaseYear: 2008,
  developer: "Rockstar Games",
  rating: 9.5,
  shortDesc: "An immigrant's dark and gritty American dream in Liberty City.",
  story: `Niko Bellic is a war veteran from Eastern Europe who comes to
    Liberty City chasing the promise of the American Dream his cousin
    Roman has been boasting about in letters. The reality is far darker.
    Roman is deep in debt to loan sharks and Niko soon finds himself
    pulled into the brutal criminal underworld of the city. As he works
    for various criminal organizations to survive, Niko is also haunted
    by a dark secret from his past — a betrayal during the war that
    he has been hunting for years. GTA IV is the most grounded and
    emotionally mature story in the series.`,
  characters: [
    { name: "Niko Bellic", role: "Protagonist" },
    { name: "Roman Bellic", role: "Cousin / Comic Relief" },
    { name: "Little Jacob", role: "Loyal Friend / Ally" },
    { name: "Dimitri Rascalov", role: "Main Villain" },
    { name: "Playboy X", role: "Criminal Contact" },
    { name: "Jimmy Pegorino", role: "Mafia Boss" }
  ],
  tags: ["Liberty City", "Immigration", "American Dream", "Dark", "Gritty"]
},
{
  id: 16,
  title: "GTA V",
  series: "Grand Theft Auto",
  cover: "image/gtaV.jpg",
  genre: ["Action", "Adventure", "Open World", "Story-Rich"],
  platform: ["PS3", "PS4", "PS5", "Xbox 360", "Xbox One", "Xbox Series X/S", "PC"],
  releaseYear: 2013,
  developer: "Rockstar Games",
  rating: 9.8,
  shortDesc: "Three criminals pulled into a world of heists and corruption.",
  story: `GTA V tells three stories woven into one. Michael De Santa is a
    retired bank robber living a miserable life in witness protection in
    Los Santos. Trevor Philips is Michael's unhinged former partner living
    in the desert, running drugs and arms. Franklin Clinton is a young
    hustler from South Los Santos looking for a way out and a better life.
    When their worlds collide, all three are pulled into increasingly
    dangerous heists orchestrated by corrupt government agents, shady
    billionaires and old enemies. The game features the largest and most
    detailed open world Rockstar had ever created at the time.`,
  characters: [
    { name: "Michael De Santa", role: "Retired Criminal" },
    { name: "Trevor Philips", role: "Unhinged Partner" },
    { name: "Franklin Clinton", role: "Young Hustler" },
    { name: "Lamar Davis", role: "Franklin's Best Friend" },
    { name: "Steve Haines", role: "Corrupt FIB Agent" },
    { name: "Devin Weston", role: "Corrupt Billionaire" },
    { name: "Lester Crest", role: "Heist Planner" }
  ],
  tags: ["Three Protagonists", "Heists", "Los Santos", "Massive", "Iconic"]
},
{
  id: 17,
  title: "GTA VI(Coming soon)",
  series: "Grand Theft Auto",
  cover: "image/gtavi.jpg",
  genre: ["Action", "Adventure", "Open World", "Story-Rich"],
  platform: ["PS5", "Xbox Series X/S", "PC"],
  releaseYear: "Not sure",
  developer: "Rockstar Games",
  rating: 9.9,
  shortDesc: "The most ambitious GTA ever — back to Vice City with a female lead.",
  story: `Set in a modern reimagining of Vice City and the surrounding state
    of Leonida, GTA VI introduces Lucia — the first female protagonist
    in the main series. Together with her partner Jason, Lucia is drawn
    into a dangerous world of crime across the most detailed and alive
    open world Rockstar has ever built. The story is inspired by real
    life viral crime stories and promises to be the most cinematic and
    ambitious narrative the series has ever attempted. The world reacts
    dynamically to everything the player does making it feel truly alive.`,
  characters: [
    { name: "Lucia", role: "Female Protagonist" },
    { name: "Jason", role: "Partner / Co-Protagonist" }
  ],
  tags: ["Vice City", "Female Lead", "Modern", "Most Anticipated", "Leonida"]
},
{
  id: 18,
  title: "Red Dead Redemption 1",
  series: "Red Dead Redemption",
  cover: "image/rdr1.jpg",
  genre: ["Action", "Adventure", "Open World", "Story-Rich"],
  platform: ["PS3", "PS4", "Xbox 360", "Xbox One", "PC"],
  releaseYear: 2010,
  developer: "Rockstar Games",
  rating: 9.5,
  shortDesc: "A retired outlaw hunts down his former gang to save his family.",
  story: `John Marston is a former outlaw living peacefully with his wife
    Abigail and son Jack on their farm. But that peace is shattered
    when government agents kidnap his family and give him one choice —
    hunt down his former gang members or never see them again. Armed
    with nothing but his skills and his horse, John rides across
    the vast and dangerous frontier of the American West tracking
    down Bill Williamson and Javier Escuella — men he once called
    brothers. His journey takes him through dusty plains, lawless
    border towns and deep into Mexico before a devastating final
    chapter that nobody sees coming. The ending of Red Dead Redemption
    is one of the most powerful and heartbreaking moments in all of
    gaming history — a masterpiece of storytelling that stays with
    you long after the credits roll.`,
  characters: [
    { name: "John Marston", role: "Protagonist" },
    { name: "Dutch van der Linde", role: "Former Gang Leader" },
    { name: "Bill Williamson", role: "Former Gang Member / Target" },
    { name: "Javier Escuella", role: "Former Gang Member / Target" },
    { name: "Abigail Marston", role: "Wife" },
    { name: "Jack Marston", role: "Son" },
    { name: "Bonnie MacFarlane", role: "Rancher / Early Ally" },
    { name: "Agent Edgar Ross", role: "Government Agent / True Villain" },
    { name: "Landon Ricketts", role: "Legendary Gunslinger" }
  ],
  tags: ["Western", "Redemption", "Emotional", "Classic", "Legendary"]
},
{
  id: 19,
  title: "Resident Evil",
  series: "Resident Evil",
  cover: "image/re1.jpg",
  genre: ["Horror", "Survival", "Action", "Adventure"],
  platform: ["PS1", "PS4", "PS5", "PC", "Nintendo Switch"],
  releaseYear: 1996,
  developer: "Capcom",
  rating: 9.0,
  shortDesc: "The game that invented survival horror.",
  story: `Members of the elite S.T.A.R.S. Alpha team are sent to investigate
    the disappearance of their Bravo team in the Arklay Mountains outside
    Raccoon City. They are attacked by ferocious dogs and forced to take
    shelter inside a mysterious abandoned mansion. Inside they discover
    horrifying biological experiments, shambling undead creatures and
    a dark conspiracy by the powerful Umbrella Corporation. Playing as
    either Jill Valentine or Chris Redfield, players must solve puzzles
    explore every corner of the terrifying mansion and survive long enough
    to uncover the truth behind the T-Virus.`,
  characters: [
    { name: "Jill Valentine", role: "S.T.A.R.S. Member / Protagonist" },
    { name: "Chris Redfield", role: "S.T.A.R.S. Member / Protagonist" },
    { name: "Albert Wesker", role: "Traitor / Villain" },
    { name: "Barry Burton", role: "S.T.A.R.S. Member / Ally" },
    { name: "Rebecca Chambers", role: "S.T.A.R.S. Medic" }
  ],
  tags: ["Survival Horror", "Zombies", "Umbrella", "Classic", "Mansion"]
},
{
  id: 20,
  title: "Resident Evil 2",
  series: "Resident Evil",
  cover: "image/re2.jpg",
  genre: ["Horror", "Survival", "Action", "Adventure"],
  platform: ["PS1", "PS4", "PS5", "PC", "Nintendo Switch"],
  releaseYear: 1998,
  developer: "Capcom",
  rating: 9.2,
  shortDesc: "Raccoon City falls as two survivors fight through the undead nightmare.",
  story: `Two months after the mansion incident, the T-Virus has spread and
    completely consumed Raccoon City turning its population into the
    walking dead. Leon S. Kennedy is a rookie cop arriving for his
    first day on the job only to find the city already in ruins.
    Claire Redfield is a college student searching for her missing
    brother Chris. Their paths cross at the destroyed Raccoon City
    Police Department where they must work separately to survive
    the nightmare, uncover Umbrella's darkest secrets and face the
    terrifying and relentless Tyrant known as Mr X who hunts them
    through the halls.`,
  characters: [
    { name: "Leon S. Kennedy", role: "Rookie Cop / Protagonist" },
    { name: "Claire Redfield", role: "Chris's Sister / Protagonist" },
    { name: "Ada Wong", role: "Mysterious Spy" },
    { name: "Sherry Birkin", role: "Young Girl / Key Character" },
    { name: "William Birkin", role: "Mutated Scientist / Villain" },
    { name: "Mr X", role: "Relentless Pursuer" }
  ],
  tags: ["Survival Horror", "Raccoon City", "Mr X", "Classic", "Iconic"]
},
{
  id: 21,
  title: "Resident Evil 3",
  series: "Resident Evil",
  cover: "image/re3.jpg",
  genre: ["Horror", "Survival", "Action", "Adventure"],
  platform: ["PS1", "PS4", "PS5", "PC"],
  releaseYear: 1999,
  developer: "Capcom",
  rating: 8.8,
  shortDesc: "Jill Valentine races to escape Raccoon City while hunted by Nemesis.",
  story: `Set just before and during the events of Resident Evil 2, Jill
    Valentine is desperately trying to escape the zombie infested
    streets of Raccoon City. But Umbrella has deployed their most
    terrifying weapon yet — Nemesis, a massive intelligent bioweapon
    programmed with a single mission — eliminate all S.T.A.R.S. members.
    Unlike Mr X, Nemesis can think, run, use weapons and follow Jill
    anywhere across the entire city. Jill must use every skill she has
    to survive the streets, find a way out and face Nemesis in a
    series of terrifying encounters while the government prepares
    to destroy the entire city.`,
  characters: [
    { name: "Jill Valentine", role: "Protagonist" },
    { name: "Nemesis", role: "Main Pursuer / Villain" },
    { name: "Carlos Oliveira", role: "Mercenary / Ally" },
    { name: "Mikhail Victor", role: "Wounded Mercenary" }
  ],
  tags: ["Survival Horror", "Nemesis", "Raccoon City", "Chase", "Intense"]
},
{
  id: 22,
  title: "Resident Evil 4",
  series: "Resident Evil",
  cover: "image/re4.jpg",
  genre: ["Horror", "Action", "Adventure", "Survival"],
  platform: ["PS2", "PS4", "PS5", "Xbox", "PC", "Nintendo Switch"],
  releaseYear: 2005,
  developer: "Capcom",
  rating: 9.7,
  shortDesc: "Leon travels to rural Spain to rescue the President's daughter.",
  story: `Six years after Raccoon City, Leon S. Kennedy is now a government
    agent sent on a solo mission to a remote rural village in Spain to
    rescue Ashley Graham — the kidnapped daughter of the US President.
    What he finds is far worse than zombies — an entire population
    infected with a mind controlling parasite called Las Plagas controlled
    by a sinister religious cult called Los Illuminados led by the
    fanatical Osmund Saddler. Leon must fight through the village, a
    massive castle and a military island while protecting Ashley and
    uncovering the terrifying truth behind the new infection.
    Resident Evil 4 completely reinvented the series and influenced
    virtually every third person action game that followed it.`,
  characters: [
    { name: "Leon S. Kennedy", role: "Protagonist" },
    { name: "Ashley Graham", role: "President's Daughter" },
    { name: "Ada Wong", role: "Returning Spy" },
    { name: "Osmund Saddler", role: "Cult Leader / Main Villain" },
    { name: "Ramon Salazar", role: "Castle Castellan" },
    { name: "Jack Krauser", role: "Former Ally / Enemy" },
    { name: "Luis Sera", role: "Researcher / Ally" }
  ],
  tags: ["Action Horror", "Spain", "Las Plagas", "Iconic", "Revolutionary"]
},
{
  id: 23,
  title: "Resident Evil 5",
  series: "Resident Evil",
  cover: "image/re5.jpg",
  genre: ["Horror", "Action", "Adventure"],
  platform: ["PS3", "PS4", "Xbox 360", "Xbox One", "PC"],
  releaseYear: 2009,
  developer: "Capcom",
  rating: 8.5,
  shortDesc: "Chris hunts Wesker through Africa in a shocking co-op adventure.",
  story: `Chris Redfield is sent to the Kijuju region of Africa to investigate
    illegal bio-weapon activity. He is partnered with BSAA agent Sheva
    Alomar a local agent with her own personal connection to the region.
    Together they discover that Albert Wesker — the traitor from the
    original game — is behind a massive plan to infect the entire world
    with a new strain of the Las Plagas parasite and reshape humanity.
    The game features full co-op gameplay and builds to a dramatic
    confrontation between Chris and his longtime nemesis Wesker that
    has been building since the very first game.`,
  characters: [
    { name: "Chris Redfield", role: "Protagonist" },
    { name: "Sheva Alomar", role: "BSAA Partner" },
    { name: "Albert Wesker", role: "Main Villain / Final Boss" },
    { name: "Jill Valentine", role: "Returning Character" },
    { name: "Josh Stone", role: "BSAA Captain" }
  ],
  tags: ["Action Horror", "Africa", "Wesker", "Co-op", "BSAA"]
},
{
  id: 24,
  title: "Resident Evil 6",
  series: "Resident Evil",
  cover: "image/re6.jpg",
  genre: ["Horror", "Action", "Adventure"],
  platform: ["PS3", "PS4", "Xbox 360", "Xbox One", "PC"],
  releaseYear: 2012,
  developer: "Capcom",
  rating: 7.8,
  shortDesc: "Four campaigns collide in a massive global bioterror crisis.",
  story: `A new bioterror attack hits the world simultaneously across multiple
    locations. The game follows four separate campaigns that interweave
    and collide. Leon and Helena investigate a zombie outbreak at a
    university. Chris and Piers battle bioterrorists in China and
    Eastern Europe. Jake — the son of Wesker — goes on the run with
    Sherry Birkin. Ada Wong works alone uncovering the conspiracy
    behind everything. The villain is a mysterious figure called
    Simmons who engineered the entire global crisis and a new
    organization called Neo Umbrella pulling strings from the shadows.`,
  characters: [
    { name: "Leon S. Kennedy", role: "Protagonist — Campaign 1" },
    { name: "Chris Redfield", role: "Protagonist — Campaign 2" },
    { name: "Jake Muller", role: "Wesker's Son — Campaign 3" },
    { name: "Ada Wong", role: "Protagonist — Campaign 4" },
    { name: "Helena Harper", role: "Leon's Partner" },
    { name: "Sherry Birkin", role: "Jake's Partner" },
    { name: "Derek Simmons", role: "Main Villain" }
  ],
  tags: ["Action Horror", "Multiple Campaigns", "Global Crisis", "Neo Umbrella"]
},
{
  id: 25,
  title: "Resident Evil 7",
  series: "Resident Evil",
  cover: "image/re7.jpg",
  genre: ["Horror", "Survival", "First Person"],
  platform: ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"],
  releaseYear: 2017,
  developer: "Capcom",
  rating: 9.0,
  shortDesc: "A husband searches for his missing wife in a nightmare Louisiana plantation.",
  story: `Ethan Winters receives a mysterious message from his wife Mia who
    has been missing for three years. He travels to a remote and decaying
    plantation in rural Louisiana to find her. What he discovers is a
    living nightmare — the Baker family, once ordinary people, have been
    transformed into superhuman monsters by a strange mold infection.
    Ethan is captured and must fight to survive the house, rescue Mia
    and uncover the horrifying truth about what happened to the Bakers
    and the connection to a little girl named Eveline. RE7 completely
    reinvented the series again with a first person perspective and
    returned to pure terrifying survival horror.`,
  characters: [
    { name: "Ethan Winters", role: "Protagonist" },
    { name: "Mia Winters", role: "Missing Wife" },
    { name: "Eveline", role: "Mysterious Girl / True Villain" },
    { name: "Jack Baker", role: "Infected Patriarch" },
    { name: "Marguerite Baker", role: "Infected Matriarch" },
    { name: "Lucas Baker", role: "Sadistic Son" },
    { name: "Zoe Baker", role: "Ally" }
  ],
  tags: ["First Person", "Survival Horror", "Louisiana", "Mold", "Baker Family"]
},
{
  id: 26,
  title: "Resident Evil Village",
  series: "Resident Evil",
  cover: "image/revillage.jpg",
  genre: ["Horror", "Survival", "Action", "First Person"],
  platform: ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"],
  releaseYear: 2021,
  developer: "Capcom",
  rating: 9.2,
  shortDesc: "Ethan searches for his kidnapped daughter in a terrifying European village.",
  story: `Three years after the Baker incident, Ethan and Mia are living
    peacefully in Europe with their newborn daughter Rose. One night
    their home is attacked and Rose is kidnapped. Ethan wakes up in
    a snow covered village in Eastern Europe surrounded by werewolf
    like creatures called Lycans and ruled over by the towering and
    terrifying Lady Dimitrescu and her daughters. Ethan must explore
    the village, a massive gothic castle, a factory, a lake and a
    sinister fortress — each ruled by a different horrifying lord —
    to recover the pieces of his daughter and face the mysterious
    figure known only as Mother Miranda.`,
  characters: [
    { name: "Ethan Winters", role: "Protagonist" },
    { name: "Rose Winters", role: "Kidnapped Daughter" },
    { name: "Lady Alcina Dimitrescu", role: "Castle Lord / Villain" },
    { name: "Mother Miranda", role: "Main Villain" },
    { name: "Karl Heisenberg", role: "Factory Lord" },
    { name: "Donna Beneviento", role: "Doll House Lord" },
    { name: "Salvatore Moreau", role: "Reservoir Lord" },
    { name: "Chris Redfield", role: "Returning Character" }
  ],
  tags: ["First Person", "Village", "Lady Dimitrescu", "Gothic", "Atmospheric"]
},
{
  id: 27,
  title: "Resident Evil Requiem",
  series: "Resident Evil",
  cover: "image/rerequiem.jpg",
  genre: ["Horror", "Survival", "Action", "First Person"],
  platform: ["PS5", "Xbox Series X/S", "PC", "Nintendo Switch 2"],
  releaseYear: 2026,
  developer: "Capcom",
  rating: 9.4,
  shortDesc: "A return to Raccoon City 30 years later with two very different heroes.",
  story: `Thirty years after a nuclear strike destroyed Raccoon City to cover
    up the T-Virus outbreak, the ruins of the city hide a terrifying new
    mystery. Grace Ashcroft is an FBI analyst and the daughter of Alyssa
    Ashcroft — a survivor of the original outbreak. She is sent to
    investigate a series of brutal murders at the Wrenwood Hotel, a
    location with a deeply personal and painful connection — the place
    where her mother was killed. Grace is cautious, fearful and must
    rely on stealth and survival instincts to stay alive while being
    hunted by a terrifying monster known only as The Girl — an immune
    creature that can stalk her through walls and ceilings. Meanwhile
    fan favourite Leon S. Kennedy returns on his own mission, bringing
    his signature fast paced action and combat to the story. The two
    campaigns interweave and collide in a bold new chapter that blends
    pure psychological horror with pulse pounding action.`,
  characters: [
    { name: "Grace Ashcroft", role: "New Protagonist / FBI Analyst" },
    { name: "Leon S. Kennedy", role: "Returning Hero / DSO Agent" },
    { name: "The Girl", role: "Main Monster / Pursuer" },
    { name: "Alyssa Ashcroft", role: "Grace's Mother / Flashbacks" }
  ],
  tags: ["Raccoon City", "New Protagonist", "Leon Returns", "Psychological Horror", "2026"]
},
];