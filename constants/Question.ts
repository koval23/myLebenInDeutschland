import { QuestionDE, QuestionRU,QuestionsMap} from '@/constants/Types';

export const imageMap: { [key: number]: any } = {
  55: require('@/assets/images/questionImg/55.png'),
  70: require('@/assets/images/questionImg/70.png'),
  130: require('@/assets/images/questionImg/130.png'),
  176: require('@/assets/images/questionImg/176.png'),
  181: require('@/assets/images/questionImg/181.png'),
  187: require('@/assets/images/questionImg/187.png'),
  209: require('@/assets/images/questionImg/209.png'),
  216: require('@/assets/images/questionImg/216.png'),
  226: require('@/assets/images/questionImg/226.png'),
};


export const questionsDE: QuestionDE[] = [
 {
      "question_number": 1,
      "question":
          "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
      "options": [
        "hier Religionsfreiheit gilt.",
        "die Menschen Steuern zahlen.",
        "die Menschen das Wahlrecht haben.",
        "hier Meinungsfreiheit gilt."
      ],
      "answer": "hier Meinungsfreiheit gilt."
    },
    {
      "question_number": 2,
      "question":
          "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
      "options": [
        "Geschichtsunterricht teilnimmt.",
        "Religionsunterricht teilnimmt.",
        "Politikunterricht teilnimmt.",
        "Sprachunterricht teilnimmt."
      ],
      "answer": "Religionsunterricht teilnimmt."
    },
    {
      "question_number": 3,
      "question": "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
      "options": [
        "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
        "Der Staat muss sich nicht an die Gesetze halten.",
        "Nur Deutsche müssen die Gesetze befolgen.",
        "Die Gerichte machen die Gesetze."
      ],
      "answer":
          "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten."
    },
    {
      "question_number": 4,
      "question": "Welches Recht gehört zu den Grundrechten in Deutschland?",
      "options": [
        "Waffenbesitz",
        "Faustrecht",
        "Meinungsfreiheit",
        "Selbstjustiz"
      ],
      "answer": "Meinungsfreiheit"
    },
    {
      "question_number": 5,
      "question": "Wahlen in Deutschland sind frei. Was bedeutet das?",
      "options": [
        "Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.",
        "Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
        "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
        "Alle wahlberechtigten Personen müssen wählen."
      ],
      "answer":
          "Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben."
    },
    {
      "question_number": 6,
      "question": "Wie heißt die deutsche Verfassung?",
      "options": [
        "Volksgesetz",
        "Bundesgesetz",
        "Deutsches Gesetz",
        "Grundgesetz"
      ],
      "answer": "Grundgesetz"
    },
    {
      "question_number": 7,
      "question":
          "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
      "options": [
        "Glaubens- und Gewissensfreiheit.",
        "Unterhaltung.",
        "Arbeit.",
        "Wohnung."
      ],
      "answer": "Glaubens- und Gewissensfreiheit."
    },
    {
      "question_number": 8,
      "question": "Was steht nicht im Grundgesetz von Deutschland?",
      "options": [
        "Die Würde des Menschen ist unantastbar.",
        "Alle sollen gleich viel Geld haben.",
        "Jeder Mensch darf seine Meinung sagen.",
        "Alle sind vor dem Gesetz gleich."
      ],
      "answer": "Alle sollen gleich viel Geld haben."
    },
    {
      "question_number": 9,
      "question":
          "Welches Grundrecht gilt in Deutschland nur für Ausländer / Ausländerinnen? Das Grundrecht auf …",
      "options": [
        "Schutz der Familie",
        "Menschenwürde",
        "Asyl",
        "Meinungsfreiheit"
      ],
      "answer": "Asyl"
    },
    {
      "question_number": 10,
      "question": "Was ist mit dem deutschen Grundgesetz vereinbar?",
      "options": [
        "die Prügelstrafe",
        "die Folter",
        "die Todesstrafe",
        "die Geldstrafe"
      ],
      "answer": "die Geldstrafe"
    },
    {
      "question_number": 11,
      "question":
          "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
      "options": [
        "Grundgesetz",
        "Bundesverfassung",
        "Gesetzbuch",
        "Verfassungsvertrag"
      ],
      "answer": "Grundgesetz"
    },
    {
      "question_number": 12,
      "question":
          "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
      "options": [
        "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
        "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
        "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
        "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen."
      ],
      "answer":
          "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden."
    },
    {
      "question_number": 13,
      "question": "Im Parlament steht der Begriff „Opposition“ für…",
      "options": [
        "die regierenden Parteien.",
        "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.",
        "die Fraktion mit den meisten Abgeordneten.",
        "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten."
      ],
      "answer":
          "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören."
    },
    {
      "question_number": 14,
      "question": "Meinungsfreiheit in Deutschland heißt, dass ich …",
      "options": [
        "Passanten auf der Straße beschimpfen darf.",
        "meine Meinung in Leserbriefen äußern kann.",
        "Nazi-Symbole tragen darf.",
        "meine Meinung sagen darf, solange ich der Regierung nicht widerspreche."
      ],
      "answer": "meine Meinung in Leserbriefen äußern kann."
    },
    {
      "question_number": 15,
      "question": "Was verbietet das deutsche Grundgesetz?",
      "options": [
        "Militärdienst",
        "Zwangsarbeit",
        "freie Berufswahl",
        "Arbeit im Ausland"
      ],
      "answer": "Zwangsarbeit"
    },
    {
      "question_number": 16,
      "question": "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
      "options": [
        "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen",
        "bei Meinungsäußerungen über die Bundesregierung",
        "bei Diskussionen über Religionen",
        "bei Kritik am Staat"
      ],
      "answer":
          "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen"
    },
    {
      "question_number": 17,
      "question": "Die deutschen Gesetze verbieten …",
      "options": [
        "Meinungsfreiheit der Einwohner und Einwohnerinnen.",
        "Petitionen der Bürger und Bürgerinnen.",
        "Versammlungsfreiheit der Einwohner und Einwohnerinnen.",
        "Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat."
      ],
      "answer": "Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat."
    },
    {
      "question_number": 18,
      "question":
          "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
      "options": [
        "die Unantastbarkeit der Menschenwürde",
        "das Recht auf Leben",
        "Religionsfreiheit",
        "Meinungsfreiheit"
      ],
      "answer": "die Unantastbarkeit der Menschenwürde"
    },
    {
      "question_number": 19,
      "question":
          "Was versteht man unter dem Recht der „Freizügigkeit“ in Deutschland?",
      "options": [
        "Man darf sich seinen Wohnort selbst aussuchen.",
        "Man kann seinen Beruf wechseln.",
        "Man darf sich für eine andere Religion entscheiden.",
        "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen."
      ],
      "answer": "Man darf sich seinen Wohnort selbst aussuchen."
    },
    {
      "question_number": 20,
      "question":
          "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …",
      "options": [
        "tolerant.",
        "rechtsstaatlich orientiert.",
        "gesetzestreu.",
        "verfassungswidrig."
      ],
      "answer": "verfassungswidrig."
    },
    {
      "question_number": 21,
      "question": "Welches ist das Wappen der Bundesrepublik Deutschland?",
      "image":"@/assets/images/questionImg/209.png",
      "options": ["1", "2", "3", "4"],
      "answer": "1"
    },
    {
      "question_number": 22,
      "question": "Was für eine Staatsform hat Deutschland?",
      "options": ["Monarchie", "Diktatur", "Republik", "Fürstentum"],
      "answer": "Republik"
    },
    {
      "question_number": 23,
      "question": "In Deutschland sind die meisten Erwerbstätigen …",
      "options": [
        "bei einer Firma oder Behörde beschäftigt.",
        "in kleinen Familienunternehmen beschäftigt.",
        "ehrenamtlich für ein Bundesland tätig.",
        "selbständig mit einer eigenen Firma tätig."
      ],
      "answer": "bei einer Firma oder Behörde beschäftigt."
    },
    {
      "question_number": 24,
      "question": "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
      "options": ["14", "15", "16", "17"],
      "answer": "16"
    },
    {
      "question_number": 25,
      "question": "Was ist kein Bundesland der Bundesrepublik Deutschland?",
      "options": [
        "Nordrhein-Westfalen",
        "Elsass-Lothringen",
        "Mecklenburg-Vorpommern",
        "Sachsen-Anhalt"
      ],
      "answer": "Elsass-Lothringen"
    },
    {
      "question_number": 26,
      "question": "Deutschland ist …",
      "options": [
        "eine kommunistische Republik.",
        "ein demokratischer und sozialer Bundesstaat.",
        "eine kapitalistische und soziale Monarchie.",
        "ein sozialer und sozialistischer Bundesstaat."
      ],
      "answer": "ein demokratischer und sozialer Bundesstaat."
    },
    {
      "question_number": 27,
      "question": "Deutschland ist …",
      "options": [
        "ein sozialistischer Staat.",
        "ein Bundesstaat.",
        "eine Diktatur.",
        "eine Monarchie."
      ],
      "answer": "ein Bundesstaat."
    },
    {
      "question_number": 28,
      "question": "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
      "options": [
        "das Militär",
        "die Wirtschaft",
        "das wahlberechtigte Volk",
        "die Verwaltung"
      ],
      "answer": "das wahlberechtigte Volk"
    },
    {
      "question_number": 29,
      "question":
          "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
      "options": ["Löwe", "Adler", "Bär", "Pferd"],
      "answer": "Adler"
    },
    {
      "question_number": 30,
      "question": "Was ist kein Merkmal unserer Demokratie?",
      "options": [
        "regelmäßige Wahlen",
        "Pressezensur",
        "Meinungsfreiheit",
        "verschiedene Parteien"
      ],
      "answer": "Pressezensur"
    },
    {
      "question_number": 31,
      "question":
          "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
      "options": ["Einheit.", "Koalition.", "Ministerium.", "Fraktion."],
      "answer": "Koalition."
    },
    {
      "question_number": 32,
      "question": "Was ist keine staatliche Gewalt in Deutschland?",
      "options": ["Gesetzgebung", "Regierung", "Presse", "Rechtsprechung"],
      "answer": "Presse"
    },
    {
      "question_number": 33,
      "question": "Welche Aussage ist richtig? In Deutschland …",
      "options": [
        "sind Staat und Religionsgemeinschaften voneinander getrennt.",
        "bilden die Religionsgemeinschaften den Staat.",
        "ist der Staat abhängig von den Religionsgemeinschaften.",
        "bilden Staat und Religionsgemeinschaften eine Einheit."
      ],
      "answer": "sind Staat und Religionsgemeinschaften voneinander getrennt."
    },
    {
      "question_number": 34,
      "question": "Was ist Deutschland nicht?",
      "options": [
        "eine Demokratie",
        "ein Rechtsstaat",
        "eine Monarchie",
        "ein Sozialstaat"
      ],
      "answer": "eine Monarchie"
    },
    {
      "question_number": 35,
      "question": "Womit finanziert der deutsche Staat die Sozialversicherung?",
      "options": [
        "Kirchensteuern",
        "Sozialabgaben",
        "Spendengeldern",
        "Vereinsbeiträgen"
      ],
      "answer": "Sozialabgaben"
    },
    {
      "question_number": 36,
      "question": "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
      "options": [
        "die Krankenversicherung",
        "die Autoversicherung",
        "die Gebäudeversicherung",
        "die Haftpflichtversicherung"
      ],
      "answer": "die Krankenversicherung"
    },
    {
      "question_number": 37,
      "question":
          "Wie werden die Regierungschefs / Regierungschefinnen der meisten Bundesländer in Deutschland genannt?",
      "options": [
        "Erster Minister / Erste Ministerin",
        "Premierminister / Premierministerin",
        "Senator / Senatorin",
        "Ministerpräsident / Ministerpräsidentin"
      ],
      "answer": "Ministerpräsident / Ministerpräsidentin"
    },
    {
      "question_number": 38,
      "question":
          "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
      "options": [
        "Staatenverbund.",
        "Bundesstaat.",
        "Staatenbund.",
        "Zentralstaat."
      ],
      "answer": "Bundesstaat."
    },
    {
      "question_number": 39,
      "question": "Was hat jedes deutsche Bundesland?",
      "options": [
        "einen eigenen Außenminister / eine eigene Außenministerin",
        "eine eigene Währung",
        "eine eigene Armee",
        "eine eigene Regierung"
      ],
      "answer": "eine eigene Regierung"
    },
    {
      "question_number": 40,
      "question": "Mit welchen Worten beginnt die deutsche Nationalhymne?",
      "options": [
        "Völker, hört die Signale …",
        "Einigkeit und Recht und Freiheit …",
        "Freude schöner Götterfunken …",
        "Deutschland einig Vaterland …"
      ],
      "answer": "Einigkeit und Recht und Freiheit …"
    },
    {
      "question_number": 41,
      "question": "Warum gibt es in einer Demokratie mehr als eine Partei?",
      "options": [
        "weil dadurch die unterschiedlichen Meinungen der Bürger und Bürgerinnen vertreten werden",
        "damit Bestechung in der Politik begrenzt wird",
        "um politische Demonstrationen zu verhindern",
        "um wirtschaftlichen Wettbewerb anzuregen"
      ],
      "answer":
          "weil dadurch die unterschiedlichen Meinungen der Bürger und Bürgerinnen vertreten werden"
    },
    {
      "question_number": 42,
      "question": "Wer beschließt in Deutschland ein neues Gesetz?",
      "options": [
        "die Regierung",
        "das Parlament",
        "die Gerichte",
        "die Polizei"
      ],
      "answer": "das Parlament"
    },
    {
      "question_number": 43,
      "question": "Wann kann in Deutschland eine Partei verboten werden?",
      "options": [
        "wenn ihr Wahlkampf zu teuer ist",
        "wenn sie gegen die Verfassung kämpft",
        "wenn sie Kritik am Staatsoberhaupt äußert",
        "wenn ihr Programm eine neue Richtung vorschlägt"
      ],
      "answer": "wenn sie gegen die Verfassung kämpft"
    },
    {
      "question_number": 44,
      "question":
          "Wen kann man als Bürger / Bürgerin in Deutschland nicht direkt wählen?",
      "options": [
        "Abgeordnete des EU-Parlaments",
        "den Bundespräsidenten / die Bundespräsidentin",
        "Landtagsabgeordnete",
        "Bundestagsabgeordnete"
      ],
      "answer": "den Bundespräsidenten / die Bundespräsidentin"
    },
    {
      "question_number": 45,
      "question": "Zu welcher Versicherung gehört die Pflegeversicherung?",
      "options": [
        "Sozialversicherung",
        "Unfallversicherung",
        "Hausratversicherung",
        "Haftpflicht- und Feuerversicherung"
      ],
      "answer": "Sozialversicherung"
    },
    {
      "question_number": 46,
      "question":
          "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
      "options": [
        "Er baut Straßen und Schulen.",
        "Er verkauft Lebensmittel und Kleidung.",
        "Er versorgt alle Einwohner und Einwohnerinnen kostenlos mit Zeitungen.",
        "Er produziert Autos und Busse."
      ],
      "answer": "Er baut Straßen und Schulen."
    },
    {
      "question_number": 47,
      "question":
          "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
      "options": [
        "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
        "Er zahlt Kindergeld.",
        "Er unterstützt Museen.",
        "Er fördert Sportler und Sportlerinnen."
      ],
      "answer": "Er bezahlt für alle Staatsangehörigen Urlaubsreisen."
    },
    {
      "question_number": 48,
      "question":
          "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
      "options": [
        "der Bundesrat",
        "der Bundespräsident / die Bundespräsidentin",
        "die Bürgerversammlung",
        "die Regierung"
      ],
      "answer": "die Bürgerversammlung"
    },
    {
      "question_number": 49,
      "question": "Wer bestimmt in Deutschland die Schulpolitik?",
      "options": [
        "die Lehrer und Lehrerinnen",
        "die Bundesländer",
        "das Familienministerium",
        "die Universitäten"
      ],
      "answer": "die Bundesländer"
    },
    {
      "question_number": 50,
      "question": "Die Wirtschaftsform in Deutschland nennt man …",
      "options": [
        "freie Zentralwirtschaft.",
        "soziale Marktwirtschaft.",
        "gelenkte Zentralwirtschaft.",
        "Planwirtschaft."
      ],
      "answer": "soziale Marktwirtschaft."
    },
    {
      "question_number": 51,
      "question": "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
      "options": [
        "Menschen sich kritisch über die Regierung äußern können.",
        "Bürger friedlich demonstrieren gehen dürfen.",
        "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
        "jemand ein Verbrechen begeht und deshalb verhaftet wird."
      ],
      "answer": "Menschen von einer Privatpolizei ohne Grund verhaftet werden."
    },
    {
      "question_number": 52,
      "question":
          "Was bedeutet „Volkssouveränität“? Alle Staatsgewalt geht vom …",
      "options": [
        "Volke aus.",
        "Bundestag aus.",
        "preußischen König aus.",
        "Bundesverfassungsgericht aus."
      ],
      "answer": "Volke aus."
    },
    {
      "question_number": 53,
      "question": "Was bedeutet „Rechtsstaat“ in Deutschland?",
      "options": [
        "Der Staat hat Recht.",
        "Es gibt nur rechte Parteien.",
        "Die Bürger und Bürgerinnen entscheiden über Gesetze.",
        "Der Staat muss die Gesetze einhalten."
      ],
      "answer": "Der Staat muss die Gesetze einhalten."
    },
    {
      "question_number": 54,
      "question": "Was ist keine staatliche Gewalt in Deutschland?",
      "options": ["Legislative", "Judikative", "Exekutive", "Direktive"],
      "answer": "Direktive"
    },
    {
      "question_number": 55,
      "question": "Was zeigt dieses Bild?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/xql30k2y18td/55.png",
      "options": [
        "den Bundestagssitz in Berlin",
        "das Bundesverfassungsgericht in Karlsruhe",
        "das Bundesratsgebäude in Berlin",
        "das Bundeskanzleramt in Berlin"
      ],
      "answer": "den Bundestagssitz in Berlin"
    },
    {
      "question_number": 56,
      "question": "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
      "options": ["Pfarramt", "Ordnungsamt", "Finanzamt", "Auswärtiges Amt"],
      "answer": "Ordnungsamt"
    },
    {
      "question_number": 57,
      "question":
          "Wer wird meistens zum Präsidenten / zur Präsidentin des Deutschen Bundestages gewählt?",
      "options": [
        "der / die älteste Abgeordnete im Parlament",
        "der Ministerpräsident / die Ministerpräsidentin des größten Bundeslandes",
        "ein Abgeordneter / eine Abgeordnete der stärksten Fraktion",
        "ein ehemaliger Bundeskanzler / eine ehemalige Bundeskanzlerin"
      ],
      "answer": "ein Abgeordneter / eine Abgeordnete der stärksten Fraktion"
    },
    {
      "question_number": 58,
      "question":
          "Wer ernennt in Deutschland die Minister / die Ministerinnen der Bundesregierung?",
      "options": [
        "der Präsident / die Präsidentin des Bundesverfassungsgerichtes",
        "der Bundespräsident / die Bundespräsidentin",
        "der Bundesratspräsident / die Bundesratspräsidentin",
        "der Bundestagspräsident / die Bundestagspräsidentin"
      ],
      "answer": "der Bundespräsident / die Bundespräsidentin"
    },
    {
      "question_number": 59,
      "question":
          "Welche Parteien wurden in Deutschland 2007 zur Partei „Die Linke“?",
      "options": [
        "CDU und SSW",
        "PDS und WASG",
        "CSU und FDP",
        "Bündnis 90/Die Grünen und SPD"
      ],
      "answer": "PDS und WASG"
    },
    {
      "question_number": 60,
      "question":
          "In Deutschland gehören der Bundestag und der Bundesrat zur …",
      "options": ["Exekutive.", "Legislative.", "Direktive.", "Judikative."],
      "answer": "Legislative."
    },
    {
      "question_number": 61,
      "question": "Was bedeutet „Volkssouveränität“?",
      "options": [
        "Der König / die Königin herrscht über das Volk.",
        "Das Bundesverfassungsgericht steht über der Verfassung.",
        "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.",
        "Die Staatsgewalt geht vom Volke aus."
      ],
      "answer": "Die Staatsgewalt geht vom Volke aus."
    },
    {
      "question_number": 62,
      "question":
          "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
      "options": [
        "Kommunalwahl.",
        "Landtagswahl.",
        "Europawahl.",
        "Bundestagswahl."
      ],
      "answer": "Landtagswahl."
    },
    {
      "question_number": 63,
      "question": "Was gehört in Deutschland nicht zur Exekutive?",
      "options": [
        "die Polizei",
        "die Gerichte",
        "das Finanzamt",
        "die Ministerien"
      ],
      "answer": "die Gerichte"
    },
    {
      "question_number": 64,
      "question": "Die Bundesrepublik Deutschland ist heute gegliedert in …",
      "options": [
        "vier Besatzungszonen.",
        "einen Oststaat und einen Weststaat.",
        "16 Kantone.",
        "Bund, Länder und Kommunen."
      ],
      "answer": "Bund, Länder und Kommunen."
    },
    {
      "question_number": 65,
      "question":
          "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
      "options": [
        "Gesetze zu entwerfen.",
        "die Bundesregierung zu kontrollieren.",
        "den Bundeskanzler / die Bundeskanzlerin zu wählen.",
        "das Bundeskabinett zu bilden."
      ],
      "answer": "das Bundeskabinett zu bilden."
    },
    {
      "question_number": 66,
      "question": "Wer schrieb den Text zur deutschen Nationalhymne?",
      "options": [
        "Friedrich von Schiller",
        "Clemens Brentano",
        "Johann Wolfgang von Goethe",
        "Heinrich Hoffmann von Fallersleben"
      ],
      "answer": "Heinrich Hoffmann von Fallersleben"
    },
    {
      "question_number": 67,
      "question":
          "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
      "options": [
        "Verteidigungspolitik",
        "Außenpolitik",
        "Wirtschaftspolitik",
        "Schulpolitik"
      ],
      "answer": "Schulpolitik"
    },
    {
      "question_number": 68,
      "question": "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
      "options": [
        "weil es in Deutschland nur staatliche Schulen gibt",
        "weil alle Schüler und Schülerinnen einen Schulabschluss haben müssen",
        "weil es in den Bundesländern verschiedene Schulen gibt",
        "weil es nach dem Grundgesetz seine Aufgabe ist"
      ],
      "answer": "weil es nach dem Grundgesetz seine Aufgabe ist"
    },
    {
      "question_number": 69,
      "question":
          "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
      "options": ["Stadträte", "Landräte", "Gemeinden", "Bezirksämter"],
      "answer": "Gemeinden"
    },
    {
      "question_number": 70,
      "question":
          "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben des deutschen Bundespräsidenten / der deutschen Bundespräsidentin?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/9elljsnldooa/70.png",
      "options": [
        "Er / Sie führt die Regierungsgeschäfte.",
        "Er / Sie kontrolliert die Regierungspartei.",
        "Er / Sie wählt die Minister / Ministerinnen aus.",
        "Er / Sie schlägt den Kanzler / die Kanzlerin zur Wahl vor."
      ],
      "answer": "Er / Sie schlägt den Kanzler / die Kanzlerin zur Wahl vor."
    },
    {
      "question_number": 71,
      "question":
          "Wo hält sich der deutsche Bundeskanzler / die deutsche Bundeskanzlerin am häufigsten auf? Am häufigsten ist er / sie …",
      "options": [
        "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
        "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
        "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.",
        "auf Schloss Bellevue, dem Amtssitz des Bundespräsidenten / der Bundespräsidentin, um Staatsgäste zu empfangen."
      ],
      "answer":
          "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden."
    },
    {
      "question_number": 72,
      "question":
          "Wie heißt der jetzige Bundeskanzler / die jetzige Bundeskanzlerin von Deutschland?",
      "options": [
        "Gerhard Schröder",
        "Angela Merkel",
        "Franziska Giffey",
        "Olaf Scholz"
      ],
      "answer": "Olaf Scholz"
    },
    {
      "question_number": 73,
      "question":
          "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
      "options": [
        "CDU/CSU und SPD.",
        "Die Linke und Bündnis 90/Die Grünen.",
        "FDP und SPD.",
        "Die Linke und FDP."
      ],
      "answer": "CDU/CSU und SPD."
    },
    {
      "question_number": 74,
      "question": "Wie heißt das Parlament für ganz Deutschland?",
      "options": [
        "Bundesversammlung",
        "Volkskammer",
        "Bundestag",
        "Bundesgerichtshof"
      ],
      "answer": "Bundestag"
    },
    {
      "question_number": 75,
      "question": "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
      "options": [
        "Frank-Walter Steinmeier",
        "Bärbel Bas",
        "Bodo Ramelow",
        "Joachim Gauck"
      ],
      "answer": "Frank-Walter Steinmeier"
    },
    {
      "question_number": 76,
      "question": "Was bedeutet die Abkürzung CDU in Deutschland?",
      "options": [
        "Christliche Deutsche Union",
        "Club Deutscher Unternehmer",
        "Christlicher Deutscher Umweltschutz",
        "Christlich Demokratische Union"
      ],
      "answer": "Christlich Demokratische Union"
    },
    {
      "question_number": 77,
      "question": "Was ist die Bundeswehr?",
      "options": [
        "die deutsche Polizei",
        "ein deutscher Hafen",
        "eine deutsche Bürgerinitiative",
        "die deutsche Armee"
      ],
      "answer": "die deutsche Armee"
    },
    {
      "question_number": 78,
      "question": "Was bedeutet die Abkürzung SPD?",
      "options": [
        "Sozialistische Partei Deutschlands",
        "Sozialpolitische Partei Deutschlands",
        "Sozialdemokratische Partei Deutschlands",
        "Sozialgerechte Partei Deutschlands"
      ],
      "answer": "Sozialdemokratische Partei Deutschlands"
    },
    {
      "question_number": 79,
      "question": "Was bedeutet die Abkürzung FDP in Deutschland?",
      "options": [
        "Friedliche Demonstrative Partei",
        "Freie Deutschland Partei",
        "Führende Demokratische Partei",
        "Freie Demokratische Partei"
      ],
      "answer": "Freie Demokratische Partei"
    },
    {
      "question_number": 80,
      "question":
          "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
      "options": [
        "Oberlandesgericht",
        "Amtsgericht",
        "Bundesverfassungsgericht",
        "Verwaltungsgericht"
      ],
      "answer": "Bundesverfassungsgericht"
    },
    {
      "question_number": 81,
      "question":
          "Wer wählt den Bundeskanzler / die Bundeskanzlerin in Deutschland?",
      "options": [
        "der Bundesrat",
        "die Bundesversammlung",
        "das Volk",
        "der Bundestag"
      ],
      "answer": "der Bundestag"
    },
    {
      "question_number": 82,
      "question": "Wer leitet das deutsche Bundeskabinett?",
      "options": [
        "der Bundestagspräsident / die Bundestagspräsidentin",
        "der Bundespräsident / die Bundespräsidentin",
        "der Bundeskanzler / die Bundeskanzlerin",
        "der Bundesratspräsident / die Bundesratspräsidentin"
      ],
      "answer": "der Bundeskanzler / die Bundeskanzlerin"
    },
    {
      "question_number": 83,
      "question":
          "Wer wählt den deutschen Bundeskanzler / die deutsche Bundeskanzlerin?",
      "options": [
        "das Volk",
        "die Bundesversammlung",
        "der Bundestag",
        "die Bundesregierung"
      ],
      "answer": "der Bundestag"
    },
    {
      "question_number": 84,
      "question":
          "Welche Hauptaufgabe hat der deutsche Bundespräsident / die deutsche Bundespräsidentin? Er / Sie …",
      "options": [
        "regiert das Land.",
        "entwirft die Gesetze.",
        "repräsentiert das Land.",
        "überwacht die Einhaltung der Gesetze."
      ],
      "answer": "repräsentiert das Land."
    },
    {
      "question_number": 85,
      "question": "Wer bildet den deutschen Bundesrat?",
      "options": [
        "die Abgeordneten des Bundestages",
        "die Minister und Ministerinnen der Bundesregierung",
        "die Regierungsvertreter der Bundesländer",
        "die Parteimitglieder"
      ],
      "answer": "die Regierungsvertreter der Bundesländer"
    },
    {
      "question_number": 86,
      "question":
          "Wer wählt in Deutschland den Bundespräsidenten / die Bundespräsidentin?",
      "options": [
        "die Bundesversammlung",
        "der Bundesrat",
        "das Bundesparlament",
        "das Bundesverfassungsgericht"
      ],
      "answer": "die Bundesversammlung"
    },
    {
      "question_number": 87,
      "question": "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
      "options": [
        "der Bundeskanzler / die Bundeskanzlerin",
        "der Bundespräsident / die Bundespräsidentin",
        "der Bundesratspräsident / die Bundesratspräsidentin",
        "der Bundestagspräsident / die Bundestagspräsidentin"
      ],
      "answer": "der Bundespräsident / die Bundespräsidentin"
    },
    {
      "question_number": 88,
      "question": "Die parlamentarische Opposition im Deutschen Bundestag …",
      "options": [
        "kontrolliert die Regierung.",
        "entscheidet, wer Bundesminister / Bundesministerin wird.",
        "bestimmt, wer im Bundesrat sitzt.",
        "schlägt die Regierungschefs / Regierungschefinnen der Länder vor."
      ],
      "answer": "kontrolliert die Regierung."
    },
    {
      "question_number": 89,
      "question":
          "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
      "options": ["Verband", "Ältestenrat", "Fraktion", "Opposition"],
      "answer": "Fraktion"
    },
    {
      "question_number": 90,
      "question":
          "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
      "options": [
        "den Bundesrat.",
        "die Bundesversammlung.",
        "den Bundestag.",
        "die Bundesregierung."
      ],
      "answer": "den Bundesrat."
    },
    {
      "question_number": 91,
      "question":
          "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
      "options": [
        "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.",
        "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.",
        "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
        "leichter, wenn es sich um ein reiches Bundesland handelt."
      ],
      "answer":
          "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird."
    },
    {
      "question_number": 92,
      "question": "Was bedeutet die Abkürzung CSU in Deutschland?",
      "options": [
        "Christlich Sichere Union",
        "Christlich Süddeutsche Union",
        "Christlich Sozialer Unternehmerverband",
        "Christlich Soziale Union"
      ],
      "answer": "Christlich Soziale Union"
    },
    {
      "question_number": 93,
      "question":
          "Je mehr „Zweitstimmen“ eine Partei bei einer Bundestagswahl bekommt, desto …",
      "options": [
        "mehr Sitze erhält die Partei im Parlament.",
        "weniger Erststimmen kann sie haben.",
        "mehr Direktkandidaten der Partei ziehen ins Parlament ein.",
        "größer ist das Risiko, eine Koalition bilden zu müssen."
      ],
      "answer": "mehr Sitze erhält die Partei im Parlament."
    },
    {
      "question_number": 94,
      "question":
          "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
      "options": ["16", "18", "21", "23"],
      "answer": "18"
    },
    {
      "question_number": 95,
      "question": "Was gilt für die meisten Kinder in Deutschland?",
      "options": [
        "Wahlpflicht",
        "Schulpflicht",
        "Schweigepflicht",
        "Religionspflicht"
      ],
      "answer": "Schulpflicht"
    },
    {
      "question_number": 96,
      "question":
          "Was muss jeder deutsche Staatsbürger / jede deutsche Staatsbürgerin ab dem 16. Lebensjahr besitzen?",
      "options": [
        "einen Reisepass",
        "einen Personalausweis",
        "einen Sozialversicherungsausweis",
        "einen Führerschein"
      ],
      "answer": "einen Personalausweis"
    },
    {
      "question_number": 97,
      "question":
          "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
      "options": [
        "Sozialversicherung",
        "Sozialhilfe",
        "Kindergeld",
        "Wohngeld"
      ],
      "answer": "Sozialversicherung"
    },
    {
      "question_number": 98,
      "question":
          "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, ...",
      "options": [
        "kann die Regierung ihre Mehrheit verlieren.",
        "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.",
        "muss der Bundespräsident / die Bundespräsidentin zuvor sein / ihr Einverständnis geben.",
        "dürfen die Wähler / Wählerinnen dieser Abgeordneten noch einmal wählen."
      ],
      "answer": "kann die Regierung ihre Mehrheit verlieren."
    },
    {
      "question_number": 99,
      "question": "Wer bezahlt in Deutschland die Sozialversicherungen?",
      "options": [
        "Arbeitgeber / Arbeitgeberinnen und Arbeitnehmer / Arbeitnehmerinnen",
        "nur Arbeitnehmer / Arbeitnehmerinnen",
        "alle Staatsangehörigen",
        "nur Arbeitgeber / Arbeitgeberinnen"
      ],
      "answer":
          "Arbeitgeber / Arbeitgeberinnen und Arbeitnehmer / Arbeitnehmerinnen"
    },
    {
      "question_number": 100,
      "question": "Was gehört nicht zur gesetzlichen Sozialversicherung?",
      "options": [
        "die gesetzliche Rentenversicherung",
        "die Lebensversicherung",
        "die Arbeitslosenversicherung",
        "die Pflegeversicherung"
      ],
      "answer": "die Lebensversicherung"
    },
    {
      "question_number": 101,
      "question": "Gewerkschaften sind Interessenverbände der …",
      "options": [
        "Jugendlichen.",
        "Arbeitnehmer und Arbeitnehmerinnen.",
        "Rentner und Rentnerinnen.",
        "Arbeitgeber und Arbeitgeberinnen."
      ],
      "answer": "Arbeitnehmer und Arbeitnehmerinnen."
    },
    {
      "question_number": 102,
      "question":
          "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …",
      "options": [
        "Bundesadler.",
        "Bundesverdienstkreuz.",
        "Vaterländischen Verdienstorden.",
        "Ehrentitel „Held der Deutschen Demokratischen Republik“."
      ],
      "answer": "Bundesverdienstkreuz."
    },
    {
      "question_number": 103,
      "question":
          "Was wird in Deutschland als „Ampelkoalition“ bezeichnet? Die Zusammenarbeit …",
      "options": [
        "der Bundestagsfraktionen von CDU und CSU",
        "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung",
        "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung",
        "der Bundestagsfraktionen von CDU und SPD"
      ],
      "answer": "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung"
    },
    {
      "question_number": 104,
      "question":
          "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
      "options": [
        "Die Frau ist lange krank und arbeitsunfähig.",
        "Die Frau kam oft zu spät zur Arbeit.",
        "Die Frau erledigt private Sachen während der Arbeitszeit.",
        "Die Frau bekommt ein Kind und ihr Chef weiß das."
      ],
      "answer": "Die Frau bekommt ein Kind und ihr Chef weiß das."
    },
    {
      "question_number": 105,
      "question":
          "Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen in Deutschland?",
      "options": [
        "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.",
        "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.",
        "Sie geben Zwischenergebnisse an die Medien weiter.",
        "Sie zählen die Stimmen nach dem Ende der Wahl."
      ],
      "answer": "Sie zählen die Stimmen nach dem Ende der Wahl."
    },
    {
      "question_number": 106,
      "question":
          "In Deutschland helfen ehrenamtliche Wahlhelfer und Wahlhelferinnen bei den Wahlen. Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen?",
      "options": [
        "Sie helfen Kindern und alten Menschen beim Wählen.",
        "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.",
        "Sie geben Zwischenergebnisse an Journalisten weiter.",
        "Sie zählen die Stimmen nach dem Ende der Wahl."
      ],
      "answer": "Sie zählen die Stimmen nach dem Ende der Wahl."
    },
    {
      "question_number": 107,
      "question":
          "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
      "options": ["2 Jahre", "4 Jahre", "6 Jahre", "8 Jahre"],
      "answer": "4 Jahre"
    },
    {
      "question_number": 108,
      "question":
          "Bei einer Bundestagswahl in Deutschland darf jeder wählen, der …",
      "options": [
        "in der Bundesrepublik Deutschland wohnt und wählen möchte.",
        "Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
        "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.",
        "Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist."
      ],
      "answer":
          "Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist."
    },
    {
      "question_number": 109,
      "question":
          "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
      "options": [
        "alle drei Jahre",
        "alle vier Jahre",
        "alle fünf Jahre",
        "alle sechs Jahre"
      ],
      "answer": "alle vier Jahre"
    },
    {
      "question_number": 110,
      "question":
          "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
      "options": ["2 Jahre", "3 Jahre", "4 Jahre", "5 Jahre"],
      "answer": "4 Jahre"
    },
    {
      "question_number": 111,
      "question": "In Deutschland darf man wählen. Was bedeutet das?",
      "options": [
        "Alle deutschen Staatsangehörigen dürfen wählen, wenn sie das Mindestalter erreicht haben.",
        "Nur verheiratete Personen dürfen wählen.",
        "Nur Personen mit einem festen Arbeitsplatz dürfen wählen.",
        "Alle Einwohner und Einwohnerinnen in Deutschland müssen wählen."
      ],
      "answer":
          "Alle deutschen Staatsangehörigen dürfen wählen, wenn sie das Mindestalter erreicht haben."
    },
    {
      "question_number": 112,
      "question": "Die Wahlen in Deutschland sind …",
      "options": [
        "speziell.",
        "geheim.",
        "berufsbezogen.",
        "geschlechtsabhängig."
      ],
      "answer": "geheim."
    },
    {
      "question_number": 113,
      "question": "Wahlen in Deutschland gewinnt die Partei, die …",
      "options": [
        "die meisten Stimmen bekommt.",
        "die meisten Männer mehrheitlich gewählt haben.",
        "die meisten Stimmen bei den Arbeitern / Arbeiterinnen bekommen hat.",
        "die meisten Erststimmen für ihren Kanzlerkandidaten / ihre Kanzlerkandidatin erhalten hat."
      ],
      "answer": "die meisten Stimmen bekommt."
    },
    {
      "question_number": 114,
      "question": "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
      "options": ["eine Pflicht.", "ein Recht.", "ein Zwang.", "eine Last."],
      "answer": "ein Recht."
    },
    {
      "question_number": 115,
      "question": "Was bedeutet „aktives Wahlrecht“ in Deutschland?",
      "options": [
        "Man kann gewählt werden.",
        "Man muss wählen gehen.",
        "Man kann wählen.",
        "Man muss zur Auszählung der Stimmen gehen."
      ],
      "answer": "Man kann wählen."
    },
    {
      "question_number": 116,
      "question":
          "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …",
      "options": [
        "aktive Wahlkampagne.",
        "aktives Wahlverfahren.",
        "aktiver Wahlkampf.",
        "aktives Wahlrecht."
      ],
      "answer": "aktives Wahlrecht."
    },
    {
      "question_number": 117,
      "question":
          "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
      "options": ["3 %", "4 %", "5 %", "6 %"],
      "answer": "5 %"
    },
    {
      "question_number": 118,
      "question": "Was regelt das Wahlrecht in Deutschland?",
      "options": [
        "Wer wählen darf, muss wählen.",
        "Alle die wollen, können wählen.",
        "Wer nicht wählt, verliert das Recht zu wählen.",
        "Wer wählen darf, kann wählen."
      ],
      "answer": "Wer wählen darf, kann wählen."
    },
    {
      "question_number": 119,
      "question": "Wahlen in Deutschland sind frei. Was bedeutet das?",
      "options": [
        "Alle verurteilten Straftäter / Straftäterinnen dürfen nicht wählen.",
        "Wenn ich wählen gehen möchte, muss mein Arbeitgeber / meine Arbeitgeberin mir frei geben.",
        "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.",
        "Ich kann frei entscheiden, wo ich wählen gehen möchte."
      ],
      "answer":
          "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte."
    },
    {
      "question_number": 120,
      "question": "Das Wahlsystem in Deutschland ist ein …",
      "options": [
        "Zensuswahlrecht.",
        "Dreiklassenwahlrecht.",
        "Mehrheits- und Verhältniswahlrecht.",
        "allgemeines Männerwahlrecht."
      ],
      "answer": "Mehrheits- und Verhältniswahlrecht."
    },
    {
      "question_number": 121,
      "question":
          "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …",
      "options": [
        "5 %-Hürde.",
        "Zulassungsgrenze.",
        "Basiswert.",
        "Richtlinie."
      ],
      "answer": "5 %-Hürde."
    },
    {
      "question_number": 122,
      "question":
          "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …",
      "options": [
        "frei, gleich, geheim.",
        "offen, sicher, frei.",
        "geschlossen, gleich, sicher.",
        "sicher, offen, freiwillig."
      ],
      "answer": "frei, gleich, geheim."
    },
    {
      "question_number": 123,
      "question": "Was ist in Deutschland die „5 %-Hürde“?",
      "options": [
        "Abstimmungsregelung im Bundestag für kleine Parteien",
        "Anwesenheitskontrolle im Bundestag für Abstimmungen",
        "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen",
        "Anwesenheitskontrolle im Bundesrat für Abstimmungen"
      ],
      "answer": "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen"
    },
    {
      "question_number": 124,
      "question": "Die Bundestagswahl in Deutschland ist die Wahl …",
      "options": [
        "des Bundeskanzlers / der Bundeskanzlerin.",
        "der Parlamente der Länder.",
        "des Parlaments für Deutschland.",
        "des Bundespräsidenten / der Bundespräsidentin."
      ],
      "answer": "des Parlaments für Deutschland."
    },
    {
      "question_number": 125,
      "question":
          "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …",
      "options": [
        "die Bürger und Bürgerinnen zu zwingen, ihre Stimme abzugeben.",
        "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.",
        "im Land bestehende Gesetze beizubehalten.",
        "den Armen mehr Macht zu geben."
      ],
      "answer":
          "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen."
    },
    {
      "question_number": 126,
      "question":
          "Was bekommen wahlberechtigte Bürger und Bürgerinnen in Deutschland vor einer Wahl?",
      "options": [
        "eine Wahlbenachrichtigung von der Gemeinde",
        "eine Wahlerlaubnis vom Bundespräsidenten / von der Bundespräsidentin",
        "eine Benachrichtigung von der Bundesversammlung",
        "eine Benachrichtigung vom Pfarramt"
      ],
      "answer": "eine Wahlbenachrichtigung von der Gemeinde"
    },
    {
      "question_number": 127,
      "question":
          "Warum gibt es die 5 %-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …",
      "options": [
        "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.",
        "die Bürger und Bürgerinnen bei vielen kleinen Parteien die Orientierung verlieren können.",
        "viele kleine Parteien die Regierungsbildung erschweren.",
        "die kleinen Parteien nicht so viel Geld haben, um die Politiker und Politikerinnen zu bezahlen."
      ],
      "answer": "viele kleine Parteien die Regierungsbildung erschweren."
    },
    {
      "question_number": 128,
      "question":
          "Parlamentsmitglieder, die von den Bürgern und Bürgerinnen gewählt werden, nennt man …",
      "options": [
        "Abgeordnete.",
        "Kanzler / Kanzlerinnen.",
        "Botschafter / Botschafterinnen.",
        "Ministerpräsidenten / Ministerpräsidentinnen."
      ],
      "answer": "Abgeordnete."
    },
    {
      "question_number": 129,
      "question": "Vom Volk gewählt wird in Deutschland …",
      "options": [
        "der Bundeskanzler / die Bundeskanzlerin.",
        "der Ministerpräsident / die Ministerpräsidentin eines Bundeslandes.",
        "der Bundestag.",
        "der Bundespräsident / die Bundespräsidentin."
      ],
      "answer": "der Bundestag."
    },
    {
      "question_number": 130,
      "question": "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/rud7gtsj58q5/130.png",
      "options": ["1", "2", "3", "4"],
      "answer": "1"
    },
    {
      "question_number": 131,
      "question":
          "In Deutschland ist ein Bürgermeister / eine Bürgermeisterin …",
      "options": [
        "der Leiter / die Leiterin einer Schule.",
        "der Chef / die Chefin einer Bank.",
        "das Oberhaupt einer Gemeinde.",
        "der / die Vorsitzende einer Partei."
      ],
      "answer": "das Oberhaupt einer Gemeinde."
    },
    {
      "question_number": 132,
      "question":
          "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?",
      "options": [
        "Sie arbeiten als Soldaten / Soldatinnen.",
        "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.",
        "Sie arbeiten in der Bundesregierung.",
        "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld."
      ],
      "answer":
          "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden."
    },
    {
      "question_number": 133,
      "question":
          "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
      "options": [
        "Der Ehemann wählt für seine Frau mit.",
        "Man kann durch Briefwahl seine Stimme abgeben.",
        "Man kann am Wahltag telefonisch seine Stimme abgeben.",
        "Kinder ab dem Alter von 14 Jahren dürfen wählen."
      ],
      "answer": "Man kann durch Briefwahl seine Stimme abgeben."
    },
    {
      "question_number": 134,
      "question":
          "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
      "options": [
        "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.",
        "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.",
        "Ich wende mich an das Finanzamt, weil ich als Steuerzahler / Steuerzahlerin ein Recht auf die Buslinie habe.",
        "Ich schreibe einen Brief an das Forstamt der Gemeinde."
      ],
      "answer":
          "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative."
    },
    {
      "question_number": 135,
      "question": "Wen vertreten die Gewerkschaften in Deutschland?",
      "options": [
        "große Unternehmen",
        "kleine Unternehmen",
        "Selbständige",
        "Arbeitnehmer und Arbeitnehmerinnen"
      ],
      "answer": "Arbeitnehmer und Arbeitnehmerinnen"
    },
    {
      "question_number": 136,
      "question": "Sie gehen in Deutschland zum Arbeitsgericht bei …",
      "options": [
        "falscher Nebenkostenabrechnung.",
        "ungerechtfertigter Kündigung durch Ihren Chef / Ihre Chefin.",
        "Problemen mit den Nachbarn / Nachbarinnen.",
        "Schwierigkeiten nach einem Verkehrsunfall."
      ],
      "answer": "ungerechtfertigter Kündigung durch Ihren Chef / Ihre Chefin."
    },
    {
      "question_number": 137,
      "question":
          "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?",
      "options": [
        "das Familiengericht",
        "das Strafgericht",
        "das Arbeitsgericht",
        "das Amtsgericht"
      ],
      "answer": "das Arbeitsgericht"
    },
    {
      "question_number": 138,
      "question":
          "Was kann ich in Deutschland machen, wenn mir mein Arbeitgeber / meine Arbeitgeberin zu Unrecht gekündigt hat?",
      "options": [
        "weiter arbeiten und freundlich zum Chef / zur Chefin sein",
        "ein Mahnverfahren gegen den Arbeitgeber / die Arbeitgeberin führen",
        "Kündigungsschutzklage erheben",
        "den Arbeitgeber / die Arbeitgeberin bei der Polizei anzeigen"
      ],
      "answer": "Kündigungsschutzklage erheben"
    },
    {
      "question_number": 139,
      "question":
          "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …",
      "options": [
        "zu einer anderen Religion übertritt.",
        "eine Straftat begangen hat und angeklagt wird.",
        "eine andere Meinung als die der Regierung vertritt.",
        "sein Auto falsch geparkt hat und es abgeschleppt wird."
      ],
      "answer": "eine Straftat begangen hat und angeklagt wird."
    },
    {
      "question_number": 140,
      "question":
          "Was macht ein Schöffe / eine Schöffin in Deutschland? Er / Sie …",
      "options": [
        "entscheidet mit Richtern / Richterinnen über Schuld und Strafe.",
        "gibt Bürgern / Bürgerinnen rechtlichen Rat.",
        "stellt Urkunden aus.",
        "verteidigt den Angeklagten / die Angeklagte."
      ],
      "answer":
          "entscheidet mit Richtern / Richterinnen über Schuld und Strafe."
    },
    {
      "question_number": 141,
      "question":
          "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?",
      "options": [
        "ein Rechtsanwalt / eine Rechtsanwältin",
        "ein Richter / eine Richterin",
        "ein Schöffe / eine Schöffin",
        "ein Staatsanwalt / eine Staatsanwältin"
      ],
      "answer": "ein Rechtsanwalt / eine Rechtsanwältin"
    },
    {
      "question_number": 142,
      "question":
          "Was ist die Hauptaufgabe eines Richters / einer Richterin in Deutschland? Ein Richter / eine Richterin …",
      "options": [
        "vertritt Bürger und Bürgerinnen vor einem Gericht.",
        "arbeitet an einem Gericht und spricht Urteile.",
        "ändert Gesetze.",
        "betreut Jugendliche vor Gericht."
      ],
      "answer": "arbeitet an einem Gericht und spricht Urteile."
    },
    {
      "question_number": 143,
      "question": "Ein Richter / eine Richterin in Deutschland gehört zur …",
      "options": ["Judikative.", "Exekutive.", "Operative.", "Legislative."],
      "answer": "Judikative."
    },
    {
      "question_number": 144,
      "question": "Ein Richter / eine Richterin gehört in Deutschland zur …",
      "options": [
        "vollziehenden Gewalt.",
        "rechtsprechenden Gewalt.",
        "planenden Gewalt.",
        "gesetzgebenden Gewalt."
      ],
      "answer": "rechtsprechenden Gewalt."
    },
    {
      "question_number": 145,
      "question":
          "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet ein Richter / eine Richterin? Für die …",
      "options": ["Judikative.", "Exekutive.", "Presse.", "Legislative."],
      "answer": "Judikative."
    },
    {
      "question_number": 146,
      "question":
          "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?",
      "options": ["Programm", "Prozedur", "Protokoll", "Prozess"],
      "answer": "Prozess"
    },
    {
      "question_number": 147,
      "question":
          "Was ist die Arbeit eines Richters / einer Richterin in Deutschland?",
      "options": [
        "Deutschland regieren",
        "Recht sprechen",
        "Pläne erstellen",
        "Gesetze erlassen"
      ],
      "answer": "Recht sprechen"
    },
    {
      "question_number": 148,
      "question": "Was ist eine Aufgabe der Polizei in Deutschland?",
      "options": [
        "das Land zu verteidigen",
        "die Bürgerinnen und Bürger abzuhören",
        "die Gesetze zu beschließen",
        "die Einhaltung von Gesetzen zu überwachen"
      ],
      "answer": "die Einhaltung von Gesetzen zu überwachen"
    },
    {
      "question_number": 149,
      "question":
          "Wer kann Gerichtsschöffe / Gerichtsschöffin in Deutschland werden?",
      "options": [
        "alle in Deutschland geborenen Einwohner / Einwohnerinnen über 18 Jahre",
        "alle deutschen Staatsangehörigen älter als 24 und jünger als 70 Jahre",
        "alle Personen, die seit mindestens 5 Jahren in Deutschland leben",
        "nur Personen mit einem abgeschlossenen Jurastudium"
      ],
      "answer":
          "alle deutschen Staatsangehörigen älter als 24 und jünger als 70 Jahre"
    },
    {
      "question_number": 150,
      "question":
          "Ein Gerichtsschöffe / eine Gerichtsschöffin in Deutschland ist …",
      "options": [
        "der Stellvertreter / die Stellvertreterin des Stadtoberhaupts.",
        "ein ehrenamtlicher Richter / eine ehrenamtliche Richterin.",
        "ein Mitglied eines Gemeinderats.",
        "eine Person, die Jura studiert hat."
      ],
      "answer": "ein ehrenamtlicher Richter / eine ehrenamtliche Richterin."
    },
    {
      "question_number": 151,
      "question": "Wer baute die Mauer in Berlin?",
      "options": [
        "Großbritannien",
        "die Bundesrepublik Deutschland",
        "die DDR",
        "die USA"
      ],
      "answer": "die DDR"
    },
    {
      "question_number": 152,
      "question":
          "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?",
      "options": [
        "1918 bis 1923",
        "1932 bis 1950",
        "1933 bis 1945",
        "1945 bis 1989"
      ],
      "answer": "1933 bis 1945"
    },
    {
      "question_number": 153,
      "question": "Was war am 8. Mai 1945?",
      "options": [
        "Tod Adolf Hitlers",
        "Beginn des Berliner Mauerbaus",
        "Wahl von Konrad Adenauer zum Bundeskanzler",
        "Ende des Zweiten Weltkriegs in Europa"
      ],
      "answer": "Ende des Zweiten Weltkriegs in Europa"
    },
    {
      "question_number": 154,
      "question": "Wann war der Zweite Weltkrieg zu Ende?",
      "options": ["1933", "1945", "1949", "1961"],
      "answer": "1945"
    },
    {
      "question_number": 155,
      "question":
          "Wann waren die Nationalsozialisten in Deutschland an der Macht?",
      "options": [
        "1888 bis 1918",
        "1921 bis 1934",
        "1933 bis 1945",
        "1949 bis 1963"
      ],
      "answer": "1933 bis 1945"
    },
    {
      "question_number": 156,
      "question": "In welchem Jahr wurde Hitler Reichskanzler?",
      "options": ["1923", "1927", "1933", "1936"],
      "answer": "1933"
    },
    {
      "question_number": 157,
      "question":
          "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …",
      "options": [
        "eine Diktatur.",
        "einen demokratischen Staat.",
        "eine Monarchie.",
        "ein Fürstentum."
      ],
      "answer": "eine Diktatur."
    },
    {
      "question_number": 158,
      "question": "Das „Dritte Reich“ war eine …",
      "options": ["Diktatur.", "Demokratie.", "Monarchie.", "Räterepublik."],
      "answer": "Diktatur."
    },
    {
      "question_number": 159,
      "question":
          "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?",
      "options": [
        "freie Wahlen",
        "Pressezensur",
        "willkürliche Verhaftungen",
        "Verfolgung der Juden"
      ],
      "answer": "freie Wahlen"
    },
    {
      "question_number": 160,
      "question": "Welcher Krieg dauerte von 1939 bis 1945?",
      "options": [
        "der Erste Weltkrieg",
        "der Zweite Weltkrieg",
        "der Vietnamkrieg",
        "der Golfkrieg"
      ],
      "answer": "der Zweite Weltkrieg"
    },
    {
      "question_number": 161,
      "question": "Was kennzeichnete den NS-Staat? Eine Politik …",
      "options": [
        "des staatlichen Rassismus",
        "der Meinungsfreiheit",
        "der allgemeinen Religionsfreiheit",
        "der Entwicklung der Demokratie"
      ],
      "answer": "des staatlichen Rassismus"
    },
    {
      "question_number": 162,
      "question": "Claus Schenk Graf von Stauffenberg wurde bekannt durch …",
      "options": [
        "eine Goldmedaille bei den Olympischen Spielen 1936.",
        "den Bau des Reichstagsgebäudes.",
        "den Aufbau der Wehrmacht.",
        "das Attentat auf Hitler am 20. Juli 1944."
      ],
      "answer": "das Attentat auf Hitler am 20. Juli 1944."
    },
    {
      "question_number": 163,
      "question":
          "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?",
      "options": ["1925", "1930", "1938", "1945"],
      "answer": "1938"
    },
    {
      "question_number": 164,
      "question": "Was passierte am 9. November 1938 in Deutschland?",
      "options": [
        "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.",
        "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.",
        "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.",
        "Hitler wird Reichspräsident und lässt alle Parteien verbieten."
      ],
      "answer":
          "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört."
    },
    {
      "question_number": 165,
      "question":
          "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
      "options": [
        "Konrad Adenauer",
        "Kurt Georg Kiesinger",
        "Helmut Schmidt",
        "Willy Brandt"
      ],
      "answer": "Konrad Adenauer"
    },
    {
      "question_number": 166,
      "question":
          "Bei welchen Demonstrationen in Deutschland riefen die Menschen „Wir sind das Volk“?",
      "options": [
        "bei den Montagsdemonstrationen 1989 in der DDR",
        "beim Arbeiteraufstand 1953 in der DDR",
        "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland",
        "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland"
      ],
      "answer": "bei den Montagsdemonstrationen 1989 in der DDR"
    },
    {
      "question_number": 167,
      "question":
          "Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als „Alliierte Besatzungsmächte“ bezeichnet?",
      "options": [
        "Sowjetunion, Großbritannien, Polen, Schweden",
        "Frankreich, Sowjetunion, Italien, Japan",
        "USA, Sowjetunion, Spanien, Portugal",
        "USA, Sowjetunion, Großbritannien, Frankreich"
      ],
      "answer": "USA, Sowjetunion, Großbritannien, Frankreich"
    },
    {
      "question_number": 168,
      "question":
          "Welches Land war keine „Alliierte Besatzungsmacht“ in Deutschland?",
      "options": ["USA", "Sowjetunion", "Frankreich", "Japan"],
      "answer": "Japan"
    },
    {
      "question_number": 169,
      "question": "Wann wurde die Bundesrepublik Deutschland gegründet?",
      "options": ["1939", "1945", "1949", "1951"],
      "answer": "1949"
    },
    {
      "question_number": 170,
      "question":
          "Was gab es während der Zeit des Nationalsozialismus in Deutschland?",
      "options": [
        "das Recht zur freien Entfaltung der Persönlichkeit",
        "Pressefreiheit",
        "das Verbot von Parteien",
        "den Schutz der Menschenwürde"
      ],
      "answer": "das Verbot von Parteien"
    },
    {
      "question_number": 171,
      "question": "Soziale Marktwirtschaft bedeutet, die Wirtschaft …",
      "options": [
        "steuert sich allein nach Angebot und Nachfrage.",
        "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.",
        "richtet sich nach der Nachfrage im Ausland.",
        "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich."
      ],
      "answer":
          "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich."
    },
    {
      "question_number": 172,
      "question": "In welcher Besatzungszone wurde die DDR gegründet? In der …",
      "options": [
        "amerikanischen Besatzungszone.",
        "französischen Besatzungszone.",
        "britischen Besatzungszone.",
        "sowjetischen Besatzungszone."
      ],
      "answer": "sowjetischen Besatzungszone."
    },
    {
      "question_number": 173,
      "question": "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …",
      "options": [
        "des Nordatlantikpakts (NATO).",
        "der Vereinten Nationen (VN).",
        "der Europäischen Union (EU).",
        "des Warschauer Pakts."
      ],
      "answer": "der Europäischen Union (EU)."
    },
    {
      "question_number": 174,
      "question": "Wann wurde die DDR gegründet?",
      "options": ["1947", "1949", "1953", "1956"],
      "answer": "1949"
    },
    {
      "question_number": 175,
      "question":
          "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?",
      "options": ["3", "4", "5", "6"],
      "answer": "4"
    },
    {
      "question_number": 176,
      "question":
          "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/abv8nbmk0bnp/176.png",
      "options": [
        "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA",
        "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich",
        "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich",
        "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich"
      ],
      "answer": "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich"
    },
    {
      "question_number": 177,
      "question":
          "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?",
      "options": ["München", "Berlin", "Dresden", "Frankfurt/Oder"],
      "answer": "Berlin"
    },
    {
      "question_number": 178,
      "question":
          "Vom Juni 1948 bis zum Mai 1949 wurden die Bürger und Bürgerinnen von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?",
      "options": [
        "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.",
        "Die amerikanischen Soldaten / Soldatinnen hatten beim Landtransport Angst vor Überfällen.",
        "Für Großbritannien war die Versorgung über die Luftbrücke schneller.",
        "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege."
      ],
      "answer":
          "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege."
    },
    {
      "question_number": 179,
      "question": "Wie endete der Zweite Weltkrieg in Europa offiziell?",
      "options": [
        "mit dem Tod Adolf Hitlers",
        "durch die bedingungslose Kapitulation Deutschlands",
        "mit dem Rückzug der Deutschen aus den besetzten Gebieten",
        "durch eine Revolution in Deutschland"
      ],
      "answer": "durch die bedingungslose Kapitulation Deutschlands"
    },
    {
      "question_number": 180,
      "question":
          "Der erste Bundeskanzler der Bundesrepublik Deutschland war …",
      "options": [
        "Ludwig Erhard.",
        "Willy Brandt.",
        "Konrad Adenauer.",
        "Gerhard Schröder."
      ],
      "answer": "Konrad Adenauer."
    },
    {
      "question_number": 181,
      "question":
          "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/rn7hxw2zb99l/181.png",
      "options": [
        "Er hat sich den ehemaligen Alliierten unterworfen.",
        "Er bat Polen und die polnischen Juden um Vergebung.",
        "Er zeigte seine Demut vor dem Warschauer Pakt.",
        "Er sprach ein Gebet am Grab des Unbekannten Soldaten."
      ],
      "answer": "Er bat Polen und die polnischen Juden um Vergebung."
    },
    {
      "question_number": 182,
      "question":
          "Welche Parteien wurden 1946 zwangsweise zur SED vereint, der Einheitspartei der späteren DDR?",
      "options": ["KPD und SPD", "SPD und CDU", "CDU und FDP", "KPD und CSU"],
      "answer": "KPD und SPD"
    },
    {
      "question_number": 183,
      "question":
          "Wann war in der Bundesrepublik Deutschland das „Wirtschaftswunder“?",
      "options": ["40er Jahre", "50er Jahre", "70er Jahre", "80er Jahre"],
      "answer": "50er Jahre"
    },
    {
      "question_number": 184,
      "question":
          "Was nannten die Menschen in Deutschland sehr lange „Die Stunde Null“?",
      "options": [
        "Damit wird die Zeit nach der Wende im Jahr 1989 bezeichnet.",
        "Damit wurde der Beginn des Zweiten Weltkrieges bezeichnet.",
        "Darunter verstand man das Ende des Zweiten Weltkrieges und den Beginn des Wiederaufbaus.",
        "Damit ist die Stunde gemeint, in der die Uhr von der Sommerzeit auf die Winterzeit umgestellt wird."
      ],
      "answer":
          "Darunter verstand man das Ende des Zweiten Weltkrieges und den Beginn des Wiederaufbaus."
    },
    {
      "question_number": 185,
      "question":
          "Wofür stand der Ausdruck „Eiserner Vorhang“? Für die Abschottung …",
      "options": [
        "des Warschauer Pakts gegen den Westen.",
        "Norddeutschlands gegen Süddeutschland.",
        "Nazi-Deutschlands gegen die Alliierten.",
        "Europas gegen die USA."
      ],
      "answer": "des Warschauer Pakts gegen den Westen."
    },
    {
      "question_number": 186,
      "question":
          "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?",
      "options": ["1. Mai", "17. Juni", "20. Juli", "9. November"],
      "answer": "17. Juni"
    },
    {
      "question_number": 187,
      "question":
          "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/grvehn1eqlir/187.png",
      "options": [
        "Preußen",
        "Bundesrepublik Deutschland",
        "DDR",
        "„Drittes Reich“"
      ],
      "answer": "DDR"
    },
    {
      "question_number": 188,
      "question": "In welchem Jahr wurde die Mauer in Berlin gebaut?",
      "options": ["1953", "1956", "1959", "1961"],
      "answer": "1961"
    },
    {
      "question_number": 189,
      "question": "Wann baute die DDR die Mauer in Berlin?",
      "options": ["1919", "1933", "1961", "1990"],
      "answer": "1961"
    },
    {
      "question_number": 190,
      "question": "Was bedeutet die Abkürzung DDR?",
      "options": [
        "Dritter Deutscher Rundfunk",
        "Die Deutsche Republik",
        "Dritte Deutsche Republik",
        "Deutsche Demokratische Republik"
      ],
      "answer": "Deutsche Demokratische Republik"
    },
    {
      "question_number": 191,
      "question": "Wann wurde die Mauer in Berlin für alle geöffnet?",
      "options": ["1987", "1989", "1992", "1995"],
      "answer": "1989"
    },
    {
      "question_number": 192,
      "question":
          "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "options": ["Brandenburg", "Bayern", "Saarland", "Hessen"],
      "answer": "Brandenburg"
    },
    {
      "question_number": 193,
      "question": "Von 1961 bis 1989 war Berlin …",
      "options": [
        "ohne Bürgermeister.",
        "ein eigener Staat.",
        "durch eine Mauer geteilt.",
        "nur mit dem Flugzeug erreichbar."
      ],
      "answer": "durch eine Mauer geteilt."
    },
    {
      "question_number": 194,
      "question":
          "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …",
      "options": ["Einheit.", "Nation.", "Bundesländer.", "Städte."],
      "answer": "Einheit."
    },
    {
      "question_number": 195,
      "question":
          "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "options": [
        "Hessen",
        "Sachsen-Anhalt",
        "Nordrhein-Westfalen",
        "Saarland"
      ],
      "answer": "Sachsen-Anhalt"
    },
    {
      "question_number": 196,
      "question":
          "Warum nennt man die Zeit im Herbst 1989 in der DDR „Die Wende“? In dieser Zeit veränderte sich die DDR politisch …",
      "options": [
        "von einer Diktatur zur Demokratie.",
        "von einer liberalen Marktwirtschaft zum Sozialismus.",
        "von einer Monarchie zur Sozialdemokratie.",
        "von einem religiösen Staat zu einem kommunistischen Staat."
      ],
      "answer": "von einer Diktatur zur Demokratie."
    },
    {
      "question_number": 197,
      "question":
          "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "options": ["Thüringen", "Hessen", "Bayern", "Bremen"],
      "answer": "Thüringen"
    },
    {
      "question_number": 198,
      "question":
          "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "options": ["Bayern", "Niedersachsen", "Sachsen", "Baden-Württemberg"],
      "answer": "Sachsen"
    },
    {
      "question_number": 199,
      "question": "Mit der Abkürzung „Stasi“ meinte man in der DDR …",
      "options": [
        "das Parlament.",
        "das Ministerium für Staatssicherheit.",
        "eine regierende Partei.",
        "das Ministerium für Volksbildung."
      ],
      "answer": "das Ministerium für Staatssicherheit."
    },
    {
      "question_number": 200,
      "question":
          "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "options": [
        "Hessen",
        "Schleswig-Holstein",
        "Mecklenburg-Vorpommern",
        "Saarland"
      ],
      "answer": "Mecklenburg-Vorpommern"
    },
    {
      "question_number": 201,
      "question":
          "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?",
      "options": [
        "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg",
        "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen",
        "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen",
        "Sachsen, Thüringen, Hessen, Niedersachsen, Brandenburg"
      ],
      "answer":
          "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen"
    },
    {
      "question_number": 202,
      "question": "Zu wem gehörte die DDR im „Kalten Krieg“?",
      "options": [
        "zu den Westmächten",
        "zum Warschauer Pakt",
        "zur NATO",
        "zu den blockfreien Staaten"
      ],
      "answer": "zum Warschauer Pakt"
    },
    {
      "question_number": 203,
      "question": "Wie hieß das Wirtschaftssystem der DDR?",
      "options": [
        "Marktwirtschaft",
        "Planwirtschaft",
        "Angebot und Nachfrage",
        "Kapitalismus"
      ],
      "answer": "Planwirtschaft"
    },
    {
      "question_number": 204,
      "question":
          "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?",
      "options": [
        "Die Bundesrepublik Deutschland hat die DDR besetzt.",
        "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.",
        "Die westlichen Bundesländer sind der DDR beigetreten.",
        "Die DDR hat die Bundesrepublik Deutschland besetzt."
      ],
      "answer":
          "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten."
    },
    {
      "question_number": 205,
      "question":
          "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …",
      "options": [
        "zur Europäischen Union.",
        "zum Warschauer Pakt.",
        "zur OPEC.",
        "zur Europäischen Verteidigungsgemeinschaft."
      ],
      "answer": "zur Europäischen Union."
    },
    {
      "question_number": 206,
      "question":
          "Was bedeutete im Jahr 1989 in Deutschland das Wort „Montagsdemonstration“?",
      "options": [
        "In der Bundesrepublik waren Demonstrationen nur am Montag erlaubt.",
        "Montags waren Demonstrationen gegen das DDR-Regime.",
        "Am ersten Montag im Monat trafen sich in der Bundesrepublik Deutschland Demonstranten.",
        "Montags demonstrierte man in der DDR gegen den Westen."
      ],
      "answer": "Montags waren Demonstrationen gegen das DDR-Regime."
    },
    {
      "question_number": 207,
      "question": "In welchem Militärbündnis war die DDR Mitglied?",
      "options": [
        "in der NATO",
        "im Rheinbund",
        "im Warschauer Pakt",
        "im Europabündnis"
      ],
      "answer": "im Warschauer Pakt"
    },
    {
      "question_number": 208,
      "question": "Was war die „Stasi“?",
      "options": [
        "der Geheimdienst im „Dritten Reich“",
        "eine berühmte deutsche Gedenkstätte",
        "der Geheimdienst der DDR",
        "ein deutscher Sportverein während des Zweiten Weltkrieges"
      ],
      "answer": "der Geheimdienst der DDR"
    },
    {
      "question_number": 209,
      "question":
          "Welches war das Wappen der Deutschen Demokratischen Republik?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/uqifls7s3n8b/209.png",
      "options": ["1", "2", "3", "4"],
      "answer": "4"
    },
    {
      "question_number": 210,
      "question": "Was ereignete sich am 17. Juni 1953 in der DDR?",
      "options": [
        "der feierliche Beitritt zum Warschauer Pakt",
        "landesweite Streiks und ein Volksaufstand",
        "der 1. SED-Parteitag",
        "der erste Besuch Fidel Castros"
      ],
      "answer": "landesweite Streiks und ein Volksaufstand"
    },
    {
      "question_number": 211,
      "question": "Welcher Politiker steht für die „Ostverträge“?",
      "options": [
        "Helmut Kohl",
        "Willy Brandt",
        "Michail Gorbatschow",
        "Ludwig Erhard"
      ],
      "answer": "Willy Brandt"
    },
    {
      "question_number": 212,
      "question": "Wie heißt Deutschland mit vollem Namen?",
      "options": [
        "Bundesstaat Deutschland",
        "Bundesländer Deutschland",
        "Bundesrepublik Deutschland",
        "Bundesbezirk Deutschland"
      ],
      "answer": "Bundesrepublik Deutschland"
    },
    {
      "question_number": 213,
      "question": "Wie viele Einwohner hat Deutschland?",
      "options": [
        "70 Millionen",
        "78 Millionen",
        "83 Millionen",
        "90 Millionen"
      ],
      "answer": "83 Millionen"
    },
    {
      "question_number": 214,
      "question": "Welche Farben hat die deutsche Flagge?",
      "options": [
        "schwarz-rot-gold",
        "rot-weiß-schwarz",
        "schwarz-rot-grün",
        "schwarz-gelb-rot"
      ],
      "answer": "schwarz-rot-gold"
    },
    {
      "question_number": 215,
      "question": "Wer wird als „Kanzler der Deutschen Einheit“ bezeichnet?",
      "options": [
        "Gerhard Schröder",
        "Helmut Kohl",
        "Konrad Adenauer",
        "Helmut Schmidt"
      ],
      "answer": "Helmut Kohl"
    },
    {
      "question_number": 216,
      "question":
          "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?",
      "image": "/images/216.png",
      "options": [
        "Eine Aufnahme im Plenarsaal des Deutschen Bundestages. Im Hintergrund sieht man das hier gefragte Symbol.",
        "die Fahne der Stadt Berlin",
        "der Bundesadler",
        "der Reichsadler",
        "die Reichskrone"
      ],
      "answer": "der Bundesadler"
    },
    {
      "question_number": 217,
      "question":
          "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?",
      "options": [
        "1919 bis 1927",
        "1933 bis 1945",
        "1949 bis 1990",
        "1945 bis 1961"
      ],
      "answer": "1949 bis 1990"
    },
    {
      "question_number": 218,
      "question":
          "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?",
      "options": ["4", "5", "6", "7"],
      "answer": "5"
    },
    {
      "question_number": 219,
      "question":
          "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …",
      "options": ["1933.", "1949.", "1971.", "1990."],
      "answer": "1990."
    },
    {
      "question_number": 220,
      "question":
          "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?",
      "options": [
        "an das Ende des Zweiten Weltkrieges",
        "an die Verabschiedung des Grundgesetzes",
        "an die Wiedervereinigung Deutschlands",
        "an die Opfer des Nationalsozialismus"
      ],
      "answer": "an die Opfer des Nationalsozialismus"
    },
    {
      "question_number": 221,
      "question":
          "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?",
      "options": [
        "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.",
        "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.",
        "Deutsche können ohne Passkontrolle in jedes Land reisen.",
        "Deutsche können in jedem Land mit dem Euro bezahlen."
      ],
      "answer":
          "Deutsche können in viele Länder Europas ohne Passkontrolle reisen."
    },
    {
      "question_number": 222,
      "question": "Welches Land ist ein Nachbarland von Deutschland?",
      "options": ["Ungarn", "Portugal", "Spanien", "Schweiz"],
      "answer": "Schweiz"
    },
    {
      "question_number": 223,
      "question": "Welches Land ist ein Nachbarland von Deutschland?",
      "options": ["Rumänien", "Bulgarien", "Polen", "Griechenland"],
      "answer": "Polen"
    },
    {
      "question_number": 224,
      "question": "Was bedeutet die Abkürzung EU?",
      "options": [
        "Europäische Unternehmen",
        "Europäische Union",
        "Einheitliche Union",
        "Euro Union"
      ],
      "answer": "Europäische Union"
    },
    {
      "question_number": 225,
      "question":
          "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?",
      "options": ["Tschechien", "Norwegen", "Spanien", "Österreich"],
      "answer": "Österreich"
    },
    {
      "question_number": 226,
      "question": "Welche ist die Flagge der Europäischen Union?",
      "image":
          "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/7yqmet8r7mjy/226.png",
      "options": ["2", "1", "4", "3"],
      "answer": "2"
    },
    {
      "question_number": 227,
      "question": "Welches Land ist ein Nachbarland von Deutschland?",
      "options": ["Finnland", "Dänemark", "Norwegen", "Schweden"],
      "answer": "Dänemark"
    },
    {
      "question_number": 228,
      "question":
          "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?",
      "options": [
        "NATO-Osterweiterung",
        "EU-Osterweiterung",
        "Europäische Gemeinschaft",
        "Deutsche Wiedervereinigung"
      ],
      "answer": "Deutsche Wiedervereinigung"
    },
    {
      "question_number": 229,
      "question": "Welches Land ist ein Nachbarland von Deutschland?",
      "options": ["Spanien", "Bulgarien", "Norwegen", "Luxemburg"],
      "answer": "Luxemburg"
    },
    {
      "question_number": 230,
      "question":
          "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …",
      "options": ["5 Jahre.", "6 Jahre.", "7 Jahre.", "8 Jahre."],
      "answer": "5 Jahre."
    },
    {
      "question_number": 231,
      "question": "Was bedeutet der Begriff „europäische Integration“?",
      "options": [
        "Damit sind amerikanische Einwanderer in Europa gemeint.",
        "Der Begriff meint den Einwanderungsstopp nach Europa.",
        "Damit sind europäische Auswanderer in den USA gemeint.",
        "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU."
      ],
      "answer":
          "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU."
    },
    {
      "question_number": 232,
      "question": "Wer wird bei der Europawahl gewählt?",
      "options": [
        "die Europäische Kommission",
        "die Länder, die in die EU eintreten dürfen",
        "die europäische Verfassung",
        "die Abgeordneten des Europäischen Parlaments"
      ],
      "answer": "die Abgeordneten des Europäischen Parlaments"
    },
    {
      "question_number": 233,
      "question": "Welches Land ist ein Nachbarland von Deutschland?",
      "options": ["Tschechien", "Bulgarien", "Griechenland", "Portugal"],
      "answer": "Tschechien"
    },
    {
      "question_number": 234,
      "question": "Wo ist der Sitz des Europäischen Parlaments?",
      "options": ["London", "Paris", "Berlin", "Straßburg"],
      "answer": "Straßburg"
    },
    {
      "question_number": 235,
      "question":
          "Der französische Staatspräsident François Mitterrand und der deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?",
      "options": [
        "Freundschaft zwischen England und Deutschland",
        "Reisefreiheit in alle Länder der EU",
        "Frieden und Sicherheit in den Ländern der EU",
        "Einheitliche Feiertage in den Ländern der EU"
      ],
      "answer": "Frieden und Sicherheit in den Ländern der EU"
    },
    {
      "question_number": 236,
      "question": "Wie viele Mitgliedstaaten hat die EU heute?",
      "options": ["21", "23", "25", "27"],
      "answer": "27"
    },
    {
      "question_number": 237,
      "question":
          "2007 wurde das 50-jährige Jubiläum der „Römischen Verträge“ gefeiert. Was war der Inhalt der Verträge?",
      "options": [
        "Beitritt Deutschlands zur NATO",
        "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)",
        "Verpflichtung Deutschlands zu Reparationsleistungen",
        "Festlegung der Oder-Neiße-Linie als Ostgrenze"
      ],
      "answer": "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)"
    },
    {
      "question_number": 238,
      "question": "An welchen Orten arbeitet das Europäische Parlament?",
      "options": [
        "Paris, London und Den Haag",
        "Straßburg, Luxemburg und Brüssel",
        "Rom, Bern und Wien",
        "Bonn, Zürich und Mailand"
      ],
      "answer": "Straßburg, Luxemburg und Brüssel"
    },
    {
      "question_number": 239,
      "question":
          "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?",
      "options": [
        "durch die „Hamburger Verträge“",
        "durch die „Römischen Verträge“",
        "durch die „Pariser Verträge“",
        "durch die „Londoner Verträge“"
      ],
      "answer": "durch die „Römischen Verträge“"
    },
    {
      "question_number": 240,
      "question": "Seit wann bezahlt man in Deutschland mit dem Euro in bar?",
      "options": ["1995", "1998", "2002", "2005"],
      "answer": "2002"
    },
    {
      "question_number": 241,
      "question":
          "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?",
      "options": [
        "Sie muss an ihre Krankenkasse schreiben.",
        "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.",
        "Sie muss einen Antrag bei der Elterngeldstelle stellen.",
        "Sie muss das Arbeitsamt um Erlaubnis bitten."
      ],
      "answer": "Sie muss einen Antrag bei der Elterngeldstelle stellen."
    },
    {
      "question_number": 242,
      "question":
          "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?",
      "options": [
        "der Staat",
        "die Bundesländer",
        "die Eltern / die Erziehungsberechtigten",
        "die Schulen"
      ],
      "answer": "die Eltern / die Erziehungsberechtigten"
    },
    {
      "question_number": 243,
      "question":
          "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?",
      "options": [
        "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.",
        "Sie müssen die Demonstration anmelden.",
        "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.",
        "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen."
      ],
      "answer": "Sie müssen die Demonstration anmelden."
    },
    {
      "question_number": 244,
      "question":
          "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?",
      "options": [
        "das Abitur",
        "ein Diplom",
        "die Prokura",
        "eine Gesellenprüfung"
      ],
      "answer": "das Abitur"
    },
    {
      "question_number": 245,
      "question": "Wer darf in Deutschland nicht als Paar zusammenleben?",
      "options": [
        "Hans (20 Jahre) und Marie (19 Jahre)",
        "Tom (20 Jahre) und Klaus (45 Jahre)",
        "Sofie (35 Jahre) und Lisa (40 Jahre)",
        "Anne (13 Jahre) und Tim (25 Jahre)"
      ],
      "answer": "Anne (13 Jahre) und Tim (25 Jahre)"
    },
    {
      "question_number": 246,
      "question": "Ab welchem Alter ist man in Deutschland volljährig?",
      "options": ["16", "18", "19", "21"],
      "answer": "18"
    },
    {
      "question_number": 247,
      "question":
          "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?",
      "options": [
        "Elternzeit",
        "Geburtsvorbereitung",
        "Mutterschutz",
        "Wochenbett"
      ],
      "answer": "Mutterschutz"
    },
    {
      "question_number": 248,
      "question":
          "Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe …",
      "options": [
        "des Staates.",
        "der Eltern.",
        "der Großeltern.",
        "der Schulen."
      ],
      "answer": "der Eltern."
    },
    {
      "question_number": 249,
      "question":
          "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?",
      "options": ["der Staat", "die Eltern", "die Verwandten", "die Schulen"],
      "answer": "die Eltern"
    },
    {
      "question_number": 250,
      "question":
          "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …",
      "options": [
        "katholisch ist.",
        "gut ausgebildet ist.",
        "eine Frau ist.",
        "Mitglied einer Partei ist."
      ],
      "answer": "gut ausgebildet ist."
    },
    {
      "question_number": 251,
      "question": "Wenn man in Deutschland ein Kind schlägt, …",
      "options": [
        "geht das niemanden etwas an.",
        "geht das nur die Familie etwas an.",
        "kann man dafür nicht bestraft werden.",
        "kann man dafür bestraft werden."
      ],
      "answer": "kann man dafür bestraft werden."
    },
    {
      "question_number": 252,
      "question": "In Deutschland …",
      "options": [
        "darf man zur gleichen Zeit nur mit einem Partner / einer Partnerin verheiratet sein.",
        "kann man mehrere Ehepartner / Ehepartnerinnen gleichzeitig haben.",
        "darf man nicht wieder heiraten, wenn man einmal verheiratet war.",
        "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist."
      ],
      "answer":
          "darf man zur gleichen Zeit nur mit einem Partner / einer Partnerin verheiratet sein."
    },
    {
      "question_number": 253,
      "question":
          "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?",
      "options": [
        "beim Einwohnermeldeamt",
        "beim Standesamt",
        "beim Ordnungsamt",
        "beim Gewerbeamt"
      ],
      "answer": "beim Einwohnermeldeamt"
    },
    {
      "question_number": 254,
      "question":
          "In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das „Trennungsjahr“ einhalten. Was bedeutet das?",
      "options": [
        "Der Scheidungsprozess dauert ein Jahr.",
        "Mann und Frau sind ein Jahr verheiratet, dann ist die Scheidung möglich.",
        "Das Besuchsrecht für die Kinder gilt ein Jahr.",
        "Mann und Frau führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich."
      ],
      "answer":
          "Mann und Frau führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich."
    },
    {
      "question_number": 255,
      "question":
          "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …",
      "options": ["Ordnungsamt.", "Schulamt.", "Jugendamt.", "Gesundheitsamt."],
      "answer": "Jugendamt."
    },
    {
      "question_number": 256,
      "question":
          "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?",
      "options": [
        "eine Erlaubnis der Polizei",
        "eine Genehmigung einer Partei",
        "eine Genehmigung des Einwohnermeldeamts",
        "eine Gaststättenerlaubnis von der zuständigen Behörde"
      ],
      "answer": "eine Gaststättenerlaubnis von der zuständigen Behörde"
    },
    {
      "question_number": 257,
      "question":
          "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …",
      "options": [
        "einer Hochschule.",
        "einem Abendgymnasium.",
        "einer Hauptschule.",
        "einer Privatuniversität."
      ],
      "answer": "einem Abendgymnasium."
    },
    {
      "question_number": 258,
      "question": "Was darf das Jugendamt in Deutschland?",
      "options": [
        "Es entscheidet, welche Schule das Kind besucht.",
        "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.",
        "Es bezahlt das Kindergeld an die Eltern.",
        "Es kontrolliert, ob das Kind einen Kindergarten besucht."
      ],
      "answer":
          "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen."
    },
    {
      "question_number": 259,
      "question":
          "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …",
      "options": [
        "Rentenberechnung.",
        "Lehrstellensuche.",
        "Steuererklärung.",
        "Krankenversicherung."
      ],
      "answer": "Lehrstellensuche."
    },
    {
      "question_number": 260,
      "question": "In Deutschland hat ein Kind in der Schule …",
      "options": [
        "Recht auf unbegrenzte Freizeit.",
        "Wahlfreiheit für alle Fächer.",
        "Anspruch auf Schulgeld.",
        "Anwesenheitspflicht."
      ],
      "answer": "Anwesenheitspflicht."
    },
    {
      "question_number": 261,
      "question":
          "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …",
      "options": [
        "einer Hochschule",
        "einem Abendgymnasium",
        "einer Hauptschule",
        "einer Privatuniversität"
      ],
      "answer": "einem Abendgymnasium"
    },
    {
      "question_number": 262,
      "question":
          "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?",
      "options": [
        "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.",
        "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.",
        "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.",
        "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden."
      ],
      "answer":
          "Niemand darf z.B. wegen einer Behinderung benachteiligt werden."
    },
    {
      "question_number": 263,
      "question":
          "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …",
      "options": [
        "werden bestraft.",
        "werden wie Erwachsene behandelt.",
        "teilen die Strafe mit ihren Eltern.",
        "werden nicht bestraft."
      ],
      "answer": "werden bestraft."
    },
    {
      "question_number": 264,
      "question":
          "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?",
      "options": [
        "am Rosenmontag",
        "am Maifeiertag",
        "beim Oktoberfest",
        "an Pfingsten"
      ],
      "answer": "am Rosenmontag"
    },
    {
      "question_number": 265,
      "question":
          "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?",
      "options": [
        "zum Einwohnermeldeamt",
        "zum Ordnungsamt",
        "zur Agentur für Arbeit",
        "zum Standesamt"
      ],
      "answer": "zum Standesamt"
    },
    {
      "question_number": 266,
      "question": "Wann beginnt die gesetzliche Nachtruhe in Deutschland?",
      "options": [
        "wenn die Sonne untergeht",
        "um 22 Uhr",
        "wenn die Nachbarn schlafen gehen",
        "um 0 Uhr, Mitternacht"
      ],
      "answer": "um 22 Uhr"
    },
    {
      "question_number": 267,
      "question":
          "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?",
      "options": [
        "Sie müssen die Entscheidung der volljährigen Tochter respektieren.",
        "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.",
        "Sie können zur Polizei gehen und die Tochter anzeigen.",
        "Sie suchen einen anderen Mann für die Tochter."
      ],
      "answer":
          "Sie müssen die Entscheidung der volljährigen Tochter respektieren."
    },
    {
      "question_number": 268,
      "question":
          "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?",
      "options": [
        "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.",
        "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.",
        "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.",
        "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht."
      ],
      "answer":
          "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl."
    },
    {
      "question_number": 269,
      "question":
          "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …",
      "options": [
        "monatliches Taschengeld.",
        "einen Kindergartenplatz.",
        "einen Platz in einem Sportverein.",
        "einen Ferienpass."
      ],
      "answer": "einen Kindergartenplatz."
    },
    {
      "question_number": 270,
      "question": "Die Volkshochschule in Deutschland ist eine Einrichtung …",
      "options": [
        "für den Religionsunterricht.",
        "nur für Jugendliche.",
        "zur Weiterbildung.",
        "nur für Rentner und Rentnerinnen."
      ],
      "answer": "zur Weiterbildung."
    },
    {
      "question_number": 271,
      "question": "Was ist in Deutschland ein Brauch zu Weihnachten?",
      "options": [
        "bunte Eier verstecken",
        "einen Tannenbaum schmücken",
        "sich mit Masken und Kostümen verkleiden",
        "Kürbisse vor die Tür stellen"
      ],
      "answer": "einen Tannenbaum schmücken"
    },
    {
      "question_number": 272,
      "question": "Welche Lebensform ist in Deutschland nicht erlaubt?",
      "options": [
        "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.",
        "Zwei Frauen leben zusammen.",
        "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.",
        "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet."
      ],
      "answer": "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet."
    },
    {
      "question_number": 273,
      "question": "Bei Erziehungsproblemen gehen Sie in Deutschland …",
      "options": [
        "zum Arzt / zur Ärztin.",
        "zum Gesundheitsamt.",
        "zum Einwohnermeldeamt.",
        "zum Jugendamt."
      ],
      "answer": "zum Jugendamt."
    },
    {
      "question_number": 274,
      "question":
          "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?",
      "options": [
        "das Schweigerecht",
        "das Briefgeheimnis",
        "die Schweigepflicht",
        "die Meinungsfreiheit"
      ],
      "answer": "das Briefgeheimnis"
    },
    {
      "question_number": 275,
      "question": "Was braucht man in Deutschland für eine Ehescheidung?",
      "options": [
        "die Einwilligung der Eltern",
        "ein Attest eines Arztes / einer Ärztin",
        "die Einwilligung der Kinder",
        "die Unterstützung eines Anwalts / einer Anwältin"
      ],
      "answer": "die Unterstützung eines Anwalts / einer Anwältin"
    },
    {
      "question_number": 276,
      "question":
          "Was sollten Sie tun, wenn Sie von Ihrem Ansprechpartner / Ihrer Ansprechpartnerin in einer deutschen Behörde schlecht behandelt werden?",
      "options": [
        "Ich kann nichts tun.",
        "Ich muss mir diese Behandlung gefallen lassen.",
        "Ich drohe der Person.",
        "Ich kann mich beim Behördenleiter / bei der Behördenleiterin beschweren."
      ],
      "answer":
          "Ich kann mich beim Behördenleiter / bei der Behördenleiterin beschweren."
    },
    {
      "question_number": 277,
      "question":
          "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …",
      "options": [
        "kein Englisch spricht.",
        "zu hohe Gehaltsvorstellungen hat.",
        "keine Erfahrungen in diesem Beruf hat.",
        "Mutter ist."
      ],
      "answer": "Mutter ist."
    },
    {
      "question_number": 278,
      "question":
          "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …",
      "options": [
        "im Rollstuhl sitzt.",
        "keine Erfahrung hat.",
        "zu hohe Gehaltsvorstellungen hat.",
        "kein Englisch spricht."
      ],
      "answer": "im Rollstuhl sitzt."
    },
    {
      "question_number": 279,
      "question":
          "In den meisten Mietshäusern in Deutschland gibt es eine „Hausordnung“. Was steht in einer solchen „Hausordnung“? Sie nennt …",
      "options": [
        "Regeln für die Benutzung öffentlicher Verkehrsmittel.",
        "alle Mieter und Mieterinnen im Haus.",
        "Regeln, an die sich alle Bewohner und Bewohnerinnen halten müssen.",
        "die Adresse des nächsten Ordnungsamtes."
      ],
      "answer":
          "Regeln, an die sich alle Bewohner und Bewohnerinnen halten müssen."
    },
    {
      "question_number": 280,
      "question":
          "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …",
      "options": [
        "nichts machen.",
        "den Bescheid wegwerfen.",
        "Einspruch einlegen.",
        "warten, bis ein anderer Bescheid kommt."
      ],
      "answer": "Einspruch einlegen."
    },
    {
      "question_number": 281,
      "question":
          "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …",
      "options": [
        "Meinungsfreiheit.",
        "Gleichbehandlung.",
        "Versammlungsfreiheit.",
        "Freizügigkeit."
      ],
      "answer": "Gleichbehandlung."
    },
    {
      "question_number": 282,
      "question":
          "Welches Ehrenamt müssen deutsche Staatsbürger / Staatsbürgerinnen übernehmen, wenn sie dazu aufgefordert werden?",
      "options": [
        "Vereinstrainer / Vereinstrainerin",
        "Bibliotheksaufsicht",
        "Wahlhelfer / Wahlhelferin",
        "Lehrer / Lehrerin"
      ],
      "answer": "Wahlhelfer / Wahlhelferin"
    },
    {
      "question_number": 283,
      "question":
          "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?",
      "options": [
        "Ich lasse die Rechnung liegen.",
        "Ich lege Widerspruch bei der Behörde ein.",
        "Ich schicke die Rechnung an die Behörde zurück.",
        "Ich gehe mit der Rechnung zum Finanzamt."
      ],
      "answer": "Ich lege Widerspruch bei der Behörde ein."
    },
    {
      "question_number": 284,
      "question":
          "Was man für die Arbeit können muss, ändert sich in der Zukunft sehr schnell. Was kann man tun?",
      "options": [
        "Es ist egal, was man lernt.",
        "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.",
        "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.",
        "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert."
      ],
      "answer":
          "Erwachsene müssen auch nach der Ausbildung immer weiter lernen."
    },
    {
      "question_number": 285,
      "question":
          "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?",
      "options": [
        "Umsatzsteuer",
        "Lohnsteuer",
        "Beiträge zur Arbeitslosenversicherung",
        "Beiträge zur Renten- und Krankenversicherung"
      ],
      "answer": "Umsatzsteuer"
    },
    {
      "question_number": 286,
      "question":
          "Welche Organisation in einer Firma hilft den Arbeitnehmern und Arbeitnehmerinnen bei Problemen mit dem Arbeitgeber / der Arbeitgeberin?",
      "options": [
        "der Betriebsrat",
        "der Betriebsprüfer / die Betriebsprüferin",
        "die Betriebsgruppe",
        "das Betriebsmanagement"
      ],
      "answer": "der Betriebsrat"
    },
    {
      "question_number": 287,
      "question":
          "Sie möchten bei einer Firma in Deutschland Ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?",
      "options": [
        "die Gehaltszahlungen",
        "die Arbeitszeit",
        "die Kündigungsfrist",
        "die Versicherungspflicht"
      ],
      "answer": "die Kündigungsfrist"
    },
    {
      "question_number": 288,
      "question":
          "Bei welchem Amt muss man in Deutschland in der Regel seinen Hund anmelden?",
      "options": [
        "beim Finanzamt",
        "beim Einwohnermeldeamt",
        "bei der Kommune (Stadt oder Gemeinde)",
        "beim Gesundheitsamt"
      ],
      "answer": "bei der Kommune (Stadt oder Gemeinde)"
    },
    {
      "question_number": 289,
      "question":
          "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …",
      "options": [
        "seine Deutschkenntnisse zu gering sind.",
        "er zu hohe Gehaltsvorstellungen hat.",
        "er eine dunkle Haut hat.",
        "er keine Erfahrungen im Beruf hat."
      ],
      "answer": "er eine dunkle Haut hat."
    },
    {
      "question_number": 290,
      "question":
          "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?",
      "options": [
        "eine Anzeige schreiben",
        "den Fernseher reklamieren",
        "das Gerät ungefragt austauschen",
        "die Garantie verlängern"
      ],
      "answer": "den Fernseher reklamieren"
    },
    {
      "question_number": 291,
      "question":
          "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …",
      "options": [
        "das für die Statistik in Deutschland wichtig ist.",
        "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.",
        "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.",
        "die Kirche für die Steuererklärung verantwortlich ist."
      ],
      "answer":
          "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist."
    },
    {
      "question_number": 292,
      "question":
          "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?",
      "options": [
        "Es dürfen keine Moscheen gebaut werden.",
        "Alle Menschen glauben an Gott.",
        "Jeder kann glauben, was er möchte.",
        "Der Staat entscheidet, an welchen Gott die Menschen glauben."
      ],
      "answer": "Jeder kann glauben, was er möchte."
    },
    {
      "question_number": 293,
      "question": "Was ist in Deutschland ein Brauch an Ostern?",
      "options": [
        "Kürbisse vor die Tür stellen",
        "einen Tannenbaum schmücken",
        "Eier bemalen",
        "Raketen in die Luft schießen"
      ],
      "answer": "Eier bemalen"
    },
    {
      "question_number": 294,
      "question": "Pfingsten ist ein …",
      "options": [
        "christlicher Feiertag.",
        "deutscher Gedenktag.",
        "internationaler Trauertag.",
        "bayerischer Brauch."
      ],
      "answer": "christlicher Feiertag."
    },
    {
      "question_number": 295,
      "question":
          "Welche Religion hat die europäische und deutsche Kultur geprägt?",
      "options": [
        "der Hinduismus",
        "das Christentum",
        "der Buddhismus",
        "der Islam"
      ],
      "answer": "das Christentum"
    },
    {
      "question_number": 296,
      "question":
          "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …",
      "options": [
        "den Buß- und Bettag.",
        "das Erntedankfest.",
        "die Adventszeit.",
        "Allerheiligen."
      ],
      "answer": "die Adventszeit."
    },
    {
      "question_number": 297,
      "question":
          "Aus welchem Land sind die meisten Migranten / Migrantinnen nach Deutschland gekommen?",
      "options": ["Italien", "Polen", "Marokko", "Türkei"],
      "answer": "Türkei"
    },
    {
      "question_number": 298,
      "question": "In der DDR lebten vor allem Migranten aus …",
      "options": [
        "Vietnam, Polen, Mosambik.",
        "Frankreich, Rumänien, Somalia.",
        "Chile, Ungarn, Simbabwe.",
        "Nordkorea, Mexiko, Ägypten."
      ],
      "answer": "Vietnam, Polen, Mosambik."
    },
    {
      "question_number": 299,
      "question":
          "Ausländische Arbeitnehmer und Arbeitnehmerinnen, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …",
      "options": [
        "Schwarzarbeiter / Schwarzarbeiterinnen.",
        "Gastarbeiter / Gastarbeiterinnen.",
        "Zeitarbeiter / Zeitarbeiterinnen.",
        "Schichtarbeiter / Schichtarbeiterinnen."
      ],
      "answer": "Gastarbeiter / Gastarbeiterinnen."
    },
    {
      "question_number": 300,
      "question":
          "Aus welchem Land kamen die ersten Gastarbeiter / Gastarbeiterinnen in die Bundesrepublik Deutschland?",
      "options": ["Italien", "Spanien", "Portugal", "Türkei"],
      "answer": "Italien"
    }
  // ... Добавь все оставшиеся вопросы сюда
];

