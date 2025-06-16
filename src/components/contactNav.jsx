import { NavLink } from "react-router-dom";

export default function ContactNav({ contacts }) {
    if (!contacts.length) {
        return <p><i>No contacts</i></p>;
    }

    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <NavLink
                        to={`contacts/${contact.id}`}
                        className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                        }
                    >
                        {contact.first || contact.last ? (
                            <>
                                {contact.first} {contact.last}
                            </>
                        ) : (
                            <i>No Name</i>
                        )}
                        {contact.favorite && <span>★</span>}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
