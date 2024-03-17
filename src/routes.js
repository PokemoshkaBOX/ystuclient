import MonitorMain from "./pages/MainStat/MonitorMain";
import DidgitalSystem from "./pages/DidgitalSystem/DidgitalSystem";
import Year from "./pages/Engineer/EngineerMain";
import ChemestryMain from "./pages/Chemestry/ChemestryMain";
import BuildMain from "./pages/Build/BuildMain";
import Menegment from "./pages/Menegment/MenegmentMain";
import DisignMain from "./pages/Disign/DisignMain";
import MainStatTwo from "./pages/MainStatTwo/MainStatTwo";

import {
    APPLICANTS_ROUTE,
    FACULTY_ROUTE,
    HOME_ROUTE,
    MENEGMENT_ROUTE,
    YEAR_ROUTE,
    BUILD_ROUTE,
    DISIGN_ROUTE,
    MAINSTATTWO_ROUTE,
} from "./utils/consts";


export const authRoutes = [
    {
        path: FACULTY_ROUTE,
        Component: DidgitalSystem
    },
    {
        path: YEAR_ROUTE,
        Component: Year
    },
    {
        path: APPLICANTS_ROUTE,
        Component: ChemestryMain
    },
    {
        path: BUILD_ROUTE,
        Component: BuildMain
    },
    {
        path: MENEGMENT_ROUTE,
        Component: Menegment
    },
    {
        path: DISIGN_ROUTE,
        Component: DisignMain
    },
    {
        path: HOME_ROUTE,
        Component: MonitorMain
    },
    {
        path: MAINSTATTWO_ROUTE,
        Component: MainStatTwo
    }
]

