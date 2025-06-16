import { updateContact } from "../contacts";

export async function contactAction({ request, params }) {
    const formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
}