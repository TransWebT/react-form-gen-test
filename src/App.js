import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Winterfell = require('winterfell');
// var schema     = require('./schema');

var schema = {
  "classes" : {
    "form" : "login-form",
    "question" : "form-group",
    "input" : "form-control",
    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger",
    "buttonBar" : "button-bar"
  },
  "formPanels" : [{
    "index" : 1,
    "panelId" : "register-panel"
  }],
  "questionPanels" : [{
    "panelId" : "register-panel",
    "panelHeader" : "Log in to MyAwesomeSite",
    "panelText" : "Please enter your email address and password to log in.",
    "action" : {
      "default" : {
        "action" : "SUBMIT"
      }
    },
    "button" : {
      "text" : "Submit"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "register-set"
    }]
  }],
  "questionSets" : [{
    "questionSetId" : "register-set",
    "questions" : [{
      "questionId" : "fullname",
      "question" : "Full Name",
      "input" : {
        "type" : "textInput",
        "placeholder" : "Full Name",
        "required" : true
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    },{
      "questionId" : "email",
      "question" : "Email Address",
      "input" : {
        "type" : "emailInput",
        "placeholder" : "Email Address",
        "required" : true
      },
      "validations" : [{
        "type" : "isEmail"
      }]
    }, {
      "questionId" : "password",
      "question" : "Password",
      "input" : {
        "type" : "passwordInput",
        "placeholder" : "Password"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "passwordConfirm",
      "question" : "Confirm Password",
      "input" : {
        "type" : "passwordInput",
        "placeholder" : "Confirm Password"
      },
      "validations" : [{
        "type" : "equals",
        "params" : ['{password}'],
        "message" : "Confirm Password must match Password"
      }]
    }]
  }]
};

var onRender = () => {
  console.log('Great news! Winterfell rendered successfully');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};

var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <Winterfell schema={schema}
                    onRender={onRender}
                    onUpdate={onUpdate}
                    onSwitchPanel={onSwitchPanel}
                    onSubmit={onSubmit} />
        <div id="login-form"></div>
      </div>
    );
  }
}

/*
 ,document.getElementById('login-form')

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
*/
export default App;
