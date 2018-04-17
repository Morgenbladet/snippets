jQuery(document).ready(function ($) {
  var data = [
    {
      "stol": 1,
      "navn": "Lotta Lotass",
      "beskrivelse": "Født 1964. Litteraturforsker og forfatter. Innvalgt i 2009. Fortalte høsten 2017 at hun ikke hadde møtt i Akademien på to år fordi hun mistrivdes i miljøet. Hun har uttalt at hun ikke syntes Katarina Frostenson burde ekskluderes.\n"
    },
    {
      "stol": 2,
      "navn": "Bo Ralph",
      "beskrivelse": "Født 1945. Språkforsker. Innvalgt i 1999. Stemte imot en utestengelse av Katarina Frostenson. Er også medlem i Agder vitenskapsakademi.\n"
    },
    {
      "stol": 3,
      "navn": "Sture Allén",
      "beskrivelse": "Født 1928. Språkforsker. Innvalgt i 1980. I perioden 1986-1999 var Allén Akademiens leder. I denne perioden kom de første varslene mot Kulturprofilen. Allén tok ikke grep og ville ikke kommentere varslene offentlig. Har nylig sagt at det «ikke fremsto som viktig». Stemte imot utestengelse av Katarina Frostenson.\n"
    },
    {
      "stol": 4,
      "navn": "Anders Olsson",
      "beskrivelse": " Født 1949. Litteraturhistoriker. Innvalgt i 2008. Har posisjonert seg som en samlende skikkelse, og har midlertidig overtatt lederoppgavene i Akademien. Hevdet å ha kongen med seg på løsningen der Danius og Frostenson trakk seg, noe hoffet dementerte. Stemte imot utestengelse av Katarina Frostenson. På slutten av 1970-tallet grunnla han tidsskriftet Kris sammen med blant andre Horace Engdahl.\n"
    },
    {
      "stol": 5,
      "navn": "Göran Malmqvist",
      "beskrivelse": "Født 1924. Språk- og litteraturforsker. Innvalgt i 1985. Akademiens eldste medlem. Fremsto som svært rystet etter møtet som endte med at Sara Danius trakk seg. På spørsmål om Danius hadde mistet Akademiens tillit svarte han: «Hun har ikke mistet Akademiens respekt.» Stemte imot utestengelse av Katarina Frostenson.\n"
    },
    {
      "stol": 6,
      "navn": "Tomas Raid",
      "beskrivelse": "1959. Språkforsker. Innvalgt i 2011. Har holdt en lav profil i skandalen, men tilhørte majoriteten som stemte imot utestengelse av Katarina Frostenson.\n"
    },
    {
      "stol": 7,
      "navn": "Sara Danius",
      "beskrivelse": "Født 1962. Litteraturforsker og forfatter. Innvalgt i 2013. Akademiens leder fra 2015. Satte i gang en større utredning etter varslene mot Kulturprofilen. Ønsket en utestengelse av Katarina Frostenson, men fikk flertallet mot seg og tapte. Forlot ledervervet og sin stol torsdag 12. april. Har ifølge Akademiens hjemmeside spilt basketball på elitenivå og er autorisert som croupière og card dealer.\n"
    },
    {
      "stol": 8,
      "navn": "Jesper Svenbro",
      "beskrivelse": "Født 1944. Poet og litteraturforsker. Innvalgt i 2006. Stemte for en utestengelse av Katarina Frostenson og var imot å kaste Sara Danius som leder.\n"
    },
    {
      "stol": 9,
      "navn": "Jayne Svenungsson",
      "beskrivelse": "Født 1973. Teolog og religionsfilosof. Innvalgt i 2017. Akademiens ferskeste medlem stemte imot en utestengelse av Katarina Frostenson med begrunnelsen at «den som er uten synd, kan kaste den første stenen».\n"
    },
    {
      "stol": 10,
      "navn": "Peter Englund",
      "beskrivelse": "Født 1957. Historiker og forfatter. Innvalgt i 2002. Akademiens leder i perioden 2009-2015 og en uttalt støttespiller for Sara Danius. Etter å ha stemt for en utkastelse av Katarina Frostenson, trakk han seg fra sin stol fredag 6. april fordi en «beslutning er tatt som jeg hverken tror på eller kan forsvare». Har lagt ut bilde av seg selv ikledd «knytblus» på Instagram med emneknagg #knytblusforsara.\n"
    },
    {
      "stol": 11,
      "navn": "Klas Östergren",
      "beskrivelse": "Født 1955. Forfatter. Innvalgt i 2014. Etter å ha stemt for en utkastelse av Katarina Frostenson, trakk han seg fra sin stol fredag 6. april. I en uttalelse siterte han Leonard Cohen: «I’m leaving the table. I’m out of the game.» Har levert en formell begjæring om å få forlate Akademien.\n"
    },
    {
      "stol": 12,
      "navn": "Per Wästberg",
      "beskrivelse": "Født 1933. Forfatter. Innvalgt i 1997. Har støttet Sara Danius’ håndtering av skandalen og kalt resultatet «en skamplett på Akademien som ikke kan vaskes bort». Stemte for en utestengelse av Katarina Frostenson.\n"
    },
    {
      "stol": 13,
      "navn": "Sara Stridsberg",
      "beskrivelse": "Født 1972. Forfatter. Innvalgt i 2016. Rapportene er uklare om hvordan Stridsberg stemte i spørsmålet om utestengelse av Katarina Frostenson, men etter møtet der Danius ble kastet, forlot hun lokalene arm i arm med den avsatte lederen. Etterpå har hun uttalt at hun kjempet for Danius og at hun gråt under møtet. Har ikke svart på om hun vil trekke seg.\n"
    },
    {
      "stol": 14,
      "navn": "Kristina Lugn",
      "beskrivelse": "Født 1948. Poet og dramatiker. Innvalgt i 2006. Stemte imot utestengelse av Katarina Frostenson, men i vinter uttalte hun til fransk tv at anklagene mot Kulturprofilen var sanne, og at det var noe alle visste om. Støttet flertallets ønske om at Danius måtte trekke seg.\n"
    },
    {
      "stol": 15,
      "navn": "Kerstin Ekman",
      "beskrivelse": "Født 1933. Forfatter. Innvalgt i 1978. Trakk seg fra sin stol i 1989 i protest mot Akademiens manglende stillingstagen i Salman Rushdie-affæren.\n"
    },
    {
      "stol": 16,
      "navn": "Kjell Espmark",
      "beskrivelse": "Født 1930. Forfatter og litteraturforsker. Innvalgt i 1981. En av Akademiens mest erfarne medlemmer. Han bor i en av Akademiens største leiligheter i Stockholm sentrum. Stemte for utestengelse av Katarina Frostenson, og trakk seg fra sin stol fredag 6. april. Uttalte da at «ledende røster i Akademien setter vennskap og andre uvedkommende hensyn foran ansvaret for integriteten».\n"
    },
    {
      "stol": 17,
      "navn": "Horace Engdahl",
      "beskrivelse": "Født 1948. Litteraturhistoriker og forfatter. Innvalgt i 1997. Var Akademiens leder mellom 1999 og 2009, og skapte flere kontroverser med sine uttalelser, blant annet om amerikansk litteratur. Har frontet motstanden mot Sara Danius, som han har beskrevet som Akademiens dårligste leder noensinne. Hans partner Stina Otterberg publiserte en kommentar til støtte for Katarina Frostenson, mens hans ekskone Ebba Witt-Brattström har vært en av Akademiens krasseste kritikere. Engdahl var en av grunnleggerne av tidsskriftet Kris, sammen med blant andre Anders Olsson.\n"
    },
    {
      "stol": 18,
      "navn": "Katarina Frostenson",
      "beskrivelse": "Født 1953. Poet. Innvalgt i 1992. Gift med mannen som kalles Kulturprofilen. Anklaget for en rekke vedtektsbrudd, blant annet inhabilitet og lekkasjer av nobelprisvinnere. Har ikke stilt til møter siden varslene mot Kulturprofilen ble offentlige i november. Har lagt ned sitt arbeide, men ikke trukket seg fra vervet.\n"
    },
    {
      "stol": 19,
      "navn": "«Kulturprofilen»",
      "beskrivelse": "I november anklaget 18 kvinner Katarina Frostensons ektemann for trakassering og overgrep. Mannen, som kalles Kulturprofilen, beskrev seg selv som «Svenska Akademiens nittonde ledamot». Han drev kulturscenen Forum, hvor deler av trakasseringen skal ha funnet sted, og som mottok støtte fra Akademien, i strid med deres habilitetsregler. Har gjennom sin advokat beskrevet hele skandalen som «dumheter» og en «heksejakt».\n"
    }
  ];

  var target = $("#persongalleri");

  var divs = $.map(data, function (item) {
    return($("<div class='person'>" +
	     "<p class='stol'>" + item.stol + "</p>" +
	     "<p class='navn'>" + item.navn + "</p>" +
	     "<p class='beskrivelse'>" + item.beskrivelse + "</p>" +
	     "</div>\n"));
  });

  target.html(divs).slick({ arrows: true, adaptiveHeight: true });
});
