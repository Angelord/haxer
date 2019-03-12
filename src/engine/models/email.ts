import { NameGenerator } from "../util/textGeneration";
import { EmailAddressGenerator } from "../util/textGeneration";
import { EmailContentGenerator } from "../util/textGeneration";
import { Random } from "../util/random";

class Email {

    public senderName  : string;
    public senderMail  : string;
    public subject     : string;
    public header      : string;
    public message     : string;
    public footer      : string;
    public reward      : number;
    public difficulty  : number;
    public deadline    : Date;
    public status      : EmailStatus;

    private constructor() { }

    public static generate(difficulty: number): Email {

        let email = new Email();
        email.senderName = NameGenerator.generate();
        email.senderMail = EmailAddressGenerator.generate(email.senderName);
        email.subject = EmailContentGenerator.generateSubject();
        email.header = EmailContentGenerator.generateHeader("JC Denton");
        email.message = EmailContentGenerator.generateText();
        email.footer = EmailContentGenerator.generateFooter(email.senderName);
        email.reward = Random.range(100, 400) * difficulty;
        email.difficulty = difficulty;
        email.deadline = new Date();
        email.deadline.setDate(email.deadline.getDate() + Random.range(0, 7));
        email.status = EmailStatus.PENDING;

        return email;
    }
}


enum EmailStatus {
    PENDING,
    EXPIRED,
    COMPLETED
}

export { Email }
export { EmailStatus }