import React, { Component } from 'react';
import classnames from 'classnames';
import { Moment } from 'moment';
import { CountryList, DateRange, DayList } from './components';
import { Segments, Segment } from './Segments';
import { CalculationService, Day, ExcludeOption } from './CalculationService';

import './App.css';

const DEFAULT_COUNTRY = 'DE';

interface AppState {
  total: number;
  days: Day[];
  segments: Segment[];
}

class App extends Component<{}, AppState> {

  private calculationService: CalculationService;
  private segments: Segments;

  constructor() {
    super({});
    this.segments = new Segments(DEFAULT_COUNTRY);
    this.calculationService = new CalculationService();
    this.state = {
      segments: this.segments.get(),
      total: 0,
      days: [],
    };
  }

  update() {
    const segments = this.segments.get();
    const result = this.calculationService.calculate(segments);
    this.setState({
      total: result.total,
      days: result.days,
      segments,
    });
  }

  onExcludeChange = (day: Moment, type: ExcludeOption, excluded: boolean) => {
    this.calculationService.setExclude(day, type, excluded);
    this.update();
  };

  handleDateChange(segmentIndex: number, from: Date | null, to: Date | null) {
    this.segments.setRange(segmentIndex, from, to);
    this.update();
  };

  handleCountryChange(segmentIndex: number, country: string) {
    this.segments.setCountry(segmentIndex, country);
    this.update();
  };

  addNewTrip = () => {
    this.segments.add();
    this.update();
  };

  removeTrip = (index: number) => {
    this.segments.remove(index);
    this.update();
  };

  downloadPdf = async (ev: React.MouseEvent) => {
    ev.preventDefault();
    const { PdfExporter } = await import('./PdfExporter') as any;
    const pdfExporter = new PdfExporter(this.calculationService, this.segments);
    pdfExporter.download();
  };

  renderSegment = (segment: Segment, index: number, segments: Segment[]) => {
    const isLastSegment = index === segments.length - 1;
    const isFirstSegment = index === 0;

    const segmentClasses = classnames('calculator__segment', {
      'calculator__segment--last': isLastSegment
    });

    return (<div className={segmentClasses} key={`segment_${index}`}>
      { !isFirstSegment &&
        <button
          type="button"
          onClick={this.removeTrip.bind(this, index)}
          title="Remove trip segment"
          className="calculator__segment-button">-</button>
      }
      <div className="calculator__segment-inputs">
        <div className="calculator__row calculator__row--country">
          <label
            htmlFor={`country-list${index}`}
            className="calculator__country-label">
            Trip to country
          </label>
          <CountryList
            id={`country-list${index}`}
            className="calculator__country-select"
            onChange={this.handleCountryChange.bind(this, index)}
            value={segment.country} />
        </div>
        <DateRange
          idPrefix={`daterange${index}`}
          className="calculator__row"
          from={segment.from}
          to={segment.to}
          disableFrom={!isFirstSegment}
          onChange={this.handleDateChange.bind(this, index)}/>
      </div>
      { isLastSegment &&
        <button
          type="button"
          onClick={this.addNewTrip}
          title="Add new trip segment"
          className="calculator__segment-button">+</button>
      }
    </div>);
  }

  render() {
    return (
      <form aria-label="Calculator" className="calculator">
        { this.state.segments.map(this.renderSegment) }

        { this.state.days.length === 1 &&
          <div className="calculator__warning calculator__row">
            You are only entitled to German Meal Allowance if you were at least
            8 hours on that business trip.
          </div>
        }

        { this.state.days.length > 0 &&
          <DayList
            days={this.state.days}
            showCountries={this.state.segments.length > 1}
            onExcludeChange={this.onExcludeChange}/>
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
