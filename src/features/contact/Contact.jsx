import React, { useState } from "react";
import {
  Button,
  Drawer,
  Fab,
  FormControl,
  FormLabel,
  FormControlLabel,
  IconButton,
  TextField,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Message, Close } from "@material-ui/icons";
import "./Contact.css";

import {
  getRandomQuestion,
  isCorrectAnswer,
} from "../../__mocks__/questions.js";

function Contact({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState(getRandomQuestion());
  const handleToggleIsOpen = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = e.target.quiz.value;
    isCorrectAnswer({ id: question.id, answer });
    if (!isCorrectAnswer({ id: question.id, answer })) {
      e.target.quiz.value = null;
      setQuestion(getRandomQuestion());
    } else {
      setIsOpen(false);
      onSubmit();
    }
  };
  return (
    <>
      <Fab
        className="contact-us-button"
        color="primary"
        aria-label="add"
        onClick={handleToggleIsOpen}
      >
        <Message />
      </Fab>
      <Drawer
        className="drawer"
        anchor="right"
        open={isOpen}
        onClose={handleToggleIsOpen}
      >
        <div className="drawer-header">
          <h2 className="drawer-title">Contact Us</h2>
          <div className="close-button">
            <IconButton onClick={handleToggleIsOpen}>
              <Close />
            </IconButton>
          </div>
        </div>
        <form className="drawer-form" onSubmit={handleSubmit}>
          <FormControl required>
            <TextField
              className="form-field"
              type="text"
              label="Full Name"
              name="name"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl required>
            <TextField
              className="form-field"
              type="text"
              label="Email"
              variant="outlined"
              name="email"
              required
            />
          </FormControl>
          <FormControl required>
            <TextField
              className="form-field"
              type="text"
              label="Phone"
              variant="outlined"
              name="phone"
              required
            />
          </FormControl>
          <FormControl required>
            <TextField
              className="form-field"
              type="text"
              label="Your Message"
              variant="outlined"
              name="message"
              multiline
              minRows={7}
              required
            />
          </FormControl>
          <div className="quiz">
            <FormControl component="fieldset">
              <FormLabel component="legend">{question.name}</FormLabel>
              <RadioGroup aria-label="gender" name="quiz">
                {question.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio required />}
                    label={question.options[index]}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <Button className="submit-button" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Drawer>
    </>
  );
}

export default Contact;
