import React, { Component } from 'react';
import classnames from 'classnames';
import { Moment } from 'moment';
import { Info, Minus, Plus, TriangleAlert, X } from 'lucide-react';
import { Spinner } from './components/ui/spinner';
import { Header } from './components/Header';
import { DateRange, DayList } from './components';
import { CountrySelect } from './components/CountrySelect';
import { Field } from './components/ui/field';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';
import { Segments, Segment } from './Segments';
import { CalculationService, Day, ExcludeOption } from './CalculationService';
import { plausible } from './plausible';

const DEFAULT_COUNTRY = 'DE';
const MEAL_ALERT_DISMISSED_KEY = 'gma:mealAlertDismissed';

function readMealAlertDismissed(): boolean {
  try {
    return localStorage.getItem(MEAL_ALERT_DISMISSED_KEY) === 'true';
  } catch {
    return false;
  }
}

interface AppState {
  total: number;
  days: Day[];
  segments: Segment[];
  isGeneratingPdf: boolean;
  mealAlertDismissed: boolean;
}

class App extends Component<{}, AppState> {

  private calculationService: CalculationService;
  private segments: Segments;

  constructor(props: {}) {
    super(props);
    this.segments = new Segments(DEFAULT_COUNTRY);
    this.calculationService = new CalculationService();
    this.state = {
      segments: this.segments.get(),
      total: 0,
      days: [],
      isGeneratingPdf: false,
      mealAlertDismissed: readMealAlertDismissed(),
    };
  }

