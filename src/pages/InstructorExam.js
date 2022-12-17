import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import Button from '@mui/material/Button';

import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    overflow: "auto",
    // maxHeight: 500,
    backgroundColor: theme.palette.background.paper
  }
});

class InstructorExam extends React.Component {
  state = {
    checked: 0
  };

  handleToggle = value => () => {
    this.setState({ checked: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <List>
          {[0].map(value => (
            <ListItem
              key={value}
              role={undefined}
              button
              onClick={this.handleToggle(value)}
              className={classes.listItem}
            >
              <FormControlLabel
                control={<Radio />}
                checked={this.state.checked === value}
                tabIndex={-1}
                disableRipple
                
              />
              <ListItemText
                primary={`Use Existing Exam`}
              />
            </ListItem>
          ))}
        </List>
        <List>
          {[ 1].map(value => (
            <ListItem
              key={value}
              role={undefined}
              button
              onClick={this.handleToggle(value)}
              className={classes.listItem}
            >
              <FormControlLabel
                control={<Radio />}
                checked={this.state.checked === value}
                tabIndex={-1}
                disableRipple
                
              />
              <ListItemText
                primary={`Create New Exam`}
              />
            </ListItem>
          ))}
        </List>
        <Button
               type="submit"
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
             >
               submit
             </Button>
      </div>
    );
  }
}

InstructorExam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructorExam);