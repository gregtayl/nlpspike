import React, { Component } from 'react';
import { Api } from '../api/Api';
import { AppBar, Button, createStyles, Grid, TextField, Toolbar, Typography, Paper, withStyles, WithStyles } from "@material-ui/core";
import { Citations } from "./Citations";
import { ICitation } from "../interfaces/ICitation";

const styles = createStyles({
  paper: { padding: 15 },
  body: { margin: 15 },
  textArea: { marginTop: 5 }
});

interface IAppProps extends WithStyles<typeof styles> {
}

interface IAppState {
  citations?: ICitation[];
  text: string;
}

export const App = withStyles(styles)(
  class extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
      super(props);
      this.state = {
        citations: undefined,
        text: "Based on the precedent set in Doe v.  Acme, 100 F.2d 234 (1999)"
      };
    }

    render() {
      return (
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">NLP Spike</Typography>
            </Toolbar>
          </AppBar>
          <div className={this.props.classes.body}>
            <Grid container={true} spacing={16}>
              <Grid item={true} xs={12}>
                <Paper className={this.props.classes.paper}>
                  <form onSubmit={this.getCitations}>
                    <TextField
                      className={this.props.classes.textArea}
                      fullWidth={true}
                      margin="normal"
                      multiline={true}
                      onChange={this.textChanged}
                      placeholder="Enter some text you might find in a legal document and click 'Get Citations'..."
                      rows={15}
                      value={this.state.text || ""} />
                    <Button
                      color="primary"
                      type="submit"
                      variant="contained">Get Citations</Button>
                  </form>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Citations citations={this.state.citations} />
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      );
    }

    private getCitations = async (event: React.FormEvent<EventTarget>) => {
      event.preventDefault();
      const citations = await Api.getCitations(this.state.text);
      this.setState(current => ({ ...current, citations: citations }));
    }

    private textChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      this.setState(current => ({ ...current, text: value }));
    }
  }
)