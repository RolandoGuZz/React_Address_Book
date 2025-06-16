import { useLoaderData, useNavigate } from "react-router-dom";
import ContactForm from "../components/contactForm";

export default function EditContact() {
    const { contact } = useLoaderData();
    const navigate = useNavigate();

    return (
        <ContactForm defaultValues={contact} onCancel={() => navigate(-1)} />
    );
}