export const questionsRU: QuestionRU[] = [
{
      "question_number": 1,
      "question":
          "В Германии люди могут открыто высказываться против правительства, потому что …",
      "options": [
        "здесь действует свобода вероисповедания.",
        "люди платят налоги.",
        "у людей есть право голосовать.",
        "здесь действует свобода мнения."
      ],
      "answer": "здесь действует свобода мнения.",
      "keywords": [
        "Meinungsfreiheit - свобода мнения",
        "Religionsfreiheit - свобода вероисповедания",
        "Wahlrecht - право голосовать",
        "Steuern zahlen - платить налоги"
      ]
    },
    {
      "question_number": 2,
      "question":
          "В Германии родители до 14 лет могут решать, будет ли их ребёнок посещать …",
      "options": [
        "уроки истории.",
        "уроки религии.",
        "уроки политики.",
        "уроки языка."
      ],
      "answer": "уроки религии.",
      "keywords": [
        "Religionsunterricht - уроки религии",
        "Geschichtsunterricht - уроки истории",
        "Politikunterricht - уроки политики",
        "Sprachunterricht - уроки языка"
      ]
    },
    {
      "question_number": 3,
      "question": "Германия — это правовое государство. Что это означает?",
      "options": [
        "Все жители и государство должны соблюдать законы.",
        "Государство не обязано соблюдать законы.",
        "Только немцы должны соблюдать законы.",
        "Суды принимают законы."
      ],
      "answer": "Все жители и государство должны соблюдать законы.",
      "keywords": [
        "Rechtsstaat - правовое государство",
        "Gesetze - законы",
        "Gerichte - суды",
        "Einwohner - жители"
      ]
    },
    {
      "question_number": 4,
      "question": "Какое право относится к основным правам в Германии?",
      "options": [
        "право на владение оружием",
        "право силы",
        "свобода мнения",
        "самосуд"
      ],
      "answer": "свобода мнения",
      "keywords": [
        "Grundrechte - основные права",
        "Meinungsfreiheit - свобода мнения",
        "Waffenbesitz - владение оружием",
        "Faustrecht - право силы",
        "Selbstjustiz - самосуд"
      ]
    },
    {
      "question_number": 5,
      "question": "Выборы в Германии свободные. Что это значит?",
      "options": [
        "Можно принимать деньги за голосование за определённого кандидата.",
        "Избирателя нельзя принуждать или оказывать давление при голосовании, и он не должен страдать из-за своего выбора.",
        "Только люди, которые никогда не были в тюрьме, могут голосовать.",
        "Все избиратели обязаны голосовать."
      ],
      "answer":
          "Избирателя нельзя принуждать или оказывать давление при голосовании, и он не должен страдать из-за своего выбора.",
      "keywords": [
        "Wahlen - выборы",
        "frei - свободный",
        "Wähler - избиратель",
        "beeinflussen - влиять",
        "Stimmabgabe - голосование"
      ]
    },
    {
      "question_number": 6,
      "question": "Как называется конституция Германии?",
      "options": [
        "Народный закон",
        "Федеральный закон",
        "Немецкий закон",
        "Основной закон"
      ],
      "answer": "Основной закон",
      "keywords": ["Verfassung - конституция", "Grundgesetz - основной закон"]
    },
    {
      "question_number": 7,
      "question":
          "Какое право гарантируется основной конституцией Германии? Право на …",
      "options": [
        "свободу вероисповедания и совести.",
        "развлечения.",
        "работу.",
        "жильё."
      ],
      "answer": "свободу вероисповедания и совести.",
      "keywords": [
        "Grundrechte - основные права",
        "Glaubensfreiheit - свобода вероисповедания",
        "Gewissensfreiheit - свобода совести",
        "Arbeit - работа",
        "Wohnung - жильё"
      ]
    },
    {
      "question_number": 8,
      "question": "Что не прописано в Основном законе Германии?",
      "options": [
        "Достоинство человека неприкосновенно.",
        "Все должны иметь одинаковое количество денег.",
        "Каждый человек может свободно высказывать своё мнение.",
        "Все равны перед законом."
      ],
      "answer": "Все должны иметь одинаковое количество денег.",
      "keywords": [
        "Grundgesetz - основной закон",
        "Würde des Menschen - достоинство человека",
        "gleich viel Geld - одинаковое количество денег",
        "Meinung sagen - выражать мнение",
        "gleich vor dem Gesetz - равенство перед законом"
      ]
    },
    {
      "question_number": 9,
      "question":
          "Какое основное право действует в Германии только для иностранцев? Право на …",
      "options": [
        "защиту семьи",
        "достоинство человека",
        "убежище",
        "свободу мнения"
      ],
      "answer": "убежище",
      "keywords": [
        "Grundrechte - основные права",
        "Asyl - убежище",
        "Schutz der Familie - защита семьи",
        "Menschenwürde - достоинство человека",
        "Meinungsfreiheit - свобода мнения"
      ]
    },
    {
      "question_number": 10,
      "question": "Что соответствует Основному закону Германии?",
      "options": [
        "телесные наказания",
        "пытки",
        "смертная казнь",
        "денежный штраф"
      ],
      "answer": "денежный штраф",
      "keywords": [
        "Grundgesetz - основной закон",
        "Prügelstrafe - телесные наказания",
        "Folter - пытки",
        "Todesstrafe - смертная казнь",
        "Geldstrafe - денежный штраф"
      ]
    },
    {
      "question_number": 11,
      "question":
          "Как называется конституция Федеративной Республики Германия?",
      "options": [
        "Основной закон",
        "Федеративная конституция",
        "Свод законов",
        "Конституционный договор"
      ],
      "answer": "Основной закон",
      "keywords": [
        "Verfassung - конституция",
        "Bundesrepublik Deutschland - Федеративная Республика Германия",
        "Grundgesetz - основной закон"
      ]
    },
    {
      "question_number": 12,
      "question":
          "Одна партия в Бундестаге хочет отменить свободу печати. Возможно ли это?",
      "options": [
        "Да, если за это проголосует больше половины депутатов Бундестага.",
        "Да, но для этого необходимо две трети голосов депутатов Бундестага.",
        "Нет, потому что свобода печати является основным правом и не может быть отменена.",
        "Нет, потому что только Бундесрат может отменить свободу печати."
      ],
      "answer":
          "Нет, потому что свобода печати является основным правом и не может быть отменена.",
      "keywords": [
        "Partei - партия",
        "Bundestag - Бундестаг",
        "Pressefreiheit - свобода печати",
        "Grundrecht - основное право"
      ]
    },
    {
      "question_number": 13,
      "question": "Что означает термин «оппозиция» в парламенте?",
      "options": [
        "правящие партии.",
        "все депутаты, не принадлежащие к правящей партии / правящим партиям.",
        "фракция с наибольшим количеством депутатов.",
        "все партии, прошедшие 5%-ный барьер на последних выборах."
      ],
      "answer":
          "все депутаты, не принадлежащие к правящей партии / правящим партиям.",
      "keywords": [
        "Parlament - парламент",
        "Opposition - оппозиция",
        "Abgeordnete - депутаты",
        "Regierungspartei - правящая партия"
      ]
    },
    {
      "question_number": 14,
      "question": "Свобода мнения в Германии означает, что я могу …",
      "options": [
        "оскорблять прохожих на улице.",
        "высказывать своё мнение в письмах читателей.",
        "носить нацистские символы.",
        "высказывать мнение только если оно не противоречит правительству."
      ],
      "answer": "высказывать своё мнение в письмах читателей.",
      "keywords": [
        "Meinungsfreiheit - свобода мнения",
        "Leserbriefe - письма читателей",
        "Regierung - правительство"
      ]
    },
    {
      "question_number": 15,
      "question": "Что запрещает Основной закон Германии?",
      "options": [
        "военную службу",
        "принудительный труд",
        "свободу выбора профессии",
        "работу за границей"
      ],
      "answer": "принудительный труд",
      "keywords": [
        "Grundgesetz - основной закон",
        "Zwangsarbeit - принудительный труд",
        "Militärdienst - военная служба",
        "freie Berufswahl - свобода выбора профессии"
      ]
    },
    {
      "question_number": 16,
      "question": "Когда в Германии ограничивается свобода мнения?",
      "options": [
        "при публичном распространении ложных утверждений о частных лицах",
        "при высказываниях о федеральном правительстве",
        "при обсуждениях религий",
        "при критике государства"
      ],
      "answer":
          "при публичном распространении ложных утверждений о частных лицах",
      "keywords": [
        "Meinungsfreiheit - свобода мнения",
        "öffentliche Verbreitung - публичное распространение",
        "falsche Behauptungen - ложные утверждения",
        "einzelne Personen - частные лица"
      ]
    },
    {
      "question_number": 17,
      "question": "Немецкие законы запрещают …",
      "options": [
        "свободу мнения жителей.",
        "петиции граждан.",
        "свободу собраний жителей.",
        "неравное обращение граждан со стороны государства."
      ],
      "answer": "неравное обращение граждан со стороны государства.",
      "keywords": [
        "Gesetze - законы",
        "Ungleichbehandlung - неравное обращение",
        "Bürger - граждане",
        "Staat - государство"
      ]
    },
    {
      "question_number": 18,
      "question":
          "Какое основное право гарантируется в статье 1 Основного закона Германии?",
      "options": [
        "неприкосновенность достоинства человека",
        "право на жизнь",
        "свобода вероисповедания",
        "свобода мнения"
      ],
      "answer": "неприкосновенность достоинства человека",
      "keywords": [
        "Artikel 1 - статья 1",
        "Grundgesetz - основной закон",
        "Menschenwürde - достоинство человека",
        "Unantastbarkeit - неприкосновенность"
      ]
    },
    {
      "question_number": 19,
      "question": "Что означает право на «свободу передвижения» в Германии?",
      "options": [
        "Человек может сам выбирать место жительства.",
        "Можно менять профессию.",
        "Можно выбрать другую религию.",
        "Можно появляться на публике полураздетым."
      ],
      "answer": "Человек может сам выбирать место жительства.",
      "keywords": [
        "Freizügigkeit - свобода передвижения",
        "Wohnort - место жительства",
        "Religion - религия",
        "Beruf wechseln - сменить профессию"
      ]
    },
    {
      "question_number": 20,
      "question":
          "Партия в Германии стремится установить диктатуру. Тогда она …",
      "options": [
        "терпимая.",
        "ориентированная на правовое государство.",
        "законопослушная.",
        "противоречит конституции."
      ],
      "answer": "противоречит конституции.",
      "keywords": [
        "Diktatur - диктатура",
        "verfassungswidrig - противоречащий конституции",
        "rechtsstaatlich - ориентированный на правовое государство",
        "gesetzestreu - законопослушный"
      ]
    },
    {
      "question_number": 21,
      "question":
          "Какой герб является гербом Федеративной Республики Германия?",
      "image": "/images/21.png",
      "options": ["1", "2", "3", "4"],
      "answer": "1",
      "keywords": [
        "Wappen - герб",
        "Bundesrepublik Deutschland - Федеративная Республика Германия"
      ]
    },
    {
      "question_number": 22,
      "question": "Какую форму правления имеет Германия?",
      "options": ["монархия", "диктатура", "республика", "княжество"],
      "answer": "республика",
      "keywords": [
        "Staatsform - форма правления",
        "Republik - республика",
        "Monarchie - монархия",
        "Diktatur - диктатура",
        "Fürstentum - княжество"
      ]
    },
    {
      "question_number": 23,
      "question": "Большинство работающих людей в Германии …",
      "options": [
        "работают в компании или учреждении.",
        "работают в небольших семейных компаниях.",
        "занимаются волонтёрской деятельностью для федеральной земли.",
        "работают на себя с собственной фирмой."
      ],
      "answer": "работают в компании или учреждении.",
      "keywords": [
        "Erwerbstätige - работающие",
        "Firma - компания",
        "Behörde - учреждение",
        "Familienunternehmen - семейная компания",
        "ehrenamtlich - волонтёрский"
      ]
    },
    {
      "question_number": 24,
      "question": "Сколько федеральных земель в Германии?",
      "options": ["14", "15", "16", "17"],
      "answer": "16",
      "keywords": [
        "Bundesländer - федеральные земли",
        "Bundesrepublik Deutschland - Федеративная Республика Германия"
      ]
    },
    {
      "question_number": 25,
      "question": "Что не является федеральной землёй Германии?",
      "options": [
        "Северный Рейн-Вестфалия",
        "Эльзас-Лотарингия",
        "Мекленбург-Передняя Померания",
        "Саксония-Анхальт"
      ],
      "answer": "Эльзас-Лотарингия",
      "keywords": [
        "Bundesland - федеральная земля",
        "Nordrhein-Westfalen - Северный Рейн-Вестфалия",
        "Elsass-Lothringen - Эльзас-Лотарингия",
        "Mecklenburg-Vorpommern - Мекленбург-Передняя Померания",
        "Sachsen-Anhalt - Саксония-Анхальт"
      ]
    },
    {
      "question_number": 26,
      "question": "Германия — это …",
      "options": [
        "коммунистическая республика.",
        "демократическое и социальное федеральное государство.",
        "капиталистическая и социальная монархия.",
        "социальное и социалистическое федеральное государство."
      ],
      "answer": "демократическое и социальное федеральное государство.",
      "keywords": [
        "demokratisch - демократический",
        "sozial - социальный",
        "Bundesstaat - федеральное государство"
      ]
    },
    {
      "question_number": 27,
      "question": "Германия — это …",
      "options": [
        "социалистическое государство.",
        "федеральное государство.",
        "диктатура.",
        "монархия."
      ],
      "answer": "федеральное государство.",
      "keywords": [
        "Bundesstaat - федеральное государство",
        "sozialistisch - социалистический",
        "Diktatur - диктатура",
        "Monarchie - монархия"
      ]
    },
    {
      "question_number": 28,
      "question": "Кто в Германии выбирает депутатов Бундестага?",
      "options": ["армия", "экономика", "избиратели", "администрация"],
      "answer": "избиратели",
      "keywords": [
        "Abgeordnete - депутаты",
        "Bundestag - Бундестаг",
        "wahlberechtigtes Volk - избиратели"
      ]
    },
    {
      "question_number": 29,
      "question":
          "Какое животное является символом Федеративной Республики Германия?",
      "options": ["лев", "орёл", "медведь", "лошадь"],
      "answer": "орёл",
      "keywords": [
        "Wappentier - животное-символ",
        "Adler - орёл",
        "Löwe - лев",
        "Bär - медведь",
        "Pferd - лошадь"
      ]
    },
    {
      "question_number": 30,
      "question": "Что не является признаком нашей демократии?",
      "options": [
        "регулярные выборы",
        "цензура прессы",
        "свобода мнений",
        "различные партии"
      ],
      "answer": "цензура прессы",
      "keywords": [
        "Demokratie - демократия",
        "Merkmal - признак",
        "Pressezensur - цензура прессы",
        "Meinungsfreiheit - свобода мнений",
        "Parteien - партии"
      ]
    },
    {
      "question_number": 31,
      "question":
          "Как называется сотрудничество партий для формирования правительства в Германии?",
      "options": ["единство", "коалиция", "министерство", "фракция"],
      "answer": "коалиция",
      "keywords": [
        "Zusammenarbeit - сотрудничество",
        "Parteien - партии",
        "Regierung - правительство",
        "Koalition - коалиция",
        "Fraktion - фракция"
      ]
    },
    {
      "question_number": 32,
      "question": "Что не является государственной властью в Германии?",
      "options": [
        "законодательная власть",
        "правительство",
        "пресса",
        "правосудие"
      ],
      "answer": "пресса",
      "keywords": [
        "staatliche Gewalt - государственная власть",
        "Gesetzgebung - законодательство",
        "Regierung - правительство",
        "Presse - пресса",
        "Rechtsprechung - правосудие"
      ]
    },
    {
      "question_number": 33,
      "question": "Какое утверждение верно? В Германии ...",
      "options": [
        "государство и религиозные объединения отделены друг от друга.",
        "религиозные объединения формируют государство.",
        "государство зависит от религиозных объединений.",
        "государство и религиозные объединения образуют единство."
      ],
      "answer": "государство и религиозные объединения отделены друг от друга.",
      "keywords": [
        "Staat - государство",
        "Religionsgemeinschaften - религиозные объединения",
        "getrennt - отделены"
      ]
    },
    {
      "question_number": 34,
      "question": "Чем не является Германия?",
      "options": [
        "демократией",
        "правовым государством",
        "монархией",
        "социальным государством"
      ],
      "answer": "монархией",
      "keywords": [
        "Deutschland - Германия",
        "Demokratie - демократия",
        "Rechtsstaat - правовое государство",
        "Monarchie - монархия",
        "Sozialstaat - социальное государство"
      ]
    },
    {
      "question_number": 35,
      "question":
          "Чем финансирует немецкое государство социальное страхование?",
      "options": [
        "церковным налогом",
        "социальными взносами",
        "пожертвованиями",
        "членскими взносами"
      ],
      "answer": "социальными взносами",
      "keywords": [
        "Sozialversicherung - социальное страхование",
        "Sozialabgaben - социальные взносы",
        "Kirchensteuern - церковный налог",
        "Spendengelder - пожертвования",
        "Vereinsbeiträge - членские взносы"
      ]
    },
    {
      "question_number": 36,
      "question": "Какая мера обеспечивает социальную защиту в Германии?",
      "options": [
        "медицинское страхование",
        "автострахование",
        "страхование зданий",
        "страхование гражданской ответственности"
      ],
      "answer": "медицинское страхование",
      "keywords": [
        "soziale Sicherheit - социальная защита",
        "Krankenversicherung - медицинское страхование",
        "Autoversicherung - автострахование",
        "Gebäudeversicherung - страхование зданий",
        "Haftpflichtversicherung - страхование гражданской ответственности"
      ]
    },
    {
      "question_number": 37,
      "question":
          "Как называются главы правительств большинства федеральных земель в Германии?",
      "options": [
        "первый министр / первая министр",
        "премьер-министр / премьер-министрша",
        "сенатор / сенаторша",
        "премьер-министр федеральной земли"
      ],
      "answer": "премьер-министр федеральной земли",
      "keywords": [
        "Regierungschefs - главы правительств",
        "Bundesländer - федеральные земли",
        "Ministerpräsident - премьер-министр федеральной земли"
      ]
    },
    {
      "question_number": 38,
      "question":
          "Федеративная Республика Германия является демократическим и социальным ...",
      "options": [
        "объединением государств",
        "федеративным государством",
        "союзом государств",
        "централизованным государством"
      ],
      "answer": "федеративным государством",
      "keywords": [
        "Bundesrepublik Deutschland - Федеративная Республика Германия",
        "demokratisch - демократический",
        "sozial - социальный",
        "Bundesstaat - федеративное государство"
      ]
    },
    {
      "question_number": 39,
      "question": "Что есть у каждой федеральной земли в Германии?",
      "options": [
        "свой министр иностранных дел",
        "своя валюта",
        "своя армия",
        "свое правительство"
      ],
      "answer": "свое правительство",
      "keywords": [
        "Bundesland - федеральная земля",
        "eigene Regierung - собственное правительство",
        "Außenminister - министр иностранных дел",
        "Währung - валюта",
        "Armee - армия"
      ]
    },
    {
      "question_number": 40,
      "question": "Какими словами начинается немецкий национальный гимн?",
      "options": [
        "Народы, слушайте сигналы...",
        "Единство, право и свобода...",
        "Радость, прекрасная искра богов...",
        "Германия – единая родина..."
      ],
      "answer": "Единство, право и свобода...",
      "keywords": [
        "deutsche Nationalhymne - немецкий национальный гимн",
        "Einigkeit und Recht und Freiheit - единство, право и свобода"
      ]
    },
    {
      "question_number": 41,
      "question": "Почему в демократии существует больше одной партии?",
      "options": [
        "потому что так представляются разные мнения граждан",
        "чтобы ограничить коррупцию в политике",
        "чтобы предотвратить политические демонстрации",
        "чтобы стимулировать экономическую конкуренцию"
      ],
      "answer": "потому что так представляются разные мнения граждан",
      "keywords": [
        "Demokratie - демократия",
        "Partei - партия",
        "Meinungen - мнения",
        "Bürger - граждане"
      ]
    },
    {
      "question_number": 42,
      "question": "Кто принимает новый закон в Германии?",
      "options": ["правительство", "парламент", "суды", "полиция"],
      "answer": "парламент",
      "keywords": [
        "Gesetz - закон",
        "beschließen - принимать",
        "Parlament - парламент",
        "Regierung - правительство"
      ]
    },
    {
      "question_number": 43,
      "question": "Когда в Германии может быть запрещена партия?",
      "options": [
        "если её избирательная кампания слишком дорогая",
        "если она борется против конституции",
        "если она критикует главу государства",
        "если её программа предлагает новое направление"
      ],
      "answer": "если она борется против конституции",
      "keywords": [
        "Partei - партия",
        "verboten - запрещённый",
        "Verfassung - конституция",
        "Wahlkampf - избирательная кампания"
      ]
    },
    {
      "question_number": 44,
      "question": "Кого граждане Германии не могут выбрать напрямую?",
      "options": [
        "депутатов Европарламента",
        "федерального президента",
        "депутатов ландтага",
        "депутатов Бундестага"
      ],
      "answer": "федерального президента",
      "keywords": [
        "wählen - выбирать",
        "Bundespräsident - федеральный президент",
        "Abgeordnete - депутаты",
        "EU-Parlament - Европарламент"
      ]
    },
    {
      "question_number": 45,
      "question": "К какому виду страхования относится страхование по уходу?",
      "options": [
        "социальное страхование",
        "страхование от несчастных случаев",
        "страхование имущества",
        "страхование гражданской ответственности и от пожара"
      ],
      "answer": "социальное страхование",
      "keywords": [
        "Pflegeversicherung - страхование по уходу",
        "Sozialversicherung - социальное страхование",
        "Unfallversicherung - страхование от несчастных случаев",
        "Hausratversicherung - страхование имущества"
      ]
    },
    {
      "question_number": 46,
      "question":
          "Какая задача относится к обязанностям немецкого государства?",
      "options": [
        "строительство дорог и школ",
        "продажа продуктов питания и одежды",
        "бесплатная раздача газет",
        "производство автомобилей и автобусов"
      ],
      "answer": "строительство дорог и школ",
      "keywords": [
        "Aufgaben - задачи",
        "Straßen und Schulen bauen - строить дороги и школы",
        "deutscher Staat - немецкое государство"
      ]
    },
    {
      "question_number": 47,
      "question":
          "Какая задача не относится к обязанностям немецкого государства?",
      "options": [
        "оплата отпусков для всех граждан",
        "выплата детских пособий",
        "поддержка музеев",
        "поддержка спортсменов"
      ],
      "answer": "оплата отпусков для всех граждан",
      "keywords": [
        "Aufgaben - задачи",
        "deutscher Staat - немецкое государство",
        "Urlaubsreisen - отпускные поездки",
        "Kindergeld - детское пособие"
      ]
    },
    {
      "question_number": 48,
      "question": "Какой орган не является конституционным органом Германии?",
      "options": [
        "Бундесрат",
        "Федеральный президент",
        "Собрание граждан",
        "Правительство"
      ],
      "answer": "Собрание граждан",
      "keywords": [
        "Verfassungsorgane - конституционные органы",
        "Bundesrat - Бундесрат",
        "Bundespräsident - федеральный президент",
        "Bürgerversammlung - собрание граждан"
      ]
    },
    {
      "question_number": 49,
      "question": "Кто в Германии определяет политику в области образования?",
      "options": [
        "учителя",
        "федеральные земли",
        "Министерство семьи",
        "университеты"
      ],
      "answer": "федеральные земли",
      "keywords": [
        "Schulpolitik - школьная политика",
        "Bundesländer - федеральные земли",
        "Lehrer - учителя",
        "Familienministerium - Министерство семьи"
      ]
    },
    {
      "question_number": 50,
      "question": "Как называется экономическая система Германии?",
      "options": [
        "свободная централизованная экономика",
        "социальная рыночная экономика",
        "управляемая централизованная экономика",
        "плановая экономика"
      ],
      "answer": "социальная рыночная экономика",
      "keywords": [
        "Wirtschaftsform - экономическая система",
        "soziale Marktwirtschaft - социальная рыночная экономика",
        "Zentralwirtschaft - централизованная экономика",
        "Planwirtschaft - плановая экономика"
      ]
    },
    {
      "question_number": 51,
      "question": "Что не относится к демократическому правовому государству?",
      "options": [
        "Люди могут критиковать правительство.",
        "Граждане могут мирно демонстрировать.",
        "Людей может без причины арестовать частная полиция.",
        "Человек, совершивший преступление, может быть арестован."
      ],
      "answer": "Людей может без причины арестовать частная полиция.",
      "keywords": [
        "demokratischer Rechtsstaat - демократическое правовое государство",
        "Privatpolizei - частная полиция",
        "verhaften - арестовывать",
        "Demonstrationen - демонстрации"
      ]
    },
    {
      "question_number": 52,
      "question":
          "Что означает «народный суверенитет»? Вся государственная власть исходит от …",
      "options": [
        "народа",
        "Бундестага",
        "прусского короля",
        "Федерального конституционного суда"
      ],
      "answer": "народа",
      "keywords": [
        "Volkssouveränität - народный суверенитет",
        "Staatsgewalt - государственная власть",
        "Volk - народ",
        "Bundestag - Бундестаг"
      ]
    },
    {
      "question_number": 53,
      "question": "Что означает «правовое государство» в Германии?",
      "options": [
        "Государство всегда право.",
        "Существуют только правые партии.",
        "Граждане сами решают о законах.",
        "Государство обязано соблюдать законы."
      ],
      "answer": "Государство обязано соблюдать законы.",
      "keywords": [
        "Rechtsstaat - правовое государство",
        "Gesetze einhalten - соблюдать законы",
        "Staat - государство",
        "Parteien - партии"
      ]
    },
    {
      "question_number": 54,
      "question": "Что не является государственной властью в Германии?",
      "options": [
        "законодательная власть",
        "судебная власть",
        "исполнительная власть",
        "директивная власть"
      ],
      "answer": "директивная власть",
      "keywords": [
        "staatliche Gewalt - государственная власть",
        "Legislative - законодательная власть",
        "Judikative - судебная власть",
        "Exekutive - исполнительная власть",
        "Direktive - директивная власть"
      ]
    },
    {
      "question_number": 55,
      "question": "Что изображено на этой картинке?",
      "image": "/images/55.png",
      "options": [
        "здание Бундестага в Берлине",
        "Федеральный конституционный суд в Карлсруэ",
        "здание Бундесрата в Берлине",
        "канцелярия федерального канцлера в Берлине"
      ],
      "answer": "здание Бундестага в Берлине",
      "keywords": [
        "Bild - изображение",
        "Bundestagssitz - здание Бундестага",
        "Karlsruhe - Карлсруэ",
        "Bundesverfassungsgericht - Федеральный конституционный суд",
        "Bundeskanzleramt - канцелярия федерального канцлера"
      ]
    },
    {
      "question_number": 56,
      "question": "Какой орган относится к управлению общиной в Германии?",
      "options": [
        "приходское управление",
        "отдел общественного порядка",
        "налоговая служба",
        "министерство иностранных дел"
      ],
      "answer": "отдел общественного порядка",
      "keywords": [
        "Amt - орган",
        "Gemeindeverwaltung - управление общиной",
        "Ordnungsamt - отдел общественного порядка",
        "Finanzamt - налоговая служба",
        "Auswärtiges Amt - министерство иностранных дел"
      ]
    },
    {
      "question_number": 57,
      "question": "Кто чаще всего избирается президентом Бундестага?",
      "options": [
        "старейший депутат парламента",
        "премьер-министр самой крупной федеральной земли",
        "депутат самой сильной фракции",
        "бывший федеральный канцлер"
      ],
      "answer": "депутат самой сильной фракции",
      "keywords": [
        "Präsident des Bundestages - президент Бундестага",
        "Abgeordneter - депутат",
        "Fraktion - фракция",
        "Bundeskanzler - федеральный канцлер"
      ]
    },
    {
      "question_number": 58,
      "question":
          "Кто в Германии назначает министров федерального правительства?",
      "options": [
        "президент Федерального конституционного суда",
        "федеральный президент",
        "президент Бундесрата",
        "президент Бундестага"
      ],
      "answer": "федеральный президент",
      "keywords": [
        "Minister ernennen - назначать министров",
        "Bundesregierung - федеральное правительство",
        "Bundespräsident - федеральный президент",
        "Bundesverfassungsgericht - Федеральный конституционный суд"
      ]
    },
    {
      "question_number": 59,
      "question": "Какие партии объединились в 2007 году в Германию «Левые»?",
      "options": [
        "ХДС и ССВ",
        "ПДС и ВАСГ",
        "ХСС и СвДП",
        "Союз 90/Зелёные и СДПГ"
      ],
      "answer": "ПДС и ВАСГ",
      "keywords": [
        "Parteien - партии",
        "Die Linke - партия Левые",
        "PDS - ПДС",
        "WASG - ВАСГ"
      ]
    },
    {
      "question_number": 60,
      "question": "К какой ветви власти относятся Бундестаг и Бундесрат?",
      "options": [
        "исполнительной власти",
        "законодательной власти",
        "директивной власти",
        "судебной власти"
      ],
      "answer": "законодательной власти",
      "keywords": [
        "Bundestag - Бундестаг",
        "Bundesrat - Бундесрат",
        "Legislative - законодательная власть",
        "Exekutive - исполнительная власть",
        "Judikative - судебная власть"
      ]
    },
    {
      "question_number": 61,
      "question": "Что означает «народный суверенитет»?",
      "options": [
        "Король / королева правит народом.",
        "Федеральный конституционный суд стоит выше конституции.",
        "Профессиональные объединения управляют вместе с правительством.",
        "Государственная власть исходит от народа."
      ],
      "answer": "Государственная власть исходит от народа.",
      "keywords": [
        "Volkssouveränität - народный суверенитет",
        "Staatsgewalt - государственная власть",
        "Volk - народ"
      ]
    },
    {
      "question_number": 62,
      "question":
          "Как называется выборы парламента федеральной земли в Германии?",
      "options": [
        "выборы в органы местного самоуправления",
        "выборы в ландтаг",
        "выборы в Европарламент",
        "выборы в Бундестаг"
      ],
      "answer": "выборы в ландтаг",
      "keywords": [
        "Landtagswahl - выборы в ландтаг",
        "Parlament - парламент",
        "Bundesland - федеральная земля"
      ]
    },
    {
      "question_number": 63,
      "question": "Что в Германии не относится к исполнительной власти?",
      "options": ["полиция", "суды", "налоговая служба", "министерства"],
      "answer": "суды",
      "keywords": [
        "Exekutive - исполнительная власть",
        "Gerichte - суды",
        "Polizei - полиция",
        "Finanzamt - налоговая служба"
      ]
    },
    {
      "question_number": 64,
      "question":
          "На какие уровни сегодня разделена Федеративная Республика Германия?",
      "options": [
        "четыре оккупационные зоны",
        "восточное и западное государство",
        "16 кантонов",
        "федерация, земли и общины"
      ],
      "answer": "федерация, земли и общины",
      "keywords": ["Bund - федерация", "Länder - земли", "Kommunen - общины"]
    },
    {
      "question_number": 65,
      "question": "Что не входит в обязанности Бундестага Германии?",
      "options": [
        "разработка законов",
        "контроль за федеральным правительством",
        "выбор федерального канцлера",
        "формирование федерального кабинета"
      ],
      "answer": "формирование федерального кабинета",
      "keywords": [
        "Bundestag - Бундестаг",
        "Bundeskabinett - федеральный кабинет",
        "Bundeskanzler - федеральный канцлер",
        "Gesetze entwerfen - разрабатывать законы"
      ]
    },
    {
      "question_number": 66,
      "question": "Кто написал текст немецкого национального гимна?",
      "options": [
        "Фридрих фон Шиллер",
        "Клеменс Брентано",
        "Иоганн Вольфганг фон Гёте",
        "Генрих Хоффманн фон Фаллерслебен"
      ],
      "answer": "Генрих Хоффманн фон Фаллерслебен",
      "keywords": [
        "deutsche Nationalhymne - немецкий национальный гимн",
        "Heinrich Hoffmann von Fallersleben - Генрих Хоффманн фон Фаллерслебен"
      ]
    },
    {
      "question_number": 67,
      "question":
          "Что прежде всего является задачей федеральных земель в Германии?",
      "options": [
        "политика обороны",
        "внешняя политика",
        "экономическая политика",
        "школьная политика"
      ],
      "answer": "школьная политика",
      "keywords": [
        "Bundesländer - федеральные земли",
        "Schulpolitik - школьная политика",
        "Außenpolitik - внешняя политика"
      ]
    },
    {
      "question_number": 68,
      "question":
          "Почему государство в Германии контролирует школьную систему?",
      "options": [
        "потому что в Германии существуют только государственные школы",
        "потому что все ученики должны получить аттестат",
        "потому что в землях разные школы",
        "потому что это его обязанность согласно Основному закону"
      ],
      "answer": "потому что это его обязанность согласно Основному закону",
      "keywords": [
        "Schulwesen - школьная система",
        "Grundgesetz - Основной закон",
        "Staat - государство"
      ]
    },
    {
      "question_number": 69,
      "question":
          "Федеративная Республика Германия имеет трёхступенчатую систему управления. Как называется самый нижний уровень?",
      "options": [
        "городские советы",
        "окружные управляющие",
        "общины",
        "районные управления"
      ],
      "answer": "общины",
      "keywords": [
        "Verwaltungsaufbau - административное устройство",
        "Gemeinden - общины",
        "Bezirksämter - районные управления"
      ]
    },
    {
      "question_number": 70,
      "question": "Что является задачей федерального президента Германии?",
      "options": [
        "он/она ведет дела правительства",
        "он/она контролирует правящую партию",
        "он/она выбирает министров",
        "он/она предлагает кандидата на пост канцлера"
      ],
      "answer": "он/она предлагает кандидата на пост канцлера",
      "keywords": [
        "Bundespräsident - федеральный президент",
        "Bundeskanzler - федеральный канцлер",
        "Ernennungsurkunde - грамота о назначении"
      ]
    },
    {
      "question_number": 71,
      "question": "Где чаще всего находится федеральный канцлер Германии?",
      "options": ["в Бонне", "в Берлине", "в замке Мезеберг", "в замке Бельвю"],
      "answer": "в Берлине",
      "keywords": [
        "Bundeskanzler - федеральный канцлер",
        "Berlin - Берлин",
        "Bundeskanzleramt - канцлерское ведомство"
      ]
    },
    {
      "question_number": 72,
      "question": "Как зовут нынешнего федерального канцлера Германии?",
      "options": [
        "Герхард Шрёдер",
        "Ангела Меркель",
        "Франциска Гиффай",
        "Олаф Шольц"
      ],
      "answer": "Олаф Шольц",
      "keywords": [
        "Bundeskanzler - федеральный канцлер",
        "Olaf Scholz - Олаф Шольц"
      ]
    },
    {
      "question_number": 73,
      "question": "Как называются две крупнейшие фракции в Бундестаге?",
      "options": [
        "ХДС/ХСС и СДПГ",
        "Левые и Союз 90/Зелёные",
        "СвДП и СДПГ",
        "Левые и СвДП"
      ],
      "answer": "ХДС/ХСС и СДПГ",
      "keywords": ["Fraktionen - фракции", "CDU/CSU - ХДС/ХСС", "SPD - СДПГ"]
    },
    {
      "question_number": 74,
      "question": "Как называется парламент всей Германии?",
      "options": [
        "Федеральное собрание",
        "Народная палата",
        "Бундестаг",
        "Федеральный суд"
      ],
      "answer": "Бундестаг",
      "keywords": [
        "Parlament - парламент",
        "Bundestag - Бундестаг",
        "Bundesversammlung - Федеральное собрание"
      ]
    },
    {
      "question_number": 75,
      "question": "Как зовут нынешнего главу государства Германии?",
      "options": [
        "Франк-Вальтер Штайнмайер",
        "Бэрбель Бас",
        "Бодо Рамелов",
        "Йоахим Гаук"
      ],
      "answer": "Франк-Вальтер Штайнмайер",
      "keywords": [
        "Staatsoberhaupt - глава государства",
        "Frank-Walter Steinmeier - Франк-Вальтер Штайнмайер"
      ]
    },
    {
      "question_number": 76,
      "question": "Что означает аббревиатура CDU в Германии?",
      "options": [
        "Христианский Германский Союз",
        "Клуб немецких предпринимателей",
        "Христианская германская защита окружающей среды",
        "Христианско-демократический союз"
      ],
      "answer": "Христианско-демократический союз",
      "keywords": [
        "CDU - Христианско-демократический союз",
        "Christlich Demokratische Union - Христианско-демократический союз"
      ]
    },
    {
      "question_number": 77,
      "question": "Что такое Бундесвер?",
      "options": [
        "немецкая полиция",
        "немецкий порт",
        "немецкая гражданская инициатива",
        "немецкая армия"
      ],
      "answer": "немецкая армия",
      "keywords": ["Bundeswehr - Бундесвер", "deutsche Armee - немецкая армия"]
    },
    {
      "question_number": 78,
      "question": "Что означает аббревиатура SPD?",
      "options": [
        "Социалистическая партия Германии",
        "Социально-политическая партия Германии",
        "Социал-демократическая партия Германии",
        "Социально-справедливая партия Германии"
      ],
      "answer": "Социал-демократическая партия Германии",
      "keywords": [
        "SPD - Социал-демократическая партия Германии",
        "Sozialdemokratische Partei Deutschlands - Социал-демократическая партия Германии"
      ]
    },
    {
      "question_number": 79,
      "question": "Что означает аббревиатура FDP?",
      "options": [
        "Мирная демонстративная партия",
        "Партия свободной Германии",
        "Лидирующая демократическая партия",
        "Свободная демократическая партия"
      ],
      "answer": "Свободная демократическая партия",
      "keywords": [
        "FDP - Свободная демократическая партия",
        "Freie Demokratische Partei - Свободная демократическая партия"
      ]
    },
    {
      "question_number": 80,
      "question":
          "Какой суд в Германии отвечает за толкование Основного закона?",
      "options": [
        "Верховный земельный суд",
        "Участковый суд",
        "Федеральный конституционный суд",
        "Административный суд"
      ],
      "answer": "Федеральный конституционный суд",
      "keywords": [
        "Grundgesetz - Основной закон",
        "Bundesverfassungsgericht - Федеральный конституционный суд"
      ]
    },
    {
      "question_number": 81,
      "question": "Кто выбирает федерального канцлера Германии?",
      "options": [
        "Федеральный совет",
        "Федеральное собрание",
        "народ",
        "Бундестаг"
      ],
      "answer": "Бундестаг",
      "keywords": [
        "Bundeskanzler - федеральный канцлер",
        "Bundestag - Бундестаг"
      ]
    },
    {
      "question_number": 82,
      "question": "Кто руководит федеральным кабинетом Германии?",
      "options": [
        "Президент Бундестага",
        "Федеральный президент",
        "Федеральный канцлер",
        "Президент Бундесрата"
      ],
      "answer": "Федеральный канцлер",
      "keywords": [
        "Bundeskabinett - федеральный кабинет",
        "Bundeskanzler - федеральный канцлер"
      ]
    },
    {
      "question_number": 83,
      "question": "Кто выбирает федерального канцлера Германии?",
      "options": [
        "народ",
        "Федеральное собрание",
        "Бундестаг",
        "федеральное правительство"
      ],
      "answer": "Бундестаг",
      "keywords": [
        "Bundeskanzler - федеральный канцлер",
        "Bundestag - Бундестаг"
      ]
    },
    {
      "question_number": 84,
      "question": "Какая основная задача федерального президента Германии?",
      "options": [
        "управлять страной",
        "разрабатывать законы",
        "представлять страну",
        "следить за соблюдением законов"
      ],
      "answer": "представлять страну",
      "keywords": [
        "Bundespräsident - федеральный президент",
        "repräsentieren - представлять"
      ]
    },
    {
      "question_number": 85,
      "question": "Кто составляет Бундесрат Германии?",
      "options": [
        "депутаты Бундестага",
        "министры федерального правительства",
        "представители правительств земель",
        "члены партий"
      ],
      "answer": "представители правительств земель",
      "keywords": [
        "Bundesrat - Бундесрат",
        "Regierungsvertreter - представители правительства"
      ]
    },
    {
      "question_number": 86,
      "question": "Кто выбирает федерального президента Германии?",
      "options": [
        "Федеральное собрание",
        "Федеральный совет",
        "Федеральный парламент",
        "Федеральный конституционный суд"
      ],
      "answer": "Федеральное собрание",
      "keywords": [
        "Bundespräsident - федеральный президент",
        "Bundesversammlung - Федеральное собрание"
      ]
    },
    {
      "question_number": 87,
      "question":
          "Кто является главой государства Федеративной Республики Германия?",
      "options": [
        "Федеральный канцлер",
        "Федеральный президент",
        "Президент Бундесрата",
        "Президент Бундестага"
      ],
      "answer": "Федеральный президент",
      "keywords": [
        "Staatsoberhaupt - глава государства",
        "Bundespräsident - федеральный президент"
      ]
    },
    {
      "question_number": 88,
      "question": "Что делает парламентская оппозиция в Бундестаге?",
      "options": [
        "контролирует правительство",
        "решает, кто будет федеральным министром",
        "назначает членов Бундесрата",
        "предлагает глав правительств земель"
      ],
      "answer": "контролирует правительство",
      "keywords": [
        "Opposition - оппозиция",
        "Regierung kontrollieren - контролировать правительство"
      ]
    },
    {
      "question_number": 89,
      "question":
          "Как называется объединение депутатов одной партии в парламенте Германии?",
      "options": ["союз", "совет старейшин", "фракция", "оппозиция"],
      "answer": "фракция",
      "keywords": [
        "Fraktion - фракция",
        "Abgeordnete - депутаты",
        "Partei - партия"
      ]
    },
    {
      "question_number": 90,
      "question":
          "Через что федеральные земли участвуют в законодательстве Германии?",
      "options": [
        "через Бундесрат",
        "через Федеральное собрание",
        "через Бундестаг",
        "через федеральное правительство"
      ],
      "answer": "через Бундесрат",
      "keywords": [
        "Bundesländer - федеральные земли",
        "Bundesrat - Бундесрат",
        "Gesetzgebung - законодательство"
      ]
    },
    {
      "question_number": 91,
      "question":
          "В Германии смена правительства в одной из федеральных земель может повлиять на федеральную политику. Управление становится ...",
      "options": [
        "сложнее, если изменится большинство в Бундестаге.",
        "легче, если новые партии попадут в Бундесрат.",
        "сложнее, если изменится большинство в Бундесрате.",
        "легче, если это богатая федеральная земля."
      ],
      "answer": "сложнее, если изменится большинство в Бундесрате.",
      "keywords": [
        "Regierungswechsel - смена правительства",
        "Bundesland - федеральная земля",
        "Bundesrat - Бундесрат",
        "Bundestag - Бундестаг"
      ]
    },
    {
      "question_number": 92,
      "question": "Что означает аббревиатура CSU в Германии?",
      "options": [
        "Христианский безопасный союз",
        "Христианский южногерманский союз",
        "Христианский союз социальных предпринимателей",
        "Христианско-социальный союз"
      ],
      "answer": "Христианско-социальный союз",
      "keywords": [
        "CSU - Христианско-социальный союз",
        "Christlich Soziale Union - Христианско-социальный союз"
      ]
    },
    {
      "question_number": 93,
      "question":
          "Чем больше партия получает «вторых голосов» на выборах в Бундестаг, тем ...",
      "options": [
        "больше мест получает партия в парламенте.",
        "меньше первых голосов она может иметь.",
        "больше прямых кандидатов партии попадает в парламент.",
        "выше риск необходимости создания коалиции."
      ],
      "answer": "больше мест получает партия в парламенте.",
      "keywords": [
        "Zweitstimme - второй голос",
        "Parlamentssitze - места в парламенте",
        "Bundestagswahl - выборы в Бундестаг"
      ]
    },
    {
      "question_number": 94,
      "question":
          "С какого возраста можно участвовать в выборах в Бундестаг в Германии?",
      "options": ["16", "18", "21", "23"],
      "answer": "18",
      "keywords": [
        "Wahlalter - возраст для голосования",
        "Bundestagswahl - выборы в Бундестаг"
      ]
    },
    {
      "question_number": 95,
      "question": "Что обязательно для большинства детей в Германии?",
      "options": [
        "обязанность голосовать",
        "обязанность посещать школу",
        "обязанность молчать",
        "обязанность исповедовать религию"
      ],
      "answer": "обязанность посещать школу",
      "keywords": [
        "Schulpflicht - обязанность посещать школу",
        "Kinder - дети",
        "Deutschland - Германия"
      ]
    },
    {
      "question_number": 96,
      "question": "Что обязан иметь каждый гражданин Германии с 16 лет?",
      "options": [
        "заграничный паспорт",
        "удостоверение личности",
        "социальную карту",
        "водительское удостоверение"
      ],
      "answer": "удостоверение личности",
      "keywords": [
        "Personalausweis - удостоверение личности",
        "Reisepass - заграничный паспорт"
      ]
    },
    {
      "question_number": 97,
      "question":
          "Что автоматически оплачивает работающий по найму человек в Германии?",
      "options": [
        "социальное страхование",
        "социальную помощь",
        "детские пособия",
        "жилищные пособия"
      ],
      "answer": "социальное страхование",
      "keywords": [
        "Sozialversicherung - социальное страхование",
        "Arbeitnehmer - работник"
      ]
    },
    {
      "question_number": 98,
      "question": "Если депутаты Бундестага меняют фракцию, ...",
      "options": [
        "правительство может потерять свое большинство.",
        "они больше не могут участвовать в заседаниях парламента.",
        "федеральный президент должен дать согласие.",
        "избиратели могут снова проголосовать за них."
      ],
      "answer": "правительство может потерять свое большинство.",
      "keywords": [
        "Fraktionswechsel - смена фракции",
        "Regierungsmehrheit - большинство правительства"
      ]
    },
    {
      "question_number": 99,
      "question": "Кто оплачивает социальное страхование в Германии?",
      "options": [
        "работодатели и работники",
        "только работники",
        "все граждане",
        "только работодатели"
      ],
      "answer": "работодатели и работники",
      "keywords": [
        "Sozialversicherungen - социальные страхования",
        "Arbeitgeber - работодатель",
        "Arbeitnehmer - работник"
      ]
    },
    {
      "question_number": 100,
      "question":
          "Что не относится к обязательному социальному страхованию в Германии?",
      "options": [
        "обязательное пенсионное страхование",
        "страхование жизни",
        "страхование по безработице",
        "страхование по уходу"
      ],
      "answer": "страхование жизни",
      "keywords": [
        "gesetzliche Sozialversicherung - обязательное социальное страхование",
        "Lebensversicherung - страхование жизни"
      ]
    },
    {
      "question_number": 101,
      "question": "Профсоюзы — это объединения интересов кого?",
      "options": ["молодёжи", "работников", "пенсионеров", "работодателей"],
      "answer": "работников",
      "keywords": ["Gewerkschaften - профсоюзы", "Arbeitnehmer - работники"]
    },
    {
      "question_number": 102,
      "question":
          "Чем можно быть награжденным в Германии за особые заслуги в политике, экономике, культуре, духовной или социальной сфере?",
      "options": [
        "Федеральным орлом",
        "Федеральным крестом за заслуги",
        "Отечественным орденом заслуг",
        "Почётным званием «Герой ГДР»"
      ],
      "answer": "Федеральным крестом за заслуги",
      "keywords": [
        "Bundesverdienstkreuz - Федеральный крест за заслуги",
        "Ehrung - награда"
      ]
    },
    {
      "question_number": 103,
      "question": "Что называют «светофорной коалицией» в Германии?",
      "options": [
        "сотрудничество фракций ХДС и ХСС в Бундестаге",
        "сотрудничество СДПГ, СвДП и Союза 90/Зелёные в правительстве",
        "сотрудничество ХСС, Левых и Союза 90/Зелёные в правительстве",
        "сотрудничество фракций ХДС и СДПГ"
      ],
      "answer": "сотрудничество СДПГ, СвДП и Союза 90/Зелёные в правительстве",
      "keywords": [
        "Ampelkoalition - светофорная коалиция",
        "SPD - СДПГ",
        "FDP - СвДП",
        "Grüne - Зелёные"
      ]
    },
    {
      "question_number": 104,
      "question": "Почему женщину в Германии не могут уволить?",
      "options": [
        "потому что она долго болеет",
        "потому что она часто опаздывает",
        "потому что она занимается личными делами на работе",
        "потому что она беременна"
      ],
      "answer": "потому что она беременна",
      "keywords": [
        "Kündigungsschutz - защита от увольнения",
        "Schwangerschaft - беременность"
      ]
    },
    {
      "question_number": 105,
      "question": "Какова задача волонтёров на выборах в Германии?",
      "options": [
        "помогать пожилым людям в кабине для голосования",
        "разносить уведомления о выборах",
        "сообщать промежуточные результаты журналистам",
        "считать голоса после окончания выборов"
      ],
      "answer": "считать голоса после окончания выборов",
      "keywords": [
        "Wahlhelfer - помощник на выборах",
        "Stimmen zählen - подсчет голосов"
      ]
    },
    {
      "question_number": 106,
      "question": "Чем занимаются волонтёры на выборах в Германии?",
      "options": [
        "помогают детям и пожилым голосовать",
        "рассылают письма о месте голосования",
        "передают журналистам промежуточные результаты",
        "считают голоса после выборов"
      ],
      "answer": "считают голоса после выборов",
      "keywords": [
        "ehrenamtliche Wahlhelfer - волонтёры на выборах",
        "Stimmen zählen - подсчет голосов"
      ]
    },
    {
      "question_number": 107,
      "question": "На сколько лет избирается Бундестаг в Германии?",
      "options": ["2 года", "4 года", "6 лет", "8 лет"],
      "answer": "4 года",
      "keywords": ["Wahlperiode - срок полномочий", "Bundestag - Бундестаг"]
    },
    {
      "question_number": 108,
      "question": "Кто может голосовать на выборах в Бундестаг?",
      "options": [
        "тот, кто живет в Германии и хочет голосовать",
        "гражданин Германии от 18 лет",
        "тот, кто проживает в Германии минимум 3 года",
        "гражданин Германии от 21 года"
      ],
      "answer": "гражданин Германии от 18 лет",
      "keywords": [
        "Wahlrecht - избирательное право",
        "Bundestagswahl - выборы в Бундестаг"
      ]
    },
    {
      "question_number": 109,
      "question": "Как часто проходят выборы в Бундестаг в Германии?",
      "options": [
        "каждые 3 года",
        "каждые 4 года",
        "каждые 5 лет",
        "каждые 6 лет"
      ],
      "answer": "каждые 4 года",
      "keywords": [
        "Bundestagswahlen - выборы в Бундестаг",
        "alle vier Jahre - каждые 4 года"
      ]
    },
    {
      "question_number": 110,
      "question": "На сколько лет избирается Бундестаг?",
      "options": ["2 года", "3 года", "4 года", "5 лет"],
      "answer": "4 года",
      "keywords": ["Wahlperiode - срок полномочий", "Bundestag - Бундестаг"]
    },
    {
      "question_number": 111,
      "question": "Что означает право голоса в Германии?",
      "options": [
        "все граждане могут голосовать при достижении минимального возраста",
        "только женатые могут голосовать",
        "только имеющие работу могут голосовать",
        "все жители Германии обязаны голосовать"
      ],
      "answer":
          "все граждане могут голосовать при достижении минимального возраста",
      "keywords": [
        "Wahlrecht - право голоса",
        "Mindestalter - минимальный возраст"
      ]
    },
    {
      "question_number": 112,
      "question": "Выборы в Германии ...",
      "options": [
        "особые",
        "тайные",
        "связаны с профессией",
        "зависят от пола"
      ],
      "answer": "тайные",
      "keywords": ["Wahl - выборы", "geheim - тайные"]
    },
    {
      "question_number": 113,
      "question": "Кто выигрывает выборы в Германии?",
      "options": [
        "партия, набравшая больше всего голосов",
        "партия, выбранная большинством мужчин",
        "партия, получившая поддержку рабочих",
        "партия, чьи кандидаты получили больше первых голосов"
      ],
      "answer": "партия, набравшая больше всего голосов",
      "keywords": [
        "Wahlsieger - победитель выборов",
        "Stimmenmehrheit - большинство голосов"
      ]
    },
    {
      "question_number": 114,
      "question": "Участие в демократических выборах в Германии — это ...",
      "options": ["обязанность", "право", "принуждение", "обуза"],
      "answer": "право",
      "keywords": ["Wahlrecht - право голоса", "Demokratie - демократия"]
    },
    {
      "question_number": 115,
      "question": "Что означает «активное избирательное право» в Германии?",
      "options": [
        "можно быть избранным",
        "обязанность голосовать",
        "можно голосовать",
        "обязанность считать голоса"
      ],
      "answer": "можно голосовать",
      "keywords": [
        "aktives Wahlrecht - активное избирательное право",
        "wählen - голосовать"
      ]
    },
    {
      "question_number": 116,
      "question":
          "Что означает, если вы имеете право голосовать на выборах в Бундестаг в Германии?",
      "options": [
        "активная избирательная кампания",
        "активная процедура голосования",
        "активная предвыборная борьба",
        "активное избирательное право"
      ],
      "answer": "активное избирательное право",
      "keywords": [
        "aktives Wahlrecht - активное избирательное право",
        "Bundestagswahl - выборы в Бундестаг"
      ]
    },
    {
      "question_number": 117,
      "question":
          "Сколько процентов вторых голосов должны набрать партии, чтобы попасть в Бундестаг?",
      "options": ["3 %", "4 %", "5 %", "6 %"],
      "answer": "5 %",
      "keywords": [
        "Fünf-Prozent-Hürde - 5%-барьер",
        "Zweitstimme - второй голос"
      ]
    },
    {
      "question_number": 118,
      "question": "Что регулирует избирательное право в Германии?",
      "options": [
        "Те, кто имеет право голосовать, обязаны голосовать.",
        "Все желающие могут голосовать.",
        "Кто не голосует, теряет право голосовать.",
        "Те, кто имеет право голосовать, могут голосовать."
      ],
      "answer": "Те, кто имеет право голосовать, могут голосовать.",
      "keywords": [
        "Wahlrecht - избирательное право",
        "wählen dürfen - иметь право голосовать"
      ]
    },
    {
      "question_number": 119,
      "question": "Что означает, что выборы в Германии являются свободными?",
      "options": [
        "Осуждённые преступники не имеют права голосовать.",
        "Работодатель обязан дать выходной для голосования.",
        "Каждый может свободно решать, голосовать или нет, и за кого голосовать.",
        "Можно свободно выбрать место для голосования."
      ],
      "answer":
          "Каждый может свободно решать, голосовать или нет, и за кого голосовать.",
      "keywords": [
        "freie Wahl - свободные выборы",
        "Entscheidungsfreiheit - свобода выбора"
      ]
    },
    {
      "question_number": 120,
      "question": "Избирательная система в Германии — это ...",
      "options": [
        "избирательное право по цензу",
        "трёхклассовое избирательное право",
        "смешанная мажоритарно-пропорциональная система",
        "общее право голоса для мужчин"
      ],
      "answer": "смешанная мажоритарно-пропорциональная система",
      "keywords": [
        "Mehrheits- und Verhältniswahlrecht - мажоритарно-пропорциональная система",
        "Wahlsystem - избирательная система"
      ]
    },
    {
      "question_number": 121,
      "question":
          "Партия хочет попасть в Бундестаг. Ей нужно преодолеть минимальный порог голосов. Это называется ...",
      "options": [
        "5%-барьер",
        "порог допуска",
        "базовая величина",
        "директива"
      ],
      "answer": "5%-барьер",
      "keywords": [
        "5%-Hürde - 5%-барьер",
        "Mindeststimmenanteil - минимальная доля голосов"
      ]
    },
    {
      "question_number": 122,
      "question": "Какому принципу соответствуют выборы в Германии?",
      "options": [
        "свободные, равные, тайные",
        "открытые, безопасные, свободные",
        "закрытые, равные, безопасные",
        "безопасные, открытые, добровольные"
      ],
      "answer": "свободные, равные, тайные",
      "keywords": [
        "freie, gleiche, geheime Wahlen - свободные, равные, тайные выборы",
        "Wahlprinzipien - принципы выборов"
      ]
    },
    {
      "question_number": 123,
      "question": "Что такое «5%-барьер» в Германии?",
      "options": [
        "правило голосования в Бундестаге для малых партий",
        "контроль посещаемости в Бундестаге при голосованиях",
        "минимальный процент голосов для попадания в парламент",
        "контроль посещаемости в Бундесрате при голосованиях"
      ],
      "answer": "минимальный процент голосов для попадания в парламент",
      "keywords": [
        "5%-Hürde - 5%-барьер",
        "Parlamentseinzug - проход в парламент"
      ]
    },
    {
      "question_number": 124,
      "question": "Что такое выборы в Бундестаг в Германии?",
      "options": [
        "выбор федерального канцлера",
        "выбор парламентов земель",
        "выбор парламента Германии",
        "выбор федерального президента"
      ],
      "answer": "выбор парламента Германии",
      "keywords": [
        "Bundestagswahl - выборы в Бундестаг",
        "Parlament Deutschlands - парламент Германии"
      ]
    },
    {
      "question_number": 125,
      "question": "В демократии регулярные выборы служат для ...",
      "options": [
        "принуждения граждан голосовать",
        "смены правительства по воле большинства избирателей",
        "сохранения существующих законов",
        "передачи власти бедным слоям населения"
      ],
      "answer": "смены правительства по воле большинства избирателей",
      "keywords": [
        "Regierungswechsel - смена правительства",
        "Wählerwille - воля избирателей"
      ]
    },
    {
      "question_number": 126,
      "question": "Что получают избиратели в Германии перед выборами?",
      "options": [
        "уведомление о выборах от общины",
        "разрешение на выборы от федерального президента",
        "уведомление от федерального собрания",
        "уведомление от приходского управления"
      ],
      "answer": "уведомление о выборах от общины",
      "keywords": [
        "Wahlbenachrichtigung - уведомление о выборах",
        "Gemeinde - община"
      ]
    },
    {
      "question_number": 127,
      "question": "Почему существует 5%-барьер в избирательном праве ФРГ?",
      "options": [
        "потому что у программ малых партий много общего",
        "чтобы избежать путаницы из-за множества малых партий",
        "потому что малые партии затрудняют формирование правительства",
        "потому что малые партии имеют мало денег"
      ],
      "answer": "потому что малые партии затрудняют формирование правительства",
      "keywords": [
        "Regierungsbildung - формирование правительства",
        "kleine Parteien - малые партии"
      ]
    },
    {
      "question_number": 128,
      "question":
          "Как называют избранных гражданами членов парламента в Германии?",
      "options": ["депутаты", "канцлеры", "послы", "премьер-министры"],
      "answer": "депутаты",
      "keywords": ["Abgeordnete - депутаты", "Parlament - парламент"]
    },
    {
      "question_number": 129,
      "question": "Кого выбирают напрямую граждане Германии?",
      "options": [
        "федерального канцлера",
        "премьер-министра федеральной земли",
        "Бундестаг",
        "федерального президента"
      ],
      "answer": "Бундестаг",
      "keywords": ["direkte Wahl - прямые выборы", "Bundestag - Бундестаг"]
    },
    {
      "question_number": 130,
      "question":
          "Какой избирательный бюллетень действителен на выборах в Бундестаг?",
      "image": "/images/130.png",
      "options": ["1", "2", "3", "4"],
      "answer": "1",
      "keywords": [
        "gültiger Stimmzettel - действительный бюллетень",
        "Bundestagswahl - выборы в Бундестаг"
      ]
    },
    {
      "question_number": 131,
      "question": "Кто такой бургомистр в Германии?",
      "options": [
        "директор школы",
        "директор банка",
        "глава общины",
        "председатель партии"
      ],
      "answer": "глава общины",
      "keywords": ["Bürgermeister - бургомистр", "Gemeinde - община"]
    },
    {
      "question_number": 132,
      "question": "Что означает добровольная работа в Германии?",
      "options": [
        "работа в армии",
        "работа бесплатно и добровольно в объединениях и союзах",
        "работа в федеральном правительстве",
        "работа в больнице за деньги"
      ],
      "answer": "работа бесплатно и добровольно в объединениях и союзах",
      "keywords": [
        "ehrenamtliche Arbeit - волонтёрская работа",
        "Verein - объединение"
      ]
    },
    {
      "question_number": 133,
      "question": "Что разрешено на выборах в Бундестаг и ландтаги в Германии?",
      "options": [
        "муж голосует за жену",
        "голосовать по почте",
        "голосовать по телефону",
        "голосовать с 14 лет"
      ],
      "answer": "голосовать по почте",
      "keywords": [
        "Briefwahl - голосование по почте",
        "Bundestagswahl - выборы в Бундестаг"
      ]
    },
    {
      "question_number": 134,
      "question":
          "Что вы можете сделать, если хотят закрыть автобусную линию, на которой вы ездите на работу?",
      "options": [
        "принять участие или создать гражданскую инициативу",
        "вступить в спортклуб и тренировать езду на велосипеде",
        "обратиться в налоговую инспекцию",
        "написать в лесное ведомство"
      ],
      "answer": "принять участие или создать гражданскую инициативу",
      "keywords": [
        "Bürgerinitiative - гражданская инициатива",
        "Buslinie - автобусная линия"
      ]
    },
    {
      "question_number": 135,
      "question": "Кого представляют профсоюзы в Германии?",
      "options": [
        "крупные компании",
        "малые предприятия",
        "самозанятых",
        "работников"
      ],
      "answer": "работников",
      "keywords": ["Gewerkschaften - профсоюзы", "Arbeitnehmer - работники"]
    },
    {
      "question_number": 136,
      "question":
          "Куда нужно обратиться в Германии в случае несправедливого увольнения?",
      "options": [
        "из-за неправильного расчёта коммунальных услуг",
        "при несправедливом увольнении",
        "при проблемах с соседями",
        "после ДТП"
      ],
      "answer": "при несправедливом увольнении",
      "keywords": [
        "Arbeitsgericht - суд по трудовым делам",
        "Kündigungsschutzklage - иск о защите от увольнения"
      ]
    },
    {
      "question_number": 137,
      "question": "Какой суд в Германии рассматривает трудовые споры?",
      "options": [
        "семейный суд",
        "уголовный суд",
        "суд по трудовым делам",
        "районный суд"
      ],
      "answer": "суд по трудовым делам",
      "keywords": [
        "Arbeitsgericht - суд по трудовым делам",
        "Arbeitswelt - мир труда"
      ]
    },
    {
      "question_number": 138,
      "question": "Что можно сделать в Германии при несправедливом увольнении?",
      "options": [
        "продолжать работать и быть вежливым с начальником",
        "провести досудебное взыскание",
        "подать иск о защите от увольнения",
        "сообщить о работодателе в полицию"
      ],
      "answer": "подать иск о защите от увольнения",
      "keywords": [
        "Kündigungsschutzklage - иск о защите от увольнения",
        "Arbeitgeber - работодатель"
      ]
    },
    {
      "question_number": 139,
      "question": "Когда в Германии дело передаётся в суд?",
      "options": [
        "при переходе в другую религию",
        "при совершении преступления и предъявлении обвинения",
        "при выражении иного мнения, чем у правительства",
        "при неправильной парковке автомобиля"
      ],
      "answer": "при совершении преступления и предъявлении обвинения",
      "keywords": [
        "Strafverfahren - уголовное дело",
        "Gerichtsprozess - судебный процесс"
      ]
    },
    {
      "question_number": 140,
      "question": "Что делает шеффе / шеффин в Германии? Он / она …",
      "options": [
        "решает вместе с судьями о вине и наказании.",
        "даёт гражданам юридические консультации.",
        "выдаёт документы.",
        "защищает обвиняемого."
      ],
      "answer": "решает вместе с судьями о вине и наказании.",
      "keywords": [
        "Schöffe / Schöffin - заседатель",
        "Richter - судья",
        "Schuld und Strafe - вина и наказание"
      ]
    },
    {
      "question_number": 141,
      "question":
          "Кто в Германии консультирует людей по юридическим вопросам и представляет их в суде?",
      "options": ["адвокат", "судья", "заседатель", "прокурор"],
      "answer": "адвокат",
      "keywords": ["Rechtsanwalt / Rechtsanwältin - адвокат", "Gericht - суд"]
    },
    {
      "question_number": 142,
      "question": "Какова основная задача судьи в Германии?",
      "options": [
        "представлять граждан в суде",
        "работать в суде и выносить приговоры",
        "изменять законы",
        "курировать молодёжь в суде"
      ],
      "answer": "работать в суде и выносить приговоры",
      "keywords": [
        "Richter / Richterin - судья",
        "Urteile sprechen - выносить приговоры"
      ]
    },
    {
      "question_number": 143,
      "question": "К какой ветви власти принадлежит судья в Германии?",
      "options": [
        "судебной власти",
        "исполнительной власти",
        "оперативной власти",
        "законодательной власти"
      ],
      "answer": "судебной власти",
      "keywords": ["Judikative - судебная власть", "Richter - судья"]
    },
    {
      "question_number": 144,
      "question": "К какой власти в Германии относится судья?",
      "options": [
        "исполнительной власти",
        "судебной власти",
        "планирующей власти",
        "законодательной власти"
      ],
      "answer": "судебной власти",
      "keywords": [
        "rechtsprechende Gewalt - судебная власть",
        "Richter - судья"
      ]
    },
    {
      "question_number": 145,
      "question":
          "В Германии власть разделена. За какую власть отвечает судья?",
      "options": ["судебную", "исполнительную", "прессу", "законодательную"],
      "answer": "судебную",
      "keywords": ["Judikative - судебная власть", "Richter - судья"]
    },
    {
      "question_number": 146,
      "question": "Как называется в Германии разбирательство в суде?",
      "options": ["программа", "процедура", "протокол", "процесс"],
      "answer": "процесс",
      "keywords": ["Prozess - судебный процесс", "Gericht - суд"]
    },
    {
      "question_number": 147,
      "question": "Какова работа судьи в Германии?",
      "options": [
        "управлять Германией",
        "осуществлять правосудие",
        "разрабатывать планы",
        "принимать законы"
      ],
      "answer": "осуществлять правосудие",
      "keywords": [
        "Recht sprechen - осуществлять правосудие",
        "Richter - судья"
      ]
    },
    {
      "question_number": 148,
      "question": "Какова задача полиции в Германии?",
      "options": [
        "защищать страну",
        "прослушивать граждан",
        "принимать законы",
        "контролировать соблюдение законов"
      ],
      "answer": "контролировать соблюдение законов",
      "keywords": [
        "Polizei - полиция",
        "Gesetze überwachen - контролировать законы"
      ]
    },
    {
      "question_number": 149,
      "question": "Кто может стать заседателем в суде в Германии?",
      "options": [
        "все рожденные в Германии жители старше 18 лет",
        "все граждане Германии от 24 до 70 лет",
        "все проживающие в Германии не менее 5 лет",
        "только лица с юридическим образованием"
      ],
      "answer": "все граждане Германии от 24 до 70 лет",
      "keywords": [
        "Gerichtsschöffe - заседатель суда",
        "deutsche Staatsangehörige - граждане Германии"
      ]
    },
    {
      "question_number": 150,
      "question": "Кто такой заседатель в суде Германии?",
      "options": [
        "заместитель мэра",
        "заседатель-волонтёр",
        "член муниципального совета",
        "человек с юридическим образованием"
      ],
      "answer": "заседатель-волонтёр",
      "keywords": [
        "ehrenamtlicher Richter - заседатель-волонтёр",
        "Gericht - суд"
      ]
    },
    {
      "question_number": 151,
      "question": "Кто построил Берлинскую стену?",
      "options": [
        "Великобритания",
        "Федеративная Республика Германия",
        "ГДР",
        "США"
      ],
      "answer": "ГДР",
      "keywords": ["Mauer - стена", "DDR - ГДР"]
    },
    {
      "question_number": 152,
      "question":
          "Когда национал-социалисты с Адольфом Гитлером были у власти в Германии?",
      "options": ["1918–1923", "1932–1950", "1933–1945", "1945–1989"],
      "answer": "1933–1945",
      "keywords": [
        "Nationalsozialisten - национал-социалисты",
        "Adolf Hitler - Адольф Гитлер"
      ]
    },
    {
      "question_number": 153,
      "question": "Что произошло 8 мая 1945 года?",
      "options": [
        "смерть Гитлера",
        "начало строительства Берлинской стены",
        "избрание Конрада Аденауэра канцлером",
        "конец Второй мировой войны в Европе"
      ],
      "answer": "конец Второй мировой войны в Европе",
      "keywords": [
        "8. Mai 1945 - 8 мая 1945 года",
        "Zweiter Weltkrieg - Вторая мировая война"
      ]
    },
    {
      "question_number": 154,
      "question": "Когда закончилась Вторая мировая война?",
      "options": ["1933", "1945", "1949", "1961"],
      "answer": "1945",
      "keywords": [
        "Zweiter Weltkrieg - Вторая мировая война",
        "Kriegsende - окончание войны"
      ]
    },
    {
      "question_number": 155,
      "question": "Когда национал-социалисты были у власти в Германии?",
      "options": ["1888–1918", "1921–1934", "1933–1945", "1949–1963"],
      "answer": "1933–1945",
      "keywords": [
        "NS-Zeit - время национал-социализма",
        "Machtübernahme - приход к власти"
      ]
    },
    {
      "question_number": 156,
      "question": "В каком году Гитлер стал рейхсканцлером?",
      "options": ["1923", "1927", "1933", "1936"],
      "answer": "1933",
      "keywords": ["Reichskanzler - рейхсканцлер", "Hitler - Гитлер"]
    },
    {
      "question_number": 157,
      "question":
          "Что создали национал-социалисты во главе с Гитлером в 1933 году?",
      "options": [
        "диктатуру",
        "демократическое государство",
        "монархию",
        "княжество"
      ],
      "answer": "диктатуру",
      "keywords": [
        "Diktatur - диктатура",
        "NS-Regime - режим национал-социалистов"
      ]
    },
    {
      "question_number": 158,
      "question": "«Третий рейх» был …",
      "options": [
        "диктатурой",
        "демократией",
        "монархией",
        "советской республикой"
      ],
      "answer": "диктатурой",
      "keywords": ["Drittes Reich - Третий рейх", "Diktatur - диктатура"]
    },
    {
      "question_number": 159,
      "question": "Чего не было в Германии во времена национал-социализма?",
      "options": [
        "свободных выборов",
        "цензуры прессы",
        "произвольных арестов",
        "преследования евреев"
      ],
      "answer": "свободных выборов",
      "keywords": [
        "freie Wahlen - свободные выборы",
        "NS-Zeit - время национал-социализма"
      ]
    },
    {
      "question_number": 160,
      "question": "Какая война длилась с 1939 по 1945 годы?",
      "options": [
        "Первая мировая война",
        "Вторая мировая война",
        "Война во Вьетнаме",
        "Война в Персидском заливе"
      ],
      "answer": "Вторая мировая война",
      "keywords": ["Zweiter Weltkrieg - Вторая мировая война", "Krieg - война"]
    },
    {
      "question_number": 161,
      "question": "Что характеризовало нацистское государство? Политика …",
      "options": [
        "государственного расизма",
        "свободы мнений",
        "всеобщей свободы вероисповедания",
        "развития демократии"
      ],
      "answer": "государственного расизма",
      "keywords": [
        "NS-Staat - нацистское государство",
        "staatlicher Rassismus - государственный расизм"
      ]
    },
    {
      "question_number": 162,
      "question": "Чем прославился Клаус Шенк граф фон Штауффенберг?",
      "options": [
        "золотой медалью на Олимпиаде 1936 года",
        "строительством Рейхстага",
        "созданием Вермахта",
        "покушением на Гитлера 20 июля 1944 года"
      ],
      "answer": "покушением на Гитлера 20 июля 1944 года",
      "keywords": [
        "Claus Schenk Graf von Stauffenberg - Клаус Шенк граф фон Штауффенберг",
        "Attentat - покушение"
      ]
    },
    {
      "question_number": 163,
      "question":
          "В каком году нацисты разрушили синагоги и еврейские магазины в Германии?",
      "options": ["1925", "1930", "1938", "1945"],
      "answer": "1938",
      "keywords": [
        "Synagogen - синагоги",
        "Zerstörung - разрушение",
        "1938 - 1938 год"
      ]
    },
    {
      "question_number": 164,
      "question": "Что произошло 9 ноября 1938 года в Германии?",
      "options": [
        "Началась Вторая мировая война нападением на Польшу.",
        "Нацисты проиграли выборы и распустили Рейхстаг.",
        "Нацисты разрушили еврейские магазины и синагоги.",
        "Гитлер стал президентом и запретил все партии."
      ],
      "answer": "Нацисты разрушили еврейские магазины и синагоги.",
      "keywords": [
        "9. November 1938 - 9 ноября 1938 года",
        "Judenverfolgung - преследование евреев",
        "Kristallnacht - Хрустальная ночь"
      ]
    },
    {
      "question_number": 165,
      "question":
          "Как звали первого канцлера Федеративной Республики Германия?",
      "options": [
        "Конрад Аденауэр",
        "Курт Георг Кизингер",
        "Гельмут Шмидт",
        "Вилли Брандт"
      ],
      "answer": "Конрад Аденауэр",
      "keywords": [
        "Konrad Adenauer - Конрад Аденауэр",
        "erster Bundeskanzler - первый федеральный канцлер"
      ]
    },
    {
      "question_number": 166,
      "question":
          "На каких демонстрациях в Германии люди скандировали «Мы — народ»?",
      "options": [
        "на понедельничных демонстрациях 1989 года в ГДР",
        "на рабочем восстании 1953 года в ГДР",
        "на демонстрациях 1968 года в ФРГ",
        "на антиядерных демонстрациях 1985 года в ФРГ"
      ],
      "answer": "на понедельничных демонстрациях 1989 года в ГДР",
      "keywords": [
        "Montagsdemonstrationen - понедельничные демонстрации",
        "Wir sind das Volk - Мы — народ",
        "DDR - ГДР"
      ]
    },
    {
      "question_number": 167,
      "question":
          "Какие страны назывались союзными оккупационными державами в Германии после Второй мировой войны?",
      "options": [
        "Советский Союз, Великобритания, Польша, Швеция",
        "Франция, Советский Союз, Италия, Япония",
        "США, Советский Союз, Испания, Португалия",
        "США, Советский Союз, Великобритания, Франция"
      ],
      "answer": "США, Советский Союз, Великобритания, Франция",
      "keywords": [
        "Alliierte Besatzungsmächte - союзные оккупационные державы",
        "USA - США",
        "Großbritannien - Великобритания",
        "Sowjetunion - Советский Союз",
        "Frankreich - Франция"
      ]
    },
    {
      "question_number": 168,
      "question":
          "Какая страна не была союзной оккупационной державой в Германии?",
      "options": ["США", "Советский Союз", "Франция", "Япония"],
      "answer": "Япония",
      "keywords": ["Japan - Япония", "Besatzungsmacht - оккупационная держава"]
    },
    {
      "question_number": 169,
      "question": "Когда была основана Федеративная Республика Германия?",
      "options": ["1939", "1945", "1949", "1951"],
      "answer": "1949",
      "keywords": ["Gründung der BRD - основание ФРГ", "1949 - 1949 год"]
    },
    {
      "question_number": 170,
      "question": "Что было в Германии во времена национал-социализма?",
      "options": [
        "право на свободное развитие личности",
        "свобода прессы",
        "запрет партий",
        "защита человеческого достоинства"
      ],
      "answer": "запрет партий",
      "keywords": [
        "Parteiverbot - запрет партий",
        "NS-Zeit - время национал-социализма"
      ]
    },
    {
      "question_number": 171,
      "question": "Социальная рыночная экономика означает, что экономика ...",
      "options": [
        "регулируется только спросом и предложением.",
        "планируется и регулируется государством без учёта спроса и предложения.",
        "ориентируется на спрос за границей.",
        "ориентируется на спрос и предложение, но государство заботится о социальном балансе."
      ],
      "answer":
          "ориентируется на спрос и предложение, но государство заботится о социальном балансе.",
      "keywords": [
        "soziale Marktwirtschaft - социальная рыночная экономика",
        "Angebot und Nachfrage - спрос и предложение",
        "sozialer Ausgleich - социальный баланс"
      ]
    },
    {
      "question_number": 172,
      "question": "В какой оккупационной зоне была основана ГДР? В ...",
      "options": [
        "американской оккупационной зоне.",
        "французской оккупационной зоне.",
        "британской оккупационной зоне.",
        "советской оккупационной зоне."
      ],
      "answer": "советской оккупационной зоне.",
      "keywords": [
        "Besatzungszone - оккупационная зона",
        "sowjetische Besatzungszone - советская оккупационная зона"
      ]
    },
    {
      "question_number": 173,
      "question": "Федеративная Республика Германия является основателем ...",
      "options": [
        "Североатлантического альянса (НАТО).",
        "Организации Объединённых Наций (ООН).",
        "Европейского Союза (ЕС).",
        "Варшавского договора."
      ],
      "answer": "Европейского Союза (ЕС).",
      "keywords": ["Europäische Union (EU) - Европейский Союз (ЕС)"]
    },
    {
      "question_number": 174,
      "question": "Когда была основана ГДР?",
      "options": ["1947", "1949", "1953", "1956"],
      "answer": "1949",
      "keywords": ["Gründung der DDR - основание ГДР", "1949 - 1949 год"]
    },
    {
      "question_number": 175,
      "question":
          "Сколько оккупационных зон было в Германии после Второй мировой войны?",
      "options": ["3", "4", "5", "6"],
      "answer": "4",
      "keywords": ["Besatzungszonen - оккупационные зоны"]
    },
    {
      "question_number": 176,
      "question":
          "Как были распределены оккупационные зоны Германии после 1945 года?",
      "image": "/images/176.png",
      "options": [
        "1=Великобритания, 2=Советский Союз, 3=Франция, 4=США",
        "1=Советский Союз, 2=Великобритания, 3=США, 4=Франция",
        "1=Великобритания, 2=Советский Союз, 3=США, 4=Франция",
        "1=Великобритания, 2=США, 3=Советский Союз, 4=Франция"
      ],
      "answer": "1=Великобритания, 2=Советский Союз, 3=США, 4=Франция",
      "keywords": [
        "Besatzungszonen - оккупационные зоны",
        "Verteilung - распределение"
      ]
    },
    {
      "question_number": 177,
      "question":
          "Какой немецкий город был разделён на четыре сектора после Второй мировой войны?",
      "options": ["Мюнхен", "Берлин", "Дрезден", "Франкфурт-на-Одере"],
      "answer": "Берлин",
      "keywords": ["Berlin - Берлин", "Sektoren - секторы"]
    },
    {
      "question_number": 178,
      "question":
          "С июня 1948 по май 1949 года жители Западного Берлина снабжались через воздушный мост. Почему?",
      "options": [
        "Франции было дешевле снабжать по воздуху.",
        "Американские солдаты боялись нападений при перевозке по суше.",
        "Великобритании было быстрее снабжать по воздуху.",
        "Советский Союз перекрыл все сухопутные пути."
      ],
      "answer": "Советский Союз перекрыл все сухопутные пути.",
      "keywords": [
        "Luftbrücke - воздушный мост",
        "Sowjetunion - Советский Союз",
        "Blockade - блокада"
      ]
    },
    {
      "question_number": 179,
      "question": "Как официально закончилась Вторая мировая война в Европе?",
      "options": [
        "смертью Адольфа Гитлера",
        "безоговорочной капитуляцией Германии",
        "отводом немецких войск из оккупированных территорий",
        "революцией в Германии"
      ],
      "answer": "безоговорочной капитуляцией Германии",
      "keywords": [
        "bedingungslose Kapitulation - безоговорочная капитуляция",
        "Ende des Zweiten Weltkriegs - конец Второй мировой войны"
      ]
    },
    {
      "question_number": 180,
      "question":
          "Первым федеральным канцлером Федеративной Республики Германия был …",
      "options": [
        "Людвиг Эрхард.",
        "Вилли Брандт.",
        "Конрад Аденауэр.",
        "Герхард Шрёдер."
      ],
      "answer": "Конрад Аденауэр.",
      "keywords": [
        "Bundeskanzler - федеральный канцлер",
        "Bundesrepublik Deutschland - Федеративная Республика Германия",
        "Konrad Adenauer - Конрад Аденауэр"
      ]
    },
    {
      "question_number": 181,
      "question":
          "Что хотел выразить Вилли Брандт своим коленопреклонением в 1970 году в бывшем еврейском гетто в Варшаве?",
      "image": "/images/181.png",
      "options": [
        "Он подчинился бывшим союзникам.",
        "Он попросил прощения у поляков и польских евреев.",
        "Он проявил смирение перед Варшавским пактом.",
        "Он произнёс молитву у могилы Неизвестного солдата."
      ],
      "answer": "Он попросил прощения у поляков и польских евреев.",
      "keywords": [
        "Kniefall - коленопреклонение",
        "jüdisches Ghetto - еврейское гетто",
        "Vergebung - прощение"
      ]
    },
    {
      "question_number": 182,
      "question":
          "Какие партии были в 1946 году принудительно объединены в СЕПГ, единую партию будущей ГДР?",
      "options": ["КПГ и СДПГ", "СДПГ и ХДС", "ХДС и СвДП", "КПГ и ХСС"],
      "answer": "КПГ и СДПГ",
      "keywords": [
        "Parteien - партии",
        "zwangsweise - принудительно",
        "SED - СЕПГ (Социалистическая единая партия Германии)"
      ]
    },
    {
      "question_number": 183,
      "question":
          "Когда было «экономическое чудо» в Федеративной Республике Германия?",
      "options": ["40-е годы", "50-е годы", "70-е годы", "80-е годы"],
      "answer": "50-е годы",
      "keywords": [
        "Wirtschaftswunder - экономическое чудо",
        "Bundesrepublik Deutschland - Федеративная Республика Германия"
      ]
    },
    {
      "question_number": 184,
      "question": "Что долгое время называли в Германии «Час ноль»?",
      "options": [
        "Этим обозначают время после объединения в 1989 году.",
        "Так называли начало Второй мировой войны.",
        "Под этим понимали конец Второй мировой войны и начало восстановления.",
        "Так называется перевод часов на зимнее время."
      ],
      "answer":
          "Под этим понимали конец Второй мировой войны и начало восстановления.",
      "keywords": [
        "Stunde Null - Час ноль",
        "Zweiter Weltkrieg - Вторая мировая война",
        "Wiederaufbau - восстановление"
      ]
    },
    {
      "question_number": 185,
      "question": "Что обозначал термин «Железный занавес»? Изоляцию …",
      "options": [
        "Варшавского пакта от Запада.",
        "Северной Германии от Южной Германии.",
        "Нацистской Германии от союзников.",
        "Европы от США."
      ],
      "answer": "Варшавского пакта от Запада.",
      "keywords": [
        "Eiserner Vorhang - железный занавес",
        "Warschauer Pakt - Варшавский пакт",
        "Westen - Запад"
      ]
    },
    {
      "question_number": 186,
      "question":
          "В каком году в ГДР произошло восстание, о котором долгое время напоминал праздник в ФРГ?",
      "options": ["1 мая", "17 июня", "20 июля", "9 ноября"],
      "answer": "17 июня",
      "keywords": ["Aufstand - восстание", "DDR - ГДР", "17. Juni - 17 июня"]
    },
    {
      "question_number": 187,
      "question":
          "Какое немецкое государство имело чёрно-красно-золотой флаг с молотком, циркулем и венком из колосьев?",
      "image": "/images/187.png",
      "options": [
        "Пруссия",
        "Федеративная Республика Германия",
        "ГДР",
        "«Третий Рейх»"
      ],
      "answer": "ГДР",
      "keywords": [
        "schwarz-rot-goldene Flagge - чёрно-красно-золотой флаг",
        "Hammer - молот",
        "Zirkel - циркуль",
        "Ährenkranz - венок из колосьев",
        "DDR - ГДР"
      ]
    },
    {
      "question_number": 188,
      "question": "В каком году была построена Берлинская стена?",
      "options": ["1953", "1956", "1959", "1961"],
      "answer": "1961",
      "keywords": ["Mauer - стена", "Berlin - Берлин", "gebaut - построен"]
    },
    {
      "question_number": 189,
      "question": "Когда ГДР построила Берлинскую стену?",
      "options": ["1919", "1933", "1961", "1990"],
      "answer": "1961",
      "keywords": ["Mauer - стена", "gebaut - построил", "DDR - ГДР"]
    },
    {
      "question_number": 190,
      "question": "Что означает аббревиатура ГДР?",
      "options": [
        "Третий немецкий радиовещатель",
        "Германская республика",
        "Третья германская республика",
        "Германская Демократическая Республика"
      ],
      "answer": "Германская Демократическая Республика",
      "keywords": [
        "DDR - ГДР",
        "Deutsche Demokratische Republik - Германская Демократическая Республика"
      ]
    },
    {
      "question_number": 191,
      "question": "Когда Берлинская стена была открыта для всех?",
      "options": ["1987", "1989", "1992", "1995"],
      "answer": "1989",
      "keywords": ["Mauer - стена", "geöffnet - открыта", "1989 - 1989 год"]
    },
    {
      "question_number": 192,
      "question":
          "Какой современный федеральный штат Германии раньше был частью ГДР?",
      "options": ["Бранденбург", "Бавария", "Саар", "Гессен"],
      "answer": "Бранденбург",
      "keywords": [
        "Bundesland - федеральная земля",
        "Brandenburg - Бранденбург",
        "DDR - ГДР"
      ]
    },
    {
      "question_number": 193,
      "question": "С 1961 по 1989 год Берлин был …",
      "options": [
        "без мэра.",
        "отдельным государством.",
        "разделён стеной.",
        "доступен только на самолёте."
      ],
      "answer": "разделён стеной.",
      "keywords": ["Berlin - Берлин", "Mauer - стена", "geteilt - разделён"]
    },
    {
      "question_number": 194,
      "question": "3 октября в Германии отмечают День немецкого …",
      "options": ["единства.", "нации.", "федеральных земель.", "городов."],
      "answer": "единства.",
      "keywords": [
        "Tag der Deutschen Einheit - День немецкого единства",
        "3. Oktober - 3 октября"
      ]
    },
    {
      "question_number": 195,
      "question":
          "Какой современный федеральный штат Германии раньше был частью ГДР?",
      "options": [
        "Гессен",
        "Саксония-Анхальт",
        "Северный Рейн-Вестфалия",
        "Саар"
      ],
      "answer": "Саксония-Анхальт",
      "keywords": [
        "Sachsen-Anhalt - Саксония-Анхальт",
        "DDR - ГДР",
        "Bundesland - федеральная земля"
      ]
    },
    {
      "question_number": 196,
      "question":
          "Почему время осенью 1989 года в ГДР называют «Поворотом»? В это время ГДР изменилась политически …",
      "options": [
        "от диктатуры к демократии.",
        "от либеральной рыночной экономики к социализму.",
        "от монархии к социал-демократии.",
        "от религиозного государства к коммунистическому."
      ],
      "answer": "от диктатуры к демократии.",
      "keywords": [
        "Wende - Поворот",
        "Diktatur - диктатура",
        "Demokratie - демократия"
      ]
    },
    {
      "question_number": 197,
      "question":
          "Какой современный федеральный штат Германии раньше был частью ГДР?",
      "options": ["Тюрингия", "Гессен", "Бавария", "Бремен"],
      "answer": "Тюрингия",
      "keywords": ["Thüringen - Тюрингия", "DDR - ГДР"]
    },
    {
      "question_number": 198,
      "question":
          "Какой современный федеральный штат Германии раньше был частью ГДР?",
      "options": ["Бавария", "Нижняя Саксония", "Саксония", "Баден-Вюртемберг"],
      "answer": "Саксония",
      "keywords": ["Sachsen - Саксония", "DDR - ГДР"]
    },
    {
      "question_number": 199,
      "question": "Что обозначала аббревиатура «Штази» в ГДР?",
      "options": [
        "парламент.",
        "Министерство государственной безопасности.",
        "правящую партию.",
        "Министерство народного образования."
      ],
      "answer": "Министерство государственной безопасности.",
      "keywords": [
        "Stasi - Штази",
        "Ministerium für Staatssicherheit - Министерство государственной безопасности",
        "DDR - ГДР"
      ]
    },
    {
      "question_number": 200,
      "question":
          "Какой современный федеральный штат Германии раньше был частью ГДР?",
      "options": [
        "Гессен",
        "Шлезвиг-Гольштейн",
        "Мекленбург-Передняя Померания",
        "Саар"
      ],
      "answer": "Мекленбург-Передняя Померания",
      "keywords": [
        "Mecklenburg-Vorpommern - Мекленбург-Передняя Померания",
        "DDR - ГДР",
        "Bundesland - федеральная земля"
      ]
    },
    {
      "question_number": 201,
      "question":
          "Какая из следующих подборок содержит только федеральные земли, которые ранее принадлежали территории ГДР?",
      "options": [
        "Нижняя Саксония, Северный Рейн-Вестфалия, Гессен, Шлезвиг-Гольштейн, Бранденбург",
        "Мекленбург-Передняя Померания, Бранденбург, Саксония, Саксония-Анхальт, Тюрингия",
        "Бавария, Баден-Вюртемберг, Рейнланд-Пфальц, Тюрингия, Саксония",
        "Саксония, Тюрингия, Гессен, Нижняя Саксония, Бранденбург"
      ],
      "answer":
          "Мекленбург-Передняя Померания, Бранденбург, Саксония, Саксония-Анхальт, Тюрингия",
      "keywords": [
        "Bundesländer - федеральные земли",
        "frühere DDR - бывшая ГДР"
      ]
    },
    {
      "question_number": 202,
      "question": "К кому принадлежала ГДР во время «холодной войны»?",
      "options": [
        "к западным державам",
        "к Варшавскому пакту",
        "к НАТО",
        "к неприсоединившимся государствам"
      ],
      "answer": "к Варшавскому пакту",
      "keywords": [
        "Kalter Krieg - холодная война",
        "Warschauer Pakt - Варшавский пакт",
        "DDR - ГДР"
      ]
    },
    {
      "question_number": 203,
      "question": "Как называлась экономическая система ГДР?",
      "options": [
        "рыночная экономика",
        "плановая экономика",
        "спрос и предложение",
        "капитализм"
      ],
      "answer": "плановая экономика",
      "keywords": [
        "Wirtschaftssystem - экономическая система",
        "Planwirtschaft - плановая экономика",
        "DDR - ГДР"
      ]
    },
    {
      "question_number": 204,
      "question":
          "Как Федеративная Республика Германия и ГДР стали одним государством?",
      "options": [
        "ФРГ оккупировала ГДР.",
        "Сегодняшние пять восточных земель присоединились к ФРГ.",
        "Западные земли присоединились к ГДР.",
        "ГДР оккупировала ФРГ."
      ],
      "answer": "Сегодняшние пять восточных земель присоединились к ФРГ.",
      "keywords": [
        "Bundesrepublik Deutschland - Федеративная Республика Германия",
        "Beitritt - присоединение",
        "östliche Bundesländer - восточные земли"
      ]
    },
    {
      "question_number": 205,
      "question":
          "С присоединением ГДР к ФРГ новые федеральные земли также стали частью …",
      "options": [
        "Европейского Союза.",
        "Варшавского пакта.",
        "ОПЕК.",
        "Европейского оборонного союза."
      ],
      "answer": "Европейского Союза.",
      "keywords": [
        "Beitritt - присоединение",
        "Europäische Union - Европейский Союз",
        "neue Bundesländer - новые земли"
      ]
    },
    {
      "question_number": 206,
      "question":
          "Что означало в 1989 году в Германии слово «понедельничная демонстрация»?",
      "options": [
        "В ФРГ демонстрации были разрешены только по понедельникам.",
        "По понедельникам проходили демонстрации против режима ГДР.",
        "В первый понедельник месяца в ФРГ собирались демонстранты.",
        "По понедельникам в ГДР демонстрировали против Запада."
      ],
      "answer": "По понедельникам проходили демонстрации против режима ГДР.",
      "keywords": [
        "Montagsdemonstration - понедельничная демонстрация",
        "DDR-Regime - режим ГДР",
        "1989 - 1989 год"
      ]
    },
    {
      "question_number": 207,
      "question": "В каком военном союзе состояла ГДР?",
      "options": [
        "в НАТО",
        "в Рейнском союзе",
        "в Варшавском пакте",
        "в Европейском союзе"
      ],
      "answer": "в Варшавском пакте",
      "keywords": [
        "Militärbündnis - военный союз",
        "DDR - ГДР",
        "Warschauer Pakt - Варшавский пакт"
      ]
    },
    {
      "question_number": 208,
      "question": "Что такое «Штази»?",
      "options": [
        "разведка в «Третьем рейхе»",
        "известное немецкое мемориальное место",
        "разведка ГДР",
        "немецкий спортивный клуб во времена Второй мировой войны"
      ],
      "answer": "разведка ГДР",
      "keywords": ["Stasi - Штази", "Geheimdienst - разведка", "DDR - ГДР"]
    },
    {
      "question_number": 209,
      "question": "Какой был герб Германской Демократической Республики?",
      "image": "/images/209.png",
      "options": ["1", "2", "3", "4"],
      "answer": "4",
      "keywords": [
        "Wappen - герб",
        "Deutsche Demokratische Republik - Германская Демократическая Республика",
        "DDR - ГДР"
      ]
    },
    {
      "question_number": 210,
      "question": "Что произошло 17 июня 1953 года в ГДР?",
      "options": [
        "торжественное присоединение к Варшавскому пакту",
        "всеобщие забастовки и народное восстание",
        "1-й съезд партии СЕПГ",
        "первый визит Фиделя Кастро"
      ],
      "answer": "всеобщие забастовки и народное восстание",
      "keywords": [
        "Volksaufstand - народное восстание",
        "Streiks - забастовки",
        "17. Juni - 17 июня"
      ]
    },
    {
      "question_number": 211,
      "question": "Какой политик связан с «Восточными договорами»?",
      "options": [
        "Хельмут Коль",
        "Вилли Брандт",
        "Михаил Горбачёв",
        "Людвиг Эрхард"
      ],
      "answer": "Вилли Брандт",
      "keywords": [
        "Ostverträge - Восточные договоры",
        "Willy Brandt - Вилли Брандт",
        "Politiker - политик"
      ]
    },
    {
      "question_number": 212,
      "question": "Как полное официальное название Германии?",
      "options": [
        "Федеративное государство Германия",
        "Федеральные земли Германии",
        "Федеративная Республика Германия",
        "Федеральный округ Германия"
      ],
      "answer": "Федеративная Республика Германия",
      "keywords": [
        "Bundesrepublik Deutschland - Федеративная Республика Германия",
        "Name - название"
      ]
    },
    {
      "question_number": 213,
      "question": "Сколько жителей в Германии?",
      "options": [
        "70 миллионов",
        "78 миллионов",
        "83 миллиона",
        "90 миллионов"
      ],
      "answer": "83 миллиона",
      "keywords": [
        "Einwohner - жители",
        "Deutschland - Германия",
        "83 Millionen - 83 миллиона"
      ]
    },
    {
      "question_number": 214,
      "question": "Какие цвета у немецкого флага?",
      "options": [
        "чёрный-красный-золотой",
        "красный-белый-чёрный",
        "чёрный-красный-зелёный",
        "чёрный-жёлтый-красный"
      ],
      "answer": "чёрный-красный-золотой",
      "keywords": [
        "deutsche Flagge - немецкий флаг",
        "schwarz-rot-gold - чёрный-красный-золотой"
      ]
    },
    {
      "question_number": 215,
      "question": "Кто называется «Канцлером немецкого единства»?",
      "options": [
        "Герхард Шрёдер",
        "Хельмут Коль",
        "Конрад Аденауэр",
        "Хельмут Шмидт"
      ],
      "answer": "Хельмут Коль",
      "keywords": [
        "Kanzler der Deutschen Einheit - Канцлер немецкого единства",
        "Helmut Kohl - Хельмут Коль"
      ]
    },
    {
      "question_number": 216,
      "question": "Какой символ можно увидеть в зале заседаний Бундестага?",
      "image": "/images/216.png",
      "options": [
        "Флаг города Берлин",
        "Федеральный орёл",
        "Имперский орёл",
        "Имперская корона"
      ],
      "answer": "Федеральный орёл",
      "keywords": [
        "Bundesadler - федеральный орёл",
        "Deutscher Bundestag - Бундестаг"
      ]
    },
    {
      "question_number": 217,
      "question":
          "В каком периоде существовала Германская Демократическая Республика (ГДР)?",
      "options": ["1919–1927", "1933–1945", "1949–1990", "1945–1961"],
      "answer": "1949–1990",
      "keywords": [
        "Deutsche Demokratische Republik - Германская Демократическая Республика",
        "1949 bis 1990 - 1949 по 1990"
      ]
    },
    {
      "question_number": 218,
      "question":
          "Сколько федеральных земель присоединилось к ФРГ при воссоединении в 1990 году?",
      "options": ["4", "5", "6", "7"],
      "answer": "5",
      "keywords": [
        "Wiedervereinigung - воссоединение",
        "1990 - 1990 год",
        "5 Bundesländer - 5 федеральных земель"
      ]
    },
    {
      "question_number": 219,
      "question":
          "Федеративная Республика Германия имеет современные границы с …",
      "options": ["1933 года.", "1949 года.", "1971 года.", "1990 года."],
      "answer": "1990 года.",
      "keywords": [
        "Grenzen - границы",
        "Bundesrepublik Deutschland - Федеративная Республика Германия",
        "1990 - 1990 год"
      ]
    },
    {
      "question_number": 220,
      "question":
          "27 января — это в Германии официальный день памяти. Чему он посвящён?",
      "options": [
        "окончанию Второй мировой войны",
        "принятию Основного закона",
        "воссоединению Германии",
        "памяти жертв национал-социализма"
      ],
      "answer": "памяти жертв национал-социализма",
      "keywords": [
        "27. Januar - 27 января",
        "Gedenktag - день памяти",
        "Opfer des Nationalsozialismus - жертвы национал-социализма"
      ]
    },
    {
      "question_number": 221,
      "question":
          "Германия является участником Шенгенского соглашения. Что это значит?",
      "options": [
        "Немцы могут путешествовать по многим странам Европы без паспортного контроля.",
        "Все люди могут въезжать в Германию без проверки документов.",
        "Немцы могут без паспортного контроля путешествовать в любую страну.",
        "Немцы могут расплачиваться евро в любой стране."
      ],
      "answer":
          "Немцы могут путешествовать по многим странам Европы без паспортного контроля.",
      "keywords": [
        "Schengener Abkommen - Шенгенское соглашение",
        "Passkontrolle - паспортный контроль",
        "reisen - путешествовать"
      ]
    },
    {
      "question_number": 222,
      "question": "Какая страна является соседом Германии?",
      "options": ["Венгрия", "Португалия", "Испания", "Швейцария"],
      "answer": "Швейцария",
      "keywords": [
        "Nachbarland - соседняя страна",
        "Deutschland - Германия",
        "Schweiz - Швейцария"
      ]
    },
    {
      "question_number": 223,
      "question": "Какая страна является соседом Германии?",
      "options": ["Румыния", "Болгария", "Польша", "Греция"],
      "answer": "Польша",
      "keywords": ["Nachbarland - соседняя страна", "Polen - Польша"]
    },
    {
      "question_number": 224,
      "question": "Что означает аббревиатура ЕС?",
      "options": [
        "Европейские предприятия",
        "Европейский союз",
        "Единый союз",
        "Евро союз"
      ],
      "answer": "Европейский союз",
      "keywords": [
        "EU - Европейский союз",
        "Europäische Union - Европейский союз"
      ]
    },
    {
      "question_number": 225,
      "question":
          "В какой другой стране проживает большая немецкоязычная община?",
      "options": ["Чехия", "Норвегия", "Испания", "Австрия"],
      "answer": "Австрия",
      "keywords": [
        "deutschsprachige Bevölkerung - немецкоязычное население",
        "Österreich - Австрия"
      ]
    },
    {
      "question_number": 226,
      "question": "Какой флаг является флагом Европейского союза?",
      "image": "/images/226.png",
      "options": ["2", "1", "4", "3"],
      "answer": "2",
      "keywords": ["Flagge der Europäischen Union - флаг Европейского союза"]
    },
    {
      "question_number": 227,
      "question": "Какая страна является соседом Германии?",
      "options": ["Финляндия", "Дания", "Норвегия", "Швеция"],
      "answer": "Дания",
      "keywords": ["Nachbarland - соседняя страна", "Dänemark - Дания"]
    },
    {
      "question_number": 228,
      "question": "Как называется присоединение ГДР к ФРГ в 1990 году?",
      "options": [
        "Расширение НАТО на восток",
        "Расширение ЕС на восток",
        "Европейское сообщество",
        "Объединение Германии"
      ],
      "answer": "Объединение Германии",
      "keywords": [
        "Beitritt - присоединение",
        "Deutsche Wiedervereinigung - объединение Германии"
      ]
    },
    {
      "question_number": 229,
      "question": "Какая страна является соседом Германии?",
      "options": ["Испания", "Болгария", "Норвегия", "Люксембург"],
      "answer": "Люксембург",
      "keywords": ["Nachbarland - соседняя страна", "Luxemburg - Люксембург"]
    },
    {
      "question_number": 230,
      "question": "Как часто проходят выборы в Европейский парламент?",
      "options": [
        "каждые 5 лет.",
        "каждые 6 лет.",
        "каждые 7 лет.",
        "каждые 8 лет."
      ],
      "answer": "каждые 5 лет.",
      "keywords": [
        "Europäisches Parlament - Европейский парламент",
        "Wahl - выборы",
        "5 Jahre - 5 лет"
      ]
    },
    {
      "question_number": 231,
      "question": "Что означает термин «европейская интеграция»?",
      "options": [
        "Это означает американских иммигрантов в Европе.",
        "Это означает запрет на иммиграцию в Европу.",
        "Это означает европейских эмигрантов в США.",
        "Это означает объединение европейских государств в ЕС."
      ],
      "answer": "Это означает объединение европейских государств в ЕС.",
      "keywords": [
        "europäische Integration - европейская интеграция",
        "Zusammenschluss - объединение",
        "europäische Staaten - европейские государства"
      ]
    },
    {
      "question_number": 232,
      "question": "Кого выбирают на выборах в Европарламент?",
      "options": [
        "Европейскую комиссию",
        "Страны, которые могут вступить в ЕС",
        "Европейскую конституцию",
        "Депутатов Европейского парламента"
      ],
      "answer": "Депутатов Европейского парламента",
      "keywords": [
        "Europawahl - выборы в Европарламент",
        "Abgeordnete - депутаты",
        "Europäisches Parlament - Европейский парламент"
      ]
    },
    {
      "question_number": 233,
      "question": "Какая страна является соседом Германии?",
      "options": ["Чехия", "Болгария", "Греция", "Португалия"],
      "answer": "Чехия",
      "keywords": ["Nachbarland - соседняя страна", "Tschechien - Чехия"]
    },
    {
      "question_number": 234,
      "question": "Где находится штаб-квартира Европейского парламента?",
      "options": ["Лондон", "Париж", "Берлин", "Страсбург"],
      "answer": "Страсбург",
      "keywords": [
        "Sitz - местонахождение",
        "Europäisches Parlament - Европейский парламент",
        "Straßburg - Страсбург"
      ]
    },
    {
      "question_number": 235,
      "question":
          "Французский президент Франсуа Миттеран и немецкий канцлер Хельмут Коль вместе почтили память погибших в обеих мировых войнах в Вердене. Какую цель ЕС это подчёркивает?",
      "options": [
        "Дружбу между Англией и Германией",
        "Свободу передвижения по всем странам ЕС",
        "Мир и безопасность в странах ЕС",
        "Единые праздники в странах ЕС"
      ],
      "answer": "Мир и безопасность в странах ЕС",
      "keywords": [
        "François Mitterrand - Франсуа Миттеран",
        "Helmut Kohl - Хельмут Коль",
        "Frieden und Sicherheit - мир и безопасность",
        "Europäische Union - Европейский союз"
      ]
    },
    {
      "question_number": 236,
      "question": "Сколько стран-участниц в ЕС сегодня?",
      "options": ["21", "23", "25", "27"],
      "answer": "27",
      "keywords": [
        "Mitgliedstaaten - страны-участницы",
        "Europäische Union - Европейский союз",
        "27 - 27"
      ]
    },
    {
      "question_number": 237,
      "question":
          "В 2007 году отмечалось 50-летие «Римских договоров». Что было содержанием этих договоров?",
      "options": [
        "Присоединение Германии к НАТО",
        "Создание Европейского экономического сообщества (ЕЭС)",
        "Обязательство Германии выплачивать репарации",
        "Определение линии Одер-Нейсе как восточной границы"
      ],
      "answer": "Создание Европейского экономического сообщества (ЕЭС)",
      "keywords": [
        "Römische Verträge - Римские договоры",
        "Europäische Wirtschaftsgemeinschaft (EWG) - Европейское экономическое сообщество"
      ]
    },
    {
      "question_number": 238,
      "question": "В каких местах работает Европейский парламент?",
      "options": [
        "Париж, Лондон и Гаага",
        "Страсбург, Люксембург и Брюссель",
        "Рим, Берн и Вена",
        "Бонн, Цюрих и Милан"
      ],
      "answer": "Страсбург, Люксембург и Брюссель",
      "keywords": [
        "Arbeitsorte - места работы",
        "Europäisches Parlament - Европейский парламент",
        "Straßburg - Страсбург",
        "Luxemburg - Люксембург",
        "Brüssel - Брюссель"
      ]
    },
    {
      "question_number": 239,
      "question":
          "Какими договорами ФРГ объединилась с другими государствами в Европейское экономическое сообщество?",
      "options": [
        "Гамбургскими договорами",
        "Римскими договорами",
        "Парижскими договорами",
        "Лондонскими договорами"
      ],
      "answer": "Римскими договорами",
      "keywords": [
        "Römische Verträge - Римские договоры",
        "Europäische Wirtschaftsgemeinschaft - Европейское экономическое сообщество",
        "Bundesrepublik Deutschland - Федеративная Республика Германия"
      ]
    },
    {
      "question_number": 240,
      "question":
          "С какого года в Германии можно расплачиваться евро наличными?",
      "options": ["1995", "1998", "2002", "2005"],
      "answer": "2002",
      "keywords": [
        "Euro - евро",
        "Bargeld - наличные деньги",
        "2002 - 2002 год"
      ]
    },
    {
      "question_number": 241,
      "question":
          "Госпожа Зегер ожидает ребёнка. Что ей нужно сделать, чтобы получать пособие по уходу за ребёнком (Elterngeld)?",
      "options": [
        "Она должна написать в свою медицинскую страховку.",
        "Она ничего не должна делать, пособие выплачивается автоматически.",
        "Она должна подать заявление в ведомство по выплате пособия по уходу за ребёнком.",
        "Она должна попросить разрешение в службе занятости."
      ],
      "answer":
          "Она должна подать заявление в ведомство по выплате пособия по уходу за ребёнком.",
      "keywords": [
        "Elterngeld - пособие по уходу за ребёнком",
        "Antrag - заявление",
        "Elterngeldstelle - ведомство по выплате пособия"
      ]
    },
    {
      "question_number": 242,
      "question": "Кто решает, ходит ли ребёнок в детский сад в Германии?",
      "options": [
        "государство",
        "федеральные земли",
        "родители / опекуны",
        "школы"
      ],
      "answer": "родители / опекуны",
      "keywords": [
        "Kindergarten - детский сад",
        "Eltern - родители",
        "Erziehungsberechtigte - опекуны"
      ]
    },
    {
      "question_number": 243,
      "question":
          "Майк и Сибилла хотят провести демонстрацию на улице в своём немецком городе. Что они должны сделать заранее?",
      "options": [
        "Ничего не нужно делать. В Германии можно демонстрировать в любое время и в любом месте.",
        "Они должны зарегистрировать демонстрацию.",
        "Ничего не могут сделать, так как демонстрации в Германии запрещены.",
        "Майк и Сибилла должны создать новый клуб, потому что демонстрировать могут только клубы."
      ],
      "answer": "Они должны зарегистрировать демонстрацию.",
      "keywords": [
        "Demonstration - демонстрация",
        "anmelden - зарегистрировать"
      ]
    },
    {
      "question_number": 244,
      "question":
          "Какой школьный аттестат обычно нужен, чтобы поступить в университет в Германии?",
      "options": [
        "Аттестат о среднем образовании (Abitur)",
        "Диплом",
        "Прокура",
        "Экзамен на звание подмастерья"
      ],
      "answer": "Аттестат о среднем образовании (Abitur)",
      "keywords": [
        "Schulabschluss - школьный аттестат",
        "Abitur - аттестат о среднем образовании"
      ]
    },
    {
      "question_number": 245,
      "question": "Кто в Германии не имеет права жить вместе как пара?",
      "options": [
        "Ганс (20 лет) и Мари (19 лет)",
        "Том (20 лет) и Клаус (45 лет)",
        "Софи (35 лет) и Лиза (40 лет)",
        "Анна (13 лет) и Тим (25 лет)"
      ],
      "answer": "Анна (13 лет) и Тим (25 лет)",
      "keywords": [
        "zusammenleben - жить вместе",
        "Minderjährige - несовершеннолетние"
      ]
    },
    {
      "question_number": 246,
      "question":
          "С какого возраста в Германии человек считается совершеннолетним?",
      "options": ["16", "18", "19", "21"],
      "answer": "18",
      "keywords": ["volljährig - совершеннолетний", "18 Jahre - 18 лет"]
    },
    {
      "question_number": 247,
      "question":
          "Беременная женщина в Германии перед родами и после родов находится под особой защитой закона. Как называется эта защита?",
      "options": [
        "Декретный отпуск",
        "Подготовка к родам",
        "Защита материнства",
        "Послеродовый период"
      ],
      "answer": "Защита материнства",
      "keywords": ["Mutterschutz - защита материнства", "Geburt - роды"]
    },
    {
      "question_number": 248,
      "question": "Воспитание детей в Германии прежде всего является задачей …",
      "options": ["государства.", "родителей.", "бабушек и дедушек.", "школ."],
      "answer": "родителей.",
      "keywords": ["Erziehung - воспитание", "Eltern - родители"]
    },
    {
      "question_number": 249,
      "question":
          "Кто в Германии несёт основную ответственность за воспитание детей?",
      "options": ["государство", "родители", "родственники", "школы"],
      "answer": "родители",
      "keywords": [
        "verantwortlich - ответственный",
        "Kindererziehung - воспитание детей"
      ]
    },
    {
      "question_number": 250,
      "question":
          "В Германии лучшие шансы на хорошо оплачиваемую работу имеют те, кто …",
      "options": ["католик.", "хорошо образован.", "женщина.", "член партии."],
      "answer": "хорошо образован.",
      "keywords": [
        "gut ausgebildet - хорошо образован",
        "Arbeitsplatz - рабочее место"
      ]
    },
    {
      "question_number": 251,
      "question": "Если в Германии ударить ребёнка, …",
      "options": [
        "это никого не касается.",
        "это касается только семьи.",
        "за это нельзя быть наказанным.",
        "за это можно быть наказанным."
      ],
      "answer": "за это можно быть наказанным.",
      "keywords": [
        "Kind schlagen - ударить ребёнка",
        "bestraft werden - быть наказанным"
      ]
    },
    {
      "question_number": 252,
      "question": "В Германии …",
      "options": [
        "можно быть женатым только на одном партнёре одновременно.",
        "можно иметь нескольких супругов одновременно.",
        "нельзя снова жениться после первого брака.",
        "женщина не может снова выйти замуж после смерти мужа."
      ],
      "answer": "можно быть женатым только на одном партнёре одновременно.",
      "keywords": [
        "verheiratet - женатый / замужем",
        "ein Partner / eine Partnerin - один партнёр"
      ]
    },
    {
      "question_number": 253,
      "question": "Куда нужно обращаться при переезде в Германии?",
      "options": [
        "в паспортный стол",
        "в отдел регистрации актов гражданского состояния",
        "в управление общественного порядка",
        "в торговую палату"
      ],
      "answer": "в паспортный стол",
      "keywords": [
        "Einwohnermeldeamt - паспортный стол",
        "anmelden - зарегистрироваться"
      ]
    },
    {
      "question_number": 254,
      "question":
          "В Германии супруги могут развестись. Обычно им нужно пройти «год раздельного проживания». Что это значит?",
      "options": [
        "Процесс развода длится год.",
        "Через год после свадьбы можно развестись.",
        "Право посещения детей действует один год.",
        "Муж и жена ведут раздельную жизнь не менее года, после чего возможен развод."
      ],
      "answer":
          "Муж и жена ведут раздельную жизнь не менее года, после чего возможен развод.",
      "keywords": [
        "Trennungsjahr - год раздельного проживания",
        "Scheidung - развод"
      ]
    },
    {
      "question_number": 255,
      "question":
          "При проблемах с воспитанием детей родители в Германии могут обратиться за помощью в …",
      "options": [
        "отдел общественного порядка.",
        "школьное управление.",
        "службу по делам молодёжи.",
        "службу здравоохранения."
      ],
      "answer": "службу по делам молодёжи.",
      "keywords": ["Jugendamt - служба по делам молодёжи", "Hilfe - помощь"]
    },
    {
      "question_number": 256,
      "question":
          "Пара хочет открыть ресторан в Германии. Что им обязательно нужно для этого?",
      "options": [
        "разрешение полиции",
        "разрешение партии",
        "разрешение от паспортного стола",
        "разрешение на ресторан от компетентного органа"
      ],
      "answer": "разрешение на ресторан от компетентного органа",
      "keywords": [
        "Gaststättenerlaubnis - разрешение на ресторан",
        "Behörde - ведомство"
      ]
    },
    {
      "question_number": 257,
      "question":
          "Взрослая женщина хочет получить аттестат зрелости в Германии. Где она может это сделать?",
      "options": [
        "в высшей школе.",
        "в вечерней гимназии.",
        "в основной школе.",
        "в частном университете."
      ],
      "answer": "в вечерней гимназии.",
      "keywords": [
        "Abitur - аттестат зрелости",
        "Abendgymnasium - вечерняя гимназия"
      ]
    },
    {
      "question_number": 258,
      "question": "Что может делать служба по делам молодёжи в Германии?",
      "options": [
        "Решать, в какую школу пойдёт ребёнок.",
        "Забирать ребёнка из семьи, если его бьют или морят голодом.",
        "Выплачивать родителям детские пособия.",
        "Контролировать посещение детского сада."
      ],
      "answer": "Забирать ребёнка из семьи, если его бьют или морят голодом.",
      "keywords": [
        "Jugendamt - служба по делам молодёжи",
        "Kinderschutz - защита детей"
      ]
    },
    {
      "question_number": 259,
      "question":
          "Центр профориентации BIZ при Федеральном агентстве занятости в Германии помогает в …",
      "options": [
        "расчёте пенсий.",
        "поиске ученических мест.",
        "подготовке налоговой декларации.",
        "медицинском страховании."
      ],
      "answer": "поиске ученических мест.",
      "keywords": [
        "Berufsinformationszentrum (BIZ) - центр профориентации",
        "Lehrstellensuche - поиск ученического места"
      ]
    },
    {
      "question_number": 260,
      "question": "В школе в Германии ребёнок обязан …",
      "options": [
        "иметь неограниченное свободное время.",
        "самостоятельно выбирать все предметы.",
        "платить за обучение.",
        "посещать занятия обязательно."
      ],
      "answer": "посещать занятия обязательно.",
      "keywords": [
        "Anwesenheitspflicht - обязательное посещение",
        "Schule - школа"
      ]
    },
    {
      "question_number": 261,
      "question":
          "Мужчина хочет в 30 лет получить аттестат зрелости в Германии. Где он может это сделать? В …",
      "options": [
        "в высшей школе",
        "в вечерней гимназии",
        "в основной школе",
        "в частном университете"
      ],
      "answer": "в вечерней гимназии",
      "keywords": [
        "Abitur - аттестат зрелости",
        "Abendgymnasium - вечерняя гимназия"
      ]
    },
    {
      "question_number": 262,
      "question": "Что означает в Германии принцип равного обращения?",
      "options": [
        "Никто не должен быть ущемлён, например, из-за инвалидности.",
        "Можно ущемлять других людей, если есть личные причины.",
        "Нельзя подавать в суд на тех, кто ущемляет других.",
        "По закону нужно ежегодно жертвовать деньги ущемлённым группам."
      ],
      "answer": "Никто не должен быть ущемлён, например, из-за инвалидности.",
      "keywords": [
        "Gleichbehandlung - равное обращение",
        "Benachteiligung - ущемление"
      ]
    },
    {
      "question_number": 263,
      "question":
          "В Германии подростки с 14 лет считаются уголовно ответственными. Что это значит?",
      "options": [
        "Их можно наказать.",
        "Их судят как взрослых.",
        "Наказание делится с родителями.",
        "Их не наказывают."
      ],
      "answer": "Их можно наказать.",
      "keywords": [
        "strafmündig - уголовная ответственность",
        "Jugendliche - подростки"
      ]
    },
    {
      "question_number": 264,
      "question":
          "На какой праздник в Германии люди надевают яркие костюмы и маски?",
      "options": [
        "на Розовый понедельник",
        "на Первомай",
        "на Октоберфест",
        "на Троицу"
      ],
      "answer": "на Розовый понедельник",
      "keywords": [
        "bunte Kostüme - яркие костюмы",
        "Rosenmontag - Розовый понедельник"
      ]
    },
    {
      "question_number": 265,
      "question":
          "Куда нужно сначала обратиться в Германии, если хотите пожениться?",
      "options": [
        "в паспортный стол",
        "в управление общественного порядка",
        "в агентство по трудоустройству",
        "в загс"
      ],
      "answer": "в загс",
      "keywords": ["heiraten - жениться", "Standesamt - загс"]
    },
    {
      "question_number": 266,
      "question":
          "Когда в Германии начинается установленное законом ночное время тишины?",
      "options": [
        "когда садится солнце",
        "в 22:00",
        "когда соседи ложатся спать",
        "в полночь"
      ],
      "answer": "в 22:00",
      "keywords": ["Nachtruhe - ночное время тишины", "22 Uhr - 22:00"]
    },
    {
      "question_number": 267,
      "question":
          "Молодая женщина в Германии, 22 года, живёт со своим другом. Родители против. Что они могут сделать?",
      "options": [
        "Они должны уважать решение совершеннолетней дочери.",
        "Они имеют право вернуть дочь домой.",
        "Они могут сообщить в полицию.",
        "Они ищут другого мужчину для дочери."
      ],
      "answer": "Они должны уважать решение совершеннолетней дочери.",
      "keywords": ["volljährig - совершеннолетний", "respektieren - уважать"]
    },
    {
      "question_number": 268,
      "question":
          "Молодая женщина хочет получить водительские права, но боится экзамена, потому что её родной язык — не немецкий. Что правильно?",
      "options": [
        "Она должна прожить в Германии минимум 10 лет, чтобы получить права.",
        "Она может пройти теоретический экзамен, возможно, на родном языке.",
        "Без знания немецкого она не может получить права.",
        "Она должна получить права в стране её языка."
      ],
      "answer":
          "Она может пройти теоретический экзамен, возможно, на родном языке.",
      "keywords": [
        "Führerschein - водительские права",
        "Theorie-Prüfung - теоретический экзамен",
        "Muttersprache - родной язык"
      ]
    },
    {
      "question_number": 269,
      "question":
          "В Германии дети с трёх лет до начала школьного обучения имеют право на …",
      "options": [
        "ежемесячные карманные деньги.",
        "место в детском саду.",
        "место в спортивном клубе.",
        "льготный пропуск на каникулы."
      ],
      "answer": "место в детском саду.",
      "keywords": [
        "Anspruch - право",
        "Kindergartenplatz - место в детском саду"
      ]
    },
    {
      "question_number": 270,
      "question":
          "Что такое народный университет (Volkshochschule) в Германии?",
      "options": [
        "учреждение религиозного образования",
        "только для подростков",
        "для повышения квалификации",
        "только для пенсионеров"
      ],
      "answer": "для повышения квалификации",
      "keywords": [
        "Volkshochschule - народный университет",
        "Weiterbildung - повышение квалификации"
      ]
    },
    {
      "question_number": 271,
      "question": "Какой обычай существует в Германии на Рождество?",
      "options": [
        "прятать разноцветные яйца",
        "украшать ёлку",
        "надевать маски и костюмы",
        "ставить тыквы у двери"
      ],
      "answer": "украшать ёлку",
      "keywords": [
        "Weihnachten - Рождество",
        "Tannenbaum schmücken - украшать ёлку"
      ]
    },
    {
      "question_number": 272,
      "question": "Какая форма совместной жизни в Германии запрещена?",
      "options": [
        "Мужчина и женщина разведены и живут с новыми партнёрами.",
        "Две женщины живут вместе.",
        "Отец-одиночка живёт с двумя детьми.",
        "Мужчина женат одновременно на двух женщинах."
      ],
      "answer": "Мужчина женат одновременно на двух женщинах.",
      "keywords": [
        "Lebensform - форма совместной жизни",
        "verheiratet mit zwei Frauen - женат на двух женщинах"
      ]
    },
    {
      "question_number": 273,
      "question": "При проблемах с воспитанием в Германии нужно обратиться …",
      "options": [
        "к врачу.",
        "в отдел здравоохранения.",
        "в паспортный стол.",
        "в службу по делам молодёжи."
      ],
      "answer": "в службу по делам молодёжи.",
      "keywords": [
        "Erziehungsprobleme - проблемы воспитания",
        "Jugendamt - служба по делам молодёжи"
      ]
    },
    {
      "question_number": 274,
      "question":
          "Вы в Германии специально открыли чужое письмо. Какое право вы нарушили?",
      "options": [
        "право на молчание",
        "тайну переписки",
        "обязанность молчания",
        "свободу мнения"
      ],
      "answer": "тайну переписки",
      "keywords": [
        "Briefgeheimnis - тайна переписки",
        "Brief öffnen - открыть письмо"
      ]
    },
    {
      "question_number": 275,
      "question": "Что нужно для развода в Германии?",
      "options": [
        "согласие родителей",
        "справку от врача",
        "согласие детей",
        "помощь адвоката"
      ],
      "answer": "помощь адвоката",
      "keywords": ["Ehescheidung - развод", "Anwalt / Anwältin - адвокат"]
    },
    {
      "question_number": 276,
      "question":
          "Что следует сделать, если вас плохо обслужили в немецком учреждении?",
      "options": [
        "Ничего нельзя сделать.",
        "Нужно терпеть такое обращение.",
        "Угрожать сотруднику.",
        "Пожаловаться начальнику учреждения."
      ],
      "answer": "Пожаловаться начальнику учреждения.",
      "keywords": [
        "Beschwerde - жалоба",
        "Behördenleiter - начальник учреждения"
      ]
    },
    {
      "question_number": 277,
      "question":
          "Женщина с двухлетним ребёнком подаёт заявление на работу в Германии. Что будет примером дискриминации?",
      "options": [
        "Она не говорит по-английски.",
        "У неё завышенные требования по зарплате.",
        "У неё нет опыта в профессии.",
        "Ей отказали, потому что она мать."
      ],
      "answer": "Ей отказали, потому что она мать.",
      "keywords": ["Diskriminierung - дискриминация", "Mutter - мать"]
    },
    {
      "question_number": 278,
      "question":
          "Мужчина на инвалидной коляске подал заявку на должность бухгалтера. Что будет примером дискриминации?",
      "options": [
        "Он в инвалидной коляске.",
        "У него нет опыта.",
        "Он требует слишком высокую зарплату.",
        "Он не говорит по-английски."
      ],
      "answer": "Он в инвалидной коляске.",
      "keywords": [
        "Rollstuhl - инвалидная коляска",
        "Diskriminierung - дискриминация"
      ]
    },
    {
      "question_number": 279,
      "question":
          "В большинстве многоквартирных домов Германии есть «домовые правила». Что в них указано?",
      "options": [
        "Правила пользования общественным транспортом.",
        "Все арендаторы дома.",
        "Правила для всех жильцов дома.",
        "Адрес ближайшего управления порядка."
      ],
      "answer": "Правила для всех жильцов дома.",
      "keywords": ["Hausordnung - домовые правила", "Regeln - правила"]
    },
    {
      "question_number": 280,
      "question":
          "Если вы хотите оспорить ошибочное налоговое уведомление в Германии, вы должны …",
      "options": [
        "ничего не делать.",
        "выбросить уведомление.",
        "подать возражение.",
        "подождать другого уведомления."
      ],
      "answer": "подать возражение.",
      "keywords": [
        "Steuerbescheid - налоговое уведомление",
        "Einspruch einlegen - подать возражение"
      ]
    },
    {
      "question_number": 281,
      "question":
          "Двух друзей с тёмной кожей не пустили в общественный бассейн в Германии. Какое право в этой ситуации нарушено? Право на …",
      "options": [
        "свободу мнения.",
        "равное обращение.",
        "свободу собраний.",
        "свободу передвижения."
      ],
      "answer": "равное обращение.",
      "keywords": ["Gleichbehandlung - равное обращение", "Recht - право"]
    },
    {
      "question_number": 282,
      "question":
          "Какую общественную обязанность должны выполнять граждане Германии по требованию?",
      "options": [
        "тренер в клубе",
        "библиотекарь",
        "помощник на выборах",
        "учитель"
      ],
      "answer": "помощник на выборах",
      "keywords": [
        "Ehrenamt - общественная обязанность",
        "Wahlhelfer - помощник на выборах"
      ]
    },
    {
      "question_number": 283,
      "question":
          "Что делать, если вы получили неправильный счёт из немецкого ведомства?",
      "options": [
        "Ничего не делать.",
        "Подать возражение в ведомство.",
        "Отправить счёт обратно в ведомство.",
        "Отнести счёт в налоговую."
      ],
      "answer": "Подать возражение в ведомство.",
      "keywords": [
        "falsche Rechnung - неправильный счёт",
        "Widerspruch - возражение"
      ]
    },
    {
      "question_number": 284,
      "question":
          "Что можно сделать, если требования к работе быстро меняются?",
      "options": [
        "Неважно, чему учиться.",
        "Детям в школе учат всему, дальше учиться не нужно.",
        "Взрослым нужно учиться всю жизнь.",
        "Нужно раньше уходить на пенсию."
      ],
      "answer": "Взрослым нужно учиться всю жизнь.",
      "keywords": ["Weiterlernen - продолжать учиться", "Erwachsene - взрослые"]
    },
    {
      "question_number": 285,
      "question":
          "Госпожа Фрост работает штатным сотрудником в офисе. Что она не должна платить из своей зарплаты?",
      "options": [
        "налог с оборота",
        "подоходный налог",
        "взносы на страхование от безработицы",
        "взносы на пенсионное и медицинское страхование"
      ],
      "answer": "налог с оборота",
      "keywords": ["Umsatzsteuer - налог с оборота", "Gehalt - зарплата"]
    },
    {
      "question_number": 286,
      "question":
          "Какая организация на предприятии помогает работникам при проблемах с работодателем?",
      "options": [
        "производственный совет",
        "производственный инспектор",
        "производственная группа",
        "производственный менеджмент"
      ],
      "answer": "производственный совет",
      "keywords": [
        "Betriebsrat - производственный совет",
        "Arbeitnehmer - работник"
      ]
    },
    {
      "question_number": 287,
      "question":
          "Вы хотите прекратить трудовой договор в Германии. Что нужно учесть?",
      "options": [
        "выплату зарплаты",
        "рабочее время",
        "срок уведомления о расторжении",
        "обязанность страхования"
      ],
      "answer": "срок уведомления о расторжении",
      "keywords": [
        "Kündigungsfrist - срок уведомления о расторжении",
        "Arbeitsverhältnis - трудовой договор"
      ]
    },
    {
      "question_number": 288,
      "question":
          "В каком учреждении обычно нужно регистрировать собаку в Германии?",
      "options": [
        "в налоговой",
        "в паспортном столе",
        "в городской или муниципальной администрации",
        "в отделе здравоохранения"
      ],
      "answer": "в городской или муниципальной администрации",
      "keywords": [
        "Hund anmelden - зарегистрировать собаку",
        "Kommune - муниципалитет"
      ]
    },
    {
      "question_number": 289,
      "question":
          "Мужчина с тёмной кожей подал заявку на работу официантом в ресторане в Германии. Что является примером дискриминации?",
      "options": [
        "у него слабые знания немецкого языка.",
        "он требует слишком высокую зарплату.",
        "у него тёмная кожа.",
        "у него нет опыта."
      ],
      "answer": "у него тёмная кожа.",
      "keywords": ["Diskriminierung - дискриминация", "Hautfarbe - цвет кожи"]
    },
    {
      "question_number": 290,
      "question":
          "Вы купили телевизор в Германии. Дома оказалось, что он не работает. Что вы можете сделать?",
      "options": [
        "написать жалобу",
        "предъявить претензию",
        "поменять устройство без согласования",
        "продлить гарантию"
      ],
      "answer": "предъявить претензию",
      "keywords": [
        "Fernseher reklamieren - предъявить претензию на телевизор",
        "Garantie - гарантия"
      ]
    },
    {
      "question_number": 291,
      "question":
          "Почему в налоговой декларации в Германии нужно указывать принадлежность к церкви?",
      "options": [
        "для статистики",
        "потому что существует церковный налог, связанный с подоходным налогом",
        "потому что без церкви нужно платить больше налогов",
        "потому что церковь отвечает за налоговую декларацию"
      ],
      "answer":
          "потому что существует церковный налог, связанный с подоходным налогом",
      "keywords": [
        "Kirchensteuer - церковный налог",
        "Steuererklärung - налоговая декларация"
      ]
    },
    {
      "question_number": 292,
      "question":
          "В Германии люди живут по принципу религиозной терпимости. Что это значит?",
      "options": [
        "Нельзя строить мечети.",
        "Все должны верить в Бога.",
        "Каждый может верить, во что хочет.",
        "Государство решает, в какого Бога верить."
      ],
      "answer": "Каждый может верить, во что хочет.",
      "keywords": [
        "religiöse Toleranz - религиозная терпимость",
        "Glaubensfreiheit - свобода вероисповедания"
      ]
    },
    {
      "question_number": 293,
      "question": "Какой обычай существует в Германии на Пасху?",
      "options": [
        "ставить тыквы у двери",
        "украшать ёлку",
        "раскрашивать яйца",
        "запускать ракеты"
      ],
      "answer": "раскрашивать яйца",
      "keywords": ["Ostern - Пасха", "Eier bemalen - раскрашивать яйца"]
    },
    {
      "question_number": 294,
      "question": "Пятидесятница — это …",
      "options": [
        "христианский праздник.",
        "день памяти в Германии.",
        "международный день траура.",
        "баварский обычай."
      ],
      "answer": "христианский праздник.",
      "keywords": [
        "Pfingsten - Пятидесятница",
        "christlicher Feiertag - христианский праздник"
      ]
    },
    {
      "question_number": 295,
      "question": "Какая религия сформировала европейскую и немецкую культуру?",
      "options": ["индуизм", "христианство", "буддизм", "ислам"],
      "answer": "христианство",
      "keywords": [
        "Christentum - христианство",
        "Kultur geprägt - сформировала культуру"
      ]
    },
    {
      "question_number": 296,
      "question":
          "Как называется в Германии период последних четырёх недель перед Рождеством?",
      "options": [
        "День покаяния и молитвы",
        "Праздник урожая",
        "Адвент",
        "День всех святых"
      ],
      "answer": "Адвент",
      "keywords": ["Adventszeit - Адвент", "Weihnachten - Рождество"]
    },
    {
      "question_number": 297,
      "question": "Из какой страны прибыло больше всего мигрантов в Германию?",
      "options": ["Италия", "Польша", "Марокко", "Турция"],
      "answer": "Турция",
      "keywords": ["Migranten - мигранты", "Türkei - Турция"]
    },
    {
      "question_number": 298,
      "question": "Из каких стран в основном приезжали мигранты в ГДР?",
      "options": [
        "Вьетнам, Польша, Мозамбик",
        "Франция, Румыния, Сомали",
        "Чили, Венгрия, Зимбабве",
        "Северная Корея, Мексика, Египет"
      ],
      "answer": "Вьетнам, Польша, Мозамбик",
      "keywords": [
        "Migranten - мигранты",
        "DDR - ГДР",
        "Vietnam, Polen, Mosambik - Вьетнам, Польша, Мозамбик"
      ]
    },
    {
      "question_number": 299,
      "question":
          "Как называли иностранных рабочих, которых в 1950–1960-х годах приглашали в ФРГ?",
      "options": [
        "нелегальные рабочие",
        "гастарбайтеры",
        "временные рабочие",
        "работающие по сменам"
      ],
      "answer": "гастарбайтеры",
      "keywords": [
        "Gastarbeiter - гастарбайтеры",
        "Bundesrepublik Deutschland - Федеративная Республика Германия"
      ]
    },
    {
      "question_number": 300,
      "question":
          "Из какой страны прибыли первые гастарбайтеры в Федеративную Республику Германия?",
      "options": ["Италия", "Испания", "Португалия", "Турция"],
      "answer": "Италия",
      "keywords": ["Gastarbeiter - гастарбайтеры", "Italien - Италия"]
    },
  // ... Добавь все оставшиеся вопросы сюда
];

