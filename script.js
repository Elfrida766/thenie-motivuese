const quotes = {
    "- John Wooden": '"E gjithë jeta është male dhe lugina. Mos lejoni që malet të bëhen shumë të larta dhe luginat shumë të ulta."',
    "- Maya Angelou": '"Misioni im në jetë nuk është thjesht të mbijetoj, por të lulëzoj; dhe ta bëj këtë me pasion, me dhembshuri, me humor dhe me një stil tjetër."',
    "- Aristoteli": '"Ekziston vetëm një mënyrë për të shmangur kritikat: mos bëni asgjë, mos thoni asgjë dhe mos u bëni asgjë."',
    "- C.S. Lewis": '"Ju kurrë nuk jeni të vjetër për të vendosur një qëllim tjetër ose për të ëndërruar një ëndërr të re."',
    "- Babe Ruth": '"Është e vështirë të mundësh një person që nuk dorëzohet kurrë."',
    "- Jack Canfield": '"Justifikimi nuk ka vend, ka qindra njerëz që janë përballur me të njëjtat rrethana dhe kanë arritur sukses"',
    "- John Wooden": '"Gjërat funksionojnë më së miri për ata që bëjnë më të mirën për ti bërë gjërat të funksionojnë."',
    "- Steve Jobs": '"Mënyra e vetme për të bërë një punë të shkëlqyeshme është ta duash atë që bën. Nëse nuk e ke gjetur akoma, vazhdo të kërkosh. Mos u zhvendos."',
    "- Franklin D. Roosevelt": '"Kufiri i vetëm për realizimin tonë të së nesërmes do të jenë dyshimet tona për të sotmen."',
    "- Proverb Hasidic": '"Njeriu që ka besim te vetja fiton besimin e të tjerëve”."',
    "- Maya Angelou": '"Ju mund të hasni shumë humbje, por nuk duhet të mposhteni. Në fakt, mund të jetë e nevojshme të ndesheni me humbje, kështu që mund të dini kush jeni, nga çfarë mund të ngriheni, si mund të dilni ende prej saj."',
    "- Thënie popullore.": '"Mos u dekurajoni. Shpesh është çelësi i fundit në tufë që hap derën e bllokuar."',
    "- Ralph Waldo Emerson": '"Çfarë qëndron pas teje dhe çfarë qëndron para teje zbehet në krahasim me atë që qëndron brenda teje."',
    "- Robert H. Schuller": '"Kohët e vështira nuk zgjasin kurrë, por njerëzit e vështirë vazhdojnë."',
    "- Tom Althouse": '"Nëse ndiheni të ulët ose të nëpërkëmbur, të pavlerësuar ose të harruar dhe po e lexoni këtë, kuptoni se është një iluzion. Shpresa është e vërtetë, ju vlerësoheni dhe ajo që pritet përpara është shkëlqimi."',
    "- O.R. Melting": '"Kur të vini në buzë të gjithçkaje që dini, duhet të besoni në një nga dy gjërat: Do të ketë tokë për të qëndruar. Ose do të rrisni krahët për të fluturuar."',
    "- Martin Luther King Jr": '"Jo të gjithë mund të jenë të famshëm, por të gjithë mund të jenë të shkëlqyeshëm, sepse madhështia përcaktohet nga shërbimi."',
    "- Dale Carnegie": '"Shumica e gjërave të rëndësishme në botë janë arritur nga njerëz që kanë vazhduar të përpiqen kur nuk kishin aspak shpresë."',
    "- Stephen Hawking": '"Ne jemi thjesht një racë e përparuar majmunësh në një planet të vogël me një yll shumë mesatar. Por ne mund ta kuptojmë Universin. Kjo na bën diçka shumë të veçantë."',
    "- Thomas Edison": '"Shumë nga dështimet e jetës janë njerëz që nuk e kuptuan se sa afër suksesit ishin kur u dorëzuan."',
    "- Samuel Johnson": '"Gjërat nuk shkojnë keq dhe të thyejnë zemrën tënde që të mund të bëhesh i hidhur dhe të heqësh dorë. Ndodhin të të prishin dhe të të ndërtojnë, në mënyrë që të jesh gjithçka që kishe menduar të ishe. "',
    "- Shel Silverstein": '"Çdo gjë është e mundur. Çdo gjë mund të jetë."',
    "- Abraham Linkoln": '"Mënyra më e mirë për të parashikuar të ardhmen është krijimi i saj. "',
    "- H.Jackson Brown": '"Asnjëherë mos lejoni që shanset t’ju ndalojnë të bëni atë që dini në zemrën tuaj që duhet të bëni."',
    "- Vincent Van Gogh": '"Nëse dëgjoni një zë brenda jush të thotë” nuk mund të pikturoni “, me siguri pikturojeni dhe ai zë do të heshtet."',
    "- Wade Boggs": '"Një qëndrim pozitiv shkakton një reagim zinxhir të mendimeve, ngjarjeve dhe rezultateve pozitive. Është një katalizator dhe ndez rezultate të jashtëzakonshme."',
    "- Casey Neistat": '"Idetë janë falas. Idetë janë të lehta. Idetë janë të zakonshme. Gjithkush ka ide. Idetë janë shumë, shumë të mbivlerësuara. Ekzekutimi është gjithçka që ka rëndësi."',
    "- Henry Ford": '"Jini të gatshëm të rishikoni çdo sistem, të hiqni dorë nga çdo metodë, të braktisni çdo teori, nëse e kërkon suksesi i punës"',
    "- Elon Musk": '"Dështimi është një mundësi. Nëse gjërat nuk po dështojnë, ju nuk po sillni inovacion aq sa duhet."',
    "- Jeff Bezos": '"Një nga mënyrat e vetme për të dalë nga një kuti e ngushtë është të shpikësh vetë rrugën për të dalë."',
    "- Oscar Wilde": '"Bëhu vetvetja. Rolet e tjera janë marrë tashmë."',
    "- Joseph Addison": '"Një burrë i lumtur martohet me vajzën që dashuron; një burrë edhe më i lumtur dashuron vajzën me të cilën martohet."',
    "- Seth Godin": '"Në vend që të pyesni veten se kur janë pushimet tuaja të radhës, krijoni një jetë nga e cila nuk keni nevojë të arratiseni."',
    "- Sara Blakely": '"Përqafoni atë që nuk dini, veçanërisht në fillim, sepse ajo që nuk dini mund të bëhet pasuria juaj më e madhe. Kjo do të bëjë që të veproni ndryshe nga të tjerët."',
    "- Monica Bellucci": '"Kur njerëzit divorcohen, është gjithmonë një tragjedi e tillë. Në të njëjtën kohë, nëse njerëzit qëndrojnë së bashku mund të jetë edhe më keq."',
    "- Mark Twain": '"Sa herë që të gjeni veten në anën e shumicës, është koha për të ndaluar dhe reflektuar."',
    "- Dylan Thomas": '"Jeta ta jep gjithmonë një shans të dytë. Quhet nesër."',
    "- Marilyn Monroe": '"Nëse do të kisha respektuar të gjitha rregullat, nuk do të kisha arritur askund."'
}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});