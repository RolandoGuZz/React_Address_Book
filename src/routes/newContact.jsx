import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactForm";

export default function NewContact() {
    const navigate = useNavigate();

    return (
        <ContactForm onCancel={() => navigate("/")} />
    );
}