"use strict";
const postCards = [
    {
        id: 1,
        title: "One Piece",
        classTitle: "post1",
        imageUrl: "../assets/Animes e séries/OnePiece.jpe",
        body: "One Piece is a popular anime and manga series created by Eiichiro Oda. It tells the story of Monkey D. Luffy, a young pirate with a dream of finding the legendary treasure known as One Piece and becoming the Pirate King. Luffy embarks on a grand adventure, forming a diverse crew of unique individuals with their own goals and abilities. Together, they sail the vast and dangerous seas, facing powerful enemies, uncovering ancient mysteries, and exploring new islands. One Piece is known for its rich world-building, engaging characters, thrilling battles, and a compelling storyline that blends action, comedy, and drama.",
        CommentPostDetails: [
            {
                id: 1,
                postId: 1,
                email: "usuario1@example.com",
                body: "One Piece is a masterpiece that captivated me with its thrilling narrative and unforgettable characters!",
            },
            {
                id: 2,
                postId: 1,
                email: "usuario2@example.com",
                body: "I love how One Piece tackles themes like friendship, courage, and perseverance in such an engaging way.",
            },
            {
                id: 3,
                postId: 1,
                email: "usuario3@example.com",
                body: "One Piece transports me to a world full of adventure and fantasy, where each arc is an epic journey!",
            },
            {
                id: 4,
                postId: 1,
                email: "usuario4@example.com",
                body: "The world of One Piece is so vast and well-crafted that I'm always excited to uncover more about the mysteries and secrets within.",
            },
            {
                id: 5,
                postId: 1,
                email: "usuario5@example.com",
                body: "The Straw Hat crew is amazing! Each member has their own unique personality, and together they form an unbeatable team.",
            },
            {
                id: 6,
                postId: 1,
                email: "usuario6@example.com",
                body: "One Piece has taught me valuable lessons about persistence, overcoming challenges, and never giving up on my dreams. It's a constant inspiration!",
            },
        ],
    },
    {
        id: 2,
        title: "Fullmetal Alchemist Botherhood",
        classTitle: "post2",
        imageUrl: "../assets/Animes e séries/FMA.jpeg",
        body: "Fullmetal Alchemist: Brotherhood is an anime and manga series that tells the story of Edward and Alphonse Elric, two alchemist brothers on a quest to find the Philosopher's Stone and restore their bodies. Set in a world where alchemy exists, the narrative delves into themes of power, morality, and the consequences of human transmutation.",
        CommentPostDetails: [
            {
                id: 1,
                postId: 2,
                email: "usuario1@example.com",
                body: "Fullmetal Alchemist: Brotherhood is a masterpiece that combines a complex narrative with captivating characters and poignant moments!",
            },
            {
                id: 2,
                postId: 2,
                email: "usuario2@example.com",
                body: "FMA: Brotherhood won me over with its incredible blend of action, drama, and alchemical elements, creating a unique and immersive universe.",
            },
            {
                id: 3,
                postId: 2,
                email: "usuario3@example.com",
                body: "The story of FMA: Brotherhood delves into deep themes like sacrifice, redemption, and the consequences of tampering with alchemical power in such a impactful way.",
            },
            {
                id: 4,
                postId: 2,
                email: "usuario4@example.com",
                body: "The characters in Fullmetal Alchemist: Brotherhood are so well-developed and layered that it's impossible not to emotionally invest in their journeys and conflicts.",
            },
            {
                id: 5,
                postId: 2,
                email: "usuario5@example.com",
                body: "Each episode of FMA: Brotherhood is an emotional roller coaster, with surprising twists and breathtaking action scenes that left me breathless!",
            },
            {
                id: 6,
                postId: 2,
                email: "usuario6@example.com",
                body: "Fullmetal Alchemist: Brotherhood made me reflect on philosophical and moral questions while delivering an epic and captivating story. Simply amazing!",
            },
        ],
    },
    {
        id: 3,
        title: "Hunter x Hunter",
        classTitle: "post3",
        imageUrl: "../assets/Animes e séries/HXH.jpe",
        body: "Hunter x Hunter is an anime and manga that follows the adventures of Gon Freecss, a young boy who aspires to become a Hunter like his absent father. In a world teeming with dangerous creatures, Gon faces numerous challenges while forging friendships and discovering the true meaning of being a Hunter.",
        CommentPostDetails: [
            {
                id: 1,
                postId: 3,
                email: "usuario1@example.com",
                body: "Hunter x Hunter is an anime masterpiece with a complex narrative, deep characters, and a plot full of thrilling twists!!",
            },
            {
                id: 2,
                postId: 3,
                email: "usuario2@example.com",
                body: "HxH won me over with its world of hunters, special powers, and Gon Freecss' journey in search of his father. An adventure that you can't stop watching!",
            },
            {
                id: 3,
                postId: 3,
                email: "usuario3@example.com",
                body: "The exploration of themes such as friendship, family, determination, and the cost of power in Hunter x Hunter is simply brilliant and completely immersed me in the story.",
            },
            {
                id: 4,
                postId: 3,
                email: "usuario4@example.com",
                body: "The arcs in HxH are masterfully constructed, each bringing new challenges and further developing the characters, creating a rich and captivating plot.",
            },
            {
                id: 5,
                postId: 3,
                email: "usuario5@example.com",
                body: "The fights in Hunter x Hunter are strategic, intelligent, and full of surprises. It's exciting to see how the characters use their unique abilities to overcome challenges.",
            },
            {
                id: 6,
                postId: 3,
                email: "usuario6@example.com",
                body: "Hunter x Hunter is an emotional journey that can bring tears and make us reflect on the meaning of life, friendship, and sacrifice. A true masterpiece of the genre!",
            },
        ],
    },
    {
        id: 4,
        title: "Wandinha",
        classTitle: "post4",
        imageUrl: "../assets/Animes e séries/Wandinha.jpg",
        body: "Wandinha, known as Wednesday Addams in English, is a fictional character from 'The Addams Family' television series and comics. She is the dark, intelligent, and sarcastic youngest daughter of the family, with a fascination for the macabre. Wandinha's character provides a unique blend of humor and gothic elements to the Addams Family franchise.",
        CommentPostDetails: [
            {
                id: 1,
                postId: 4,
                email: "usuario1@example.com",
                body: "Wandinha Addams is an iconic character with a peculiar sense of humor.",
            },
            {
                id: 2,
                postId: 4,
                email: "usuario2@example.com",
                body: "The visual style of 'The Addams Family' is stunning, and Wandinha stands out with her gothic wardrobe.",
            },
            {
                id: 3,
                postId: 4,
                email: "usuario3@example.com",
                body: "Wandinha conveys a powerful message of self-acceptance and individuality.",
            },
            {
                id: 4,
                postId: 4,
                email: "usuario4@example.com",
                body: "Wandinha's loving and loyal relationship with her family is comforting.",
            },
            {
                id: 5,
                postId: 4,
                email: "usuario5@example.com",
                body: "'The Addams Family' is a timeless dark comedy with a unique charm.",
            },
            {
                id: 6,
                postId: 4,
                email: "usuario6@example.com",
                body: "Wandinha is a cultural icon representing uniqueness and diversity.",
            },
        ],
    },
    {
        id: 5,
        title: "Yu Yu Hakusho",
        classTitle: "post5",
        imageUrl: "../assets/Animes e séries/Yu Yu Hakusho.jpe",
        body: "Yu Yu Hakusho is an anime and manga that centers around Yusuke Urameshi, a teenager who becomes a spirit detective after dying in an accident. As he battles supernatural entities, Yusuke grows as a person, forming friendships and facing moral dilemmas. The series explores themes of redemption, friendship, and the importance of one's choices.",
        CommentPostDetails: [
            {
                id: 1,
                postId: 5,
                email: "usuario1@example.com",
                body: "'Yu Yu Hakusho' is a classic anime with a perfect blend of action, adventure, comedy, and drama.",
            },
            {
                id: 2,
                postId: 5,
                email: "usuario2@example.com",
                body: "The charismatic and well-developed characters of 'Yu Yu Hakusho' are engaging.",
            },
            {
                id: 3,
                postId: 5,
                email: "usuario3@example.com",
                body: "The fight scenes in Yu Yu Hakusho are spectacular and full of energy.",
            },
            {
                id: 4,
                postId: 5,
                email: "usuario4@example.com",
                body: "The friendship between Yusuke, Kuwabara, Hiei, and Kurama in Yu Yu Hakusho is powerful and inspiring.",
            },
            {
                id: 5,
                postId: 5,
                email: "usuario5@example.com",
                body: "The twist-filled narrative of Yu Yu Hakusho keeps the viewer intrigued.",
            },
            {
                id: 6,
                postId: 5,
                email: "usuario6@example.com",
                body: "Yu Yu Hakusho is an exciting story that showcases the power of teamwork and mutual support.",
            },
        ],
    },
    {
        id: 6,
        title: "Dark",
        classTitle: "post6",
        imageUrl: "../assets/Animes e séries/Dark.png",
        body: "Dark is a German television series blending suspense and science fiction. The story revolves around multiple families in a small town, interconnected through mysterious disappearances of children. The narrative incorporates time travel, intricate mysteries, and intricate family secrets, raising questions about fate, free will, and the nature of existence. Dark explores complex themes while keeping viewers captivated with its intricate plot and compelling characters.",
        CommentPostDetails: [
            {
                id: 1,
                postId: 6,
                email: "usuario1@example.com",
                body: "Dark is a captivating series that brilliantly combines mystery and time travel.",
            },
            {
                id: 2,
                postId: 6,
                email: "usuario2@example.com",
                body: "The dark atmosphere and complex narrative of Dark keep the viewer engaged until the end.",
            },
            {
                id: 3,
                postId: 6,
                email: "usuario3@example.com",
                body: "The actors in Dark deliver exceptional performances, bringing the complex characters to life.",
            },
            {
                id: 4,
                postId: 6,
                email: "usuario4@example.com",
                body: "Dark tackles profound themes such as free will and the consequences of our actions.",
            },
            {
                id: 5,
                postId: 6,
                email: "usuario5@example.com",
                body: "The chilling soundtrack of Dark intensifies the viewer's experience.",
            },
            {
                id: 6,
                postId: 6,
                email: "usuario6@example.com",
                body: "The intricate plot of Dark fits together perfectly, providing a satisfying conclusion.",
            },
        ],
    }
];
// firs page function create //
function createPage(objetos) {
    const body = document.querySelector(".container-cards");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    let divTemp = null;
    objetos.forEach((object) => {
        //cut the texto from body
        const bodySlice = object.body.split(" ").slice(0, 25).join(" ");
        //inserting the html code with the object //
        const divCard = document.createElement("div");
        divCard.innerHTML = `<img src="${object.imageUrl}" alt="${object.title}"/>
        
        <h2 class="${object.classTitle}">${object.title}</h2>
        <p>${bodySlice}</p>
        
        <button><a href="../dist/pageDetails.html?id=${object.id}">Expand...</a></button>`;
        grid?.appendChild(divCard);
        divCard.addEventListener("click", () => {
            const getId = object.id;
            window.location.href = `../dist/pageDetails.html?id=${getId}`;
        });
    });
    body?.appendChild(grid);
}
createPage(postCards);
//Page Details//
createPageDetails(postCards);
//Page Details function //
function createPageDetails(objetos) {
    const url = new URLSearchParams(window.location.search);
    const idUrl = url.get("id");
    const bodyDetails = document.querySelector(".detail-container");
    const postDetails = document.createElement("div");
    postDetails.classList.add("post-details");
    // inserting the html page details code with the object //
    objetos.forEach((obj) => {
        if (Number(idUrl) == obj.id) {
            document.title = obj.title;
            postDetails.innerHTML = `
                                        <div class="post-card">
                                            <img src="${obj.imageUrl}">
                                            <div class="card-post">
                                                <div class="tittle-post">${obj.title}</div>
                                                <div class="text-post">
                                                ${obj.body}
                                            </div>
                                        </div>
                                    </div>`;
            bodyDetails?.appendChild(postDetails);
            obj.CommentPostDetails.forEach((coment) => {
                const commentsContainer = document.querySelector(".detail-container");
                const postDetails = document.createElement("div");
                postDetails.classList.add("post-details");
                postDetails.innerHTML = `<div class="comments-container">
                                            <div class="comment-card">
                        	                    <div class="user"> User${coment.id}:  ${coment.email}:</div>
                                                <address class="text-comment">
                                                ${coment.body}
                                            </address>
                                            <div class="separator"></div>
                                            </div>
                                        </div>`;
                commentsContainer?.appendChild(postDetails);
            });
        }
    });
}
