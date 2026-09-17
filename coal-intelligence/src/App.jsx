import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Repository from "./pages/Repository";
import DocumentViewer from "./pages/DocumentViewer";
import Upload from "./pages/Upload";
import Verification from "./pages/Verification";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import History from "./pages/History";
import MineExplorer from "./pages/MineExplorer";
import KnowledgeTrends from "./pages/KnowledgeTrends";

import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/document/:id" element={<DocumentViewer />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/history" element={<History />} />
        <Route path="/mines" element={<MineExplorer />} />
        <Route path="/trends" element={<KnowledgeTrends />} />
      </Route>
    </Routes>
  );
}

export default App;