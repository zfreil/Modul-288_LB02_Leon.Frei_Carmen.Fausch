partiesRaw = '[\n' +
    '    {\n' +
    '        "name": "Tillos Geburtstagsparty",\n' +
    '        "description": "Lässige Saufparty",\n' +
    '        "startdate": "12.02.2022",\n' +
    '        "starttime": "17:30",\n' +
    '        "participants": 23,\n' +
    '        "max": 40,\n' +
    '        "city": "Männedorf",\n' +
    '        "plz": 8708,\n' +
    '        "address": "Goldküstestrasse 21a"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": "Sihlquai Rave",\n' +
    '        "description": "Einfach die Sau raushauen!",\n' +
    '        "startdate": "15.03.2022",\n' +
    '        "starttime": "18:00",\n' +
    '        "participants": 65,\n' +
    '        "max": 500,\n' +
    '        "city": "Zürich",\n' +
    '        "plz": 8000,\n' +
    '        "address": "Sihlquaistrasse 22"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": "Danilos Beerpongturnier",\n' +
    '        "description": "Spassiges Beerpongturnier",\n' +
    '        "startdate": "8.04.2022",\n' +
    '        "starttime": "20:00",\n' +
    '        "participants": 15,\n' +
    '        "max": 30,\n' +
    '        "city": "Chur",\n' +
    '        "plz": 7808,\n' +
    '        "address": "Gidwiesenstrasse 3"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": "Enis Bubatzparty",\n' +
    '        "description": "Einfach mal chillen",\n' +
    '        "startdate": "12.05.2022",\n' +
    '        "starttime": "18:30",\n' +
    '        "participants": 7,\n' +
    '        "max": 12,\n' +
    '        "city": "Schübelbach",\n' +
    '        "plz": 8862,\n' +
    '        "address": "Guetebrunne 203"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": "Aare rave",\n' +
    '        "description": "Techno Rave an der Aare",\n' +
    '        "startdate": "23.06.2022",\n' +
    '        "starttime": "23:00",\n' +
    '        "participants": 90,\n' +
    '        "max": 350,\n' +
    '        "city": "Bern",\n' +
    '        "plz": 3084,\n' +
    '        "address": "Srandweg 45"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": " Uelis Christmas Party",\n' +
    '        "description": "Lässige Saufparty",\n' +
    '        "startdate": "24.12.2022",\n' +
    '        "starttime": "17:00",\n' +
    '        "participants": 50,\n' +
    '        "max": 100,\n' +
    '        "city": "Hinwil",\n' +
    '        "plz": 8340,\n' +
    '        "address": "Jumbostrasse 12"\n' +
    '    }\n' +
    ']\n'

searchParties()

// searches through all parties for the given filters
function searchParties() {
    deleteCards()

    var searchbar = document.getElementById('searchbar')
    var filter = searchbar.value.toUpperCase()
    var parties = readJson(partiesRaw)

    // Goes through all parties and checks if the filter applies to any values
    for (i = 0; i < parties.length; i++) {
        party = parties[i]

        if (keywordSearch(party, filter)) {
            buildCard(party)
        }
    }
}

// deletes all cards in the container
function deleteCards() {
    var cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = ''
}

// reads data in json format
function readJson(jsonData) {
    return JSON.parse(jsonData)
}

// Searhes the given filter inside of all party elements
function keywordSearch(party, filter) {
    if (party.name.toUpperCase().indexOf(filter) > -1 ||
        party.description.toUpperCase().indexOf(filter) > -1 ||
        party.startdate.toUpperCase().indexOf(filter) > -1 ||
        party.starttime.toUpperCase().indexOf(filter) > -1 ||
        party.participants === filter ||
        party.max === -1 ||
        party.city.toUpperCase().indexOf(filter) > -1 ||
        party.plz === -1  ||
        party.address.toUpperCase().indexOf(filter) > -1) {
        return true
    } else {
        return false
    }
}

