import { createBrowserRouter } from "react-router-dom";
import Root from './root';
import Index from "./index";
import ErrorPage from '../error-page';
import Contact from "./contact";
import NewContact from "./newContact";
import EditContact from "./edit";

import { action as destroyAction } from './destroy';
import { contactAction } from '../actions/contactAction';
import { newContactAction } from '../actions/newContactAction';
import { editAction } from '../actions/editAction';

import { rootLoader } from '../loaders/rootLoader';
import { contactLoader } from '../loaders/contactLoader';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                    },
                    {
                        index: true,
                        element: <Index />,
                    },
                    {
                        path: "contacts/new",
                        element: <NewContact />,
                        action: newContactAction,
                    },
                ]
            }
        ],
    },
]);

export default router;