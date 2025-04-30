import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import Rent from "../pages/Rent/Rent";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import OffPlanPropertiesPage from "../pages/OffPlanPropertiesPage/OffPlanPropertiesPage";
import OffPlanProperty from "../pages/OffPlanPropertiesPage/OffPlanProperty/OffPlanProperty";
import AgentProfileCard from "../components/AgentProfileCard/AgentProfileCard";
import Contact from "../components/Contact/Contact";
import TeamPage from "../components/TeamMembers/TeamPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/buy",
                element: <Buy></Buy>
            },
            {
                path: "/rent",
                element: <Rent></Rent>
            },
            {
                path: "/property-details",
                element: <PropertyDetails></PropertyDetails>
            },
           {
            path: "/off-plan-properties",
            element: <OffPlanPropertiesPage></OffPlanPropertiesPage>
           },
           {
            path: "/off-plan-property",
            element: <OffPlanProperty></OffPlanProperty>
           },
           {
            path: "/contact",
            element: <Contact></Contact>
           },
           {
            path: "/agent",
            element: <AgentProfileCard></AgentProfileCard>
           },
           {
            path: "/our-team",
            element: <TeamPage></TeamPage>
           }
        ]
    }
])

export default router;