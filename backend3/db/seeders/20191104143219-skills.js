"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "skills",
      [
        {
          description_en:
            "Specification / Requirements Development (Request for proposal) ",
          description_fr:
            " Élaboration de spécifications / d'exigences (demande de propositions)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Vendor Relations",
          description_fr: "Relations avec les fournisseurs ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Professional Services Evaluation and Selection",
          description_fr: " Évaluation et sélection de services professionnels",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Product Evaluation and Selection",
          description_fr: "Évaluation et sélection de produits",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Contract Administration",
          description_fr: "Administration des contrats  ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Acquisition Card Administration ",
          description_fr: "Administration de carte d'achat",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Asset Management",
          description_fr: "Gestion des biens",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Polices & Procedures",
          description_fr: "Politiques et procédures ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Supply Arrangements",
          description_fr: "Arrangements en matière d'approvisionnement ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "General Ledger",
          description_fr: "Grand livre général",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Accounts Receivable",
          description_fr: "Comptes débiteurs ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Accounts Payable",
          description_fr: "Comptes fournisseurs ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Budget / Finance",
          description_fr: "Budget / Finances ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Financial Applications",
          description_fr: "Applications financières",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Polices & Procedures",
          description_fr: "Politiques et procédures ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Classification Process",
          description_fr: "Processus de classification ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Polices & Procedures",
          description_fr: "Politiques et procédures ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Staffing Process",
          description_fr: "Processus de dotation ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Training Process",
          description_fr: "Processus de formation  ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Requirements Definition",
          description_fr: "Définition d'exigences",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Functional Specifications",
          description_fr: "Caractéristiques  fonctionnelles",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Programming Code to Specification",
          description_fr:
            "Programmation de codes  en fonction de spécifications",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Software Unit Testing",
          description_fr: "Tests unitaires de logiciels ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "System Analysis",
          description_fr: "Analyse de systèmes ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Code Debugging and Bug Fixing",
          description_fr: "Débogage de codes  et correction de bogues ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Design Specifications",
          description_fr: "Spécifications relatives à la conception ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Enterprise App. Integration (EAI)",
          description_fr: "Intégration d'applications d'entreprise (EAI) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Life Cycle for Software",
          description_fr: "Cycle  de vie de logiciels",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Integration",
          description_fr: "Intégration de systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Technical Specifications",
          description_fr: "Caractéristiques techniques",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "User Interface Design (GUI)",
          description_fr: "Conception d'interface utilisateur (CIU)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Software Architecture",
          description_fr: "Architecture logicielle ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Software Support",
          description_fr: "Soutien logiciel ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Enhancements to Packaged Software",
          description_fr: "Amélioration  de logiciels prêts à l'emploi ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "HTML 5",
          description_fr: "HTML 5",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "AJAX",
          description_fr: "AJAX",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JavaServer Pages",
          description_fr: "JavaServer Pages",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JDBC",
          description_fr: "Interface JDBC ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ODBC",
          description_fr:
            "Interfaces universelles de connexion aux bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "OLE",
          description_fr: "Liaison et incorporation d'objets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "REST",
          description_fr: "Transfert d'état représentationnel (REST)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "RSS: Real Simple Syndication ",
          description_fr: "Format RSS",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Servlet",
          description_fr: "Miniserveur ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Web Content Accessibility Guidelines (WCAG) 2.0",
          description_fr:
            "Règles pour l'accessibilité des contenus Web (WCAG) 2.0",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Web Services",
          description_fr: "Services Web",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Win 32 API",
          description_fr: "API Win32 ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Active X",
          description_fr: "Active X ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "CGI",
          description_fr: "IPC ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DOM (Document Object Model)",
          description_fr: "Modèle DOM (Modèle objet de documents)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Hibernate",
          description_fr: "Hibernate",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "J2EE",
          description_fr: "Serveurs J2EE ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JavaBeans",
          description_fr: "JavaBeans",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JNDI",
          description_fr: "Interface JNDI ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MAPI (Messaging API)",
          description_fr:
            "MAPI (Interface de programmation d'applications de messagerie) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Object-Oriented",
          description_fr: "Orienté objet ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "WinSock",
          description_fr: "Winsock ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ASP .NET",
          description_fr: "ASP.NET",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ASP",
          description_fr: "ASP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SOAP",
          description_fr: "Protocole SOAP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "System Architect",
          description_fr: "Architecte de systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JMS: Java Message Service",
          description_fr: "JMS  : Service de messagerie Java",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SDLC (e.g., Agile, Scrum, etc.)",
          description_fr:
            "Proc. de comm. de trans. synch. (p. ex. Agile, Scrum, etc.)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "UML",
          description_fr: "Langage de modélisation unifié (UML)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Process Execution Language (BPEL)",
          description_fr: "Langage d'exécution des processus admin. BPEL ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Hybrid Mobile Application Development",
          description_fr: "Élaboration  d'applications mobiles hybrides",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Responsive Design",
          description_fr: "Conception adaptée",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Web Experience Toolkit",
          description_fr: "Boîte à outils de l’expérience Web",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Web Mobile Application Development",
          description_fr: "Élaboration  d'applications Web mobiles ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Test Planning",
          description_fr: "Planification des essais",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Testing Methodologies",
          description_fr: "Méthodes d'essai",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Quality Management",
          description_fr: "Gestion de la qualité",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Test Case Decision",
          description_fr: "Décision relative au test élémentaire",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Testing Tools",
          description_fr: "Outils d'essai",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en:
            "Quality Assurance/Control: Concepts, Standards, Procedures and Operations",
          description_fr:
            " Assurance/contrôle de la qualité : concepts, normes, procédures et opérations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en:
            "Testing - Unit, System, Integration, Regression, Acceptance ",
          description_fr:
            "Essai  - Unité, système, intégration, régression, acceptation ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Modeling",
          description_fr: "Modélisation de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Flow Diagrams",
          description_fr: "Diagrammes de flux de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Design Patterns",
          description_fr: "Modèles de conception",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Process Design",
          description_fr: "Conception de processus ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Development",
          description_fr: "Élaboration de projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "RAD",
          description_fr: "Développement accéléré d'applications ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Web Graphics Design",
          description_fr: "Conception de graphiques Web",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Process Re-Engineering",
          description_fr: "Reconfiguration de processus administratifs",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JAD",
          description_fr: "Élaboration d'application en collaboration (EAC )",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Prototyping",
          description_fr: "Prototypage",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Component Definition and Design",
          description_fr: "Définition et conception d’éléments ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Function Point Analysis",
          description_fr: "Analyse des points fonctionnels",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Information Engineering",
          description_fr: "Ingénierie informationnelle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Multitenancy",
          description_fr: "Cohabitation ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Object-Oriented Design (OOD)",
          description_fr: "Conception orientée objet (COO) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Object-Oriented Programming (OOP)",
          description_fr: "Programmation orientée objet (POO)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Parallelism (e.g., map and reduce, thread mgmt)",
          description_fr: "Parallélisme (p. ex.,  MapReduce, gestion des fils)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Release Management",
          description_fr: "Gestion des versions",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Structured Analysis",
          description_fr: "Analyse structurée",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Structured Design",
          description_fr: "Conception structurée",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Cross-Browser/Platform Compatibility ",
          description_fr: " Compatibilité de multinavigateur/plateforme",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Eclipse",
          description_fr: "Eclipse",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SQL Developer",
          description_fr: "SQL Developer",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Adobe LiveCycle ES Designer",
          description_fr: "Adobe LiveCycle ES Designer",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Ancile uPerform",
          description_fr: "Ancile uPerform",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "CA Gen Development and Generation tool",
          description_fr: "Outil de développement  et de génération  CA Gen",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Crystal Reports Designer",
          description_fr: " Crystal Reports Designer",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Embarcadero C++ Builder",
          description_fr: "Embarcadero C++ Builder",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Lotus Notes Designer",
          description_fr: "Lotus Notes  Designer",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Microsoft TFS",
          description_fr: "Microsoft Team Foundation Server ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Model management - CA Gen",
          description_fr: "Gestion de modèles - CA Gen ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MSBuild",
          description_fr: "MSBuild",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Application Express (APEX)",
          description_fr: "Oracle Application Express (APEX)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Designer Web PL/SQL (Oracle DevSuite 10.1.2)",
          description_fr:
            " Oracle Designer Web PL/SQL  (Oracle DevSuite 10.1.2) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle UPK ( + CAPA)",
          description_fr: "Oracle UPK ( + CAPA)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SPUFI",
          description_fr: "SPUFI",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SQLWindows",
          description_fr: "SQLWindows",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Team Developer/Centura  ",
          description_fr:
            "Centura Team Developer (équipes de conception de marques de commerce)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "TeamStudio (Notes development tool)",
          description_fr: "TeamStudio (outil de développement  Notes)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "TOAD",
          description_fr: "TOAD",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Visual Studio .NET",
          description_fr: "Visual Studio.NET",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SQL Reports",
          description_fr: "Rapports SQL",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Cognos",
          description_fr: "Cognos",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Objects",
          description_fr: "Business Objects ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Microsoft Dynamics",
          description_fr: "Microsoft Dynamics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PeopleSoft",
          description_fr: "PeopleSoft",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SAP",
          description_fr: "SAP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Clarity",
          description_fr: "Clarity",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MKS  Integrity",
          description_fr: "MKS  Integrity",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PeopleSoft nVision",
          description_fr: "PeopleSoft nVision",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PeopleSoft PeopleCode",
          description_fr: " PeopleSoft  PeopleCode",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PeopleSoft Query",
          description_fr: "PeopleSoft Query ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PeopleSoft Reporting",
          description_fr: "Rapports PeopleSoft ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PeopleSoft Tools",
          description_fr: "Outils PeopleSoft",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Rational Quality Manager (RQM)",
          description_fr: "Rational Quality Manager(RQM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Rational Requirements Composer (RRC)",
          description_fr: "Rational Requirements Composer (RRC)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Rational Team Concert (RTC)",
          description_fr: "Rational Team Concert (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "CICS/VS",
          description_fr:
            " Système de communication des renseignements aux clients /Mémoire virtuelle (SCIC/MV) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM Advanced Function Presentation (AFP)",
          description_fr: "Architecture d'impression  AFP d'IBM",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM Page Description Language (PDL) ",
          description_fr: "Langage de description de pages d'IBM",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "InfoMan",
          description_fr: "InfoMan",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Adobe Output Designer  ",
          description_fr: "Adobe Output Designer",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "AMX Inspired Signage Xpress",
          description_fr: "AMX Inspired Signage Xpress",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Camtasia Studio",
          description_fr: "Camtasia Studio",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM ImagePlus, FAF, IWPM ",
          description_fr:
            "Fonction d'accès aux dossiers  et poste de travail  IBM ImagePlus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MODCA-IOCA ",
          description_fr:
            "MODCA-IOCA - Architecture d'encodage  de données d'images  d'IBM",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en:
            "Certified Information Systems Security Professional (CISSP)",
          description_fr:
            "Certified Information Systems Security Professional (CISSP) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MoP Foundation",
          description_fr: "MoP Foundation ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MoP Practioner",
          description_fr: "MoP Practitioner ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "TOGAF",
          description_fr: "Attestation TOGAF ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ITIL V3 Foundations",
          description_fr:
            "Certificat Foundations de la bibliothèque ITIL version 3",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ITIL V3 Service Management",
          description_fr:
            "Gestion des services de la bibliothèque ITIL version 3",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Management",
          description_fr: "Gestion de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Enterprise Content Management",
          description_fr: "Gestion de contenu d'entreprise",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Governance",
          description_fr: "Gouvernance",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Repository Management",
          description_fr: "Gestion de dépôt ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Taxonomies",
          description_fr: "Taxonomies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Analysis",
          description_fr: "Analyse opérationnelle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Collaboration",
          description_fr: "Collaboration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Content Lifecycle Management",
          description_fr: "Gestion  du cycle de vie du contenu ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Content Tracking",
          description_fr: "Contrôle  du contenu",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Design",
          description_fr: "Conception  de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Tagging",
          description_fr: "Taggage ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Administration",
          description_fr: "Administration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Permissions Management",
          description_fr: "Gestion des autorisations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "User Management",
          description_fr: "Gestion des utilisateurs",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Workflow Management",
          description_fr: "Gestion de flux de travaux",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Access Management",
          description_fr: "Gestion de l'accès",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JIRA (Atlassian)",
          description_fr: "JIRA (Atlassian)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Confluence (Atlassian)",
          description_fr: "Confluence (Atlassian)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "WebEx",
          description_fr: "Outils de téléconférence WebEx",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM Lotus Notes",
          description_fr: "IBM Lotus Notes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM Lotus Web Content Management",
          description_fr: "Produits de gestion de contenu Web IBM Lotus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Content Mgmt Interop Services",
          description_fr:
            "Services d'interopérabilité des systèmes de gestion du contenu",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Drupal",
          description_fr: "Drupal",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM Enterprise Content Management",
          description_fr: "Produits de gestion de contenu d'entreprise d'IBM",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "OpenText",
          description_fr: "OpenText",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SharePoint (Microsoft)",
          description_fr: "SharePoint (Microsoft)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Analysis",
          description_fr: "Analyse de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Integrity and Quality Assurance",
          description_fr: "Assurance de la qualité et intégrité des données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Entity-Relationship (ER) Diagramming",
          description_fr:
            "Élaboration de diagrammes entités de données-relations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Access and User Administration",
          description_fr:
            "Accès aux données et administration des utilisateurs",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Normalization",
          description_fr: "Normalisation de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database design",
          description_fr: "Conception de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Standards and APIs",
          description_fr:
            "Normes de données et interfaces de programmation d'applications",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Implementation",
          description_fr: "Mise en oeuvre de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Testing",
          description_fr: "Mise à l'essai de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Dictionaries",
          description_fr: "Dictionnaires de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Information Engineering",
          description_fr: "Ingénierie informationnelle des données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Mining",
          description_fr: "Exploration de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Security",
          description_fr: "Sécurité des données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Transformation and Migration",
          description_fr: "Transformation et migration de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Backup and Recovery",
          description_fr: "Sauvegarde et restauration de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Capacity Planning",
          description_fr: "Planification de la capacité des bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Monitoring",
          description_fr: "Surveillance de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Replication",
          description_fr: "Reproduction de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Upgrades and Reorganizations",
          description_fr:
            "Mise à niveau et restructuration de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Concepts + Architecture",
          description_fr: "Concepts et architecture Oracle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "BusinessObjects",
          description_fr: "BusinessObjects",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DB2 Concepts + Architecture",
          description_fr: "Concepts et architecture DB2",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Impromptu (Cognos)",
          description_fr: "Impromptu (Cognos)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Database Engine",
          description_fr: "Gestionnaire de bases de données Oracle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Tool + Utilities",
          description_fr: "Outils et utilitaires Oracle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PowerPlay (Cognos)",
          description_fr: "PowerPlay (Cognos)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "QMF",
          description_fr: "Fonctions de gestion d'interrogations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SQLServer (Microsoft)",
          description_fr: "SQLServer (Microsoft)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle 11.x",
          description_fr: "Oracle 11.x",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Forms",
          description_fr: "Formulaires Oracle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DB2",
          description_fr: "DB2",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MS Access",
          description_fr: "MS Access",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Database Applications",
          description_fr: "Applications de bases de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DB2 Connect",
          description_fr: "DB2 Connect",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DB2 Universal DB for OS/390",
          description_fr: "Base de données universelle DB2 pour OS/390",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "dBASE",
          description_fr: "dBASE",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Millennium  ",
          description_fr: "Millennium",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle 10",
          description_fr: "Oracle 10",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle 12.x",
          description_fr: "Oracle 12.x",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SQLServer (Sybase)",
          description_fr: "SQLServer (Sybase)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project (Microsoft)",
          description_fr: "Project (Microsoft)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Visio",
          description_fr: "Visio",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Crystal Report Writer",
          description_fr: "Crystal Report Writer",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Excel (Microsoft)",
          description_fr: "Excel (Microsoft)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Photoshop (Adobe)",
          description_fr: "Photoshop (Adobe)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Illustrator (Adobe)",
          description_fr: "Illustrator (Adobe)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Report",
          description_fr: "Oracle Reports",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Departmental Project Portfolio Management (DPPM) ",
          description_fr:
            "Gestion du portefeuille ministériel de projets (GPMP)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Flash",
          description_fr: "Flash",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Hummingbird DOCS (PC DOCS)",
          description_fr: "Hummingbird DOCS (PC DOCS)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "FME",
          description_fr: "FME",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MapBasic",
          description_fr: "MapBasic",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MapInfo Pro",
          description_fr: "MapInfo Pro",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Spectrum Technology Platform",
          description_fr: "Plateforme technologique du spectre",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SQLServer",
          description_fr: "SQLServer",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM PC or compatible",
          description_fr: "Ordinateurs personnels IBM ou compatibles",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Tablet",
          description_fr: "Tablette",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Apple",
          description_fr: "Apple",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Cellular / Wireless",
          description_fr: "Téléphonie cellulaire / sans fil",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Communications ",
          description_fr: "Communication de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Device Drivers",
          description_fr: "Pilotes de périphériques",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Engineering Systems Architectures",
          description_fr: "Architecture des systèmes d'ingénierie",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IBM Mainframe",
          description_fr: "Ordinateurs centraux IBM",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Intel Processors",
          description_fr: "Processeurs Intel",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Smartphone",
          description_fr: "Téléphonie intelligente",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Switching",
          description_fr: "Commutation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Engineering",
          description_fr: "Ingénierie",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Acrobat (Adobe)",
          description_fr: "Acrobat (Adobe)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Acrobat Distiller",
          description_fr: "Acrobat Distiller",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JavaDoc",
          description_fr: "JavaDoc",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Client Server Computing",
          description_fr: "Informatique client-serveur",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "CRM (Customer Relationship Management)",
          description_fr: "Gestion des relations avec les clients",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Document Management",
          description_fr: "Gestion de documents",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Technical Support",
          description_fr: "Soutien technique",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Operations",
          description_fr: "Activités d'exploitation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Service Management",
          description_fr: "Gestion des services",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SOA",
          description_fr: "Architecture orientée services",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Training",
          description_fr: "Formation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Disaster Recovery Planning",
          description_fr:
            "Planification de la reprise des activités après un sinistre",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "E-Commerce",
          description_fr: "Commerce électronique",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Research & Development",
          description_fr: "Recherche et développement",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Benchmarking",
          description_fr: "Étalonnage",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Configuration Management",
          description_fr: "Gestion de la configuration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Social Media",
          description_fr: "Médias sociaux",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Telecommunication",
          description_fr: "Télécommunications",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Virtualization",
          description_fr: "Virtualisation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Process Re-Engineering",
          description_fr: "Reconfiguration de processus administratifs",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Corporate Engineering of Desktop Productivity Tools",
          description_fr:
            " Service d'ingénierie des outils de travail électronique de bureau",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Warehousing",
          description_fr: "Entreposage de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Distributed Databases",
          description_fr: "Bases de données réparties",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "GIS",
          description_fr: "SGI (systèmes généraux d'information)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Image Processing",
          description_fr: "Traitement des images",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Information Management",
          description_fr: "Gestion de l'information",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Knowledge Management",
          description_fr: "Gestion des connaissances",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Middleware",
          description_fr: "Intergiciels",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Production Scheduling",
          description_fr: "Ordonnancement de la production",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en:
            "Software Distribution/Installation |Fourniture et installation de logiciels \n",
          description_fr: new Date(),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Telephony  /  VOIP",
          description_fr: "Téléphonie / Voix sur IP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Videoconferencing",
          description_fr: "Vidéoconférence",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Cloud Computing",
          description_fr: "Informatique en nuage",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Conversions",
          description_fr: "Conversions",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Workflow Automation",
          description_fr: "Automatisation du travail",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Problem Solving",
          description_fr: "Résolution de problèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Change Management",
          description_fr: "Gestion du changement",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Contract Management",
          description_fr: "Gestion des marchés",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Corporate Leadership & Direction Setting",
          description_fr:
            "Leadership d'entreprise et établissement d'orientations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Case Preparation",
          description_fr: "Préparation d'analyses de rentabilisation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Process Management ",
          description_fr: "Gestion des processus administratifs",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Capacity Planning",
          description_fr: "Planification des capacités",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Governance",
          description_fr: "Gouvernance",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Budget Development & Reporting",
          description_fr:
            "Établissement de budgets et production de rapports budgétaires",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Feasibility Studies",
          description_fr: "Études de faisabilité opérationnelle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Formal Presentations",
          description_fr: "Présentations d'affaires officielles",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Strategic Planning",
          description_fr: "Planification stratégique des activités",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Cost Benefit Analysis",
          description_fr: "Analyse coûts-avantages opérationnels",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Definition Requirements",
          description_fr: "Exigences en matière de définitions opérationnelles",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Quantitative Analysis",
          description_fr: "Analyses quantitatives",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Technology Strategic Planning",
          description_fr: "Planification stratégique des technologies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Peer Leadership",
          description_fr: "Leadership par les pairs en entreprise",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Business Writing",
          description_fr: "Rédaction d'affaires",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Life Cycle for End User Computing Hardware",
          description_fr:
            "Cycle de vie du matériel informatique pour l'utilisateur final",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Organizational and environmental awareness of CIO",
          description_fr:
            " Sensibilisation à l'organisation et à l'environnement du BI",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Performance Measurement",
          description_fr: "Mesure du rendement",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Policy development",
          description_fr: "Élaboration de politiques",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Service Identification",
          description_fr: "Détermination de services",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Statistics",
          description_fr: "Statistiques",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en:
            "Vendor/Service Provider/Central Agency Relationship Management",
          description_fr:
            "Gestion des relations de l'organisme central avec les vendeurs/fournisseurs de services",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Service Provider Metrics Devt",
          description_fr:
            "Élaboration d'outils de mesure visant les fournisseurs de services",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Service Provider Serv Level Devt",
          description_fr:
            "Établ. des niveaux de service des fournisseurs de services",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Building, Recruiting and Managing Teams",
          description_fr: "Recrutement, constitution et gestion d'équipes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Lead Medium Teams (5-15)",
          description_fr: "Direction d'équipes moyennes (de 5 à 15 personnes)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Employee Performance Review",
          description_fr: "Examen du rendement des employés",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Lead Small Teams (1-5)",
          description_fr: "Direction de petites équipes (de 1 à 5 personnes)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Lead Large Teams (15+)",
          description_fr: "Direction de grandes équipes (15 personnes ou plus)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Employee engagement ",
          description_fr: "Engagement des employés",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Lead Medium Projects (3-12 Months)",
          description_fr: "Direction de projets à moyen terme (de 3 à 12 mois)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Lead Short Projects (1-3 Months)",
          description_fr: "Direction de projets à court terme (de 1 à 3 mois)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Management",
          description_fr: "Gestion de projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Planning",
          description_fr: "Planification de projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Quality Assurance",
          description_fr: "Assurance de la qualité des projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Change Management",
          description_fr: "Gestion des changements aux projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Estimating",
          description_fr: "Estimation des coûts des projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Scheduling",
          description_fr: "Ordonnancement des projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Control",
          description_fr: "Contrôle des projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Resource Management",
          description_fr: "Gestion des ressources des projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Risk Management",
          description_fr: "Gestion des risques des projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Tracking and Reporting",
          description_fr: "Suivi de projets et production de rapports",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Lead Long Projects (12+ Months)",
          description_fr: "Direction de projets à long terme (plus de 12 mois)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Project Management Tools",
          description_fr: "Outils de gestion de projets",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Process Design and Documentation",
          description_fr: "Conception et documentation de processus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Active Directory (Microsoft)",
          description_fr: "Active Directory (Microsoft)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "LDAP",
          description_fr: "Protocole LDAP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "HTTP",
          description_fr: "Protocole HTTP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IP",
          description_fr: "Protocole Internet",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Communications Protocols (general)",
          description_fr: "Protocoles de communication de données (général)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DNS",
          description_fr: "Architecture DNS",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Internet firewalls",
          description_fr: "Pare-feu Internet",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "NetworkTopology (general)",
          description_fr: "Topologie des réseaux (général)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Routing Protocols",
          description_fr: "Protocoles de routage",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Wireless LANs",
          description_fr: "Réseaux locaux sans fil",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Wireless",
          description_fr: "Technologies sans fil",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Computer Communications Protocols(general)",
          description_fr:
            "Protocoles de communications informatiques (général)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DHCP",
          description_fr: "Protocole DHCP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Distributed Computing Architecture",
          description_fr: "Architecture informatique répartie",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "LANs (general)",
          description_fr: "Réseaux locaux (général)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Network Administration",
          description_fr: "Administration de réseaux",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "NFS",
          description_fr: "Serveurs de fichiers réseau",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Routers",
          description_fr: "Routeurs",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Virtual Private Network (VPN)",
          description_fr: "Réseau privé virtuel (RPV)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "VPN Server",
          description_fr: "Serveurs RPV",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "WAN",
          description_fr: "Réseaux étendus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Windows Server 2008",
          description_fr: "Windows Server 2008",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Windows 7",
          description_fr: "Windows 7",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "VMWare",
          description_fr: "VMWare",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "File systems",
          description_fr: "Systèmes de fichiers",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Linux",
          description_fr: "Linux",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "UNIX (IBM - AIX)",
          description_fr: "UNIX (IBM - AIX)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Firmware",
          description_fr: "Micrologiciels",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Windows 8",
          description_fr: "Windows 8",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Windows Server 2003",
          description_fr: "Windows Server 2003",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "CICS (IBM)",
          description_fr:
            "Systèmes de contrôle de l'information destinée au client (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Citrix",
          description_fr: "Citrix",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Debugging tools",
          description_fr: "Outils de mise au point",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Development toolkits",
          description_fr: "Boîtes à outils de développement",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "FAT/FAT32",
          description_fr: "Tables d'allocation de fichiers FAT/FAT32",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MVS / SP / XA / ESA (IBM)",
          description_fr:
            "Mém. virt. double (MVS / programmation structurée (PS) / arch. étendue / ESA (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "OS kernels",
          description_fr: "Noyaux de systèmes d'exploitation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "OS/390 (IBM)",
          description_fr: "OS/390 (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Solaris OS",
          description_fr: "Système d'exploitation Solaris",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "TSO",
          description_fr: "Systèmes en temps partagé",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "UNIX (HP-UX)",
          description_fr: "UNIX (HP-UX)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "UNIX (other)",
          description_fr: "UNIX (autres)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Virtual memory management",
          description_fr: "Gestion de mémoires virtuelles",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Windows Server 2012",
          description_fr: "Windows Server 2012",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "CSS (Cascading Style Sheets)",
          description_fr: "Feuilles de style en cascade (FSC)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Java ",
          description_fr: "Java",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PL/SQL (Oracle)",
          description_fr: "PL/SQL (Oracle)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "HTML ",
          description_fr: "HTML",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JavaScript ",
          description_fr: " JavaScript",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "jQuery",
          description_fr: "jQuery",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SQL",
          description_fr: "Langage relationnel SQL",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "XML",
          description_fr: "Langage de balisage extensible",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle SQL *Plus",
          description_fr: "Oracle SQL *Plus",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Perl",
          description_fr: "Perl",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PowerBuilder",
          description_fr: "PowerBuilder",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "UNIX Shell Scripting",
          description_fr: "Séquence de commandes en langage naturel UNIX",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Visual Basic",
          description_fr: "Visual Basic",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "XSL",
          description_fr: "Langage extensible de feuilles de style (XSL)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ABAP",
          description_fr:
            "Programmation avancée d'applications administratives",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ActionScript",
          description_fr: "ActionScript",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "C ",
          description_fr: "C",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "C# ",
          description_fr: "C#",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "C++ ",
          description_fr: "C++",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "CICS API (IBM) ",
          description_fr:
            " Interfaces de programmation d'applications SCIC (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Clist ",
          description_fr: " Listes de commandes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "JCL",
          description_fr: "Langage de gestion des travaux",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "MicroFocus Cobol",
          description_fr: "MicroFocus Cobol",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "PHP",
          description_fr: "PHP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Powershell",
          description_fr: "Windows PowerShell",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Swing",
          description_fr: "Swing",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Transact-SQL (Microsoft)",
          description_fr: "Transact-SQL (Microsoft)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "VBScript",
          description_fr: "Visual Basic Script",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Visual Basic .NET",
          description_fr: "Visual Basic .NET",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Visual C++",
          description_fr: "Visual C++",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Windows Remote Management (WinRM) ",
          description_fr: "Windows Remote Management (WinRM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "X-Query",
          description_fr: "X-Query",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ASP.NET",
          description_fr: "ASP.NET",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Identity and Acess Management",
          description_fr: "Gestion de l'identité et de l'accès",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Policies and Procedures",
          description_fr: "Politiques et procédures",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Testing and Auditing",
          description_fr: "Essais et vérifications",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Encryption algorithms",
          description_fr: "Algorithmes cryptographiques",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "RACF (IBM)",
          description_fr: "Fonction de contrôle de l'accès aux données (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Security Risk Management",
          description_fr: "Gestion des risques pour la sécurité ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Software Installation & Upgrade",
          description_fr: "Installation et mise à niveau de logiciels systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Help Desk Management",
          description_fr: "Gestion des services de dépannage des systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Production Support",
          description_fr: "Soutien à la production des systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Security and User Administration",
          description_fr:
            "Sécurité des systèmes et administration des utilisateurs",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Security Maintenance",
          description_fr: "Maintenance de la sécurité des systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Tivoli (IBM)",
          description_fr: "Tivoli (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Microsoft BitLocker Admin and Monitoring (MBAM)",
          description_fr: "Microsoft BitLocker Admin and Monitoring (MBAM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Microsoft Desktop Optimization Pack (MDOP)",
          description_fr: "Microsoft Desktop Optimization Pack (MDOP)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Microsoft System Center",
          description_fr: "Microsoft System Center",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Symantec Endpoint Protection ",
          description_fr: "Symantec Endpoint Protection",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "vi Editor",
          description_fr: "vi Editor",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Windows Management Instrumentation (WMI) ",
          description_fr: "Windows Management Instrumentation (WMI)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Interface design (computer)",
          description_fr: "Conception d'interfaces (informatique)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Proposal writer",
          description_fr: "Rédaction de propositions",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Technical Content",
          description_fr: "Contenu technique",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Technical Writer (procedures)",
          description_fr: "Rédaction technique (procédures)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Document design",
          description_fr: "Conception de documents",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Illustration",
          description_fr: "Illustration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Information architecting",
          description_fr: "Élaboration d'architectures d'information",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Proofreader",
          description_fr: "Correction d'épreuves",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Technical Writer (app / end-user software)",
          description_fr:
            "Rédaction technique (appl. / logiciels d'utilisateurs)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Trainer (technical content)",
          description_fr: "Formation (contenu technique)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "SMTP",
          description_fr: "Protocole de transfert de courrier simple",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Apache HTTP Server",
          description_fr: "Serveur Apache HTTP",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Oracle Application Server",
          description_fr: "Serveur d'applications Oracle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Sendmail",
          description_fr: "Sendmail",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "WebSphere (IBM)",
          description_fr: "WebSphere (IBM)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ATG Dynamo",
          description_fr: "Serveur ATG Dynamo",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "FTP servers",
          description_fr: "Serveurs de protocole de transfert de fichiers",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IIS (Microsoft)",
          description_fr: "IIS (Microsoft)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Jboss",
          description_fr: "Jboss",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Print servers",
          description_fr: "Serveurs d'impression",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Proxy servers",
          description_fr: "Serveurs mandataires",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "WebLogic (Oracle)",
          description_fr: "WebLogic (Oracle)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: ".Net Framework",
          description_fr: ".NET Framework",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ESB: Enterprise Service Bus",
          description_fr: "Bus de service d'entreprise (ESB) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Google Search Appliance",
          description_fr: "Google Search Appliance",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dreamweaver (Adobe)",
          description_fr: "Dreamweaver (Adobe)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Apache Tomcat",
          description_fr: "Apache Tomcat",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "ColdFusion CFML",
          description_fr: "Langage de balisage ColdFusion (CFML)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "jQuery",
          description_fr: "jQuery",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "LiveCycle Design (Adobe)",
          description_fr: "LiveCycle Design (Adobe)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Microsoft Silverlight",
          description_fr: "Microsoft Silverlight",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "User Experience (UX)",
          description_fr: "Expérience utilisateur",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "WebTrends",
          description_fr: "WebTrends",
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
    return queryInterface.bulkDelete("skills", null, {});
  }
};
