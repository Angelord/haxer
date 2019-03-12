
import { Random } from "../util/random"

class NameGenerator {

    private static fnames: string[] = [ 
        'Alex',
        'Ivan',
        'Jacob',
        'Woodrow',
        'Nick',
        'Miyamoto',
        'John',
        'Michael',
        'Hans',
        'Wilhelm',
        'Alexander',
        'Alexandra',
        'Alexa',
        'Nicolette',
        'Mary',
        'Louis',
        'Bob',
        'Lucious',
        'Xi',
    ];

    private static lnames: string[] = [
        'Smith',
        'Jones',
        'Page',
        'Mason',
        'DeBeers',
        'Jinping',
        'Musashi',
        'Hunter',
        'Fisher',
        'McCarter',
        'McSmith',
        'Rippler'
    ];

    public static generate(): string {

        let fname = Random.element(this.fnames);
        let lname = Random.element(this.lnames);

        return fname + ' ' + lname;
    }
};

class EmailAddressGenerator {

    private static mailservices: string[] = [
        'gmail.com',
        'mailer.com',
        'vindique.com',
        '????.???'
    ];

    public static generate(ownerName: string): string {

        ownerName.replace(/\s/g, "");

        let nameSegment = ownerName.substr(0, Random.range(0, ownerName.length - 1));
        let number = Random.range(1, 2000);
        let service = Random.element(this.mailservices);

        return nameSegment + number + service;
    }
};

class EmailContentGenerator {

    private static _subjects: string[] = [ 
        'Help needed!',
        '0xAAQE344BA',
        'Classified',
        'A job offer',
        'IMPORTANT!!!'
    ];

    public static generateSubject(): string {
        return Random.element(this._subjects);
    }

    public static generateHeader(receiverName: string): string {
        return "Greetings, JC";
    }

    public static generateText(): string {
        return "I've got a job for you. Think you're up for the task?"
    }

    public static generateFooter(senderName: string): string {
        return "Best of luck, " + senderName;
    }
}

//TODO: Merge these into a character generator that stores said character
//in a database for further use. 

export { NameGenerator }
export { EmailAddressGenerator }
export { EmailContentGenerator }