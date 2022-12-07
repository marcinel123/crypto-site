import { createRouter, createWebHistory } from "vue-router";
import OverViewPage from "../components/OverViewPage"
import BuySellPage from "../components/BuySellPage"
import WalletsPage from "../components/WalletsPage"
import BundlesPage from "../components/BundlesPage"
import ReportingPage from "../components/ReportingPage"
import CommunityPage from "../components/CommunityPage"
import SummaryTab from "../components/Tabsview/SummaryTab"
import TableTab from "../components/Tabsview/TableTab"
import ChartsTab from "../components/Tabsview/ChartsTab"
import AnalysisTab from "../components/Tabsview/AnalysisTab"
import ReportingTab from "../components/Tabsview/ReportingTab"

const routes = [
    {
        path: "/overview",
        name: "OverViewPage",
        component: OverViewPage,
        children: [
            {path: "summary", component: SummaryTab},
            {path: "table", component: TableTab},
            {path: "charts", component: ChartsTab},
            {path: "reporting", component: ReportingTab},
            {path: "analysis", component: AnalysisTab},
        ]
    },
    {
        path: "/buysell",
        name: "BuySellPage",
        component: BuySellPage
    },
    {
        path: "/wallets",
        name: "WalletsPage",
        component: WalletsPage
    },
    {
        path: "/bundles",
        name: "BundlesPage",
        component: BundlesPage
    },
    {
        path: "/reporting",
        name: "ReportingPage",
        component: ReportingPage
    },
    {
        path: "/community",
        name: "CommunityPage",
        component: CommunityPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router