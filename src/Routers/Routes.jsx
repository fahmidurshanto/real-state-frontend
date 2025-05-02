import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import Rent from "../pages/Rent/Rent";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import OffPlanProperty from "../pages/OffPlanPropertiesPage/OffPlanProperty/OffPlanProperty";
import AgentProfileCard from "../components/AgentProfileCard/AgentProfileCard";
import Contact from "../components/Contact/Contact";
import TeamPage from "../components/TeamMembers/TeamPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import OffPlanListingPage from "../pages/OffPlanProperties/OffPlanPropertyListingPage";
import OffPlanSinglePage from "../pages/OffPlanSingle/OffPlanSingle/OffPlanSInglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/buy",
        element: <Buy></Buy>,
      },
      {
        path: "/rent",
        element: <Rent></Rent>,
      },
      {
        path: "/property-details",
        element: <PropertyDetails></PropertyDetails>,
      },
      {
        path: "/off-plan-properties",
        element: <OffPlanListingPage></OffPlanListingPage>,
      },
      {
        path: "/off-plan-property",
        element: <OffPlanProperty></OffPlanProperty>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/agent",
        element: <AgentProfileCard></AgentProfileCard>,
      },
      {
        path: "/our-team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/off-plan-single",
        element: <OffPlanSinglePage></OffPlanSinglePage>,
      },
    ],
  },
]);

export default router;
