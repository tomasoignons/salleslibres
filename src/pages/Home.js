import React from "react"
import "../style/pages/home.scss"

const Home = () =>{
    return(
        <div className="home">
            <div className="main">
                <div className="questions-title">
                    WAAW, où suis-je ?
                </div>
                <div className="questions-response">
                    C'est très simple, tu es actuellement sur la v2 du site salles libres, créé en février 2023. Ici, tu pourras retrouver tous les documents ayant trait à Fenelon : on peut y trouver des anciennes interros pour s'entrainer, des cours, des fiches de français, de philosophie, et de diverses matières. Bref, on y trouve vraiment de tout, et j'espère que tu y trouveras ton bonheur
                </div>

                <div className="questions-title">
                    Comment est structuré le site ?
                </div>
                <div className="questions-response">
                    La barre de navigation en haut est le coeur intégral du site : on y retrouve la page d'accueil, le profil, et, plus tard, lorsque tu seras connecté, l'accès aux différents documents postés par les élèves, et évidemment, la possibilité de poster des documents par toi même.
                </div>

                <div className="questions-title">
                    Comment faire pour m'inscrire ?
                </div>
                <div className="questions-response">
                    Pour s'inscrire, rien de plus simple : il suffit de cliquer sur la petite icone "profil" dans la barre de navigation, pour ensuite créer son compte. d'ailleurs, le site n'accepte <strong>que les adresses email en @edufenelon.org</strong>, afin que seuls les élèves de Fenelon puisent avoir au site.
                </div>

                <div className="questions-title">
                    Suis-je obligé d'utiliser mon adresse @edufenelon.org pour m'inscrire ?
                </div>
                <div className="questions-response">
                    Oui, sinon cela ne fonctionnera pas. Tu dois d'ailleurs rentrer une adresse valide, puisque tu vas devoir valider un lien envoyé par email avant de pouvoir accéder au site. (pour l'instant, l'email envoyant les liens est tomasoignons@gmail.com, mais normalement je change ça bientôt pour salleslibres@gmail.com). Tu auras ensuite la possibilité d'ajouter une autre adresse email, au cas où tu aurais oublié ton mot de passe (fonctionnalité pas encore développée actuellement)
                </div>

                <div className="questions-title">
                    Combien de personnes sont sur ce projet ?
                </div>
                <div className="questions-response">
                    1 seule et unique personne, moi-même, a fait ce projet de A à Z, de l'idée à la publication.   
                </div>

                <div className="questions-title">
                    Mais ducoup, tu as mis combien de temps à le faire ?
                </div>
                <div className="questions-response">
                    La v1 de salleslibres est sortie en janvier 2023, et n'était que l'adaptation d'une application mobile. La bêta de la v2 (donc la première version 'utilisable' de la v2) est sortie le 27 mai 2023, donc presque 6 mois après. Cependant, le développement pur n'a commencé que deux semaines avant, une fois que j'avais acquis toutes les compétences nécessaires pour mener à bien ce projet (notamment des connaissances en React et en NodeJS, que je découvrais). Donc j'ai pas beaucoup dormis pendant ces 2 semaines (une bonne moyenne de 5h par nuit), en plus de développer le site pendant les cours de philosophie, d'anglais, de mathématique et de physique. Pour répondre à la question, pour la bêta, on est entre <strong>60 et 70 heures de développement condensées sur 8-10 jours</strong> en plus des cours.
                </div>

                <div className="questions-title">
                    Donc là, tout est bon ?
                </div>
                <div className="questions-response">
                    Pas du tout, ce n'est que le début. Il va probablement falloir que j'optimise mon code, et il manque quelques fonctionnalités clées très importantes, qui seront développées, je l'espère, assez rapidement. Par exemple, il est actuellement impossible de réinitialiser son mot de passe, de mettre une adresse email en plus de celle de fenelon, la fonctionnalité de recherche n'est pas en place (soyez indulgents, rien que pour ce truc, j'en ai pour au moins 10-20 heures de développement), bref, tout reste à faire
                </div>

                <div className="questions-title">
                    Et si j'oublie mon mot de passe, ou que j'ai un problème avec le mail envoyé ?
                </div>
                <div className="questions-response">
                    Dans ce cas, n'hésitez pas à m'envoyer un mail personnel sur eomont@edufenelon.org, d'ailleurs <strong>N'hésitez pas à m'en envoyer un si vous voyez un truc qui crash régulièrement</strong>, étant donné que je n'ai pas du tout eu le temps de tout tester dans les moindre détails (et aussi, comme le disent les anciens : "ce n'est pas parce que cela marche sur ton ordinateur que cela marchera en production")
                </div>

                <div className="questions-title">
                    Quels documents puis-je envoyer ici ?
                </div>
                <div className="questions-response">
                    Pour l'instant, des documents de <strong>MAXIMUM 8MO</strong> sinon ils ne passeront tout simplement pas sur le serveur, et ça provoquera des erreurs de partout. Merci pour votre compréhension de ne pas le faire. Si vous voulez envoyer des fichiers plus lourds, essayez de les convertir (par exemple en pdf pour les pptx), et de les compresser avec des compresseurs en ligne. Si vous essayez, je pense que tout crashera chez tout le monde, donc ce sera pas la meilleure chose au monde
                </div>

                <div className="questions-title">
                    Si je scanne mes cours, je peux les envoyer ici ?
                </div>
                <div className="questions-response">
                    <strong>Oui et non</strong> je m'explique : le serveur ne prend pas et ne prendra jamais en charge le multi-document, donc tu ne peux pas uploader plusieurs photos, qui seraient donc un seul document. Par contre, tu peux aller sur des sites comme Ilovepdf, qui permettront de fusionner ces photos pour créer un pdf commun. Merci d'ailleurs, même si cela me paraît évident, de <strong>Ne pas uploader de documents de type "partie 1 de YYYY sujet"</strong>. Si le document est trop lourd, il est trop lourd, ne le scindez pas en plusieurs sous-document.
                </div>

                <div className="questions-title">
                    Je peux me faire ban d'ici ?
                </div>
                <div className="questions-response">
                    Des contrôles aléatoires seront effectués sur des documents pris au hasard. Si ils ne correspondent pas aux critères de sélections (documents vides, ne correspondant pas à ce qui est écris, identique à un autre document...), je me réserve le droit de ban le compte qui les as mis (et je te rappelle que ton adresse edufenelon est unique, donc une fois que tu es ban, c'est à vie.). Je me réserve également le droit de supprimer des documents, et d'avertir des personnes sur leur comportement avant de les ban définitivement, si j'en ai l'envie (en gros, je suis le dictateur, <strong>c'est MON site, je fais ce que je veux</strong>)
                </div>

                <div className="questions-title">
                    C'est quoi, les MUN pièces ?
                </div>
                <div className="questions-response">
                    Le site fonctionne sur un système de gagnant-gagnant : vous ne pouvez pas que télécharger des documents, sans jamais contribuer. C'est pour cette raison que j'ai mis en place un système de monnaie : chaque utilisateur démarre avec <strong>10 MUN pièces lors de son inscription</strong>. Télécharger un document coute <strong>1 MUN pièce</strong>, et en uploader un vous en <strong>rapporte 3</strong>. Maintenant, c'est à vous de faire le calcul : pour un document uploadé, vous pouvez en télécharger 3 : franchement c'est plutôt gagnant pour vous.
                </div>

                <div className="questions-title">
                    Y-a-t-il un autre moyen de gagner des MUN pièces ?
                </div>
                <div className="questions-response">
                    J'aime les énigmes, et c'est pour cette raison que je vais mettre en place un système de "flag", où il faudra trouver des suites de caractères sur le site (par exemple dans le code source), qui feront gagner une vingtaine de MUN pièces lorsqu'ils seront trouvés.
                </div>

                <div className="questions-title">
                    J'ai encore une question !
                </div>
                <div className="questions-response">
                    Je suis contactable jusqu'au 30 septembre 2023 à eomont@edufenelon.org, et je mettrai mon adresse mail de l'EPFL lorsque je l'aurais reçue. Je regarde quasiment jamais tomasoignons@gmail.com et salleslibres@gmail.com, donc ne compte pas trop sur ces adresses mails pour me remonter quelque chose d'urgent.
                </div>
            </div>
        </div>
    );
};

export default Home