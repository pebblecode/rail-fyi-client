'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';

class SendComplaint extends Component {
  render() {
    return (
      <section className="select-complaint">
        <ProgressBar stage={4} />
        Here is your message.
        Anything else you'd like to add?
        <InProgressMessage />
        Ready? Choose your method of weapon below.
        <button>Send email</button>
        <button>Tweet</button>
      </section>
    );
  }
}

export default SendComplaint;
