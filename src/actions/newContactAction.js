import { redirect } from "react-router-dom";
import { createContact } from "../contacts";

export async function newContactAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const contact = await createContact(data);
    return redirect(`/contacts/${contact.id}`);
}