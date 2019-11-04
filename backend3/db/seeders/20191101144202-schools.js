"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "schools",
      [
        {
          country: "CAN",
          state: "NS",
          description: "High School - All",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Acadia University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Cape Breton, Univ. College of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Sainte-Anne, Université",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Dalhousie University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NL",
          description: "Memorial Univ of Newfoundland",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Moncton, Université de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Mount Allison, University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Mount Saint Vincent University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Nova Scotia College Art/Design",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Saint Francis Xavier U.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Saint-Louis Maillet (M. U. C.)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Shippagan (Moncton U. Campus)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Saint Mary's University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Nova Scotia, Technical Univ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "New Brunswick, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Saint John Campus, U.N.B.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "PE",
          description: "Prince Edward Island, Univ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Saint Thomas University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Atlantic School of Theology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Bishop's University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Sir George Williams University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Concordia University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "King's College, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "École de Hautes études comm",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Éc.nat.admin. publ.-Chicoutimi",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Éc.nat. admin. publ. - Hull",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Éc.nat. admin. publ.- Montréal",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Éc.nat. admin. publ. - Québec",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "École Polytechnique - Montréal",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "École - technologie supérieure",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Laval, Université",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "MacDonald Campus (McGill U.)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "McGill, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Montréal, Université de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Sherbrooke, Université de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Québec Univ, Chicoutimi",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Québec, Univ. - Outaouais",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Québec Univ., Montréal",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Québec Univ., Rimouski",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Québec Univ, Rouyn",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Québec Univ, Trois-Rivières",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "PE",
          description: "Atlantic Veterinary College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Saint-Paul University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Algoma University College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Brock University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Carleton University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Guelph, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Hearst - Collège universitaire",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Lakehead University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Laurentian University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "McMaster University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Nipissing University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Ottawa, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Queen's University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Royal Military College Canada",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Ryerson University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Toronto, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Trent University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Waterloo, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Western Ontario, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Wilfrid Laurier University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Windsor, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "York University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Sudbury, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "MB",
          description: "Brandon University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "MB",
          description: "Saint-Boniface, Col. univ.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "MB",
          description: "Manitoba, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "MB",
          description: "Winnipeg, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Atlantic Baptist Col. Moncton",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Regina, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Saskatchewan, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Sask. Indian Federated Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Alberta, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Athabasca University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Calgary, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Lethbridge, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Notre-Dame U. Nelson B.C.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "British Columbia,University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Simon Fraser University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Victoria, University of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Royal Roads Military College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Trinity Western University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Northern British Columbia U.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Royal Roads University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "(blank)",
          description: "Other Canadian University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "(blank)",
          description: "University Outside Canada",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Canadian Coast Guard College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NL",
          description: "Fisheries & Marine Inst.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NL",
          description: "College of the North Atlantic",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "PE",
          description: "Holland College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Maritime Forest Ranger School",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NB",
          description: "Community Colleges - Bathurst",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Nova Scotia Agricultural Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Institute of Technology Campus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Nova Scotia Survey Institute",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Nova Scotia Teachers College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "PE",
          description: "Atlantic Veterinary Col. (PEI)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Annapolis Campus, NS Cmnty Col",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Burridge Campus-Yarmouth",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Cape Breton Adult Vocat'l Trng",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Geogr. Sci. Col.-Lawrencetown",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Cumberland Campus,NS Cmnty Col",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Dartmouth Adult Vocat'l Trng",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Halifax Campus, NS Cmnty Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Hants Campus, NS Cmnty Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "I.W. Akerley Campus-Dartmouth",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Lunenberg Campus-Bridgewater",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Nautical Inst. Campus, NS C.C.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Pictou Campus, NS Cmnty Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Schelburne Campus,NS Cmnty Col",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Strait Campus, NS Cmnty Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Sydney Campus-Sydney",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Cobetc-Truro",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Kingstec-Kentville",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Memorial Composite-SydneyMines",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Truro Campus (Community Col.)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NS",
          description: "Colchester Campus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NL",
          description: "Eastern Cmnt Col.(Clarenville)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NL",
          description: "Westviking Col. (Stephenville)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NL",
          description: "Labrador College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "NL",
          description: "Central Applied Arts,Tech&C.Ed",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Baie-Comeau, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Côte-Nord (Hauterive), Col. de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Côte-Nord(Manicouagan),Col. de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Côte-Nord (Mingan), Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Sept-Îles, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "François-Xavier-Garneau, Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Gaspésie et des Îles, Col. de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Institut maritime du Québec",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Pocatière, Collège de la",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Inst. tech. agro-ali Pocatière",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Lévis-Lauzon, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Limoilou, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Matane, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Rimouski, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Rivière-du Loup, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Sainte-Foy, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Alma, Collège d'",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Chicoutimi, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Jonquière, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Saint-Félicien, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Shawinigan, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Lauzon, Col. de Technologie de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Région Amiante(Thetford Mines)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Trois-Rivières, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Victoriaville, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Ahuntsic, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "André Laurendeau, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Bois-de-Boulogne, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Drummonville, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Saint-Hyacinthe, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Tracy-Sorel, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Champlain Col. - Lennoxville",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Champlain Col. - St-Lambert",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Champlain Col. - St-Lawrence",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Granby-Haute-Yamaska, Col. de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Private colleges",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Dawson College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Édouard-Montpetit, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Outaouais, Collège de l'",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Maisonneuve, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "John Abbott College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Joliette-De Lanaudière, Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Lionel-Groulx, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Montmorency, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Rosemont, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Abitibi-Témiscamingue, Col. de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Inst.Tech.Agro-ali StHyacinthe",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Saint-Jean-Sur-Richelieu, Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Saint-Jérôme, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Saint-Laurent, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Valleyfield, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Sherbrooke, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Tracy, Col. de Technologie de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Inst. tourisme/d'hôtellerie QC",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Vanier College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Vieux-Montréal, Collège du",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Académie Centenniale",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "André-Grasset, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Bart, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Beauce-Appalaches, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Notre-Dame-de-Foy Campus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Centre spécialisé pêche (G-R)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Affaires Ellis Inc.,Collège d'",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Lévis, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Secrétariat Notre-Dame, Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Français, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Militaire royal St-Jean, Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conserv. de musique Chicoutimi",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conserv. de musique de Hull",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conserv. de musique Montréal",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conserv. de musique de Québec",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conserv. de musique Rimouski",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conserv. de musique Trois-Riv.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conserv. de musique Val-d'or",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Conservatoire Lasalle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Commerciale du Cap, École",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Vincent-d'Indy, École",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Heritage College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Institut Teccart",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Jean-de-Brébeuf, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "L'Assomption, Collège de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Laflèche, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "LaSalle, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Macdonald Campus (McGill)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Marianopolis College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Marie-Victorin, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Mérici, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Moderne 3-R, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "O'Sullivan de Montréal, Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "O'Sullivan de Québec, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Petit Séminaire de Québec",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Sherbrooke, Séminaire de",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Saint-Augustin, Séminaire",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Villa Sainte-Marcelline",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "QC",
          description: "Québec UNIV, téléuniversité",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Algoma College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Algonquin College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Cambrian College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Canadore College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Centennial College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Centralia Col. Agricul. Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Conestoga Applied Arts & Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "ConfederationApplied Arts&Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Durham Col. Applied Arts&Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Fanshawe Applied Arts & Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "George Brown Applied Arts&Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Georgian Applied Arts & Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Humber Col. Applied Arts &Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Kemptville Col. Agricult. Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Lakehead College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Lambton College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Loyalist College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Mohawk College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "New Liskeard Col. Agricul.Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Niagara College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Nipissing College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Northern College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Ontario College of Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Ridgetown Col. Agricul. Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Ryerson College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Saint Clair College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Saint Lawrence College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Sault Col. Applied Arts & Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Seneca College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Sheridan College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Sir Sanford Fleming Arts &Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "La Cité collégiale",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Redeemer Reformed ChristianCol",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "Boréal, Collège",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "ON",
          description: "U of Ont. Inst. of Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "MB",
          description: "Assiniboine Community College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "MB",
          description: "Keewatin Community College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "(blank)",
          description: "Red River Community College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "SK Institute Applied Arts &Sci",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Saskatchewan Technological Ins",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Carlton Trail Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Cumberland Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Cypress Hills Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Northlands College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "North West Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Parkland Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Prairie West Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Saskatchewan Indian Tech Inst.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "SK Inst. Applied Science &Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "SK Ed. Trng & Empl. NorthernEd",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "SK Ed. Trng & Empl. Reg'l Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "South East Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Pallister Institute (SIAST)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "SK",
          description: "Woodland Institute",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Camrose College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Concordia College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Fairview College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Grand Prairie Regional College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Grant MacEwan University",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Lethbridge Community College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Medicine Hat College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Mount Royal College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Northern Alberta Inst. of Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Old Sun Community College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Red Deer College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Southern Alberta Inst. of Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Vermilion Campus (LakelandCol)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Alberta Vocational College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Augustana University College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Keyano College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "AB",
          description: "Lakeland College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "British Columbia Inst. of Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "British Columbia Mining Col.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Kamloops College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Camosun College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Capilano College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Cariboo, University College of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Columbia College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Douglas College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Kwantlen Polytechnic Uni.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Malaspina College",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "New Caledonia, College of",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          country: "CAN",
          state: "BC",
          description: "Okanagan University College",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("schools", null, {});
  }
};