// builds the party-card in html format
function buildCard(party) {
    var cardContainer = document.getElementById("card-container")

    var partycard = document.createElement("div")
    var pictureContainer = document.createElement("div")
    var picture = document.createElement("picture")
    var pictureSource = document.createElement("source")
    var pictureImg = document.createElement("img")
    var pictureImageSizer = document.createElement("div")

    partycard.className = "partycard"
    pictureContainer.className = "partycard-image"
    pictureSource.srcset="https://cdn.discordapp.com/attachments/850708118912368650/934850620979019826/party.jpg"
    pictureSource.type = "image/webp"
    pictureImg.src = "https://cdn.discordapp.com/attachments/850708118912368650/934850620979019826/party.jpg"
    pictureImg.srcset = "https://cdn.discordapp.com/attachments/850708118912368650/934850620979019826/party.jpg"
    pictureImg.className = "partycard-image-design"
    pictureImageSizer.className = "partycard-image-sizer"

    cardContainer.appendChild(partycard)
    partycard.appendChild(pictureContainer)
    pictureContainer.appendChild(picture)
    pictureContainer.appendChild(pictureImageSizer)
    picture.appendChild(pictureSource)
    picture.appendChild(pictureImg)

    var cardContent = document.createElement("div")
    var cardDate = document.createElement("div")
    var cardDateValue = document.createTextNode(party.startdate + ", " + party.starttime)
    var cardInformationContainer = document.createElement("div")
    var cardInformationTitle = document.createElement("div")
    var cardInformationValue = document.createTextNode(party.name)

    cardContent.className = "partycard-content"
    cardDate.className = "Date"
    cardInformationContainer.className = "Informations"
    cardInformationTitle.className = "Information1"

    partycard.appendChild(cardContent)
    cardContent.appendChild(cardDate)
    cardDate.appendChild(cardDateValue)
    cardContent.appendChild(cardInformationContainer)
    cardInformationContainer.appendChild(cardInformationTitle)
    cardInformationTitle.appendChild(cardInformationValue)

    var cardInformationGroup = document.createElement("div")
    cardInformationGroup.className = "Information2"
    cardInformationContainer.appendChild(cardInformationGroup)

    var descriptionTitleBold = document.createElement("b")
    var descriptionTitleValue = document.createTextNode("Beschreibung: ")
    var descriptionValue = document.createTextNode(party.description)
    var descriptionBreak = document.createElement("br")

    cardInformationGroup.appendChild(descriptionTitleBold)
    descriptionTitleBold.appendChild(descriptionTitleValue)
    cardInformationGroup.appendChild(descriptionValue)
    cardInformationGroup.appendChild(descriptionBreak)

    var cityTitleBold = document.createElement("b")
    var cityTitleValue = document.createTextNode("Ort: ")
    var cityValue = document.createTextNode(party.city)
    var cityBreak = document.createElement("br")

    cardInformationGroup.appendChild(cityTitleBold)
    cityTitleBold.appendChild(cityTitleValue)
    cardInformationGroup.appendChild(cityValue)
    cardInformationGroup.appendChild(cityBreak)

    var addressTitleBold = document.createElement("b")
    var addressTitleValue = document.createTextNode("Adresse: ")
    var addressValue = document.createTextNode(party.plz + " " + party.address)
    var addressBreak = document.createElement("br")

    cardInformationGroup.appendChild(addressTitleBold)
    addressTitleBold.appendChild(addressTitleValue)
    cardInformationGroup.appendChild(addressValue)
    cardInformationGroup.appendChild(addressBreak)

    var ageTitleBold = document.createElement("b")
    var ageTitleValue = document.createTextNode("Alter: ")
    var ageValue = document.createTextNode("18+")
    var ageBreak = document.createElement("br")

    cardInformationGroup.appendChild(ageTitleBold)
    ageTitleBold.appendChild(ageTitleValue)
    cardInformationGroup.appendChild(ageValue)
    cardInformationGroup.appendChild(ageBreak)

    var participantsTitleBold = document.createElement("b")
    var participantsTitleValue = document.createTextNode("Teilnehmer: ")
    var participantsValue = document.createTextNode(party.participants + "/" + party.max)
    var participantsBreak = document.createElement("br")

    cardInformationGroup.appendChild(participantsTitleBold)
    participantsTitleBold.appendChild(participantsTitleValue)
    cardInformationGroup.appendChild(participantsValue)
    cardInformationGroup.appendChild(participantsBreak)

    var registerContainer = document.createElement("div")
    var registerButton = document.createElement("a")
    var registerButtonTitle = document.createElement("i")
    var registerButtonValue = document.createTextNode("Teilnahme anfragen")

    registerContainer.className = "partycard-linktext"
    registerButtonTitle.className = "fas fa-chevron-right"
    registerButton.href = 'request.html'

    cardContent.appendChild(registerContainer)
    registerContainer.appendChild(registerButton)
    registerButton.appendChild(registerButtonValue)
    registerButton.appendChild(registerButtonTitle)
}