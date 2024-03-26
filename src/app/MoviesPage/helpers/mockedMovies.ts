import axios from 'axios';

// Interface para representar a estrutura dos dados do filme
interface Movie {
    titleText: string;
    releaseYear: string;
    primaryImage: string;
    synopsis: string
    id: number
    download: string
}
let id = 0
function nextId() {
    return id++
}
const moviesByGenre: Record<string, Movie[]> = {
    Drama: [
        {
            titleText: "The Batman",
            releaseYear: '3 de março de 2022',
            primaryImage: "https://upload.wikimedia.org/wikipedia/pt/3/38/The_Batman_poster.jpg",
            synopsis: 'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
            id: nextId(),
            download: 'magnet:?xt=urn:btih:iatigclf3besqh6clychdocscxf3syyg'
        },
        {
            titleText: "Dunkirk",
            releaseYear: ' 27 de julho de 2017 ',
            primaryImage: "https://br.web.img3.acsta.net/pictures/17/06/08/16/58/110585.jpg",
            synopsis: 'Durante a Segunda Guerra Mundial, a Alemanha avança rumo à França e cerca as tropas aliadas nas praias de Dunkirk. Sob cobertura aérea e terrestre das forças britânicas e francesas, as tropas são lentamente evacuadas da praia.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Oppenheimer",
            releaseYear: '20 de julho de 2023',
            primaryImage: "https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg",
            synopsis: 'O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Creed: Nascido Para Lutar",
            releaseYear: '14 de janeiro de 2016',
            primaryImage: "https://br.web.img2.acsta.net/pictures/15/10/14/14/58/220036.jpg",
            synopsis: 'Adonis Johnson (Michael B. Jordan) nunca conheceu o pai, Apollo Creed, que faleceu antes de seu nascimento. Ainda assim, a luta está em seu sangue e ele decide entrar no mundo das competições profissionais de boxe. Após muito insistir, Adonis consegue convencer Rocky Balboa (Sylvester Stallone) a ser seu treinador e, enquanto um luta pela glória, o outro luta pela vida.',
            id: nextId(),
            download: ''

        },
        {
            titleText: "Pobres Criaturas",
            releaseYear: '1 de fevereiro de 2024',
            primaryImage: "https://media.fstatic.com/xAvhakbxxLwXiOh1Uj7x7jK4vQY=/322x478/smart/filters:format(webp)/media/movies/covers/2023/06/cats_O934Wq8.jpg",
            synopsis: 'A história de amor e escândalo de Bella Baxter, uma bela mulher que é trazida de volta dos mortos por um excêntrico cientista na Glasgow vitoriana.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Intocaveis",
            releaseYear: '31 de agosto de 2012',
            primaryImage: "https://upload.wikimedia.org/wikipedia/pt/d/d6/Intouchables_cartaz.jpg",
            synopsis: 'Um milionário tetraplégico contrata um homem da periferia para ser o seu acompanhante, apesar de sua aparente falta de preparo. No entanto, a relação que antes era profissional cresce e vira uma amizade que mudará a vida dos dois.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Bob Marley One Love",
            releaseYear: '15 de fevereiro de 2024',
            primaryImage: "https://iguatemi.com.br/saopaulo/sites/saopaulo/files/97618e44-07a1-44e3-b752-ba26cc27c5bc.webp",
            synopsis: 'O filme celebra a vida e a música de Bob Marley, um ícone que inspirou gerações através da sua mensagem de amor e união.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "O Astronauta",
            releaseYear: '23 de fevereiro de 2024',
            primaryImage: "https://br.web.img2.acsta.net/r_1280_720/pictures/24/02/12/21/26/2308003.jpg",
            synopsis: 'Um astronauta enfrenta uma missão solitária de seis meses no espaço. Ele sente os efeitos extremos do isolamento e sofre com saudades da esposa. Lutando para se manter são, o homem é visitado por uma criatura alienígena que promete ajudá-lo a curar seus traumas.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "O Lobo de Wall Street",
            releaseYear: '24 de janeiro de 2014',
            primaryImage: "https://m.media-amazon.com/images/I/51MAuTMt+gL._AC_UF894,1000_QL80_.jpg",
            synopsis: 'Jordan Belfort é um ambicioso corretor da bolsa de valores que cria um verdadeiro império, enriquecendo de forma rápida, porém ilegal. Ele e seus amigos mergulham em um mundo de excessos, mas seus métodos ilícitos despertam a atenção da polícia.',
            id: nextId(),
            download: ''
        },


    ],
    Adventure: [
        {
            titleText: "Interestelar",
            releaseYear: '6 de novembro de 2014',
            primaryImage: "https://uauposters.com.br/media/catalog/product/4/1/411320150509-uau-posters-filmes-interestelar-interestellar.jpg",
            synopsis: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Viagem ao Centro da Terra",
            releaseYear: ' 11 de julho de 2008 ',
            primaryImage: "https://m.media-amazon.com/images/S/pv-target-images/57796532ea59a991aeb34b5c4188546eb95b9cca379f1791a9199b803a4edbd2.jpg",
            synopsis: 'Durante uma expedição na Islândia, o professor Trevor Anderson, o seu sobrinho Sean, e sua guia Hannah ficam presos em uma caverna. Enquanto seguem sua rota de fuga mais abaixo da superfície da Terra, eles passam por lugares estranhos e encontram criaturas incríveis, incluindo dinossauros. Porém, como a atividade vulcânica à sua volta aumenta, eles percebem que precisam encontrar o caminho para fora rapidamente.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Indiana Jones e o Reino da Caveira de Cristal",
            releaseYear: '21 de maio de 2008',
            primaryImage: "https://http2.mlstatic.com/D_NQ_NP_797283-MLB54962334170_042023-O.webp",
            synopsis: 'Durante a Guerra Fria, Indiana Jones e o jovem Mutt buscam a Caveira de Cristal, um objeto místico de grande valor, mas logo percebem que não estão sozinhos. Soviéticos liderados pela cruel Irina Spalko também querem o objeto para tentar dominar o mundo através dele.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "A Sociedade da Neve",
            releaseYear: '20 de outubro de 2023 ',
            primaryImage: "https://br.web.img3.acsta.net/pictures/23/12/05/13/57/5988725.png",
            synopsis: 'Em 1972, um voo vindo do Uruguai colide com uma geleira nos Andes. Apenas 29 dos seus 45 passageiros sobreviveram ao acidente. Presos em um dos ambientes mais hostis do planeta, eles são forçados a lutar pelas suas vidas.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Depois da Terra",
            releaseYear: '7 de junho de 2013',
            primaryImage: "https://br.web.img3.acsta.net/medias/nmedia/18/91/75/09/20500585.jpg",
            synopsis: 'Cypher embarca em uma viagem espacial ao lado do filho Kitai, mas uma chuva de asteroides força a dupla a pousar na Terra, que há mil anos não é habitada por humanos. Cypher é gravemente ferido, e Kitai precisa enfrentar grandes perigos na busca do sinalizador, o único objeto que pode ajudá-los a voltar para casa.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "As Crônicas de Spiderwick",
            releaseYear: '21 de março de 2008',
            primaryImage: "https://play-lh.googleusercontent.com/KMK79tauzB5z8rr87WPkPcVPP64y1KhxK-5ZAqKlOV18PTVp8QmuLXbvyCguvTXv3Bqx",
            synopsis: 'Dos três filhos de Grace, Jared sempre foi considerado o causador de problemas. Assim, quando coisas estranhas acontecem depois que a família se muda para uma propriedade arruinada, a irmã Mallory, o irmão gêmeo Simon e a mãe pensam que Jared é o responsável por tudo. Na verdade, eles descobrem que criaturas mágicas que vagueiam pelas terras querem o livro mágico que Jared encontrou, um guia sobre criaturas fantásticas, escrito por Arthur Spiderwick.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Jumanji: Próxima Fase",
            releaseYear: '5 de dezembro de 2019 ',
            primaryImage: "https://br.web.img2.acsta.net/c_310_420/pictures/20/01/28/22/12/4169305.jpg",
            synopsis: 'Spencer volta ao mundo fantástico de Jumanji. Os amigos Martha, Fridge e Bethany entram no jogo e tentam trazê-lo para casa. A turma descobre ainda mais obstáculos e perigos a serem superados.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Rango",
            releaseYear: '9 de março de 2011',
            primaryImage: "https://m.media-amazon.com/images/I/91cSM+uESZL._AC_UF894,1000_QL80_.jpg",
            synopsis: 'Um camaleão que viveu como um animal de estimação se encontra em uma crise de identidade. Rango se questiona sobre como se destacar quando é de sua natureza se camuflar. Acidentalmente, ele acaba em uma cidade de fronteira chamada Dirt e dá o primeiro passo em direção à transformação se tornando xerife. Embora inicialmente ele apenas tenha encenado, uma série de situações emocionantes e encontros escandalosos obrigam Rango a se tornar um verdadeiro herói.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Maze Runner: Correr ou Morrer",
            releaseYear: '18 de setembro de 2014',
            primaryImage: "https://br.web.img2.acsta.net/pictures/14/08/20/00/16/149160.jpg",
            synopsis: 'Em um futuro apocalíptico, o jovem Thomas é escolhido para enfrentar o sistema. Ele acorda dentro de um escuro elevador em movimento e não consegue se lembrar nem de seu nome. Na comunidade isolada em que foi abandonado, Thomas conhece outros garotos que passaram pela mesma situação. Para conseguir escapar, ele precisa descobrir os sombrios segredos guardados em sua mente e correr muito.',
            id: nextId(),
            download: ''
        },

    ],
    Action: [
        {
            titleText: "Deadpool",
            releaseYear: ' 11 de fevereiro de 2016 ',
            primaryImage: "https://img.elo7.com.br/product/zoom/1E3BBAE/big-poster-do-filme-deadpool-tamanho-90x-0-cm-loot-op-007-marvel.jpg",
            synopsis: 'Wade Wilson é um ex-agente especial que passou a trabalhar como mercenário. Seu mundo é destruído quando um cientista maligno o tortura e o desfigura completamente. O experimento brutal transforma Wade em Deadpool, que ganha poderes especiais de cura e uma força aprimorada. Com a ajuda de aliados poderosos e um senso de humor mais desbocado e cínico do que nunca, o irreverente anti-herói usa habilidades e métodos violentos para se vingar do homem que quase acabou com a sua vida.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Planeta dos Macacos: A Guerra",
            releaseYear: ' 3 de agosto de 2017  ',
            primaryImage: "https://play-lh.googleusercontent.com/gSW36tyYf9WsBzzyGuaEL5Oqn6W_-SmLv9LlE4PpZC_YR_CgNkjBuEll-kCG5V8bcUaC",
            synopsis: 'César e seu grupo são forçados a entrar em uma guerra contra um exército de soldados liderados por um impiedoso coronel. Depois que vários macacos perdem suas vidas no conflito, César luta contra seus instintos e parte em busca de vingança. Dessa jornada, o futuro do planeta poderá estar em jogo.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Logan",
            releaseYear: '2 de março de 2017',
            primaryImage: "https://cdn.awsli.com.br/600x700/1610/1610163/produto/177684929/poster-logan-b-5f006d4a.jpg",
            synopsis: 'Em 2024, os mutantes estão em franco declínio, e as pessoas não sabem o real motivo. Uma organização está transformando as crianças mutantes em verdadeiras assassinas. Wolverine, cansado de tudo e a pedido de um cada vez mais enfraquecido Professor Xavier, precisa proteger a jovem e poderosa Laura Kinney, conhecida como X-23. Enquanto isso, o vilão Nathaniel Essex amplia seu projeto de destruição.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Até o Último Homem",
            releaseYear: '26 de janeiro de 2017',
            primaryImage: "https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg",
            synopsis: 'Durante a Segunda Guerra Mundial, o médico do exército Desmond T. Doss se recusa a pegar em uma arma e matar pessoas, porém, durante a Batalha de Okinawa ele trabalha na ala médica e salva mais de 75 homens, sendo condecorado. O que faz de Doss o primeiro Opositor Consciente da história norte-americana a receber a Medalha de Honra do Congresso.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Homem-Aranha: Através do Aranhaverso",
            releaseYear: '1 de junho de 2023',
            primaryImage: "https://www.sonypictures.com.br/sites/brazil/files/2023-08/SN_HomemAranha_1400x2100%20%281%29.jpg",
            synopsis: 'Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso. Lá, o super-herói aracnídeo encontra uma numerosa equipe encarregada de proteger sua própria existência.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Batman: O Cavaleiro das Trevas Ressurge",
            releaseYear: ' 27 de julho de 2012 ',
            primaryImage: "https://play-lh.googleusercontent.com/si7pFaYmLm4xjFLcyQ5Hkd_xNFomLv3EmyaQqTB7-W-Vkw0H9sjMCP4Ml3vVVkOG6P-k6JT_DFCfG8jTVuAU",
            synopsis: 'Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Vingadores: Ultimato",
            releaseYear: '25 de abril de 2019',
            primaryImage: "https://img.elo7.com.br/product/zoom/2678F78/cartaz-poster-vingadores-4-ultimato-filme-marvel-avengers-colecionador.jpg",
            synopsis: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Rocky Balboa",
            releaseYear: '20 de dezembro de 2006',
            primaryImage: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/95/32/20171186.jpg",
            synopsis: 'Aposentado, Rocky trabalha em um restaurante e lamenta a perda de sua amada mulher, Adrian. Com saudade de seus dias de glória, ele pretende voltar ao ringue e aceita o desafio de lutar contra o atual campeão mundial dos pesos pesados, Mason Dixon.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Vida",
            releaseYear: '20 de abril de 2017',
            primaryImage: "https://br.web.img3.acsta.net/pictures/17/03/02/20/40/332164.jpg",
            synopsis: 'Uma equipe de seis astronautas da Estação Espacial Internacional descobre sinais de vida inteligente em Marte e a investigação do fato gera consequências inimagináveis.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Missão: Impossível - Efeito Fallout",
            releaseYear: '26 de julho de 2018',
            primaryImage: "https://br.web.img3.acsta.net/pictures/18/05/14/17/09/5117345.jpg",
            synopsis: 'Em uma perigosa tarefa para recuperar plutônio roubado, Ethan Hunt opta por salvar sua equipe em vez de completar a missão. Com isso, armas nucleares caem nas mãos de agentes altamente qualificados e que pertencem a uma rede mortal que deseja destruir a civilização. Agora, com o mundo em risco, Ethan e sua equipe da IMF são forçados a aliar-se a um obstinado agente da CIA.',
            id: nextId(),
            download: ''
        },
        {
            titleText: "Velozes e Furiosos 10",
            releaseYear: '18 de maio de 2023',
            primaryImage: "https://br.web.img2.acsta.net/pictures/23/05/16/22/53/0156803.jpg",
            synopsis: 'Dom Toretto e sua família precisam lidar com o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e todos que ele ama.',
            id: nextId(),
            download: ''
        },


    ]
};
const moviesById: Movie[] = [];
moviesByGenre['Drama'].forEach((movie) => moviesById.push(movie));
moviesByGenre['Adventure'].forEach((movie) => moviesById.push(movie));
moviesByGenre['Action'].forEach((movie) => moviesById.push(movie));

export async function moviesList(genre: string): Promise<Movie[]> {
    return moviesByGenre[genre];
}

export async function movie(id: number): Promise<Movie> {
    return moviesById[id];
}

