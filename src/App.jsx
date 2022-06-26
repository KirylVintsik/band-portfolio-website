import React, { useState } from "react";
import AboutUs from "./features/aboutUs/AboutUs";
import Contact from "./features/contact/Contact";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import "./App.css";

function App() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const handleSubmit = () => setIsAlertOpen(true);
  const handleClose = () => setIsAlertOpen(false);
  return (
    <div className="container">
      <AboutUs />
      <Contact onSubmit={handleSubmit} />
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="success" variant="filled">
          Give it away now!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
