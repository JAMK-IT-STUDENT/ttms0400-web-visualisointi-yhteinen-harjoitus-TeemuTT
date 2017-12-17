# ttms0400-web-visualisointi-yhteinen-harjoitus-TeemuTT

Teemu Tuomela
H8705
IIO14S2

# Harjoitustyö
Hostattuna gh-pagesiin:
https://jamk-it-student.github.io/ttms0400-web-visualisointi-yhteinen-harjoitus-TeemuTT/  

## Raportti
Toteutin harjoitustyöksi erittäin yksinkertaisen verkkokauppasivuston. Aikaa harjoitustyön tekemiseen käytettiin noin 15 tuntia. Sivusto on rakennettu mobile-first periaatteella ja se skaalautuu erikokoisille näytöille.  

Sivusto rakentuu kolmesta html-sivusta. Etusivulta löytyy navigaatio eri tuotekategorioille sekä tuotteiden listaus. Navigaation linkit eivät johda mihinkään. Tuotteen lisääminen ostoskoriin animoi notifikaation sivuston alareunaan.  

Jotain tuotetta klikkaamalla voi siirtyä tuotesivulle, joka on kaikille tuotteille sama.  

Ostoskorisivu sisältää taulukon tuotteiden listaamiseen.  

### Teknologiat
Otin harjoitustyössä käyttöön Bulma css-kirjaston. Bulma on avoimen lähdekoodin kirjasto joka on rakennettu flexboxiin pohjaten mobile-first periaatteella.  

Valitsin Bulman, koska se on melko kevyt kirjasto. Bulma ei sisällä JavaScriptiä ja on modulaarinen, jolloin voin helposti ottaa kirjastosta käyttöön vain tarvitsemani osat. Bulma on myös ajantasalla, viimeisimmät muutokset repositorioon ovat muutaman päivän takaa.  

Tyylit kirjoitin scss-syntaksilla. Tyylien kääntämiseen käytin Grunt-taskrunneria. Asensin Gruntiin grunt-sass kääntäjän sekä grunt-contrib-watch pluginin automatisoimaan tyylien kääntämisen.  

Työssä on käytetty myös joitakin Font Awesome-ikoneita.  

### Mietteitä / opittua
Bulma-kirjasto vaikuttaa tämän kokeilun perusteella erittäin käyttökelpoiselta ja on vahva ehdokas, kun seuraavan kerran rakennan jotain verkkosivustoa. Kirjaston käytössä onnistuin mielestäni hyvin. Sivusto vaikuttaa skaalautuvan eri näytöille hyvin.  

Myös css-esiprosessorin käyttö ja sen automatisointi taskrunnerilla oli erittäin näppärää. Näillä saa näppärästi helpotettua elämää vähänkin isomman projektin työstössä. Työssä hyödynnettiin esiprosessorin mahdollistamaa modulaarisuutta kääntämällä css-kirjastosta vain tarvittavat komponentit. Myös mixin:ien käyttöä sekä perintää hyödynnettiin hieman.  

Internet Explorerin tukemisessa on puutteita. IE 11 Notifikaatio ei ilmesty näytön alareunaan. IE 10 navigaation hamburger-menu lakkaa toimimasta. IE 8 ulkoasu hajoaa kokonaan.  

Harjoitustyö jäi melko suppeaksi visuaalisuudeltaan. Ulkoasun suunnitteluun tai css-kirjaston komponenttien muokkaamiseen oman näköiseksi en käyttänyt paljoa aikaa. Ulkoasu on melko geneerinen ja komponentit ovat lähes suoraan kirjaston valmiita komponentteja.  

Arvosanaehdotus 2.