export const questions: QuestionsMap = {
  'Baden-Württemberg': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Baden-Württemberg?",
        "image":
            "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/6wsqtbodafug/301.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Baden-Württemberg?",
        "options": [
          "Mecklenburgische Seenplatte",
          "Neckar-Odenwald-Kreis",
          "Nordfriesland",
          "Altötting"
        ],
        "answer": "Neckar-Odenwald-Kreis"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Baden-Württemberg gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Baden-Württemberg bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Baden-Württemberg?",
        "options": [
          "blau-weiß-rot",
          "schwarz-gold",
          "weiß-blau",
          "grün-weiß-rot"
        ],
        "answer": "schwarz-gold"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Baden-Württemberg über politische Themen informieren?",
        "options": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung",
          "bei den Kirchen"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Baden-Württemberg heißt ...",
        "options": ["Heidelberg", "Stuttgart", "Karlsruhe", "Mannheim"],
        "answer": "Stuttgart"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Baden-Württemberg?",
        "image": "/images/308.png",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Baden-Württemberg?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Baden-Württemberg nicht?",
        "options": [
          "Finanzminister / Finanzministerin",
          "Justizminister / Justizministerin",
          "Innenminister / Innenministerin",
          "Außenminister / Außenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Bayern': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Freistaat Bayern?",
        "image": "/images/311.png",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Bayern?",
        "options": [
          "Prignitz",
          "Rhein-Sieg-Kreis",
          "Nordfriesland",
          "Altötting"
        ],
        "answer": "Altötting"
      },
      {
        "question_number": 3,
        "question": "Für wie viele Jahre wird der Landtag in Bayern gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Bayern bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "18"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Bayern?",
        "options": [
          "blau-weiß-rot",
          "weiß-blau",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "answer": "weiß-blau"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Bayern über politische Themen informieren?",
        "options": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale",
          "bei den Kirchen"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Bayern heißt ...",
        "options": ["Ingolstadt", "Regensburg", "Nürnberg", "München"],
        "answer": "München"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Bayern?",
        "image": "/images/318.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Bayern?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question": "Welchen Minister / welche Ministerin hat Bayern nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Berlin': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Berlin?",
        "image":
            "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/6wsqtbodafug/301.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Bezirk von Berlin?",
        "options": [
          "Altona",
          "Prignitz",
          "Pankow",
          "Mecklenburgische Seenplatte"
        ],
        "answer": "Pankow"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird das Landesparlament in Berlin gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Berlin?",
        "options": [
          "blau-weiß-rot",
          "weiß-rot",
          "grün-weiß-rot",
          "schwarz-gold"
        ],
        "answer": "weiß-rot"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Berlin über politische Themen informieren?",
        "options": [
          "beim Ordnungsamt der Gemeinde",
          "bei den Kirchen",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Welches Bundesland ist ein Stadtstaat?",
        "options": ["Berlin", "Saarland", "Brandenburg", "Hessen"],
        "answer": "Berlin"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Berlin?",
        "image":
            "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/lebenindeutchland-aq2xl4/assets/zx7aans2idtu/308.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin des Stadtstaates Berlin?",
        "options": [
          "Ministerpräsident / Ministerpräsidentin",
          "Oberbürgermeister / Oberbürgermeisterin",
          "Präsident / Präsidentin des Senats",
          "Regierender Bürgermeister / Regierende Bürgermeisterin"
        ],
        "answer": "Regierender Bürgermeister / Regierende Bürgermeisterin"
      },
      {
        "question_number": 10,
        "question": "Welchen Senator / welche Senatorin hat Berlin nicht?",
        "options": [
          "Finanzsenator / Finanzsenatorin",
          "Innensenator / Innensenatorin",
          "Senator / Senatorin für Außenbeziehungen",
          "Justizsenator / Justizsenatorin"
        ],
        "answer": "Senator / Senatorin für Außenbeziehungen"
      }
    ],
    'Brandenburg': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Brandenburg?",
        "image": "/images/331.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Brandenburg?",
        "options": [
          "Prignitz",
          "Rhein-Sieg-Kreis",
          "Vogtlandkreis",
          "Amberg-Sulzbach"
        ],
        "answer": "Prignitz"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Brandenburg gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Brandenburg bei Kommunalwahlen wählen?",
        "options": ["14", "18", "16", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Brandenburg?",
        "options": [
          "blau-weiß-rot",
          "rot-weiß",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "answer": "rot-weiß"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Brandenburg über politische Themen informieren?",
        "options": [
          "bei den Kirchen",
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Brandenburg heißt ...",
        "options": ["Potsdam", "Cottbus", "Brandenburg", "Frankfurt/Oder"],
        "answer": "Potsdam"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Brandenburg?",
        "image": "/images/338.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Brandenburg?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Brandenburg nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Bremen': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zur Freien Hansestadt Bremen?",
        "image": "/images/341.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Stadtteil von Bremen?",
        "options": ["Altona", "Hemelingen", "Pankow", "Babelsberg"],
        "answer": "Hemelingen"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird das Landesparlament in Bremen gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "4"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Bremen bei den Wahlen zur Bürgerschaft (Landtag) wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Bremen?",
        "options": [
          "blau-weiß-rot",
          "rot-weiß",
          "grün-weiß-rot",
          "schwarz-gold"
        ],
        "answer": "rot-weiß"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Bremen über politische Themen informieren?",
        "options": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung",
          "bei den Kirchen",
          "bei der Verbraucherzentrale"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Was ist ein deutscher Stadtstaat?",
        "options": ["Bremen", "München", "Frankfurt", "Erfurt"],
        "answer": "Bremen"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Bremen?",
        "image": "/images/348.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin des Stadtstaates Bremen?",
        "options": [
          "Ministerpräsident / Ministerpräsidentin",
          "Erster Bürgermeister / Erste Bürgermeisterin",
          "Präsident / Präsidentin des Senats",
          "Regierender Bürgermeister / Regierende Bürgermeisterin"
        ],
        "answer": "Präsident / Präsidentin des Senats"
      },
      {
        "question_number": 10,
        "question": "Welchen Senator / welche Senatorin hat Bremen nicht?",
        "options": [
          "Senator / Senatorin für Außenbeziehungen",
          "Finanzsenator / Finanzsenatorin",
          "Justizsenator / Justizsenatorin",
          "Innensenator / Innensenatorin"
        ],
        "answer": "Senator / Senatorin für Außenbeziehungen"
      }
    ],
    'Hamburg': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zur Freien und Hansestadt Hamburg?",
        "image": "/images/351.png",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Bezirk von Hamburg?",
        "options": [
          "Altona",
          "Hemelingen",
          "Pankow",
          "Mecklenburgische Seenplatte"
        ],
        "answer": "Altona"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird das Landesparlament in Hamburg gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Hamburg bei Kommunalwahlen (Wahl der Bezirksversammlungen) wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Hamburg?",
        "options": [
          "blau-weiß-rot",
          "weiß-rot",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "answer": "weiß-rot"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Hamburg über politische Themen informieren?",
        "options": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei den Kirchen",
          "bei der Landeszentrale für politische Bildung"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Welches Bundesland ist ein Stadtstaat?",
        "options": ["Hamburg", "Sachsen", "Bayern", "Thüringen"],
        "answer": "Hamburg"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Hamburg?",
        "image": "/images/358.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin des Stadtstaates Hamburg?",
        "options": [
          "Ministerpräsident / Ministerpräsidentin",
          "Erster Bürgermeister / Erste Bürgermeisterin",
          "Regierender Senator / Regierende Senatorin",
          "Oberbürgermeister / Oberbürgermeisterin"
        ],
        "answer": "Erster Bürgermeister / Erste Bürgermeisterin"
      },
      {
        "question_number": 10,
        "question": "Welchen Senator / welche Senatorin hat Hamburg nicht?",
        "options": [
          "Justizsenator / Justizsenatorin",
          "Senator / Senatorin für Außenbeziehungen",
          "Finanzsenator / Finanzsenatorin",
          "Innensenator / Innensenatorin"
        ],
        "answer": "Senator / Senatorin für Außenbeziehungen"
      }
    ],
    'Hessen': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Hessen?",
        "image": "/images/361.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Hessen?",
        "options": ["Ammerland", "Altötting", "Prignitz", "Main-Taunus-Kreis"],
        "answer": "Main-Taunus-Kreis"
      },
      {
        "question_number": 3,
        "question": "Für wie viele Jahre wird der Landtag in Hessen gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Hessen bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "18"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Hessen?",
        "options": [
          "blau-weiß-rot",
          "rot-weiß",
          "schwarz-gold",
          "grün-weiß-rot"
        ],
        "answer": "rot-weiß"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Hessen über politische Themen informieren?",
        "options": [
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde",
          "bei den Kirchen"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Hessen heißt ...",
        "options": ["Kassel", "Darmstadt", "Frankfurt", "Wiesbaden"],
        "answer": "Wiesbaden"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Hessen?",
        "image": "/images/368.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Hessen?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question": "Welchen Minister / welche Ministerin hat Hessen nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Mecklenburg-Vorpommern': [
      {
        "question_number": 1,
        "question":
            "Welches Wappen gehört zum Bundesland Mecklenburg-Vorpommern?",
        "image": "/images/381.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Mecklenburg-Vorpommern?",
        "options": [
          "Prignitz",
          "Mecklenburgische Seenplatte",
          "Vogtlandkreis",
          "Rhein-Sieg-Kreis"
        ],
        "answer": "Mecklenburgische Seenplatte"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Mecklenburg-Vorpommern gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Mecklenburg-Vorpommern bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question":
            "Welche Farben hat die Landesflagge von Mecklenburg-Vorpommern?",
        "options": [
          "schwarz-rot-gold",
          "blau-weiß-gelb-rot",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "answer": "blau-weiß-gelb-rot"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Mecklenburg-Vorpommern über politische Themen informieren?",
        "options": [
          "bei der Landeszentrale für politische Bildung",
          "bei den Kirchen",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Mecklenburg-Vorpommern heißt ...",
        "options": ["Greifswald", "Schwerin", "Rostock", "Wismar"],
        "answer": "Schwerin"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Mecklenburg-Vorpommern?",
        "image": "/images/388.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Mecklenburg-Vorpommern?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Mecklenburg-Vorpommern nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Niedersachsen': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Niedersachsen?",
        "image": "/images/391.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Niedersachsen?",
        "options": [
          "Ammerland",
          "Rhein-Sieg-Kreis",
          "Nordfriesland",
          "Vogtlandkreis"
        ],
        "answer": "Ammerland"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Niedersachsen gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Niedersachsen bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Niedersachsen?",
        "options": [
          "weiß-blau",
          "schwarz-rot-gold",
          "schwarz-gelb",
          "blau-weiß-rot"
        ],
        "answer": "schwarz-rot-gold"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Niedersachsen über politische Themen informieren?",
        "options": [
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei den Kirchen"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Niedersachsen heißt …",
        "options": ["Hannover", "Braunschweig", "Wolfsburg", "Osnabrück"],
        "answer": "Hannover"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Niedersachsen?",
        "image": "/images/398.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Niedersachsen?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Niedersachsen nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Nordrhein-Westfalen': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Nordrhein-Westfalen?",
        "image": "/images/401.png",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Nordrhein-Westfalen?",
        "options": [
          "Ammerland",
          "Rhein-Sieg-Kreis",
          "Nordfriesland",
          "Vogtlandkreis"
        ],
        "answer": "Rhein-Sieg-Kreis"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Nordrhein-Westfalen gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Nordrhein-Westfalen bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question":
            "Welche Farben hat die Landesflagge von Nordrhein-Westfalen?",
        "options": [
          "rot-weiß",
          "grün-weiß-rot",
          "schwarz-gold",
          "blau-weiß-rot"
        ],
        "answer": "grün-weiß-rot"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Nordrhein-Westfalen über politische Themen informieren?",
        "options": [
          "bei den Kirchen",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Nordrhein-Westfalen heißt …",
        "options": ["Köln", "Bonn", "Düsseldorf", "Dortmund"],
        "answer": "Düsseldorf"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Nordrhein-Westfalen?",
        "image": "/images/408.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Nordrhein-Westfalen?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Nordrhein-Westfalen nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Rheinland-Pfalz': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Rheinland-Pfalz?",
        "image": "/images/411.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Rheinland-Pfalz?",
        "options": ["Westerwaldkreis", "Altötting", "Emsland", "Prignitz"],
        "answer": "Westerwaldkreis"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Rheinland-Pfalz gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Rheinland-Pfalz bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "18"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Rheinland-Pfalz?",
        "options": [
          "weiß-rot",
          "schwarz-rot-gold",
          "schwarz-gelb",
          "grün-weiß-rot"
        ],
        "answer": "schwarz-rot-gold"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Rheinland-Pfalz über politische Themen informieren?",
        "options": [
          "bei den Kirchen",
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Rheinland-Pfalz heißt …",
        "options": ["Mainz", "Kaiserslautern", "Ludwigshafen", "Koblenz"],
        "answer": "Mainz"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Rheinland-Pfalz?",
        "image": "/images/418.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Rheinland-Pfalz?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Rheinland-Pfalz nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Saarland': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Saarland?",
        "image": "/images/371.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis im Saarland?",
        "options": [
          "Mecklenburgische Seenplatte",
          "Altötting",
          "Neunkirchen",
          "Rhein-Sieg-Kreis"
        ],
        "answer": "Neunkirchen"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag des Saarlandes gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man im Saarland bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "18"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge des Saarlandes?",
        "options": [
          "weiß-blau",
          "schwarz-rot-gold",
          "schwarz-gelb",
          "grün-weiß-rot"
        ],
        "answer": "schwarz-rot-gold"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich im Saarland über politische Themen informieren?",
        "options": [
          "bei den Kirchen",
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt des Saarlandes heißt …",
        "options": ["Neunkirchen", "Homburg", "Saarbrücken", "Völklingen"],
        "answer": "Saarbrücken"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist das Saarland?",
        "image": "/images/378.png",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin des Saarlandes?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat das Saarland nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Sachsen-Anhalt': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Sachsen-Anhalt?",
        "image": "/images/431.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Sachsen-Anhalt?",
        "options": ["Ammerland", "Altötting", "Uckermark", "Börde"],
        "answer": "Börde"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Sachsen-Anhalt gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Sachsen-Anhalt bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Sachsen-Anhalt?",
        "options": [
          "blau-weiß-rot",
          "gelb-schwarz",
          "grün-weiß-rot",
          "weiß-rot"
        ],
        "answer": "gelb-schwarz"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Sachsen-Anhalt über politische Themen informieren?",
        "options": [
          "bei den Kirchen",
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Sachsen-Anhalt heißt …",
        "options": ["Halle", "Dessau", "Magdeburg", "Wittenberg"],
        "answer": "Magdeburg"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Sachsen-Anhalt?",
        "image": "/images/438.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Sachsen-Anhalt?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Sachsen-Anhalt nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Sachsen': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Freistaat Sachsen?",
        "image": "/images/421.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Sachsen?",
        "options": ["Vogtlandkreis", "Altötting", "Uckermark", "Nordfriesland"],
        "answer": "Vogtlandkreis"
      },
      {
        "question_number": 3,
        "question": "Für wie viele Jahre wird der Landtag in Sachsen gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Sachsen bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "18"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Sachsen?",
        "options": [
          "blau-weiß-rot",
          "weiß-grün",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "answer": "weiß-grün"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Sachsen über politische Themen informieren?",
        "options": [
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde",
          "bei den Kirchen",
          "bei der Verbraucherzentrale"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Sachsen heißt …",
        "options": ["Leipzig", "Dresden", "Chemnitz", "Zwickau"],
        "answer": "Dresden"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Sachsen?",
        "image": "/images/428.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Sachsen?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question": "Welchen Minister / welche Ministerin hat Sachsen nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Schleswig-Holstein': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Bundesland Schleswig-Holstein?",
        "image": "/images/441.png",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Schleswig-Holstein?",
        "options": [
          "Ammerland",
          "Mecklenburgische Seenplatte",
          "Nordfriesland",
          "Rhein-Sieg-Kreis"
        ],
        "answer": "Nordfriesland"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Schleswig-Holstein gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Schleswig-Holstein bei Kommunalwahlen wählen?",
        "options": ["14", "16", "18", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question":
            "Welche Farben hat die Landesflagge von Schleswig-Holstein?",
        "options": ["weiß-blau", "blau-weiß-rot", "weiß-rot", "grün-weiß-rot"],
        "answer": "blau-weiß-rot"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Schleswig-Holstein über politische Themen informieren?",
        "options": [
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde",
          "bei dem/der Landesbeauftragten für politische Bildung",
          "bei den Kirchen"
        ],
        "answer": "bei dem/der Landesbeauftragten für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Schleswig-Holstein heißt …",
        "options": ["Husum", "Flensburg", "Lübeck", "Kiel"],
        "answer": "Kiel"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Schleswig-Holstein?",
        "image": "/images/448.png",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Schleswig-Holstein?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question":
            "Welchen Minister / welche Ministerin hat Schleswig-Holstein nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
    'Thüringen': [
      {
        "question_number": 1,
        "question": "Welches Wappen gehört zum Freistaat Thüringen?",
        "image": "/images/451.png",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
      },
      {
        "question_number": 2,
        "question": "Welches ist ein Landkreis in Thüringen?",
        "options": ["Ammerland", "Altötting", "Nordfriesland", "Wartburgkreis"],
        "answer": "Wartburgkreis"
      },
      {
        "question_number": 3,
        "question":
            "Für wie viele Jahre wird der Landtag in Thüringen gewählt?",
        "options": ["3", "4", "5", "6"],
        "answer": "5"
      },
      {
        "question_number": 4,
        "question":
            "Ab welchem Alter darf man in Thüringen bei Kommunalwahlen wählen?",
        "options": ["14", "18", "16", "20"],
        "answer": "16"
      },
      {
        "question_number": 5,
        "question": "Welche Farben hat die Landesflagge von Thüringen?",
        "options": [
          "blau-weiß-rot",
          "weiß-rot",
          "grün-weiß-rot",
          "schwarz-gold"
        ],
        "answer": "weiß-rot"
      },
      {
        "question_number": 6,
        "question":
            "Wo können Sie sich in Thüringen über politische Themen informieren?",
        "options": [
          "bei den Kirchen",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde"
        ],
        "answer": "bei der Landeszentrale für politische Bildung"
      },
      {
        "question_number": 7,
        "question": "Die Landeshauptstadt von Thüringen heißt …",
        "options": ["Eisenach", "Erfurt", "Gera", "Jena"],
        "answer": "Erfurt"
      },
      {
        "question_number": 8,
        "question": "Welches Bundesland ist Thüringen?",
        "image": "/images/458.png",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question_number": 9,
        "question":
            "Wie nennt man den Regierungschef / die Regierungschefin in Thüringen?",
        "options": [
          "Erster Minister / Erste Ministerin",
          "Premierminister / Premierministerin",
          "Bürgermeister / Bürgermeisterin",
          "Ministerpräsident / Ministerpräsidentin"
        ],
        "answer": "Ministerpräsident / Ministerpräsidentin"
      },
      {
        "question_number": 10,
        "question": "Welchen Minister / welche Ministerin hat Thüringen nicht?",
        "options": [
          "Justizminister / Justizministerin",
          "Außenminister / Außenministerin",
          "Finanzminister / Finanzministerin",
          "Innenminister / Innenministerin"
        ],
        "answer": "Außenminister / Außenministerin"
      }
    ],
};
