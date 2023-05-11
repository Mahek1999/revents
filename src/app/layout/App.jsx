import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import "./styles.css";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <Routes>
        
        <Route exact path="/" element={<HomePage />} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar setFormOpen={handleCreateFormOpen} />
              <Container className="main">
                <Route exact path="/events" element={<EventDashboard />} />
                <Route path="/events/:id" element={<EventDetailedPage />} />
                <Route path="/createEvent" element={<EventForm />} />
              </Container>
            </>
          )}
        />
      </Routes>
    </>
  );
}

export default App;
