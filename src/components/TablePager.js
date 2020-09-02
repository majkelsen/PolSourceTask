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
        <section className="pagerLeft">
          <p className="sizingTitle">Rows per page:</p>

          <select className="tableSize" name="tableSize" value={rowsPerPage} onChange={sizeSwitcher} >
            {this.state.size.map((item) =>
              <option key={item.id} value={item.value}>{item.value}</option>
            )}
          </select>
        </section>

        <section className="pagerRight">
          <p className="pageNumbers"> {rowsFrom} - {rowsTo} of {tasks.length} </p>

          <div className="switchPageButtons">
            <button className="pagingButton left" onClick={pageBack} id="minus"><i className="fas fa-chevron-left"></i></button>
            <button className="pagingButton right" onClick={pageNext} id="add"><i className="fas fa-chevron-right"></i></button>
          </div>
        </section>
      </section>

    )
  }
}




export default TablePager;