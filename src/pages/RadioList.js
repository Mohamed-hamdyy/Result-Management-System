import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
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

class RadioList extends React.Component {
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
          {[0, 1, 2, 3,].map(value => (
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
                primary={`Answer`}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

RadioList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioList);
