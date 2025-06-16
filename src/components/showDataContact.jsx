import FavoriteButton from "./favoriteButton";

export default function ShowDataContact({ contact }) {
    return (
        <>
            <h1>
                {contact.first || contact.last ? (
                    <>
                        {contact.first} {contact.last}
                    </>
                ) : (
                    <i>No Name</i>
                )}{" "}
                <FavoriteButton contact={contact} />
            </h1>
            {contact.twitter && (
                <p>
                    <a
                        target="_blank"
                        href={`https://twitter.com/${contact.twitter}`}
                    >
                        {contact.twitter}
                    </a>
                </p>
            )}
            {contact.notes && <p>{contact.notes}</p>}
        </>
    );
}
