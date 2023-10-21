import home from "../assets/home/home.webp";

export default function Home() {

  return (
    <>
      <div className="HomePresentation">
        <div className="HomePicture">
          <img src={home} alt="home"></img>
        </div>
        <div className="TextHome">
          <p>
            Bienvenue sur mon site dédié au crochet,<br></br>
            <br></br>
            chere amie des fils et des crochets ! Je suis ravie de vous
            accueillir parmi nous.<br></br>
            Permettez-moi de me présenter, je m'appelle Marine et je partage
            avec vous ma passion pour le crochet.<br></br>
            Ce qui a commencé comme une simple activité pendant ma grossesse est
            rapidement devenu un véritable amour pour cet art ancien et
            fascinant.<br></br>
            <br></br>
            Ici, vous trouverez un espace dédié à tous les amateurs et
            passionnés du crochet, quels que soient votre niveau d'expérience ou
            vos objectifs. Que vous soyez débutante curieuxse ou crocheteuse
            chevronnée, vous êtes au bon endroit pour découvrir des merveilles
            que le crochet peut créer. Des modèles de projets magnifiques,
            allant des écharpes et des bonnets aux couvertures et aux
            amigurumis, sont à votre disposition.
            <br></br>
            <br></br>
            Alors, installez-vous confortablement avec votre fil et votre
            crochet, laissez libre cours à votre imagination et préparez-vous à
            vivre de merveilleuses aventures crochet. Je vous souhaite une
            expérience enrichissante et inspirante sur mon site. Bienvenue dans
            l'univers du crochet ! Marine
          </p>
        </div>
      </div>
    </>
  );
}
