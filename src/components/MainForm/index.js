import React from 'react';
import { Form } from './styled';
import EmailInput from './EmailInput.js';
import { Button } from '../../styles/GlobalStyles.js';
import { toast } from 'react-toastify';
import request from './requestFetch.js';
import validator from 'validator';

export default function MainForm({ checkInHandler, email, setEmail }) {
  function checkElapsedTime(lastSent, today) {
    const minDays = 180;
    const minDaysDate = new Date(1000 * 60 * 60 * 24 * minDays);
    return today - lastSent > minDaysDate;
  }

  async function checkEmail(email) {
    if (!validator.isEmail(email)) {
      toast('Invalid email.', { type: 'error' });
      return;
    }

    const toastId = toast.loading('Checking database...');
    checkInHandler('loading');

    try {
      const person = await request(email);
      const { lastSent = 0 } = person ?? {}; // by default, lastSent is 0.
      const [lastSentDate, todayDate] = [new Date(lastSent), new Date()];

      if (checkElapsedTime(lastSentDate, todayDate)) {
        checkInHandler('active');
        toast.update(toastId, {
          render: 'Sucess. Email available to receive messages.',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        throw new Error(
          'Some message has already been sent to this person in the last 6 months.',
        );
      }
    } catch (e) {
      checkInHandler('inactive');
      toast.update(toastId, {
        render: e.message,
        type: 'error',
        isLoading: false,
        autoClose: 2000,
      });
    }
  }

  return (
    <>
      <Form>
        <EmailInput onChange={setEmail} />
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            //checkEmail(email);
            fetch('/api/messages/')
              .then((data) => data.json())
              .then(console.log)
              .catch((e) => console.log(e));
          }}
        >
          CHECK IN
        </Button>
      </Form>
    </>
  );
}
