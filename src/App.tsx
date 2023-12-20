import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import Container from "./components/Container/Container";

import { useDispatch } from "react-redux";
import { fetchCountries } from "./redux/countriesSlice";
import { AppDispatch } from "./redux/store";

import { useDarkModeContext } from "./context/darkModeContext";

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    const isDarkMode = useDarkModeContext();

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <>
            <Header />
            <Container>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/:countryName" element={<Country />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
