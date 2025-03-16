import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import domain from "./common";
import { useEffect } from "react";
import Context from "./context";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/userSlice"; // ✅ Import Redux action

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user); // ✅ Get user from Redux

    const fetchUserDetails = async () => {
        try {
            const dataResponse = await fetch(domain.userDetails.url, {
                method: domain.userDetails.method,
                credentials: "include",
            });

            const dataApi = await dataResponse.json();
            console.log(dataApi);

            if (dataApi.success) {
                dispatch(setUser(dataApi.data)); // ✅ Dispatch to Redux
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <Context.Provider value={{ fetchUserDetails, user }}>
            <Header />
            <main className="min-h-[calc(100vh-80vh)]">
                <Outlet />
            </main>
            <Footer />
        </Context.Provider>
    );
}

export default App;
