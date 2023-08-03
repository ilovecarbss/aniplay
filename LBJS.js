function handleItemClick(item, callback) {
    // Remove 'active' class from all list items
    document.querySelectorAll('.list li').forEach(li => li.classList.remove('active'));

    // Add 'active' class to clicked item
    item.classList.add('active');

    // Log item content to console
    console.log(item.innerHTML);

    // Call the callback function with the item's innerHTML
    if (typeof callback === 'function') {
        callback(item.innerHTML);
    }
    //WRITE YOUR CODE HERE
    if(item.innerHTML === "Chainsaw man"){
      document.getElementById("previewimg").src ="pictures/chainsawmanvid.png";
      document.getElementById("lbshowimg").src = "pictures/chainsaw_man.png";
      document.getElementById("lbdesc").innerHTML = "<p>Denji's adolescent years were anything but typical as he was burdened with overwhelming debt from his deadbeat father. His sole companion was his fierce chainsaw devil pet, Pochita, with whom he hunted and slaughtered devils for the yakuza's profit. Despite his unfortunate circumstances, Denji longed for a peaceful existence with scrumptious meals and a lovely girlfriend by his side. But his aspirations were shattered when the treacherous yakuza orchestrated his cruel and premature demise, extinguishing any hope for future happiness Miraculously, an ancient contract allowed Pochita to combine with Denji posthumously, endowing him with devil-like abilities that enabled him to transform his body parts into chainsaws. <br> Given the considerable risk Denji's newfound powers posed to society, the esteemed devil hunter Makima of the Public Safety Bureau took him under her wing, granting him refuge on the grounds that he adhere to her every command. Driven by the prospect of a fulfilling life with an enticing woman, Denji poured all his energy into achieving his juvenile goals, vowing to fight for them with unwavering fervor.</p>";
      document.getElementById("lbsname").innerHTML = "CHAINSAW MAN";
      document.getElementById("lbrate").innerHTML = "Rating: 8.3/10";
      document.getElementById("lbgenre").innerHTML = "Action, Drama, Fantasy, Horror"
      document.getElementById("watchnowlink").href = "Videoplayers/CHAINSAW/chainE1.html";
    }
    else if(item.innerHTML === "Tokyo Revengers"){
      document.getElementById("previewimg").src ="pictures/tokyoprev.png";
      document.getElementById("lbshowimg").src = "pictures/tokyorevengerscover.png";
      document.getElementById("lbdesc").innerHTML = "<p>Takemichi Hanagaki's life peaked when he was in middle school, enjoying the admiration of his peers and the company of his trusted gang and girlfriend. Fast forward 12 years later, and he is now a lowly and ridiculed figure, constantly bowing down to a younger boss. His world crumbles further when he hears of his ex-girlfriend and her brother's brutal murder by the Tokyo Manji Gang. As he stands on the brink of death, Takemichi suddenly flashes back to the day when his life fell apart with the loss of Hinata Tachibana. <br> With a chance to rewrite his past mistakes and save Hinata, Takemichi travels back in time and meets her younger brother. In a moment of recklessness, Takemichi reveals his imminent fate before returning to the present, only to find a changed future.</p>";
      document.getElementById("lbsname").innerHTML = "TOKYO REVENGERS";
      document.getElementById("lbrate").innerHTML = "Rating: 8.6/10";
      document.getElementById("lbgenre").innerHTML = "Action, Drama, Romance"
      document.getElementById("watchnowlink").href = "Videoplayers/TOKYOREVENGERS/tokyoE1.html";
    }
    else if(item.innerHTML === "Jujutsu Kaisen"){
      document.getElementById("previewimg").src ="pictures/jujutsuprev.png";
      document.getElementById("lbshowimg").src = "pictures/jjk.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>The right death is what a boy fights for in the midst of the curses that plague our daily lives. These curses are born from negative emotions like hardship, regret, and shame, and they can wreak havoc on people's lives, often resulting in death. Ironically, the only way to banish these curses is by invoking another curse. <br>Itadori Yuji is an average high schooler with extraordinary physical abilities. But when he consumes the finger of the Double-Faced Specter to save a friend from the Curses' wrath, he unwittingly makes himself a host to the curse. Itadori shares a body with the Double-Faced Specter, and under the guidance of the powerful sorcerer Gojou Satoru, he enrolls in the Tokyo Metropolitan Technical High School of Sorcery. There, he joins an organization committed to battling the Curses, and embarks on a heroic quest to exorcise the curse he carries. But this quest comes at a steep price, for Itadori has become a curse himself, trapped in a life without any possibility of turning back.</p>";
      document.getElementById("lbsname").innerHTML = "JUJUTSU KAISEN";
      document.getElementById("lbrate").innerHTML = "Rating: 9.1/10";
      document.getElementById("lbgenre").innerHTML = "Action, Drama, Fantasy, Martial Arts,Magic"
      document.getElementById("watchnowlink").href = "Videoplayers/extra/extras.html";
    }
    else if(item.innerHTML === "Spy X Family"){
      document.getElementById("previewimg").src ="pictures/SXFprev.png";
      document.getElementById("lbshowimg").src = "pictures/sxf.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>Everyone conceals a hidden side of themselves from the world, and this includes Twilight, the most skilled spy employed by Westalis Intelligence Services. The Eastern-Focused Division of the country has tasked Twilight with investigating Donovan Desmond, chairman of Ostania's National Unity Party, who threatens to undermine the peace talks between Ostania and Westalis.<br> The long-running cold war between both nations is seeking the upper hand, but Twilight's mission, called Operation Strix, is crucial to winning the battle.To infiltrate the social gatherings hosted by the elite school attended by Desmond's son, Twilight is required to assemble a family unit in under a week's time. Playing the part of psychiatrist Loid Forger, Twilight starts his search for family members and quickly discovers that his adopted daughter Anya has telepathic abilities, while his wife Yor is an experienced assassin. They understand that keeping their true identities hidden is necessary for the mission's success, and so they live together and exercise caution. This unconventional family embarks on a new adventure packed with unforeseeable twists that will determine world peace's destiny.</p>";
      document.getElementById("lbsname").innerHTML = "SPY X FAMILY";
      document.getElementById("lbrate").innerHTML = "Rating: 9.9/10";
      document.getElementById("lbgenre").innerHTML = "Action, Comedy, Family, Supernatural"
      document.getElementById("watchnowlink").href = "Videoplayers/extra/extras.html";
    }
    else if(item.innerHTML === "Attack On Titan"){
      document.getElementById("previewimg").src ="pictures/AOTprev.png";
      document.getElementById("lbshowimg").src = "pictures/AOT.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>In ancient times, monstrous, humanoid beings called Titans nearly eradicated humanity, driving them behind immense walls to live in constant terror. These Titans are unique in their complete lack of hunger-driven motivation, instead devouring human flesh out of sheer pleasure. For one hundred years, humanity knew peace behind their walls, free from any Titan encounters. However, a colossal Titan now breaks through the seemingly impenetrable exterior wall, sparking a renewed battle against these flesh-eating terrors. <br> After facing a devastating loss at the hands of the Titans, Eren Yeager commits his life to destroying them by enlisting in the Survey Corps. This elite military unit fights tirelessly against the ruthless Titans beyond the walls, and Eren, joined by his adopted sister Mikasa Ackerman and childhood friend Armin Arlert, must race against the clock to devise a strategy to defeat the Titans before the walls fall for good.</p>";
      document.getElementById("lbsname").innerHTML = "ATTACK ON TITAN";
      document.getElementById("lbrate").innerHTML = "Rating: 8.3/10";
      document.getElementById("lbgenre").innerHTML = "Action, Fantasy, Tragedy,Drama";
      document.getElementById("watchnowlink").href = "Videoplayers/extra/extras.html";
    }
    else if(item.innerHTML === "Demon Slayer"){
      document.getElementById("previewimg").src ="pictures/KNYprev.png";
      document.getElementById("lbshowimg").src = "pictures/demon_blade.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>After his father's passing, Tanjirou Kamado shoulders the burden of supporting his family. Despite residing in destitution on a remote mountain, the Kamado household manages to maintain a peaceful and contented existence. Seeking to bring in some money by selling charcoal, Tanjirou sets out on a journey to the nearby village. However, as night falls, he finds himself compelled to seek refuge in a stranger's home. The host warns him of the presence of flesh-eating demons that prowl the woods during the night. <br> The next day, Tanjirou returns home to a nightmare: his family has been ruthlessly slaughtered. His only surviving sibling, his sister Nezuko, has been cursed as a bloodthirsty demon. Filled with fury and hatred, Tanjirou vows to exact revenge for his family and care for Nezuko. He teams up with the mysterious Demon Slayer Corps and pledges to eradicate the demons and preserve his sister's remaining humanity no matter what.</p>";
      document.getElementById("lbsname").innerHTML = "DEMON SLAYER";
      document.getElementById("lbrate").innerHTML = "Rating: 8.9/10";
      document.getElementById("lbgenre").innerHTML = "Action, Fantasy, Demons"
      document.getElementById("watchnowlink").href = "Videoplayers/extra/extras.html";
    }
    else if(item.innerHTML === "Black Clover"){
      document.getElementById("previewimg").src ="pictures/cloverprev.png";
      document.getElementById("lbshowimg").src = "pictures/black_clover.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>Asta and Yuno were abandoned at a church on the same day and grew up together as children. They both shared the ambition of becoming the most powerful mage in the kingdom, commonly referred to as the Wizard King. Unfortunately, Asta did not possess magical abilities, relying instead on his physical capabilities for improvement, whereas Yuno easily wielded magic. When Yuno turned 15, he was gifted a rare Grimoire with a four-leaf clover, symbolizing his extraordinary magical skills. Astoundingly, Asta was left with nothing. However, their tranquil lives were disrupted when Lebuty, a dangerous adversary, attacked Yuno with the intention of acquiring his Grimoire. Although Asta tried to defend him, he was no match for Lebuty. Despite being on the brink of defeat, Asta's resolve was reignited when he heard Yuno's voice, fueling him to push beyond his limits. Ultimately, he obtained an exceedingly powerful Grimoire with a five-leaf clover, known as the Black Clover, granting him the strength to vanquish Lebuty. Afterward, the two friends ventured forth into the world with the same vision: to attain the position of Wizard King</p>";
      document.getElementById("lbsname").innerHTML = "BLACK CLOVER";
      document.getElementById("lbrate").innerHTML = "Rating: 8.4/10";
      document.getElementById("lbgenre").innerHTML = "Action, Drama, Fantasy, Horror"
      document.getElementById("watchnowlink").href = "Videoplayers/BLACKCLOVER/cloverE1.html";
    }
    else if(item.innerHTML === "Fullmetal Alchemist"){
      document.getElementById("previewimg").src ="pictures/FMAprev.png";
      document.getElementById("lbshowimg").src = "pictures/FMA.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>The Elric brothers' alchemy experiment ended in tragedy, leaving them in a nightmare realm. Against the principle forbidding human transmutation, they attempted to revive their deceased mother, but it resulted in irreversible damage: Alphonse's body disintegrated, while Edward sacrificed an arm and leg to anchor his brother's soul to a metal suit. Pinako Rockbell and her granddaughter Winry rescued them. Using her bio-mechanical engineering talent, Winry equipped Edward with automail, a durable metal used for robots and armor. The brothers set out to regain their forms by searching for the Philosopher's Stone - a gem that defies the laws of Equivalent Exchange. As Edward gains notoriety as Fullmetal and sharpens his alchemy skills, they become enmeshed in a vast conspiracy jeopardizing the world's destiny.</p>";
      document.getElementById("lbsname").innerHTML = "FULLMETAL ALCHEMIST";
      document.getElementById("lbrate").innerHTML = "Rating: 8.3/10";
      document.getElementById("lbgenre").innerHTML = "Fantasy, Science Fiction, Drama";
      document.getElementById("watchnowlink").href = "Videoplayers/extra/extras.html";
    }
    else if(item.innerHTML === "My Hero Academia"){
      document.getElementById("previewimg").src ="pictures/MHAprev.png";
      document.getElementById("lbshowimg").src = "pictures/MHA.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>As time has passed, quirks - previously unheard of supernatural abilities - have become increasingly common. Presently, four-fifths of humanity boasts these incredible powers, ranging from manipulation of the elements to the ability to transform. Izuku Midoriya, however, is among the minority with no quirk to speak of.<br>Despite this, Izuku has always dreamt of becoming a hero, determined to overcome his disadvantage. By studying and idolizing real heroes, he believes he can achieve his aspirations. One day, through sheer grit, he meets All Might, an idolized hero with a unique quirk that he can pass on to someone else. Recognizing Izuku's resolve, All Might selects him to take on the mantle!After grueling training, Izuku enrolls in UA High, a top-tier high school renowned for its exceptional hero program. This year's batch of freshmen appears especially talented, with Izuku's quirky but capable classmates. However, there is a looming threat of a villainous organization that adds complexity to their training, forcing Izuku to learn the true meaning of heroism.</p>";
      document.getElementById("lbsname").innerHTML = "MY HERO ACADEMIA";
      document.getElementById("lbrate").innerHTML = "Rating: 8.7/10";
      document.getElementById("lbgenre").innerHTML = "Action, School, Supernatural, Shounen"
      document.getElementById("watchnowlink").href = "Videoplayers/extra/extras.html";
    }
    else if(item.innerHTML === "Naruto: Shippuden"){
      document.getElementById("previewimg").src ="pictures/narutoprev.png";
      document.getElementById("lbshowimg").src = "pictures/narutoshippuden.jpg";
      document.getElementById("lbdesc").innerHTML = "<p>Naruto Uzumaki left the Hidden Leaf Village for intense training after an event that fueled his desire to become stronger. <br>Now, two and a half years later, the elite rogue ninja  organization Akatsuki is threatening the safety of the shinobi world with their grand plan. Despite the impending danger, Naruto's personality remains largely unchanged, still his rambunctious and childish self,  but now more confident and determined to protect his loved ones and home. He will continue to fight for what's important to him, even if it means sacrificing his own body, as his journey to become Hokage continues.</p>";
      document.getElementById("lbsname").innerHTML = "NARUTO: SHIPPUDEN";
      document.getElementById("lbrate").innerHTML = "Rating: 8.25/10";
      document.getElementById("lbgenre").innerHTML = "Action, Shounen, Martial Arts, Ninja"
      document.getElementById("watchnowlink").href = "Videoplayers/NARUTOSHIPPUDEN/narutoE1.html";
    }
}