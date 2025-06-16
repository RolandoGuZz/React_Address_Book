import { Outlet, Link, useLoaderData, useNavigation } from "react-router-dom";
import SearchForm from "../components/searchForm";
import ContactNav from "../components/contactNav";

export default function Root() {
    const navigation = useNavigation();
    const { contacts, q } = useLoaderData();

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <SearchForm q={q} />
                    <Link to="/contacts/new">
                        <button type="button">New</button>
                    </Link>
                </div>
                <nav>
                    <ContactNav contacts={contacts} />
                </nav>
            </div >
            <div id="detail" className={
                navigation.state === "loading" ? "loading" : ""
            }>
                <Outlet />
            </div>
        </>
    );
}
