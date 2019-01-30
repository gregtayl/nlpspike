import React, { Component } from 'react';
import { ICitation } from "../interfaces/ICitation";
import { Paper, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";

interface ICitationsProps {
  citations?: ICitation[];
}

export class Citations extends Component<ICitationsProps, any> {
  render() {
    if (!this.props.citations) {
      return null;
    }
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Court</TableCell>
              <TableCell align="right">Page</TableCell>
              <TableCell align="right">Page 2</TableCell>
              <TableCell align="right">Reporter</TableCell>
              <TableCell align="right">Reporter Full Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.citations.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">{row.court}</TableCell>
                <TableCell align="right">{row.page}</TableCell>
                <TableCell align="right">{row.page2}</TableCell>
                <TableCell align="right">{row.reporter}</TableCell>
                <TableCell align="right">{row.reporter_full_name}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
              </TableRow>))}
            {this.props.citations.length === 0 &&
              <TableRow>
                <TableCell colSpan={5}> No citations were found</TableCell>
              </TableRow>}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}