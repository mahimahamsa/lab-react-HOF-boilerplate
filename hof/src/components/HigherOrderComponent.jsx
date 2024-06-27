import React, { Component } from 'react';

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderUserType = (userType) => {
    const filteredData = this.state.userData.filter((item) => item.user_type === userType);
    const mapFilteredRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapFilteredRows;
  };

  renderNamesStartingWithJ = () => {
    const filteredData = this.state.userData.filter((item) => item.name.startsWith('J'));
    const mapFilteredRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapFilteredRows;
  };

  renderAgeFilteredData = () => {
    const filteredData = this.state.userData.filter((item) => item.age > 28 && item.age <= 50);
    const mapFilteredRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapFilteredRows;
  };

  getTotalExperienceOfDesigners = () => {
    const designers = this.state.userData.filter((item) => item.user_type === 'Designer');
    const totalExperience = designers.reduce((acc, curr) => acc + curr.years, 0);
    return totalExperience;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        <h1>Display users based on User Type</h1>
        <div className="display-box">
          <ul>{this.renderUserType('Designer')}</ul>
        </div>

        <h1>Display names starting with 'J'</h1>
        <div className="display-box">
          <ul>{this.renderNamesStartingWithJ()}</ul>
        </div>

        <h1>Display users based on age filter</h1>
        <div className="display-box">
          <ul>{this.renderAgeFilteredData()}</ul>
        </div>

        <h1>Total Experience of Designers: {this.getTotalExperienceOfDesigners()}</h1>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;