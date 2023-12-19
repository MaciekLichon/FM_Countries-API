import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import Container from "./components/Container/Container";

import { fetchCountries } from "./redux/countriesSlice";
import { AppDispatch } from "./redux/store";

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch]);

    return (
        <Container>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/:countryName" element={<Country />} />
            </Routes>
        </Container>
    );
};

export default App;