  dismissMealAlert = () => {
    try {
      localStorage.setItem(MEAL_ALERT_DISMISSED_KEY, 'true');
    } catch {
      // Ignore storage failures (e.g. private mode); just hide for this session.
    }
    this.setState({ mealAlertDismissed: true });
  };

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
    plausible('DownloadPdf');
    this.setState({ isGeneratingPdf: true });
    const { PdfExporter } = await import('./PdfExporter') as any;
    const pdfExporter = new PdfExporter(this.calculationService, this.segments);
    pdfExporter.download();
    this.setState({ isGeneratingPdf: false });
  };

  renderSegment = (segment: Segment, index: number, segments: Segment[]) => {
    const isLastSegment = index === segments.length - 1;
    const isFirstSegment = index === 0;

    const segmentClasses = classnames(
      'relative mb-8 rounded-xl bg-white px-5.5 pt-4 pb-5 shadow-md md:mx-0 md:mb-0 md:w-80 md:shrink-0 md:snap-center',
      {
        // Connector line between segments: vertical (above) when stacked,
        // horizontal (to the left) when side by side on M+ screens.
        "before:absolute before:-top-8 before:left-1/2 before:h-8 before:w-0.5 before:-translate-x-1/2 before:bg-[#ddd] before:content-[''] md:before:top-1/2 md:before:-left-8 md:before:h-0.5 md:before:w-8 md:before:translate-x-0 md:before:-translate-y-1/2":
          !isFirstSegment,
      },
    );

    const segmentButtonClasses =
      'absolute inline-flex size-7 cursor-pointer appearance-none items-center justify-center rounded-full border-0 text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&_svg]:size-[1.1em]';

    return (<div className={segmentClasses} key={`segment_${index}`}>
      { !isFirstSegment &&
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={this.removeTrip.bind(this, index)}
              aria-label="Remove trip segment"
              className={classnames(
                segmentButtonClasses,
                'top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-gray-500 hover:bg-red-500 focus:bg-red-500 focus-visible:ring-red-500',
                'md:top-auto md:right-auto md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2',
              )}>
              <Minus />
            </button>
          </TooltipTrigger>
          <TooltipContent>Remove trip segment</TooltipContent>
        </Tooltip>
      }
      <div className="space-y-4">
        <Field label="Trip to country" htmlFor={`country-list${index}`} className="p-0">
          <CountrySelect
            id={`country-list${index}`}
            onChange={this.handleCountryChange.bind(this, index)}
            value={segment.country} />
        </Field>
        <DateRange
          idPrefix={`daterange${index}`}
          from={segment.from}
          to={segment.to}
          disableFrom={!isFirstSegment}
          onChange={this.handleDateChange.bind(this, index)}/>
      </div>
      { isLastSegment &&
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={this.addNewTrip}
              aria-label="Add new trip segment"
              className={classnames(
                segmentButtonClasses,
                'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-teal-600 hover:bg-teal-700 focus:bg-teal-700 focus-visible:ring-teal-600',
                'md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:translate-x-1/2 md:-translate-y-1/2',
              )}>
              <Plus />
            </button>
          </TooltipTrigger>
          <TooltipContent>Add new trip segment</TooltipContent>
        </Tooltip>
      }
    </div>);
  }

  render() {

    const loading = this.state.isGeneratingPdf;
    const downloadButtonClass = classnames(
      'group relative mx-auto mt-6 mb-2 flex w-full max-w-[min(800px,90vw)] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border-0 px-4 py-[0.65em] text-[1.1em] text-white shadow-lg transition-colors [font-family:inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
      loading
        ? 'bg-teal-600'
        : 'bg-teal-600 enabled:hover:bg-teal-700 enabled:focus:bg-teal-700 enabled:active:bg-teal-800 disabled:bg-[#666]',
    );

    return (
      <TooltipProvider>
        <main className="text-center">
        <Header />
        <section aria-label="Trip configuration" className="mx-auto mt-6 max-w-[720px] px-8 text-left md:flex md:max-w-none md:flex-nowrap md:items-start md:[justify-content:safe_center] md:gap-8 md:overflow-x-auto md:py-6 md:snap-x md:snap-mandatory">
          { this.state.segments.map(this.renderSegment) }
        </section>

        { this.state.days.length > 0 &&
          <div className="mx-auto mt-6 flex max-w-[min(800px,90vw)] flex-col gap-3 text-left">
            { this.state.days.length === 1 &&
              <Alert variant="warning">
                <TriangleAlert />
                <AlertTitle>Minimum trip duration</AlertTitle>
                <AlertDescription>
                  You are only entitled to German Meal Allowance if you were at least 8 hours on that business trip.
                </AlertDescription>
              </Alert>
            }
            { !this.state.mealAlertDismissed &&
              <Alert variant="info" className="pr-10">
                <Info />
                <AlertTitle>Mark company-paid meals</AlertTitle>
                <AlertDescription>
                  Check each meal that your company or a colleague paid for (e.g. hotel breakfast) so it gets deducted from the allowance.
                </AlertDescription>
                <button
                  type="button"
                  onClick={this.dismissMealAlert}
                  aria-label="Dismiss"
                  className="absolute top-2 right-2 inline-flex size-6 items-center justify-center rounded-md text-teal-700/70 outline-none transition-colors hover:bg-teal-100 hover:text-teal-900 focus-visible:ring-2 focus-visible:ring-ring/50">
                  <X className="size-4" />
                </button>
              </Alert>
            }
          </div>
        }

        { this.state.days.length > 0 &&
          <form aria-label="Calculator" className="mx-auto mt-6 mb-2 max-w-[min(800px,90vw)] rounded-xl bg-white py-4 text-left shadow-md max-md:pt-0">
            <DayList
              days={this.state.days}
              showCountries={this.state.segments.length > 1}
              onExcludeChange={this.onExcludeChange}/>

            <div className="mt-4 px-4 text-right text-sm">
              <label htmlFor="total">Total GMA</label>
              <output id="total" className="ml-2 font-bold">
                { this.state.total.toFixed(2) } €
              </output>
            </div>
          </form>
        }
        <button
          type="button"
          aria-label="Download as PDF"
          disabled={!this.state.total || this.state.isGeneratingPdf}
          onClick={this.downloadPdf}
          className={downloadButtonClass}
        >
          {loading &&
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-[-100%] h-1 w-full animate-[button-spinner_2s_linear_infinite] bg-teal-800"
            />
          }
          {this.state.isGeneratingPdf ? (
            <Spinner className="size-5" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="origin-bottom-left transition-transform duration-200 group-hover:-rotate-[10deg] group-disabled:rotate-0">
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/>
              <path d="M14 2v5a1 1 0 0 0 1 1h5"/>
              <path d="M12 18v-6"/>
              <path d="m9 15 3 3 3-3"/>
            </svg>
          )}
          <span>{this.state.isGeneratingPdf ? 'Generating PDF …' : 'Download PDF'}</span>
        </button>
        </main>
      </TooltipProvider>
    );
  }
}

export default App;
