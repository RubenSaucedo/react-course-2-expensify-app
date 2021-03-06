import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate , setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            calendarFocused: null
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onTextFilterChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount'){
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" value={this.props.filters.text} 
                    onChange={this.onTextFilterChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    sortByDate: () => dispatch(sortByDate),
    sortByAmount: () => dispatch(sortByAmount),
    setTextFilter: (textFilter) => dispatch(setTextFilter(textFilter)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);