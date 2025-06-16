import { useLoaderData } from "react-router-dom";
import ShowDataContact from "../components/showDataContact";
import ContactButtons from "../components/contactButtons";

export default function Contact() {
    const { contact } = useLoaderData();

    return (
        <div id="contact">
            <div>
                <img
                    key={contact.avatar}
                    src={
                        contact.avatar ||
                        `https://robohash.org/${contact.id}.png?size=200x200`
                    }
                />
            </div>
            <div>
                <ShowDataContact contact={contact} />
                <ContactButtons />
            </div>
        </div>
    );
}
