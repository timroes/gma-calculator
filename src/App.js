import React, { Component } from 'react';
import { CountryList, DayList } from './components';
import { CalculationService } from './CalculationService';
import { PdfExporter } from './PdfExporter';

import './App.css';

const DEFAULT_COUNTRY = 'DE';

class App extends Component {

  constructor() {
    super();
    this.service = new CalculationService();
    this.pdfExporter = new PdfExporter(this.service);
    this.state = {
      total: 0,
      days: 0,
      dayList: []
    };

    this.service.setCountry(DEFAULT_COUNTRY);
  }

  update() {
    this.setState({
      total: this.service.total,
      days: this.service.days,
      dayList: this.service.dayList
    });
  }

  onExcludeChange = (day, type, excluded) => {
    this.service.setExclude(day, type, excluded);
    this.update();
  };

  handleDateChange = (ev) => {
    this.service[ev.target.id] = ev.target.value;
    this.update();
  };

  handleCountryChange = (country) => {
    this.service.setCountry(country);
    this.update();
  };

  downloadPdf = (ev) => {
    ev.preventDefault();
    this.pdfExporter.download();
  };

  render() {
    return (
      <form aria-label="Calculator" className="calculator">
        <div className="calculator__row">
          <label className="calculator__country-label">Trip to country
            <CountryList onChange={this.handleCountryChange} defaultValue={DEFAULT_COUNTRY}/>
          </label>
        </div>

        <div className="calculator__row">
          <label htmlFor="from">From</label>
          <input type="date" ref="from" id="from" onChange={this.handleDateChange}/>
          <label htmlFor="to">To</label>
          <input type="date" ref="to" id="to" onChange={this.handleDateChange}/>
        </div>

        { this.state.dayList.length === 1 &&
          <div className="calculator__warning calculator__row">
            You are only entitled to German Meal Allowance if you were at least
            8 hours on that business trip.
          </div>
        }

        { this.state.dayList.length > 0 &&
          <DayList days={this.state.dayList} onExcludeChange={this.onExcludeChange}/>
        }

        <div className="calculator__row calculator__row--right">
          <label htmlFor="total">Total GMA</label>
          <output id="total" className="sum">
            { this.state.total.toFixed(2) } €
          </output>
          <button
            type="button"
            aria-label="Download as PDF"
            disabled={!this.state.total}
            onClick={this.downloadPdf}
            className="pdfdownload"
          >
            PDF ↓
          </button>
        </div>
      </form>
    );
  }
}

export default App;
