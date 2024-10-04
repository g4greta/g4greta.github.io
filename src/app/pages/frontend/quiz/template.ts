export const SURVEY  = 
[
    {   
        "question": "Per quale motivo hai scelto di partecipare a G4GRETA?", 
        "istruction":"Possibilità di selezionare più di una risposta", 
        "img":"../../../../assets/imgs/avatar/1.png", 
        "element": "multi", 
        "required": false, 
        "questions":[ 
            "Ti interessano l’informatica e il coding",
            "Ti interessano le questioni ambientali",
            "Perché avevi bisogno di crediti PCTO", 
            "Per metterti alla prova con nuove materie", 
            "Perché anche le tue compagne partecipavano", 
            "Perché non c’erano altri progetti PCTO interessanti"
        ] 
    },
    {
        "question": "Prima di iniziare il progetto G4Greta, pensavi che l’informatica fosse una materia:",
        "istruction":"Una sola risposta ammessa", 
        "img":"../../../../assets/imgs/avatar/2.png", 
        "element":"single", 
        required: false, 
        questions:[
            "Molto difficile",
            "Abbastanza difficile",
            "Mediamente facile", 
            "Facile"
        ]
    },
    {
        "question": "Dopo G4Greta, com’è cambiata la tua percezione dell’informatica?",
        "istruction":"Una sola risposta ammessa", 
        "img":"../../../../assets/imgs/avatar/3.png", 
        "element":"single", 
        required: false, 
        questions:[
            "Non è cambiata rispetto a prima di G4Greta",
            "Ho scoperto che è più facile di quanto pensassi",
            "Ho scoperto che è più difficile di quanto pensassi"
        ]
    },
    {
        "question": "Prima del progetto G4Greta l’informatica:",
        "istruction":"Una sola risposta ammessa", 
        "img":"../../../../assets/imgs/avatar/4.png", 
        "element":"single", 
        required: false, 
        questions:[
            "Era già tra i tuoi interessi", 
            "Ti sembrava una materia poco interessante e non vicina ai tuoi interessi", 
            "Ti interessava ma ti sembrava troppo difficile", 
            "Non ti interessava", 
            "Pensavi che non facesse per te"
        ]
    },
    {
        "question": "Dopo il progetto G4Greta hai scoperto che l’informatica può essere utilizzata per cose vicine ai tuoi interessi? Se sì, quali?", 
        "istruction":"Se premi si, compila il campo di testo con le tue motivazioni",
        "img":"../../../../assets/imgs/avatar/5.png", 
        "element":"mixed", 
        required: false,
        questions:[
            "Si", 
            "No"
        ]
    },
    {
        "question": "Ritieni che il progetto G4GRETA contribuirà nella scelta del tuo percorso universitario?", 
        "istruction":"Una sola risposta ammessa",
        "img":"../../../../assets/imgs/avatar/6.png", 
        "element":"single", 
        required: false, 
        questions:[
            "Sì, potrei scegliere un corso di laurea legato all’Informatica", 
            "No, avevo già in mente di iscrivermi a un corso di laurea non informatico e non ho cambiato idea", 
            "Non so, ancora devo decidere"
        ]
    },
    {
        "question": "Come valuteresti ciascuna delle attività che hai svolto durante il progetto?", 
        "istruction":"Vota con le stelle tutte le attività",
        "img":"../../../../assets/imgs/avatar/12.png", 
        "element":"star", 
        required: false, 
        questions:[
            "Teambulding", 
            "Tecnologie e sostenibilità ambientale", 
            "Design Thinking", 
            "Coding con MIT Appinventor", 
            "Public speaking e videomaking"
        ]
    },
    {
        "question": "In quale di queste competenze pensi di essere migliorata e quanto, grazie al progetto?", 
        "istruction":"Vota con le stelle tutte le attività",
        "img":"../../../../assets/imgs/avatar/7.png",
        "element":"star", 
        required: false, 
        questions:[
            "Lavorare in gruppo", 
            "Parlare in pubblico", 
            "Affrontare la competizione", 
            "Programmare" ,
            "Consapevolezza delle problematiche ambientali", 
            "Progettare soluzioni a problemi"
        ]
    },
    {
        "question": "Quali sono state le principali difficoltà che hai riscontrato in questi mesi? Spiega distinguendo tra lezioni in aula e problematiche personali.", 
        "istruction":"Campo facoltativo, premere avanti per non compilarlo",
        "img":"../../../../assets/imgs/avatar/8.png", 
        "element":"input",
        required: false
    },
    {
        "question": "Come pensi si possa migliorare l’esperienza di G4GRETA?", 
        "istruction":"Campo facoltativo, premere avanti per non compilarlo",
        "img":"../../../../assets/imgs/avatar/9.png", 
        "element":"input", 
        required: false
    },
]