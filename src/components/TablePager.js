import React, { Component } from 'react';
import '../style/TablePager.css';

class TablePager extends Component {
  state = {
    size: [
      { id: 1, value: 5 },
      { id: 2, value: 10 },
      { id: 3, value: 15 },
    ],

  };

  render() {
    let { rowsPerPage, rowsFrom, rowsTo, tasks } = this.props.state;
    let { sizeSwitcher, pageBack, pageNext } = this.props;

    if (rowsTo > tasks.length) {
      rowsTo = tasks.length
    }

    return (


      <section className="tableRow last">
        <div className="columnFirst">Rows per page:</div>

        <select className="tableSize" name="tableSize" value={rowsPerPage} onChange={sizeSwitcher} >
          {this.state.size.map((item) =>
            <option key={item.id} value={item.value}>{item.value}</option>
          )}
        </select>



        <p className="pageNumbers"> {rowsFrom} - {rowsTo} of {tasks.length} </p>

        {/* buttons do not sending proper event to function*/}
        <button className="pagingButton left" onClick={pageBack} id="minus"><i className="fas fa-chevron-left"></i></button>
        <button className="pagingButton right" onClick={pageNext} id="add"><i className="fas fa-chevron-right"></i></button>

      </section>

    )
  }
}




export default TablePager;